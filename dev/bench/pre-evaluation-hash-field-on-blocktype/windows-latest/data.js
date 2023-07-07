window.BENCHMARK_DATA = {
  "lastUpdate": 1688710773814,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "4b03a2c3b9a0cec0213d3552868c5dacaa04105c",
          "message": "Remove unused using",
          "timestamp": "2023-07-07T15:01:46+09:00",
          "tree_id": "9bac88ba713d96d76306b1cfb700e32e50c08e00",
          "url": "https://github.com/planetarium/libplanet/commit/4b03a2c3b9a0cec0213d3552868c5dacaa04105c"
        },
        "date": 1688710660490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188603.0303030303,
            "unit": "ns",
            "range": "± 149287.65374990704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994764.1791044776,
            "unit": "ns",
            "range": "± 94207.26135156129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1884326.530612245,
            "unit": "ns",
            "range": "± 199331.55436914825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3944675.925925926,
            "unit": "ns",
            "range": "± 142512.98111702784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34497.84946236559,
            "unit": "ns",
            "range": "± 2122.292571654718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5175492.307692308,
            "unit": "ns",
            "range": "± 40919.34060926979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13519550,
            "unit": "ns",
            "range": "± 73876.50558143013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33566386.666666664,
            "unit": "ns",
            "range": "± 365719.1054555915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65394653.333333336,
            "unit": "ns",
            "range": "± 660363.2072759728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134318992.85714287,
            "unit": "ns",
            "range": "± 1432272.3803395487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3643740.4296875,
            "unit": "ns",
            "range": "± 8807.092329174937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1139519.0625,
            "unit": "ns",
            "range": "± 2329.6822108652505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816331.34765625,
            "unit": "ns",
            "range": "± 1530.08122005071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999360.15625,
            "unit": "ns",
            "range": "± 4925.477688689144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638061.30859375,
            "unit": "ns",
            "range": "± 1414.2692549409674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593545.7310267857,
            "unit": "ns",
            "range": "± 2693.826786434073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381560,
            "unit": "ns",
            "range": "± 94961.54753480002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2445117.8571428573,
            "unit": "ns",
            "range": "± 64865.028262804226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2982346.153846154,
            "unit": "ns",
            "range": "± 48148.40972425111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3015658.695652174,
            "unit": "ns",
            "range": "± 103334.85499113379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4830428.571428572,
            "unit": "ns",
            "range": "± 207830.69833119254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188169.23076923078,
            "unit": "ns",
            "range": "± 8075.733772329202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188555.4347826087,
            "unit": "ns",
            "range": "± 11256.776851462058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152134.73684210525,
            "unit": "ns",
            "range": "± 10511.430135516337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2851340,
            "unit": "ns",
            "range": "± 43548.11460573564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2588391.1764705884,
            "unit": "ns",
            "range": "± 50713.7685794441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13976.288659793814,
            "unit": "ns",
            "range": "± 2468.795809527571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62638.46153846154,
            "unit": "ns",
            "range": "± 6093.580761401829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52980.434782608696,
            "unit": "ns",
            "range": "± 5982.138967131538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77871.13402061856,
            "unit": "ns",
            "range": "± 15922.265324871378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3631.958762886598,
            "unit": "ns",
            "range": "± 867.7732988988465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12021.739130434782,
            "unit": "ns",
            "range": "± 1752.4755543407368"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "16b4aa08a73c34161b9fad4125941d8604d168ad",
          "message": "Add preEvaluationHash field to BlockType",
          "timestamp": "2023-07-07T15:00:48+09:00",
          "tree_id": "0bda7672ae47c4fb07e8a126d8ecec4ceba72fe1",
          "url": "https://github.com/planetarium/libplanet/commit/16b4aa08a73c34161b9fad4125941d8604d168ad"
        },
        "date": 1688710714778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1306772,
            "unit": "ns",
            "range": "± 123721.2695594987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2301547.0588235296,
            "unit": "ns",
            "range": "± 68415.73554289411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005492.7083333333,
            "unit": "ns",
            "range": "± 153526.80633056042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4717472.0930232555,
            "unit": "ns",
            "range": "± 173275.69599255812"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52148.48484848485,
            "unit": "ns",
            "range": "± 11700.177598829678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7681319.230769231,
            "unit": "ns",
            "range": "± 127778.24791812431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18233686.666666668,
            "unit": "ns",
            "range": "± 246374.4648951692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44957357.14285714,
            "unit": "ns",
            "range": "± 531215.0292045089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93066343.75,
            "unit": "ns",
            "range": "± 1703994.7683678493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190318430,
            "unit": "ns",
            "range": "± 1182629.7338679472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5124661.901041667,
            "unit": "ns",
            "range": "± 34111.39376861791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547837.7371651786,
            "unit": "ns",
            "range": "± 17403.533976043913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070997.94921875,
            "unit": "ns",
            "range": "± 7187.98899097238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630899.832589286,
            "unit": "ns",
            "range": "± 10614.6041264481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855895.0716145834,
            "unit": "ns",
            "range": "± 3805.7825909529943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748734.8214285715,
            "unit": "ns",
            "range": "± 4094.0421997215467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3061982.1428571427,
            "unit": "ns",
            "range": "± 86382.13572849351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3147532.7868852457,
            "unit": "ns",
            "range": "± 141414.38366412316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3939023.6842105263,
            "unit": "ns",
            "range": "± 135315.47010938774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3922696.9696969697,
            "unit": "ns",
            "range": "± 111308.21365932662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6103647.619047619,
            "unit": "ns",
            "range": "± 144811.75235127713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239364.58333333334,
            "unit": "ns",
            "range": "± 19008.66272971168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230500.50505050505,
            "unit": "ns",
            "range": "± 21191.538423689995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216215.625,
            "unit": "ns",
            "range": "± 17046.829173439295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4110028.5714285714,
            "unit": "ns",
            "range": "± 69664.79553019398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3575078.5714285714,
            "unit": "ns",
            "range": "± 35328.68040757621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17800,
            "unit": "ns",
            "range": "± 4728.992326178235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88903.0303030303,
            "unit": "ns",
            "range": "± 16881.256690728213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82096.84210526316,
            "unit": "ns",
            "range": "± 13109.753171569817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104359.59595959596,
            "unit": "ns",
            "range": "± 19442.263658371063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5568.421052631579,
            "unit": "ns",
            "range": "± 1615.3033545472647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18444,
            "unit": "ns",
            "range": "± 5879.468126841531"
          }
        ]
      }
    ]
  }
}