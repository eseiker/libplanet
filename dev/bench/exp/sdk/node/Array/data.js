window.BENCHMARK_DATA = {
  "lastUpdate": 1721891303112,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "4396e8a013d6602c32a4d405300212b1f1a46cfa",
          "message": "exp: node",
          "timestamp": "2024-07-25T14:46:14+09:00",
          "tree_id": "c422c889c20f6ff72b431188637e9adee2d887b3",
          "url": "https://github.com/planetarium/libplanet/commit/4396e8a013d6602c32a4d405300212b1f1a46cfa"
        },
        "date": 1721886873853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10774430.833333334,
            "unit": "ns",
            "range": "± 71648.12526867086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26531624.769230768,
            "unit": "ns",
            "range": "± 180026.24147104862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67421699,
            "unit": "ns",
            "range": "± 158504.44121222597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135952426.3,
            "unit": "ns",
            "range": "± 269321.772240196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273468505.3,
            "unit": "ns",
            "range": "± 279639.22306638496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14089.435897435897,
            "unit": "ns",
            "range": "± 490.7552072207742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112107.29411764706,
            "unit": "ns",
            "range": "± 4559.926219991362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104422.6170212766,
            "unit": "ns",
            "range": "± 4058.26890463319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91829.60975609756,
            "unit": "ns",
            "range": "± 3302.513867329317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991843.8333333335,
            "unit": "ns",
            "range": "± 166488.758073307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766529.964285714,
            "unit": "ns",
            "range": "± 147746.04544451495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4799.260869565217,
            "unit": "ns",
            "range": "± 547.9102932424191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26660.41304347826,
            "unit": "ns",
            "range": "± 1598.6613778867238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22969.494736842105,
            "unit": "ns",
            "range": "± 1765.564564482133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29203.212765957447,
            "unit": "ns",
            "range": "± 5187.302771216018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1070.65625,
            "unit": "ns",
            "range": "± 223.5286783967316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4917.913978494624,
            "unit": "ns",
            "range": "± 573.4261571791616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681320.3170731707,
            "unit": "ns",
            "range": "± 35995.95868807403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271025.558139535,
            "unit": "ns",
            "range": "± 47081.00257777739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066296.15,
            "unit": "ns",
            "range": "± 47701.288274833976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10832537.04,
            "unit": "ns",
            "range": "± 2399086.2493732516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164974.870967742,
            "unit": "ns",
            "range": "± 64468.14184579436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2285183.0322580645,
            "unit": "ns",
            "range": "± 97663.93935259726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583490.785714286,
            "unit": "ns",
            "range": "± 34155.21749348805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2374136.9787234045,
            "unit": "ns",
            "range": "± 91873.40919379688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2978913.846153846,
            "unit": "ns",
            "range": "± 152567.78636609812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3020190.3270089286,
            "unit": "ns",
            "range": "± 29240.93748415458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926160.5953125,
            "unit": "ns",
            "range": "± 5742.47836717267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613425.2142578125,
            "unit": "ns",
            "range": "± 5041.864835432617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648115.6303013393,
            "unit": "ns",
            "range": "± 16598.100232379144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469397.1642578125,
            "unit": "ns",
            "range": "± 1260.5326679260875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421580.6895577567,
            "unit": "ns",
            "range": "± 637.9362015136943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1ba0a655ecc78782cfecd63ad610cf5d82534cef",
          "message": "exp: node",
          "timestamp": "2024-07-25T15:58:33+09:00",
          "tree_id": "b3640871e27a08181086b648d1815bc201fb3353",
          "url": "https://github.com/planetarium/libplanet/commit/1ba0a655ecc78782cfecd63ad610cf5d82534cef"
        },
        "date": 1721891222623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10706887.615384616,
            "unit": "ns",
            "range": "± 141937.57440129473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26473360.5,
            "unit": "ns",
            "range": "± 127839.56635489535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67272558.73333333,
            "unit": "ns",
            "range": "± 94565.02343094532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136507620.03846154,
            "unit": "ns",
            "range": "± 144725.4545387089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272190618,
            "unit": "ns",
            "range": "± 271271.9978205371"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14221.866666666667,
            "unit": "ns",
            "range": "± 266.03245416051533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110032.35714285714,
            "unit": "ns",
            "range": "± 3128.92689327896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103891.35555555555,
            "unit": "ns",
            "range": "± 3617.461862307953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91859.51515151515,
            "unit": "ns",
            "range": "± 2874.9873817246153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3051796.7346938774,
            "unit": "ns",
            "range": "± 182151.73740258254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730887.1063829786,
            "unit": "ns",
            "range": "± 154768.3843650127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5485.877551020408,
            "unit": "ns",
            "range": "± 1070.5781390734548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27186.255319148935,
            "unit": "ns",
            "range": "± 2284.358854245848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22314.557142857142,
            "unit": "ns",
            "range": "± 1086.482445961748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30609.157894736843,
            "unit": "ns",
            "range": "± 5541.456620312391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1218.7362637362637,
            "unit": "ns",
            "range": "± 177.1658880613079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5052.747252747253,
            "unit": "ns",
            "range": "± 512.1023463984649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679346.5327868853,
            "unit": "ns",
            "range": "± 29994.226989520954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283559.8666666667,
            "unit": "ns",
            "range": "± 48114.31710595847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1114862.3488372094,
            "unit": "ns",
            "range": "± 60227.129488836814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9573579.25,
            "unit": "ns",
            "range": "± 1431470.4604832293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186963.7674418604,
            "unit": "ns",
            "range": "± 80595.73125581103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303464.8292682925,
            "unit": "ns",
            "range": "± 81888.82837509108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2590445.076923077,
            "unit": "ns",
            "range": "± 42104.67387646637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2357659.9811320757,
            "unit": "ns",
            "range": "± 97006.1204709608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3010841.9857142856,
            "unit": "ns",
            "range": "± 145960.6572620242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2982567.923958333,
            "unit": "ns",
            "range": "± 48399.15495514976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914244.5424479167,
            "unit": "ns",
            "range": "± 4741.90667871231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613562.0935546875,
            "unit": "ns",
            "range": "± 5241.660178642073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633530.617252604,
            "unit": "ns",
            "range": "± 13961.870849852352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471580.08932291664,
            "unit": "ns",
            "range": "± 560.8089271129046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423038.2009277344,
            "unit": "ns",
            "range": "± 479.6033305571588"
          }
        ]
      }
    ]
  }
}