using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class MessageCacheTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentOutOfRangeException>("len", () => new MessageCache(-1, 3));
            Assert.Throws<ArgumentOutOfRangeException>("len", () => new MessageCache(0, 3));
            Assert.Throws<ArgumentOutOfRangeException>("gossip", () => new MessageCache(3, -1));
            Assert.Throws<ArgumentOutOfRangeException>("gossip", () => new MessageCache(3, 0));
            Assert.Throws<ArgumentOutOfRangeException>("gossip", () => new MessageCache(3, 4));
            _ = new MessageCache(3, 3);
        }

        [Fact]
        public void Put()
        {
            var cache = new MessageCache(3, 3);
            var msg = new Ping();
            cache.Put(msg);
            Assert.Throws<ArgumentException>("message", () => cache.Put(msg));
        }

        [Fact]
        public void Get()
        {
            var cache = new MessageCache(3, 3);
            var msg = new Ping();
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg.Id));
            cache.Put(msg);
            var ret = cache.Get(msg.Id);
            Assert.Equal(msg, ret);
        }

        [Fact]
        public void GetGossipIds_Shift()
        {
            var cache = new MessageCache(2, 1);
            var msg0 = new Ping { Timestamp = DateTimeOffset.MinValue };
            var msg1 = new Ping { Timestamp = DateTimeOffset.MinValue + TimeSpan.FromSeconds(1) };
            var msg2 = new Ping { Timestamp = DateTimeOffset.MinValue + TimeSpan.FromSeconds(2) };
            cache.Put(msg0);
            cache.Put(msg1);
            var ids = cache.GetGossipIds();
            Assert.Equal(2, ids.Length);
            Assert.Equal(new[] { msg0.Id, msg1.Id }.ToHashSet(), ids.ToHashSet());
            Assert.Equal(msg0, cache.Get(msg0.Id));
            Assert.Equal(msg1, cache.Get(msg1.Id));

            cache.Shift();
            cache.Put(msg2);
            ids = cache.GetGossipIds();
            Assert.Single(ids);
            Assert.Equal(msg2.Id, ids[0]);
            Assert.Equal(msg0, cache.Get(msg0.Id));
            Assert.Equal(msg1, cache.Get(msg1.Id));
            Assert.Equal(msg2, cache.Get(msg2.Id));

            cache.Shift();
            ids = cache.GetGossipIds();
            Assert.Empty(ids);
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg0.Id));
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg1.Id));
            Assert.Equal(msg2, cache.Get(msg2.Id));

            cache.Shift();
            ids = cache.GetGossipIds();
            Assert.Empty(ids);
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg0.Id));
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg1.Id));
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg2.Id));
        }
    }
}
