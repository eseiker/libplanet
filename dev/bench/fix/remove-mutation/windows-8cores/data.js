window.BENCHMARK_DATA = {
  "lastUpdate": 1722314058498,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "513f6a325917eadcdceb8080eb3d89459e4ab67f",
          "message": "chore: Remove explorer mutation.",
          "timestamp": "2024-07-30T12:37:13+09:00",
          "tree_id": "ef65c932dda86ecaf60ea63bfcb0eb63809425ec",
          "url": "https://github.com/planetarium/libplanet/commit/513f6a325917eadcdceb8080eb3d89459e4ab67f"
        },
        "date": 1722311424557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069551.5151515151,
            "unit": "ns",
            "range": "± 146811.31953497068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1791386.956521739,
            "unit": "ns",
            "range": "± 66046.37296356638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1573757.471264368,
            "unit": "ns",
            "range": "± 95747.34149224963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6964392.5,
            "unit": "ns",
            "range": "± 241164.30444238527"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31843.478260869564,
            "unit": "ns",
            "range": "± 3591.7580974073758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10160818.75,
            "unit": "ns",
            "range": "± 196459.6895676057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24692562.5,
            "unit": "ns",
            "range": "± 426452.75295160187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61628966.666666664,
            "unit": "ns",
            "range": "± 1056865.208777264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123808818.75,
            "unit": "ns",
            "range": "± 2430650.016413648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255737885.7142857,
            "unit": "ns",
            "range": "± 2964903.0970952217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3399235.0520833335,
            "unit": "ns",
            "range": "± 7989.7956078387015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074137.265625,
            "unit": "ns",
            "range": "± 3321.265417847011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741345.2473958334,
            "unit": "ns",
            "range": "± 1179.900521564138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965654.1015625,
            "unit": "ns",
            "range": "± 3275.9451037861186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628186.9977678572,
            "unit": "ns",
            "range": "± 958.8942799758072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550965.3059895834,
            "unit": "ns",
            "range": "± 687.3546064801607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2230060.3773584906,
            "unit": "ns",
            "range": "± 92948.27208975026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323089.4736842103,
            "unit": "ns",
            "range": "± 50098.52398287956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2856412.5,
            "unit": "ns",
            "range": "± 52647.594120402755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305093.5064935065,
            "unit": "ns",
            "range": "± 111774.90695903359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3097277.272727273,
            "unit": "ns",
            "range": "± 74860.48567847605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180671.73913043478,
            "unit": "ns",
            "range": "± 6901.3255745538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172777.08333333334,
            "unit": "ns",
            "range": "± 6202.684373697916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146303.44827586206,
            "unit": "ns",
            "range": "± 4191.784716955356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811735.294117647,
            "unit": "ns",
            "range": "± 57182.863923299505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2618553.3333333335,
            "unit": "ns",
            "range": "± 42462.38447423902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14716.129032258064,
            "unit": "ns",
            "range": "± 1658.7901774289967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64322.34042553192,
            "unit": "ns",
            "range": "± 5796.59066009614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46738.38383838384,
            "unit": "ns",
            "range": "± 2947.5589025187896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68320.40816326531,
            "unit": "ns",
            "range": "± 14010.474426161245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3027.0833333333335,
            "unit": "ns",
            "range": "± 729.5967403359007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14287.5,
            "unit": "ns",
            "range": "± 1921.9644555560992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "f83af1b319a8c75a26608d9a301b4c5aaa54d6fd",
          "message": "changelog",
          "timestamp": "2024-07-30T12:42:10+09:00",
          "tree_id": "1d4e45658b787684c6b41c591cd1189a3b5dc3ee",
          "url": "https://github.com/planetarium/libplanet/commit/f83af1b319a8c75a26608d9a301b4c5aaa54d6fd"
        },
        "date": 1722311679870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079928.8659793814,
            "unit": "ns",
            "range": "± 133410.6528095699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1838975,
            "unit": "ns",
            "range": "± 71936.46280469358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602566.6666666667,
            "unit": "ns",
            "range": "± 87697.16612146846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6956861.29032258,
            "unit": "ns",
            "range": "± 208775.94956862144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37110,
            "unit": "ns",
            "range": "± 4681.54554467525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9856392.857142856,
            "unit": "ns",
            "range": "± 87613.76309414225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24360414.285714287,
            "unit": "ns",
            "range": "± 220408.7631133183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61938392.307692304,
            "unit": "ns",
            "range": "± 314351.3386365073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121877896.15384616,
            "unit": "ns",
            "range": "± 680083.7455972912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247032926.66666666,
            "unit": "ns",
            "range": "± 1916963.1856017427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348405.2083333335,
            "unit": "ns",
            "range": "± 9262.226648209053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067689.955357143,
            "unit": "ns",
            "range": "± 1583.4791694286798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732154.6354166666,
            "unit": "ns",
            "range": "± 1301.1995984220837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956790.8854166667,
            "unit": "ns",
            "range": "± 3161.711409714437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638127.1693638393,
            "unit": "ns",
            "range": "± 996.1796043925445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551854.4270833334,
            "unit": "ns",
            "range": "± 920.3263720826135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204481.8181818184,
            "unit": "ns",
            "range": "± 31837.977268300143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320809.375,
            "unit": "ns",
            "range": "± 71039.64980740026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2770020,
            "unit": "ns",
            "range": "± 29884.52059894171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2401480,
            "unit": "ns",
            "range": "± 44738.78470793387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3110958.8235294116,
            "unit": "ns",
            "range": "± 60559.01108447373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184632.7868852459,
            "unit": "ns",
            "range": "± 7689.272208982144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177367.3469387755,
            "unit": "ns",
            "range": "± 5424.9188839981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152472.41379310345,
            "unit": "ns",
            "range": "± 4451.556433406518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2881146.6666666665,
            "unit": "ns",
            "range": "± 51571.155651566456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2629886.6666666665,
            "unit": "ns",
            "range": "± 42104.78199286474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13128.72340425532,
            "unit": "ns",
            "range": "± 1294.0411271675985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58366.666666666664,
            "unit": "ns",
            "range": "± 5014.91809591861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46637.5,
            "unit": "ns",
            "range": "± 878.5404562872067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60205.434782608696,
            "unit": "ns",
            "range": "± 11967.569401984028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2846.842105263158,
            "unit": "ns",
            "range": "± 434.53389838605744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10811.702127659575,
            "unit": "ns",
            "range": "± 900.0425776044158"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "0e92909236c8f883b849b0179b3e9491d3f8f1f1",
          "message": "changelog",
          "timestamp": "2024-07-30T13:18:29+09:00",
          "tree_id": "f55f248759908343516491ff0c824e9e37d8b82e",
          "url": "https://github.com/planetarium/libplanet/commit/0e92909236c8f883b849b0179b3e9491d3f8f1f1"
        },
        "date": 1722313742628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966467.1052631579,
            "unit": "ns",
            "range": "± 48611.41810496211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781858,
            "unit": "ns",
            "range": "± 71464.74823866888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1547722.5,
            "unit": "ns",
            "range": "± 80082.07178588094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6832050,
            "unit": "ns",
            "range": "± 195430.9265112281"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30248.64864864865,
            "unit": "ns",
            "range": "± 1011.7700720414093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9828421.42857143,
            "unit": "ns",
            "range": "± 128260.60866947318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24093035.29411765,
            "unit": "ns",
            "range": "± 475414.5282555747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60215528.571428575,
            "unit": "ns",
            "range": "± 698690.9765120347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118771803.33333333,
            "unit": "ns",
            "range": "± 803980.6313113578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239737313.33333334,
            "unit": "ns",
            "range": "± 1680873.9188999562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355758.3426339286,
            "unit": "ns",
            "range": "± 7738.677831386457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084841.0546875,
            "unit": "ns",
            "range": "± 2748.2004160023366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744610.3724888393,
            "unit": "ns",
            "range": "± 1464.6235757903173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912272.3177083333,
            "unit": "ns",
            "range": "± 2694.061662301697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631989.0494791666,
            "unit": "ns",
            "range": "± 2189.647982010539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587358.447265625,
            "unit": "ns",
            "range": "± 1252.8748712487861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121518.918918919,
            "unit": "ns",
            "range": "± 61013.87746441987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290960,
            "unit": "ns",
            "range": "± 61431.417324385075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2804072.222222222,
            "unit": "ns",
            "range": "± 57165.629385204316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2296200,
            "unit": "ns",
            "range": "± 90895.21439547848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2963942.8571428573,
            "unit": "ns",
            "range": "± 39900.15836262605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177872.83950617284,
            "unit": "ns",
            "range": "± 9352.12559188657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170921.81818181818,
            "unit": "ns",
            "range": "± 7256.9172852423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145633.33333333334,
            "unit": "ns",
            "range": "± 3686.7172468160634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818228.5714285714,
            "unit": "ns",
            "range": "± 37245.493864181924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2523468.1818181816,
            "unit": "ns",
            "range": "± 59177.733798187786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12085.567010309278,
            "unit": "ns",
            "range": "± 1606.0426059833146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54071.42857142857,
            "unit": "ns",
            "range": "± 5510.6644499926115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45496.2962962963,
            "unit": "ns",
            "range": "± 1245.1386952345392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55273.86363636364,
            "unit": "ns",
            "range": "± 7520.859793080059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2480,
            "unit": "ns",
            "range": "± 486.54229441572613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11032.258064516129,
            "unit": "ns",
            "range": "± 1174.378771051407"
          }
        ]
      }
    ]
  }
}