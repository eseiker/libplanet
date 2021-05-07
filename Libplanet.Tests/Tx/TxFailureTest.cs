using System;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxFailureTest
    {
        private readonly BlockHash _blockHash;
        private readonly TxId _txid;
        private readonly TxFailure _fx;

        [SuppressMessage(
            "Major Code Smell",
            "S3928",
            Justification = "The ArgumentNullException instance made here is a just example."
        )]
        public TxFailureTest()
        {
            var random = new Random();
            _blockHash = random.NextBlockHash(HashDigest<SHA256>.Size);
            _txid = random.NextTxId();
            _fx = new TxFailure(_blockHash, _txid, new ArgumentNullException("foo"));
        }

        [Fact]
        public void Constructor()
        {
            Assert.Equal(_blockHash, _fx.BlockHash);
            Assert.Equal(_txid, _fx.TxId);
            Assert.Equal($"{nameof(System)}.{nameof(ArgumentNullException)}", _fx.ExceptionName);
            Assert.Equal(Dictionary.Empty.Add("parameterName", "foo"), _fx.ExceptionMetadata);
        }

        [Fact]
        public void Serialization()
        {
            var formatter = new BinaryFormatter();
            var stream = new MemoryStream();
            formatter.Serialize(stream, _fx);
            stream.Seek(0, SeekOrigin.Begin);
            object deserialized = formatter.Deserialize(stream);
            Assert.IsType<TxFailure>(deserialized);
            var f = (TxFailure)deserialized;
            Assert.Equal(_blockHash, f.BlockHash);
            Assert.Equal(_txid, f.TxId);
            Assert.Equal(_fx.ExceptionName, f.ExceptionName);
            Assert.Equal(_fx.ExceptionMetadata, f.ExceptionMetadata);
        }
    }
}
