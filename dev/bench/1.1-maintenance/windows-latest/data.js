window.BENCHMARK_DATA = {
  "lastUpdate": 1683723752599,
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
          "id": "33fadb3ef33986e09fc384dc3d85cf603b338e25",
          "message": "Merge pull request #3141 from greymistcube/release/1.1.0\n\n🚀 Release 1.1.0",
          "timestamp": "2023-05-09T14:35:05+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/planetarium/libplanet/commit/33fadb3ef33986e09fc384dc3d85cf603b338e25"
        },
        "date": 1683611909060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1132687,
            "unit": "ns",
            "range": "± 99491.99719605898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2063751.0204081633,
            "unit": "ns",
            "range": "± 77858.27167158975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746696.9387755103,
            "unit": "ns",
            "range": "± 112363.67795935177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4594279.120879121,
            "unit": "ns",
            "range": "± 255238.91531769183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33885.294117647056,
            "unit": "ns",
            "range": "± 668.8994472925174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7170138.095238095,
            "unit": "ns",
            "range": "± 165036.12173154842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17499200,
            "unit": "ns",
            "range": "± 280758.1750495306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44489786.666666664,
            "unit": "ns",
            "range": "± 276679.6648696484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87535226.66666667,
            "unit": "ns",
            "range": "± 761415.7804161053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179126733.33333334,
            "unit": "ns",
            "range": "± 666516.4799877331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898001.953125,
            "unit": "ns",
            "range": "± 8651.125045758747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489354.4010416667,
            "unit": "ns",
            "range": "± 13055.633335617977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1027492.9557291666,
            "unit": "ns",
            "range": "± 5714.522110154604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2511581.2239583335,
            "unit": "ns",
            "range": "± 6772.715425516271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831540.5423677885,
            "unit": "ns",
            "range": "± 4924.261173567458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758627.5716145834,
            "unit": "ns",
            "range": "± 2552.004472617014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2818185.8974358975,
            "unit": "ns",
            "range": "± 91232.77194880624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2931066.6666666665,
            "unit": "ns",
            "range": "± 68761.21241901813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3690244.4444444445,
            "unit": "ns",
            "range": "± 76887.13058550959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3620214.285714286,
            "unit": "ns",
            "range": "± 56369.61616308582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5815176.470588235,
            "unit": "ns",
            "range": "± 109331.82021609586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201861.01694915254,
            "unit": "ns",
            "range": "± 8641.360384384581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189335.48387096773,
            "unit": "ns",
            "range": "± 8621.548428386533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164743.33333333334,
            "unit": "ns",
            "range": "± 4579.540959779577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3485614.285714286,
            "unit": "ns",
            "range": "± 36565.63870720617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3187326.6666666665,
            "unit": "ns",
            "range": "± 57406.61319129737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8676.344086021505,
            "unit": "ns",
            "range": "± 1332.731572949068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51116.09195402299,
            "unit": "ns",
            "range": "± 3306.191287366089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41126.19047619047,
            "unit": "ns",
            "range": "± 1376.9991274435345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59802.17391304348,
            "unit": "ns",
            "range": "± 7897.363285965816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2545.918367346939,
            "unit": "ns",
            "range": "± 670.1543701755203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8805.263157894737,
            "unit": "ns",
            "range": "± 1304.930781652734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e4d11b8e915b48326879374fbfe549e802d93a9",
          "message": "Merge pull request #3143 from greymistcube/prepare/1.1.1\n\n🔧 Prepare 1.1.1",
          "timestamp": "2023-05-10T21:43:19+09:00",
          "tree_id": "9ff5ffbfabad77d319356ce49de1521fd6203f2d",
          "url": "https://github.com/planetarium/libplanet/commit/0e4d11b8e915b48326879374fbfe549e802d93a9"
        },
        "date": 1683723701056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353160.7142857143,
            "unit": "ns",
            "range": "± 72476.1514873921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2590645.238095238,
            "unit": "ns",
            "range": "± 137034.8556528522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2188000,
            "unit": "ns",
            "range": "± 112819.90737454096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5407828.333333333,
            "unit": "ns",
            "range": "± 241335.58188116585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53726.041666666664,
            "unit": "ns",
            "range": "± 4611.7982516622615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7112237.5,
            "unit": "ns",
            "range": "± 139262.011450838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19597771.42857143,
            "unit": "ns",
            "range": "± 225836.1673990561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50577586.666666664,
            "unit": "ns",
            "range": "± 829588.0895847966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100716353.33333333,
            "unit": "ns",
            "range": "± 964353.6990919778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201414986.66666666,
            "unit": "ns",
            "range": "± 1253688.333829805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4822446.875,
            "unit": "ns",
            "range": "± 12713.00772701911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524710.0520833333,
            "unit": "ns",
            "range": "± 3607.0196573745966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181885.853794643,
            "unit": "ns",
            "range": "± 5636.21088102425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630164.765625,
            "unit": "ns",
            "range": "± 7769.316935237717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827850.3385416666,
            "unit": "ns",
            "range": "± 3286.068598973831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765802.7473958334,
            "unit": "ns",
            "range": "± 2505.4271160774633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3227628.125,
            "unit": "ns",
            "range": "± 98258.83604484177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462910,
            "unit": "ns",
            "range": "± 114362.03153324209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3930221.4285714286,
            "unit": "ns",
            "range": "± 111198.50903990761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390539.130434782,
            "unit": "ns",
            "range": "± 110497.27573412855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6522692.307692308,
            "unit": "ns",
            "range": "± 101943.37857800003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280320,
            "unit": "ns",
            "range": "± 7391.887445030531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265526.5306122449,
            "unit": "ns",
            "range": "± 10529.537333738128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231028.76712328766,
            "unit": "ns",
            "range": "± 11502.698710544875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4027623.076923077,
            "unit": "ns",
            "range": "± 59585.556888759456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3773610,
            "unit": "ns",
            "range": "± 70306.60200659883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25142.708333333332,
            "unit": "ns",
            "range": "± 2129.084052711112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101836.36363636363,
            "unit": "ns",
            "range": "± 7553.718567232293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100220.20202020202,
            "unit": "ns",
            "range": "± 9317.702920455955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120562.24489795919,
            "unit": "ns",
            "range": "± 17957.754063104694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7931.632653061224,
            "unit": "ns",
            "range": "± 1248.5535498158802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23158.333333333332,
            "unit": "ns",
            "range": "± 2045.2598170643864"
          }
        ]
      }
    ]
  }
}