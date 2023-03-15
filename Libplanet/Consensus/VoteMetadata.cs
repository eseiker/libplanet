using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a vote metadata from a validator for consensus.
    /// </summary>
    public class VoteMetadata : IVoteMetadata, IEquatable<VoteMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x48 };                // 'H'
        private static readonly byte[] RoundKey = { 0x52 };                 // 'R'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly byte[] BlockHashKey = { 0x68 };             // 'h'
        private static readonly byte[] ValidatorPublicKeyKey = { 0x50 };    // 'P'
        private static readonly byte[] FlagKey = { 0x46 };                  // 'F'

        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Creates a <see cref="VoteMetadata"/> instance.
        /// </summary>
        /// <param name="height">Height of the vote target block.</param>
        /// <param name="round">Round of the vote in given height.</param>
        /// <param name="blockHash"><see cref="BlockHash"/> of the block in vote.</param>
        /// <param name="timestamp">The time at which the voting took place.</param>
        /// <param name="validatorPublicKey">
        /// <see cref="PublicKey"/> of the validator made the vote.
        /// </param>
        /// <param name="flag"><see cref="VoteFlag"/> for the vote's status.</param>
        /// <exception cref="ArgumentException">Thrown for any of the following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     Either <paramref name="height"/> or <paramref name="round"/> is negative.
        /// </description></item>
        /// <item><description>
        ///     Given <paramref name="blockHash"/> is <see langword="null"/> when
        ///     <paramref name="flag"/> is either <see cref="VoteFlag.Null"/>
        ///     or <see cref="VoteFlag.Unknown"/>.
        /// </description></item>
        /// </list>
        /// </exception>
        public VoteMetadata(
            long height,
            int round,
            BlockHash? blockHash,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            VoteFlag flag)
        {
            if (height < 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(height)} cannot be negative: {height}");
            }
            else if (round < 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(round)} cannot be negative: {round}");
            }
            else if (blockHash is null && (flag == VoteFlag.Null || flag == VoteFlag.Unknown))
            {
                throw new ArgumentException(
                    $"Given {nameof(blockHash)} cannot be null if {nameof(flag)} " +
                    $"is {VoteFlag.Null} or {VoteFlag.Unknown}");
            }

            Height = height;
            Round = round;
            BlockHash = blockHash;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
            Flag = flag;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VoteMetadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                blockHash: encoded.ContainsKey(BlockHashKey)
                    ? new BlockHash(encoded.GetValue<Binary>(BlockHashKey).ByteArray)
                    : (BlockHash?)null,
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    encoded.GetValue<Binary>(ValidatorPublicKeyKey).ByteArray),
                flag: (VoteFlag)(long)encoded.GetValue<Integer>(FlagKey))
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc/>
        public long Height { get; }

        /// <inheritdoc/>
        public int Round { get; }

        /// <inheritdoc/>
        public BlockHash? BlockHash { get; }

        /// <inheritdoc/>
        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc/>
        public PublicKey ValidatorPublicKey { get; }

        /// <inheritdoc/>
        public VoteFlag Flag { get; }

        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true))
                    .Add(FlagKey, (long)Flag);

                if (BlockHash is { } blockHash)
                {
                    encoded = encoded.Add(BlockHashKey, blockHash.ByteArray);
                }

                return encoded;
            }
        }

        /// <summary>
        /// Marshaled <see cref="VoteMetadata"/> data.  This is used as a payload for
        /// signing.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs a <see cref="VoteMetadata"/> to create a <see cref="Vote"/>
        /// using given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">The <see cref="PrivateKey"/> to sign the data with.  This can be
        /// <see langword="null"/> to create an unsigned <see cref="Vote"/> instance.</param>
        /// <returns>A <see cref="Vote"/> with a (possibly <see langword="null"/>) signature.
        /// </returns>
        public Vote Sign(PrivateKey? signer)
        {
            return signer is PrivateKey key
                ? new Vote(this, key.Sign(ByteArray).ToImmutableArray())
                : new Vote(this, ImmutableArray<byte>.Empty);
        }

        /// <inheritdoc/>
        public bool Equals(VoteMetadata? other)
        {
            return other is VoteMetadata metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                BlockHash.Equals(metadata.BlockHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Flag == metadata.Flag;
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is VoteMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey,
                Flag);
        }
    }
}
