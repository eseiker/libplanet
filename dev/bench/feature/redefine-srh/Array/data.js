window.BENCHMARK_DATA = {
  "lastUpdate": 1713429502344,
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713415809526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5780925.466666667,
            "unit": "ns",
            "range": "± 62517.241238907925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14309099.692307692,
            "unit": "ns",
            "range": "± 65431.64767193397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36628208.06666667,
            "unit": "ns",
            "range": "± 663210.9733103106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72576603.85714285,
            "unit": "ns",
            "range": "± 239533.1641309683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146381875.42857143,
            "unit": "ns",
            "range": "± 397064.34922483366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85463.59433962264,
            "unit": "ns",
            "range": "± 3533.8189533102905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110547.76712328767,
            "unit": "ns",
            "range": "± 5346.020317645817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106795.7435897436,
            "unit": "ns",
            "range": "± 5437.097263630581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91131.19444444444,
            "unit": "ns",
            "range": "± 2748.9992653893364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083443.586956522,
            "unit": "ns",
            "range": "± 147060.0218032979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863072.39,
            "unit": "ns",
            "range": "± 187170.6431236781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5323.0625,
            "unit": "ns",
            "range": "± 954.3386336262296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27906.62222222222,
            "unit": "ns",
            "range": "± 2713.3735235223903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25061.58510638298,
            "unit": "ns",
            "range": "± 1792.121554114573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29588.84375,
            "unit": "ns",
            "range": "± 5455.30649691921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1188.9891304347825,
            "unit": "ns",
            "range": "± 217.7064509417512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5124.891304347826,
            "unit": "ns",
            "range": "± 596.7162606697848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1178087.2626262626,
            "unit": "ns",
            "range": "± 130636.9700379086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858996.5172413792,
            "unit": "ns",
            "range": "± 113511.44365953245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571314.09375,
            "unit": "ns",
            "range": "± 148503.62902119532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10616258.63,
            "unit": "ns",
            "range": "± 2001244.4437067416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2500142.9484536084,
            "unit": "ns",
            "range": "± 142374.85541493763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671025.310810811,
            "unit": "ns",
            "range": "± 132983.2207017498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3526282.933333333,
            "unit": "ns",
            "range": "± 65965.88911536743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3360113.714285714,
            "unit": "ns",
            "range": "± 121081.2078868187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12831184.53,
            "unit": "ns",
            "range": "± 1969243.6672622655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031895.382512019,
            "unit": "ns",
            "range": "± 25570.063614858584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926220.8543526785,
            "unit": "ns",
            "range": "± 3991.9186203451204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617191.6772135417,
            "unit": "ns",
            "range": "± 5895.316921679685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651609.892299107,
            "unit": "ns",
            "range": "± 14143.03371802876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454263.0899739583,
            "unit": "ns",
            "range": "± 781.7087547445644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428408.3519856771,
            "unit": "ns",
            "range": "± 930.4888425379921"
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
          "id": "da8689a5319160fa420fb426fca8f9afb012a131",
          "message": "Merge pull request #3749 from greymistcube/prepare/4.4.1\n\n🔧 Prepare 4.4.1",
          "timestamp": "2024-04-18T12:45:53+09:00",
          "tree_id": "489eff0480f42ea9f76802245a90e0bab67cdb6c",
          "url": "https://github.com/planetarium/libplanet/commit/da8689a5319160fa420fb426fca8f9afb012a131"
        },
        "date": 1713416317557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700487,
            "unit": "ns",
            "range": "± 36047.72023535839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14360980.384615384,
            "unit": "ns",
            "range": "± 112423.37119681302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36076086.5,
            "unit": "ns",
            "range": "± 188142.3682666932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72939416.33333333,
            "unit": "ns",
            "range": "± 210284.62098704858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145682729,
            "unit": "ns",
            "range": "± 458927.0320026167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87275.44444444444,
            "unit": "ns",
            "range": "± 3260.3321815949116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112028.53846153847,
            "unit": "ns",
            "range": "± 5198.03176415399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106316.41379310345,
            "unit": "ns",
            "range": "± 5306.162502336589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90987.83333333333,
            "unit": "ns",
            "range": "± 2336.7265038132273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3202022.2352941176,
            "unit": "ns",
            "range": "± 64358.57724745146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2630796.79,
            "unit": "ns",
            "range": "± 186157.02884253574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5069.108695652174,
            "unit": "ns",
            "range": "± 819.2391465647952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27418.155555555557,
            "unit": "ns",
            "range": "± 2745.048072320558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22784.923076923078,
            "unit": "ns",
            "range": "± 273.7168432092009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30783.81818181818,
            "unit": "ns",
            "range": "± 6740.38380691812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1146.2043010752689,
            "unit": "ns",
            "range": "± 190.39864125039168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4901.271739130435,
            "unit": "ns",
            "range": "± 656.7635783703793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1141226.84375,
            "unit": "ns",
            "range": "± 109129.73913344255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870200.7415730336,
            "unit": "ns",
            "range": "± 111422.64608325284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511142.8723404256,
            "unit": "ns",
            "range": "± 140183.82900452756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10525031.33,
            "unit": "ns",
            "range": "± 1959309.459050846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2717256.5,
            "unit": "ns",
            "range": "± 37433.78240792181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2826986.4166666665,
            "unit": "ns",
            "range": "± 17096.263943055103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3519522.846153846,
            "unit": "ns",
            "range": "± 30029.28606612261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3325541.316666667,
            "unit": "ns",
            "range": "± 146794.31032472473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12572178.71,
            "unit": "ns",
            "range": "± 1831977.646654252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3053060.65625,
            "unit": "ns",
            "range": "± 56911.35839171198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920009.9287109375,
            "unit": "ns",
            "range": "± 8276.687969041246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616505.5335286459,
            "unit": "ns",
            "range": "± 4865.118415138186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1608797.9815204327,
            "unit": "ns",
            "range": "± 4593.127151880596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463759.15390625,
            "unit": "ns",
            "range": "± 1004.5793809045508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426015.4202799479,
            "unit": "ns",
            "range": "± 1404.0163300236431"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713417355064,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5790503.2,
            "unit": "ns",
            "range": "± 76143.6792857518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14274128.615384616,
            "unit": "ns",
            "range": "± 41274.34457088823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36604612.384615384,
            "unit": "ns",
            "range": "± 206697.60212910807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72812360.73333333,
            "unit": "ns",
            "range": "± 293320.60858737264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146718230.86666667,
            "unit": "ns",
            "range": "± 404708.3620943899"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86110.5,
            "unit": "ns",
            "range": "± 2651.1952021682596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112263.9827586207,
            "unit": "ns",
            "range": "± 4875.620836730146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106514.51111111112,
            "unit": "ns",
            "range": "± 4046.545494291858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90476.89743589744,
            "unit": "ns",
            "range": "± 3028.733023236925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3160444.477272727,
            "unit": "ns",
            "range": "± 117023.15183091478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2781424.5974025973,
            "unit": "ns",
            "range": "± 142329.7220621761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5195.21875,
            "unit": "ns",
            "range": "± 1090.4834389352757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27521.79120879121,
            "unit": "ns",
            "range": "± 1794.128079885315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22698.157303370786,
            "unit": "ns",
            "range": "± 1460.814840320886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29546.43157894737,
            "unit": "ns",
            "range": "± 5524.141898613163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1323.4736842105262,
            "unit": "ns",
            "range": "± 330.52169729870735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5363.89010989011,
            "unit": "ns",
            "range": "± 613.3748074845057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1265912.6666666667,
            "unit": "ns",
            "range": "± 17186.516820584748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843031.6627906978,
            "unit": "ns",
            "range": "± 108834.64640524882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574124.2222222222,
            "unit": "ns",
            "range": "± 164103.51896552517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10553169.69,
            "unit": "ns",
            "range": "± 1980605.142083793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2680056,
            "unit": "ns",
            "range": "± 19010.117746275868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2831861.846153846,
            "unit": "ns",
            "range": "± 23094.27404086041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3285092.220338983,
            "unit": "ns",
            "range": "± 145577.25337642222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3376108.9137931033,
            "unit": "ns",
            "range": "± 147312.0596065331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12691857.85,
            "unit": "ns",
            "range": "± 1923833.675633626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3125602.0375,
            "unit": "ns",
            "range": "± 43191.57603926152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925700.787109375,
            "unit": "ns",
            "range": "± 6476.727382655055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 624533.3687133789,
            "unit": "ns",
            "range": "± 11952.001755018331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642752.96171875,
            "unit": "ns",
            "range": "± 16238.520209356318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461286.07955729164,
            "unit": "ns",
            "range": "± 1566.972005669323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429406.7884765625,
            "unit": "ns",
            "range": "± 1029.4830544764336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d162d53defafd8694cf069182f66cf6b0561d387",
          "message": "Merge pull request #3752 from OnedgeLee/feature/srh-istore\n\nAdd CRUD for NextStateRootHash on IStore",
          "timestamp": "2024-04-18T15:11:37+09:00",
          "tree_id": "4bf837379f32c4a2f1d7ffa3f18ae3032fd14f65",
          "url": "https://github.com/planetarium/libplanet/commit/d162d53defafd8694cf069182f66cf6b0561d387"
        },
        "date": 1713423932944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5684366.933333334,
            "unit": "ns",
            "range": "± 69440.8830809824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14757958.076923076,
            "unit": "ns",
            "range": "± 33548.00499399217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35861731.15384615,
            "unit": "ns",
            "range": "± 228214.18802915758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72956278.13333334,
            "unit": "ns",
            "range": "± 236349.31731046698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145687097.5,
            "unit": "ns",
            "range": "± 451797.35464491474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85337.19047619047,
            "unit": "ns",
            "range": "± 3090.5222424578337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110809.88461538461,
            "unit": "ns",
            "range": "± 5088.904289052493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106274.77777777778,
            "unit": "ns",
            "range": "± 4651.299469639899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89283.03658536586,
            "unit": "ns",
            "range": "± 2845.3257730667765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134853.785714286,
            "unit": "ns",
            "range": "± 113160.01032738738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817014,
            "unit": "ns",
            "range": "± 119737.86180281953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5056.148936170212,
            "unit": "ns",
            "range": "± 754.2846779757385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27531.129213483146,
            "unit": "ns",
            "range": "± 1891.2208141233107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23875.0625,
            "unit": "ns",
            "range": "± 1993.556904854922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30112.0206185567,
            "unit": "ns",
            "range": "± 6763.88802295473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1275.8777777777777,
            "unit": "ns",
            "range": "± 230.46176546950437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4893.9885057471265,
            "unit": "ns",
            "range": "± 471.4633945753216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1295090.3333333333,
            "unit": "ns",
            "range": "± 19435.63131950899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830060.1125,
            "unit": "ns",
            "range": "± 83892.58479957732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1540583.8541666667,
            "unit": "ns",
            "range": "± 160633.4563705751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10425062.44,
            "unit": "ns",
            "range": "± 2102694.197496041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2557070.6222222224,
            "unit": "ns",
            "range": "± 96775.8751733023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2845070.846153846,
            "unit": "ns",
            "range": "± 40760.760370414566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3320736.2162162163,
            "unit": "ns",
            "range": "± 156458.70652109451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3339409.9821428573,
            "unit": "ns",
            "range": "± 141834.38463311436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12215157.44,
            "unit": "ns",
            "range": "± 1973551.2331747261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3052731.681510417,
            "unit": "ns",
            "range": "± 36690.73413329969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 930020.9276041667,
            "unit": "ns",
            "range": "± 6091.824659249113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613985.0672526042,
            "unit": "ns",
            "range": "± 4975.369417782328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1662425.916015625,
            "unit": "ns",
            "range": "± 19293.67701008431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 452329.1843261719,
            "unit": "ns",
            "range": "± 978.3710288329037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421846.3189778646,
            "unit": "ns",
            "range": "± 1791.9054336282686"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b",
          "message": "Merge pull request #3760 from OnedgeLee/feature/srh-istore\n\nAdd tests for NestStateRootHash",
          "timestamp": "2024-04-18T17:04:59+09:00",
          "tree_id": "37cfb32103ba30aa339d0c4c9190dae1cb4d175e",
          "url": "https://github.com/planetarium/libplanet/commit/3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b"
        },
        "date": 1713429490986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5759434.214285715,
            "unit": "ns",
            "range": "± 59625.72026357878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14205236.416666666,
            "unit": "ns",
            "range": "± 25400.28913027399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36141939.461538464,
            "unit": "ns",
            "range": "± 201235.37821525295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72754178.85714285,
            "unit": "ns",
            "range": "± 137147.86172194264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148202664.33333334,
            "unit": "ns",
            "range": "± 402560.0319589732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84544.67213114754,
            "unit": "ns",
            "range": "± 3793.303022966095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111371.71929824562,
            "unit": "ns",
            "range": "± 4838.515256159188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106216.4375,
            "unit": "ns",
            "range": "± 4464.765686007764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93173.70588235294,
            "unit": "ns",
            "range": "± 1654.0083420552132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3156048.2045454546,
            "unit": "ns",
            "range": "± 116705.62182162066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2761633.888888889,
            "unit": "ns",
            "range": "± 103095.37714554822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5231.4631578947365,
            "unit": "ns",
            "range": "± 816.787737869884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27756.727272727272,
            "unit": "ns",
            "range": "± 2574.5551684843517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22339.372340425532,
            "unit": "ns",
            "range": "± 1388.8736752053208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29488.145833333332,
            "unit": "ns",
            "range": "± 5637.436588004511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1268.095744680851,
            "unit": "ns",
            "range": "± 284.8603154820556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5197.692307692308,
            "unit": "ns",
            "range": "± 700.0449301819878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1164347.86,
            "unit": "ns",
            "range": "± 144042.22359615832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861151.902173913,
            "unit": "ns",
            "range": "± 131242.96166095833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546631.78,
            "unit": "ns",
            "range": "± 172587.8581728697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10541250.93,
            "unit": "ns",
            "range": "± 1966656.7936541876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2748506.65,
            "unit": "ns",
            "range": "± 61164.32096563194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2849580.5714285714,
            "unit": "ns",
            "range": "± 32645.75906422028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3264978.477272727,
            "unit": "ns",
            "range": "± 119697.91307607209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3486414.4,
            "unit": "ns",
            "range": "± 63072.895924137985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12418392.9,
            "unit": "ns",
            "range": "± 1811806.0832298915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3040223.474348958,
            "unit": "ns",
            "range": "± 43269.47547200744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926015.6897786459,
            "unit": "ns",
            "range": "± 3812.2842714425174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 620040.4317057292,
            "unit": "ns",
            "range": "± 5762.773444559237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640702.9615885417,
            "unit": "ns",
            "range": "± 15986.882613631265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461784.48493303574,
            "unit": "ns",
            "range": "± 824.4801355588734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424563.33990885416,
            "unit": "ns",
            "range": "± 887.1938967927963"
          }
        ]
      }
    ]
  }
}