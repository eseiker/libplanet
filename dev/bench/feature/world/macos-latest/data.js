window.BENCHMARK_DATA = {
  "lastUpdate": 1690880927205,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/planetarium/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690863079418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10832326.25,
            "unit": "ns",
            "range": "± 1208170.17419364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23359452.589473683,
            "unit": "ns",
            "range": "± 1504931.0454670477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55773287.54945055,
            "unit": "ns",
            "range": "± 3098170.7904948983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111305177.625,
            "unit": "ns",
            "range": "± 2869056.041060889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232247751.0526316,
            "unit": "ns",
            "range": "± 7949350.941099016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72452.8817204301,
            "unit": "ns",
            "range": "± 9887.68909218347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318325.9529411765,
            "unit": "ns",
            "range": "± 16369.41815144346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316281.25925925927,
            "unit": "ns",
            "range": "± 13242.9019178238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310862.0512820513,
            "unit": "ns",
            "range": "± 10732.382508701896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4165365.565217391,
            "unit": "ns",
            "range": "± 90345.98461058973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3613532.0172413792,
            "unit": "ns",
            "range": "± 103895.09624672266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20222.083333333332,
            "unit": "ns",
            "range": "± 4492.112241805904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101933.375,
            "unit": "ns",
            "range": "± 18442.776826686033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103769.67708333333,
            "unit": "ns",
            "range": "± 16800.7961377742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118914.77368421052,
            "unit": "ns",
            "range": "± 19195.565655619364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6825.241758241758,
            "unit": "ns",
            "range": "± 970.8089106016389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21110.866666666665,
            "unit": "ns",
            "range": "± 3277.9863104786446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557465.2626262626,
            "unit": "ns",
            "range": "± 159359.14267135953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2950361.564102564,
            "unit": "ns",
            "range": "± 148497.44802648618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074741.808080808,
            "unit": "ns",
            "range": "± 217540.37174532787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5940500.294736842,
            "unit": "ns",
            "range": "± 504028.36579071323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3701178.1464646463,
            "unit": "ns",
            "range": "± 296530.99112466094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653006.303030303,
            "unit": "ns",
            "range": "± 409125.05030634895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4667694.5,
            "unit": "ns",
            "range": "± 219108.76879675713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4076821.7474226803,
            "unit": "ns",
            "range": "± 396688.08088335267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7163259.318181818,
            "unit": "ns",
            "range": "± 324678.6581500194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6758810.3625,
            "unit": "ns",
            "range": "± 197859.83519083602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017324.0787417763,
            "unit": "ns",
            "range": "± 44026.46735844993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315196.8060825893,
            "unit": "ns",
            "range": "± 12876.510124113925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2918869.3905683877,
            "unit": "ns",
            "range": "± 129585.63900938061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865735.304296875,
            "unit": "ns",
            "range": "± 15549.776410214294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798609.3771484375,
            "unit": "ns",
            "range": "± 7728.129641331502"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "744559b0b2215a7fb7f759339f5ee24d19a1f3d3",
          "message": "Merge pull request #3346 from limebell/feature/world-state\n\nchore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T17:51:56+09:00",
          "tree_id": "adbffacf7e50247cc7ef38db738dc495d40ca7a1",
          "url": "https://github.com/planetarium/libplanet/commit/744559b0b2215a7fb7f759339f5ee24d19a1f3d3"
        },
        "date": 1690880868595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8642616.24,
            "unit": "ns",
            "range": "± 226972.22906141327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21228620.56557377,
            "unit": "ns",
            "range": "± 953314.4043031286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52655106.047619045,
            "unit": "ns",
            "range": "± 1892840.408209287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94192050.1632653,
            "unit": "ns",
            "range": "± 3651843.717072488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214213367.57142857,
            "unit": "ns",
            "range": "± 3776035.0703811557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68263.37894736842,
            "unit": "ns",
            "range": "± 12101.164298809688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322403.8947368421,
            "unit": "ns",
            "range": "± 20596.011932944526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309312.98876404495,
            "unit": "ns",
            "range": "± 17708.779676332084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320694.1818181818,
            "unit": "ns",
            "range": "± 10152.306897494238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4169362.466666667,
            "unit": "ns",
            "range": "± 75080.1307307891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781332.8846153845,
            "unit": "ns",
            "range": "± 47629.83159137849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18921.043956043955,
            "unit": "ns",
            "range": "± 2234.2450671912916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100849.46464646465,
            "unit": "ns",
            "range": "± 14177.166109062186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97858.94845360825,
            "unit": "ns",
            "range": "± 15663.961791568952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114021.48958333333,
            "unit": "ns",
            "range": "± 18236.802442195833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7104.739583333333,
            "unit": "ns",
            "range": "± 689.4244166013709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19588.894736842107,
            "unit": "ns",
            "range": "± 3242.2276045746116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1584528.547368421,
            "unit": "ns",
            "range": "± 162179.9942223224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051261.9782608696,
            "unit": "ns",
            "range": "± 229200.77711301137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174244.6041666665,
            "unit": "ns",
            "range": "± 254722.9591428584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6191719.104166667,
            "unit": "ns",
            "range": "± 479848.7201383694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321507.426829268,
            "unit": "ns",
            "range": "± 116791.84344173831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470420.8068181816,
            "unit": "ns",
            "range": "± 209254.5382825873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467863.824561403,
            "unit": "ns",
            "range": "± 184204.00757992314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3865938.772727273,
            "unit": "ns",
            "range": "± 137497.52140089293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7318728.240740741,
            "unit": "ns",
            "range": "± 271465.8923964507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6547385.394831731,
            "unit": "ns",
            "range": "± 97178.03383073503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1978165.7607421875,
            "unit": "ns",
            "range": "± 28032.231640539037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354814.1983072916,
            "unit": "ns",
            "range": "± 16015.372256881587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559581.6978125,
            "unit": "ns",
            "range": "± 102643.25790996023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876527.0674579327,
            "unit": "ns",
            "range": "± 10029.147445554307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726668.2577514648,
            "unit": "ns",
            "range": "± 14166.743549311826"
          }
        ]
      }
    ]
  }
}