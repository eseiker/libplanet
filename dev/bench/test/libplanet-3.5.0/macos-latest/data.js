window.BENCHMARK_DATA = {
  "lastUpdate": 1696351831398,
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
          "id": "8dc592d3d07260489d7ac7dd1f62754bc23faae0",
          "message": "Merge pull request #3435 from greymistcube/prepare/3.5.0\n\n🔧 Prepare 3.5.0",
          "timestamp": "2023-09-25T20:32:57+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/planetarium/libplanet/commit/8dc592d3d07260489d7ac7dd1f62754bc23faae0"
        },
        "date": 1696351113722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8866481.3,
            "unit": "ns",
            "range": "± 161508.76642337407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21967476.560240965,
            "unit": "ns",
            "range": "± 1172379.5354857526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55147114.520833336,
            "unit": "ns",
            "range": "± 2163832.742081764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111400090.8,
            "unit": "ns",
            "range": "± 3947947.4794241176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224935162.58,
            "unit": "ns",
            "range": "± 5951376.76783504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71843.65053763441,
            "unit": "ns",
            "range": "± 7852.9101708223525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360325.5106382979,
            "unit": "ns",
            "range": "± 46382.077080842544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324098.6777777778,
            "unit": "ns",
            "range": "± 27593.698667002638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306526.8064516129,
            "unit": "ns",
            "range": "± 9130.481854460018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4140258.5714285714,
            "unit": "ns",
            "range": "± 56929.03218612057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3782063.3,
            "unit": "ns",
            "range": "± 42820.69803794823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24055.979166666668,
            "unit": "ns",
            "range": "± 4484.175539967811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102702.12626262626,
            "unit": "ns",
            "range": "± 16497.948394150044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96178.85714285714,
            "unit": "ns",
            "range": "± 11565.13313534022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103941.6875,
            "unit": "ns",
            "range": "± 10894.828641257669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7419.648936170212,
            "unit": "ns",
            "range": "± 1039.2061456050826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20482.460674157304,
            "unit": "ns",
            "range": "± 2869.100536342435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495117.27,
            "unit": "ns",
            "range": "± 169427.82370201507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2822301.035714286,
            "unit": "ns",
            "range": "± 119024.45330694396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2497095.22,
            "unit": "ns",
            "range": "± 265869.4962329322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10527430.732558139,
            "unit": "ns",
            "range": "± 389846.3001190547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3473377.6914893617,
            "unit": "ns",
            "range": "± 250830.02565774086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631169.275510204,
            "unit": "ns",
            "range": "± 273189.3218485634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4651294.788659794,
            "unit": "ns",
            "range": "± 317252.5711322119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4584894.201030928,
            "unit": "ns",
            "range": "± 329615.83816587925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16044843.922222223,
            "unit": "ns",
            "range": "± 2292076.229671399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5518249.038802084,
            "unit": "ns",
            "range": "± 64459.925680071894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1709009.166015625,
            "unit": "ns",
            "range": "± 9972.156142706406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1039372.3237847222,
            "unit": "ns",
            "range": "± 21554.188296473956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573021.913762019,
            "unit": "ns",
            "range": "± 31524.74799577084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 774748.3589192708,
            "unit": "ns",
            "range": "± 2233.4508995464694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 696488.0085286458,
            "unit": "ns",
            "range": "± 1612.9810720234075"
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
          "id": "a953e0e1d421062c120de71ca88ca23eeaf08720",
          "message": "Merge pull request #3437 from greymistcube/refactor/immutable-iaction-context\n\n♻️ Immutable `IActionContext`",
          "timestamp": "2023-10-04T01:31:53+09:00",
          "tree_id": "4e297305404cfc9980e96eef99e4a093ccf46805",
          "url": "https://github.com/planetarium/libplanet/commit/a953e0e1d421062c120de71ca88ca23eeaf08720"
        },
        "date": 1696351773153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8981081.99484536,
            "unit": "ns",
            "range": "± 544989.8516660297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21851471.747126438,
            "unit": "ns",
            "range": "± 1189484.8103398734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54310012.2,
            "unit": "ns",
            "range": "± 1413392.3942773289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107248788.5,
            "unit": "ns",
            "range": "± 1569989.537460862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226595564.55,
            "unit": "ns",
            "range": "± 5011317.316688975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77405.4540229885,
            "unit": "ns",
            "range": "± 7186.031218432058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331485.4347826087,
            "unit": "ns",
            "range": "± 21471.073774468452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313474.6979166667,
            "unit": "ns",
            "range": "± 21096.604454456297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301330.3243243243,
            "unit": "ns",
            "range": "± 10164.217475629488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4016751.6428571427,
            "unit": "ns",
            "range": "± 39642.51033851868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3757609.3076923075,
            "unit": "ns",
            "range": "± 52863.446807765344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24628.736842105263,
            "unit": "ns",
            "range": "± 4657.189864071595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97827.89361702128,
            "unit": "ns",
            "range": "± 14703.596953842076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118897.16666666667,
            "unit": "ns",
            "range": "± 22885.32658951521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102947.23404255319,
            "unit": "ns",
            "range": "± 17512.472090451098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7942.864583333333,
            "unit": "ns",
            "range": "± 1289.3235731212476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18365.67391304348,
            "unit": "ns",
            "range": "± 2434.2299100816604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523714.78,
            "unit": "ns",
            "range": "± 176240.52191350618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2880707.257575758,
            "unit": "ns",
            "range": "± 134247.89638555987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2346997.7684210525,
            "unit": "ns",
            "range": "± 158156.51782947738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10915747.82142857,
            "unit": "ns",
            "range": "± 1638899.4804324305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321010.825,
            "unit": "ns",
            "range": "± 162163.49168232008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3551839.776595745,
            "unit": "ns",
            "range": "± 312222.88345867704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4527338.952380952,
            "unit": "ns",
            "range": "± 196352.9173718414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499661.551724138,
            "unit": "ns",
            "range": "± 410446.402857736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15021641.620879121,
            "unit": "ns",
            "range": "± 1609354.7010662297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5603557.46875,
            "unit": "ns",
            "range": "± 75213.98948376089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739532.5779747595,
            "unit": "ns",
            "range": "± 46578.59625450084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130518.4611049108,
            "unit": "ns",
            "range": "± 36409.8627149458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2782397.033203125,
            "unit": "ns",
            "range": "± 105348.0968562817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838166.0411879596,
            "unit": "ns",
            "range": "± 16366.678539307559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759680.6065755208,
            "unit": "ns",
            "range": "± 6012.061417135399"
          }
        ]
      }
    ]
  }
}