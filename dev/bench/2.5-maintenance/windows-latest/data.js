window.BENCHMARK_DATA = {
  "lastUpdate": 1689324270899,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f008d9dca7f4cc5df0bac2519b9e2f45108d698",
          "message": "Merge pull request #3294 from OnedgeLee/release/2.5.0\n\n🚀 Release 2.5.0",
          "timestamp": "2023-07-12T16:14:03+09:00",
          "tree_id": "17a066ea486c168def576e22f7703b92c172deac",
          "url": "https://github.com/planetarium/libplanet/commit/6f008d9dca7f4cc5df0bac2519b9e2f45108d698"
        },
        "date": 1689147601233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753990.9090909092,
            "unit": "ns",
            "range": "± 191681.4391123604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335773.4693877553,
            "unit": "ns",
            "range": "± 323010.75675523846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309853.5353535353,
            "unit": "ns",
            "range": "± 247717.1639778125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6101752.577319588,
            "unit": "ns",
            "range": "± 461691.12602763245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57552.10526315789,
            "unit": "ns",
            "range": "± 11654.411811397984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9689685.714285715,
            "unit": "ns",
            "range": "± 589677.998493429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25476141.93548387,
            "unit": "ns",
            "range": "± 1442638.388985429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63455880.43478261,
            "unit": "ns",
            "range": "± 2396759.1646146365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129156690.9090909,
            "unit": "ns",
            "range": "± 8460035.131628351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259556967.44186047,
            "unit": "ns",
            "range": "± 9545947.836141957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5918032.914402174,
            "unit": "ns",
            "range": "± 145842.64128267742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918605.6587837837,
            "unit": "ns",
            "range": "± 64220.28723245916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396064.1031901042,
            "unit": "ns",
            "range": "± 54528.44447364533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3248019.7679924243,
            "unit": "ns",
            "range": "± 100654.75894385866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014640.6358506945,
            "unit": "ns",
            "range": "± 33598.92698764015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927162.6674107143,
            "unit": "ns",
            "range": "± 13203.235260670534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3770582.2916666665,
            "unit": "ns",
            "range": "± 361323.3433089483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976403.125,
            "unit": "ns",
            "range": "± 358363.8954597393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5411596.842105263,
            "unit": "ns",
            "range": "± 445238.06958406285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785166.666666667,
            "unit": "ns",
            "range": "± 384557.66665038915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8302753.684210527,
            "unit": "ns",
            "range": "± 520118.8478772262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333930.10752688174,
            "unit": "ns",
            "range": "± 36719.36103730989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303791.01123595505,
            "unit": "ns",
            "range": "± 29066.501495588596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285924.7311827957,
            "unit": "ns",
            "range": "± 40354.409962971346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4777552.105263158,
            "unit": "ns",
            "range": "± 379381.3684954471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4669637.373737373,
            "unit": "ns",
            "range": "± 513508.9889692448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24904,
            "unit": "ns",
            "range": "± 9310.230280652991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101688.29787234042,
            "unit": "ns",
            "range": "± 21241.60482558302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109794,
            "unit": "ns",
            "range": "± 25761.649595842846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133645.91836734695,
            "unit": "ns",
            "range": "± 28745.987325055237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7443.820224719101,
            "unit": "ns",
            "range": "± 1696.383523329166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23916.494845360823,
            "unit": "ns",
            "range": "± 8268.296383530933"
          }
        ]
      },
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
          "id": "a3f262243c4d64169142eb375b8149c03b7c17b0",
          "message": "Merge pull request #3296 from OnedgeLee/prepare/2.5.1\n\n🔧 Prepare 2.5.1",
          "timestamp": "2023-07-14T17:25:05+09:00",
          "tree_id": "75db858d936a360210595e394dd591c0661c7cff",
          "url": "https://github.com/planetarium/libplanet/commit/a3f262243c4d64169142eb375b8149c03b7c17b0"
        },
        "date": 1689324206229,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651611.7021276595,
            "unit": "ns",
            "range": "± 136212.31518414294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3092280.5555555555,
            "unit": "ns",
            "range": "± 101796.95987446059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106238.0434782607,
            "unit": "ns",
            "range": "± 132310.35097961812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5985748.421052632,
            "unit": "ns",
            "range": "± 392449.52781953797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55888.88888888889,
            "unit": "ns",
            "range": "± 3377.3350455629234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9213043.902439024,
            "unit": "ns",
            "range": "± 326712.40108754707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25104164.285714287,
            "unit": "ns",
            "range": "± 1064325.6054129594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62003983.333333336,
            "unit": "ns",
            "range": "± 285214.7447206413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126603434.7826087,
            "unit": "ns",
            "range": "± 4694648.699445756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246710377.7777778,
            "unit": "ns",
            "range": "± 3519720.241649487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5999776.302083333,
            "unit": "ns",
            "range": "± 88697.5293013266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972308.119419643,
            "unit": "ns",
            "range": "± 30058.448030405776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1474468.4895833333,
            "unit": "ns",
            "range": "± 16197.47736271901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3271876.5885416665,
            "unit": "ns",
            "range": "± 51012.57726409232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034854.00390625,
            "unit": "ns",
            "range": "± 15351.134441590915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972610.6158088235,
            "unit": "ns",
            "range": "± 18715.298455777553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3894177.272727273,
            "unit": "ns",
            "range": "± 144404.29173490233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4139130,
            "unit": "ns",
            "range": "± 155020.01483679455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5025700,
            "unit": "ns",
            "range": "± 179660.5960028452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4580211.538461538,
            "unit": "ns",
            "range": "± 120966.19470553937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7675273.529411765,
            "unit": "ns",
            "range": "± 245280.11483326636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319740.3846153846,
            "unit": "ns",
            "range": "± 12834.623204065903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311770.4918032787,
            "unit": "ns",
            "range": "± 13322.604153121303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280010.5263157895,
            "unit": "ns",
            "range": "± 16530.310481465913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5001132.142857143,
            "unit": "ns",
            "range": "± 132141.00228213414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4607726.315789473,
            "unit": "ns",
            "range": "± 100792.3544394628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23888.76404494382,
            "unit": "ns",
            "range": "± 1844.8600712056477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103767.04545454546,
            "unit": "ns",
            "range": "± 5921.958389783224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94431.91489361702,
            "unit": "ns",
            "range": "± 7910.850215524498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116843.75,
            "unit": "ns",
            "range": "± 15592.324781932397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6882.105263157895,
            "unit": "ns",
            "range": "± 1103.377691104603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24834.0206185567,
            "unit": "ns",
            "range": "± 2521.7341337335924"
          }
        ]
      }
    ]
  }
}