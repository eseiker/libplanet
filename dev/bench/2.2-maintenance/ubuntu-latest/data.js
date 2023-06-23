window.BENCHMARK_DATA = {
  "lastUpdate": 1687488720444,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c59018e3f7b058437f3ded9b3e3cc54e59ec2c53",
          "message": "Merge pull request #3240 from greymistcube/release/2.2.0\n\n🚀 Release 2.2.0",
          "timestamp": "2023-06-23T11:31:50+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/planetarium/libplanet/commit/c59018e3f7b058437f3ded9b3e3cc54e59ec2c53"
        },
        "date": 1687488692326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497912.8484848486,
            "unit": "ns",
            "range": "± 421011.4038039185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3603336.3368421053,
            "unit": "ns",
            "range": "± 395966.85945472564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4755771.835051547,
            "unit": "ns",
            "range": "± 537045.0780709792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4695208.319587629,
            "unit": "ns",
            "range": "± 685661.2301228151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8027164.302083333,
            "unit": "ns",
            "range": "± 720132.2877275012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8787061.542553192,
            "unit": "ns",
            "range": "± 795871.859019486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22923062.326530613,
            "unit": "ns",
            "range": "± 2930657.9571215142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57085541.104166664,
            "unit": "ns",
            "range": "± 3864679.6625835444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111527809.2,
            "unit": "ns",
            "range": "± 6564606.48788852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225489009.6056338,
            "unit": "ns",
            "range": "± 10975410.606175369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336052.89898989897,
            "unit": "ns",
            "range": "± 52914.30369146851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328892.2,
            "unit": "ns",
            "range": "± 52804.6682215833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263856.90425531915,
            "unit": "ns",
            "range": "± 42901.62641628843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4563176.204081632,
            "unit": "ns",
            "range": "± 443767.9019866908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4140050.8163265307,
            "unit": "ns",
            "range": "± 431579.1574806625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28435.29292929293,
            "unit": "ns",
            "range": "± 10874.236588970678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103008.67346938775,
            "unit": "ns",
            "range": "± 21925.5013408341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102703.21052631579,
            "unit": "ns",
            "range": "± 24192.487938998987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125922.68041237113,
            "unit": "ns",
            "range": "± 29658.256667813148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4853.098765432099,
            "unit": "ns",
            "range": "± 942.3456319861925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27319.8125,
            "unit": "ns",
            "range": "± 11124.129259182491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58623.52747252747,
            "unit": "ns",
            "range": "± 11772.363978913269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6346758.797554348,
            "unit": "ns",
            "range": "± 155661.6708677388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2061693.8729166666,
            "unit": "ns",
            "range": "± 92085.0069813696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1481076.0452148437,
            "unit": "ns",
            "range": "± 32951.839058017154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2852650.231007543,
            "unit": "ns",
            "range": "± 81784.86488251877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918576.9621233259,
            "unit": "ns",
            "range": "± 26169.63627094532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882505.8645926339,
            "unit": "ns",
            "range": "± 28931.96056918429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1589772.4040404041,
            "unit": "ns",
            "range": "± 224842.36090175694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003839.0408163266,
            "unit": "ns",
            "range": "± 360221.89738949086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374932.904255319,
            "unit": "ns",
            "range": "± 221731.54078226874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6572997.696969697,
            "unit": "ns",
            "range": "± 649479.957839464"
          }
        ]
      }
    ]
  }
}