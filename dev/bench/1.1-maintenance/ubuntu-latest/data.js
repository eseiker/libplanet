window.BENCHMARK_DATA = {
  "lastUpdate": 1683723475388,
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
        "date": 1683611948711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337255.7878787879,
            "unit": "ns",
            "range": "± 10452.381004936076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320982.5471698113,
            "unit": "ns",
            "range": "± 13344.16761182727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267500.625,
            "unit": "ns",
            "range": "± 8931.087037773288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5045294.6,
            "unit": "ns",
            "range": "± 92147.64129823711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4490255.111111111,
            "unit": "ns",
            "range": "± 147138.93302003047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23867.655913978495,
            "unit": "ns",
            "range": "± 1833.1571927582709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102093.82954545454,
            "unit": "ns",
            "range": "± 6394.491803918541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92854.1052631579,
            "unit": "ns",
            "range": "± 6600.799712145917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111976.27083333333,
            "unit": "ns",
            "range": "± 15423.939508015772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7001.416666666667,
            "unit": "ns",
            "range": "± 988.0317666602753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24214.5,
            "unit": "ns",
            "range": "± 3052.618051512677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3992336.025,
            "unit": "ns",
            "range": "± 140803.43654068257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4162883.074626866,
            "unit": "ns",
            "range": "± 196213.48399378467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5013385.470588235,
            "unit": "ns",
            "range": "± 161016.9363746212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5204311.42,
            "unit": "ns",
            "range": "± 209514.8737215931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8123339.724137931,
            "unit": "ns",
            "range": "± 238012.42706690406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7076420.641145834,
            "unit": "ns",
            "range": "± 81617.17294604852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171551.8739583334,
            "unit": "ns",
            "range": "± 19248.823817375756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1591245.662890625,
            "unit": "ns",
            "range": "± 10291.292857530114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032187.818489583,
            "unit": "ns",
            "range": "± 15767.607094921084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955747.7905598958,
            "unit": "ns",
            "range": "± 9404.178232715783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888292.8843470982,
            "unit": "ns",
            "range": "± 4314.9903911791935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54442.032258064515,
            "unit": "ns",
            "range": "± 3902.0733018865667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10125485.666666666,
            "unit": "ns",
            "range": "± 353525.1263416962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25213491.333333332,
            "unit": "ns",
            "range": "± 423518.96778229537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66514752.421052635,
            "unit": "ns",
            "range": "± 1436541.368296256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124881551.21428572,
            "unit": "ns",
            "range": "± 1481535.4000889743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250488347.14285713,
            "unit": "ns",
            "range": "± 2050117.4588988367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675311.101010101,
            "unit": "ns",
            "range": "± 150197.29102298335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064548.6964285714,
            "unit": "ns",
            "range": "± 131820.44239466183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647448.373493976,
            "unit": "ns",
            "range": "± 123786.69329888007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6727414.52,
            "unit": "ns",
            "range": "± 427691.35548731324"
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
        "date": 1683723453300,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291200.51851851854,
            "unit": "ns",
            "range": "± 12026.561249985407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281448.64285714284,
            "unit": "ns",
            "range": "± 7770.5638539597385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240968.63636363635,
            "unit": "ns",
            "range": "± 7596.474650364889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4335375.714285715,
            "unit": "ns",
            "range": "± 39992.357885704136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4053396.1428571427,
            "unit": "ns",
            "range": "± 51824.15712603704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21989.760416666668,
            "unit": "ns",
            "range": "± 2134.4999451112258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102208.89795918367,
            "unit": "ns",
            "range": "± 8226.000714969347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88345.05154639175,
            "unit": "ns",
            "range": "± 6847.801042079029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102825.26262626263,
            "unit": "ns",
            "range": "± 13368.524003507808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6700.041666666667,
            "unit": "ns",
            "range": "± 821.022493655149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21555.34375,
            "unit": "ns",
            "range": "± 2185.3258739439634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3545095.904761905,
            "unit": "ns",
            "range": "± 120400.222594359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3782378.6666666665,
            "unit": "ns",
            "range": "± 95390.62022372361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4254817.857142857,
            "unit": "ns",
            "range": "± 63147.87529510169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4531780.761904762,
            "unit": "ns",
            "range": "± 189882.59864977302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6935176.857142857,
            "unit": "ns",
            "range": "± 111359.25664529827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5962083.184375,
            "unit": "ns",
            "range": "± 31551.200110159098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856156.1078404018,
            "unit": "ns",
            "range": "± 1258.8759414766366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367274.5432291667,
            "unit": "ns",
            "range": "± 3305.5258434229213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624452.695052083,
            "unit": "ns",
            "range": "± 7233.264694007873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849280.8203876202,
            "unit": "ns",
            "range": "± 242.28340267973945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757723.1084681919,
            "unit": "ns",
            "range": "± 426.5419671610159"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49678.684782608696,
            "unit": "ns",
            "range": "± 3198.5928290983356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8176578.14,
            "unit": "ns",
            "range": "± 329461.74455704546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21872150.733333334,
            "unit": "ns",
            "range": "± 295061.33763228345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54861153.64285714,
            "unit": "ns",
            "range": "± 545978.7052674106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110379173.8,
            "unit": "ns",
            "range": "± 1141267.9743690598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219099209.46666667,
            "unit": "ns",
            "range": "± 1611233.9218854627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464940.505050505,
            "unit": "ns",
            "range": "± 104468.70294439947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2719285.1666666665,
            "unit": "ns",
            "range": "± 98964.9950680805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2354264.0945945946,
            "unit": "ns",
            "range": "± 116231.62469228143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5919166.419753087,
            "unit": "ns",
            "range": "± 310172.1583623305"
          }
        ]
      }
    ]
  }
}