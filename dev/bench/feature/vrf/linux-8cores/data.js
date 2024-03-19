window.BENCHMARK_DATA = {
  "lastUpdate": 1710822227353,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710822205384,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5642320.833333333,
            "unit": "ns",
            "range": "± 11753.596845626611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14157103.142857144,
            "unit": "ns",
            "range": "± 77453.1626715409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37326402.807692304,
            "unit": "ns",
            "range": "± 92288.84374558734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74724989.6,
            "unit": "ns",
            "range": "± 411762.2242804699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150802831.06666666,
            "unit": "ns",
            "range": "± 580273.470744671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40235.113402061856,
            "unit": "ns",
            "range": "± 5159.089975220695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965045.3297872341,
            "unit": "ns",
            "range": "± 72881.20747134661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1838337.3846153845,
            "unit": "ns",
            "range": "± 70737.75166066583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644026.2210526315,
            "unit": "ns",
            "range": "± 121613.09917968918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7853581.838709678,
            "unit": "ns",
            "range": "± 230619.98250933603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397068.736842105,
            "unit": "ns",
            "range": "± 47847.996434127046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477385.6896551726,
            "unit": "ns",
            "range": "± 49219.30028244107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059215.933333333,
            "unit": "ns",
            "range": "± 55661.511144810014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3174629.813559322,
            "unit": "ns",
            "range": "± 135160.5953666912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8540144.384615384,
            "unit": "ns",
            "range": "± 109133.14809407394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201605.25,
            "unit": "ns",
            "range": "± 3170.179689965013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192943.84375,
            "unit": "ns",
            "range": "± 8800.005065328178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169902.15,
            "unit": "ns",
            "range": "± 3763.392929888778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3175630.214285714,
            "unit": "ns",
            "range": "± 24585.99490697771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2827253.6153846155,
            "unit": "ns",
            "range": "± 29324.937148379537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15543.397959183674,
            "unit": "ns",
            "range": "± 2290.0377736937544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59807.17543859649,
            "unit": "ns",
            "range": "± 2577.521034435489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52300.3125,
            "unit": "ns",
            "range": "± 858.7436341345807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60892.1030927835,
            "unit": "ns",
            "range": "± 8233.158787140035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2851.056701030928,
            "unit": "ns",
            "range": "± 367.93899429434873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12223.65909090909,
            "unit": "ns",
            "range": "± 690.4052930359367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722693.6432291665,
            "unit": "ns",
            "range": "± 2099.4863282696692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190513.8075520834,
            "unit": "ns",
            "range": "± 2776.478955864109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751981.9691685268,
            "unit": "ns",
            "range": "± 1279.8257824639263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960622.38125,
            "unit": "ns",
            "range": "± 1094.6677727069691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636186.7038762019,
            "unit": "ns",
            "range": "± 305.400995742355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577690.5453776042,
            "unit": "ns",
            "range": "± 788.0121903423044"
          }
        ]
      }
    ]
  }
}