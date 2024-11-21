window.BENCHMARK_DATA = {
  "lastUpdate": 1732176538573,
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
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731482677594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041814.1414141414,
            "unit": "ns",
            "range": "± 111757.38117439667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831215.625,
            "unit": "ns",
            "range": "± 84642.50352380758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532506.6666666667,
            "unit": "ns",
            "range": "± 85007.30411446413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6638034.285714285,
            "unit": "ns",
            "range": "± 172088.8175996835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36463.63636363636,
            "unit": "ns",
            "range": "± 4750.627338711936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10134180,
            "unit": "ns",
            "range": "± 144801.0714246075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25521364.285714287,
            "unit": "ns",
            "range": "± 223570.81000862367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63871453.333333336,
            "unit": "ns",
            "range": "± 634047.2062942347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125093600,
            "unit": "ns",
            "range": "± 1080479.2732857026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251411778.57142857,
            "unit": "ns",
            "range": "± 3400800.853911771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368889.1741071427,
            "unit": "ns",
            "range": "± 8934.678204844915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072516.4341517857,
            "unit": "ns",
            "range": "± 3665.085800738355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754814.3815104166,
            "unit": "ns",
            "range": "± 1676.8851647985402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960457.533482143,
            "unit": "ns",
            "range": "± 3481.6926497180943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627287.7178485577,
            "unit": "ns",
            "range": "± 1163.8144046717712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560360.0811298077,
            "unit": "ns",
            "range": "± 552.7190651777544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2291372.4137931033,
            "unit": "ns",
            "range": "± 56296.935317194446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2353300,
            "unit": "ns",
            "range": "± 81165.37339184634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2849965.217391304,
            "unit": "ns",
            "range": "± 70145.07439906662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2407596,
            "unit": "ns",
            "range": "± 63169.2797172803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3063623.076923077,
            "unit": "ns",
            "range": "± 46565.977455759006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107553.93258426966,
            "unit": "ns",
            "range": "± 8806.222698903099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176263.82978723405,
            "unit": "ns",
            "range": "± 6781.157575027608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164927.55102040817,
            "unit": "ns",
            "range": "± 11120.30538604104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2718846.6666666665,
            "unit": "ns",
            "range": "± 46675.10603961735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2587275,
            "unit": "ns",
            "range": "± 18342.207907149317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12442.222222222223,
            "unit": "ns",
            "range": "± 2107.822657283293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61092.708333333336,
            "unit": "ns",
            "range": "± 7100.648521777749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48820,
            "unit": "ns",
            "range": "± 4156.954373447145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69289.79591836735,
            "unit": "ns",
            "range": "± 15066.009327998023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3232.6530612244896,
            "unit": "ns",
            "range": "± 684.2522459769883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13947.916666666666,
            "unit": "ns",
            "range": "± 2753.2556486215854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dea6bfac0d9675f332eeb52028913d6e7853b747",
          "message": "Merge pull request #3990 from planetarium/port/5.3.2-to-5.4.1\n\n🔀 Port 5.3.2 to 5.4.1",
          "timestamp": "2024-11-21T16:59:52+09:00",
          "tree_id": "a6817dda74909352d820c37eb73962ef30f8f415",
          "url": "https://github.com/planetarium/libplanet/commit/dea6bfac0d9675f332eeb52028913d6e7853b747"
        },
        "date": 1732176465040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993818,
            "unit": "ns",
            "range": "± 116225.39264269876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1731754.5454545454,
            "unit": "ns",
            "range": "± 64639.348137922614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1541713.829787234,
            "unit": "ns",
            "range": "± 120690.22183006405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6712353.333333333,
            "unit": "ns",
            "range": "± 252295.52350729136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29479.166666666668,
            "unit": "ns",
            "range": "± 743.07186536798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9626350,
            "unit": "ns",
            "range": "± 48888.89680458367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24014373.333333332,
            "unit": "ns",
            "range": "± 217657.241901989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59948513.333333336,
            "unit": "ns",
            "range": "± 661207.1156676429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126925333.33333333,
            "unit": "ns",
            "range": "± 2332599.918443755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233878335.7142857,
            "unit": "ns",
            "range": "± 1120142.5243156424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314153.0412946427,
            "unit": "ns",
            "range": "± 4133.564449126916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069371.861049107,
            "unit": "ns",
            "range": "± 1705.2916448033714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733336.0630580357,
            "unit": "ns",
            "range": "± 3313.7165532874037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952005.78125,
            "unit": "ns",
            "range": "± 7204.15227261619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624123.359375,
            "unit": "ns",
            "range": "± 2035.1200731522708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587358.2161458334,
            "unit": "ns",
            "range": "± 1044.1284106339365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158303.846153846,
            "unit": "ns",
            "range": "± 13148.739824574786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2371155.5555555555,
            "unit": "ns",
            "range": "± 49354.160945298005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767625,
            "unit": "ns",
            "range": "± 53105.938148823494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2310459.2592592593,
            "unit": "ns",
            "range": "± 58142.532156623914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3090221.212121212,
            "unit": "ns",
            "range": "± 94246.42817361753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93993.25842696629,
            "unit": "ns",
            "range": "± 5423.681191874476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169695.2380952381,
            "unit": "ns",
            "range": "± 6140.149850437725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148510.86956521738,
            "unit": "ns",
            "range": "± 3694.0663884415285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2659793.3333333335,
            "unit": "ns",
            "range": "± 42876.758050864584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2467057.1428571427,
            "unit": "ns",
            "range": "± 34205.6611213298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10364.835164835165,
            "unit": "ns",
            "range": "± 1184.9400947233694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52410.63829787234,
            "unit": "ns",
            "range": "± 4969.400303169504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43957.142857142855,
            "unit": "ns",
            "range": "± 775.3056823594815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49922.34042553192,
            "unit": "ns",
            "range": "± 9473.496183953444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2359.375,
            "unit": "ns",
            "range": "± 356.17208289193434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10063.541666666666,
            "unit": "ns",
            "range": "± 1574.2413238172967"
          }
        ]
      }
    ]
  }
}