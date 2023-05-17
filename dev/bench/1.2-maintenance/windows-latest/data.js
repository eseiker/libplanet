window.BENCHMARK_DATA = {
  "lastUpdate": 1684289834861,
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
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/planetarium/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684228395906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360750,
            "unit": "ns",
            "range": "± 131819.06978087328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2560122.580645161,
            "unit": "ns",
            "range": "± 116109.67599130083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2144289.6907216497,
            "unit": "ns",
            "range": "± 170334.79379135967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5275476.288659794,
            "unit": "ns",
            "range": "± 306451.884060803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47424.17582417582,
            "unit": "ns",
            "range": "± 2756.8234803983555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7001820,
            "unit": "ns",
            "range": "± 105397.93437932535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19450153.333333332,
            "unit": "ns",
            "range": "± 298128.0498296631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48770713.333333336,
            "unit": "ns",
            "range": "± 848365.3137203392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93003533.33333333,
            "unit": "ns",
            "range": "± 1428031.2730002333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184943528.57142857,
            "unit": "ns",
            "range": "± 3000048.497602503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4710249.739583333,
            "unit": "ns",
            "range": "± 21358.691684475205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497133.84765625,
            "unit": "ns",
            "range": "± 7681.923464727917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152573.2161458333,
            "unit": "ns",
            "range": "± 8935.159298552766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628276.5364583335,
            "unit": "ns",
            "range": "± 15533.944850261561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829519.5442708334,
            "unit": "ns",
            "range": "± 4001.6218677766356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774799.3424479166,
            "unit": "ns",
            "range": "± 2001.4587547211308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2993945.238095238,
            "unit": "ns",
            "range": "± 107522.85792691336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3179829.411764706,
            "unit": "ns",
            "range": "± 64168.7303589712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4115446.6666666665,
            "unit": "ns",
            "range": "± 76356.0631577636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4262112.5,
            "unit": "ns",
            "range": "± 108213.03189421841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6704147.916666667,
            "unit": "ns",
            "range": "± 261601.7242359594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267803.0303030303,
            "unit": "ns",
            "range": "± 8376.77163532008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256512.24489795917,
            "unit": "ns",
            "range": "± 10086.286743500248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238283.33333333334,
            "unit": "ns",
            "range": "± 11786.241680779605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3969564.285714286,
            "unit": "ns",
            "range": "± 50820.2504632047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3656968.4210526315,
            "unit": "ns",
            "range": "± 81300.5196965184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19610.752688172044,
            "unit": "ns",
            "range": "± 1836.0201740385073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88325.26315789473,
            "unit": "ns",
            "range": "± 5894.389117483597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77724.41860465116,
            "unit": "ns",
            "range": "± 4229.5650185613695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104582.6530612245,
            "unit": "ns",
            "range": "± 16943.592137979078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6687.628865979382,
            "unit": "ns",
            "range": "± 1012.6551045764505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20305.263157894737,
            "unit": "ns",
            "range": "± 2267.5494515263786"
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
          "id": "3d5aa886e8d61a1bb36174e6a54d989d1a7665ad",
          "message": "Merge pull request #3171 from greymistcube/prepare/1.2.1\n\n🔧 Prepare 1.2.1",
          "timestamp": "2023-05-17T11:00:29+09:00",
          "tree_id": "42e66b107c4b4ca1ce58e4c972c15d296fb64218",
          "url": "https://github.com/planetarium/libplanet/commit/3d5aa886e8d61a1bb36174e6a54d989d1a7665ad"
        },
        "date": 1684289783431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389539.393939394,
            "unit": "ns",
            "range": "± 134046.65865879736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578664.6464646463,
            "unit": "ns",
            "range": "± 150984.65749405875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2182105,
            "unit": "ns",
            "range": "± 160169.23081540974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5430085.416666667,
            "unit": "ns",
            "range": "± 312726.8268091824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47041.55844155844,
            "unit": "ns",
            "range": "± 2316.8348786852025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7214632,
            "unit": "ns",
            "range": "± 192134.9714827227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19628033.333333332,
            "unit": "ns",
            "range": "± 228142.19145920716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50309413.333333336,
            "unit": "ns",
            "range": "± 445936.04741145606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98234976.66666667,
            "unit": "ns",
            "range": "± 842107.6775963194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200169626.66666666,
            "unit": "ns",
            "range": "± 2194231.306164503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4770627.232142857,
            "unit": "ns",
            "range": "± 15308.787719825441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511947.3958333333,
            "unit": "ns",
            "range": "± 7628.888627304175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172362.6534598214,
            "unit": "ns",
            "range": "± 5703.828530361633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643957.71484375,
            "unit": "ns",
            "range": "± 3810.6005571193355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822368.65234375,
            "unit": "ns",
            "range": "± 1718.3869348487005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763088.8811383928,
            "unit": "ns",
            "range": "± 1977.5274111781134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142707.6923076925,
            "unit": "ns",
            "range": "± 75758.91194085049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3334506.0606060605,
            "unit": "ns",
            "range": "± 105459.8618533194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4117561.111111111,
            "unit": "ns",
            "range": "± 86071.64005769974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256052.631578947,
            "unit": "ns",
            "range": "± 146454.42928690306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6607545.161290322,
            "unit": "ns",
            "range": "± 196408.15298540887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260596.07843137256,
            "unit": "ns",
            "range": "± 10109.420572600859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250960.37735849057,
            "unit": "ns",
            "range": "± 9157.076700618816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231610.30927835053,
            "unit": "ns",
            "range": "± 13030.808721833697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4081987.5,
            "unit": "ns",
            "range": "± 75834.76665312113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3661161.5384615385,
            "unit": "ns",
            "range": "± 47931.48823166838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21116.666666666668,
            "unit": "ns",
            "range": "± 2321.9622675508367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93067.01030927835,
            "unit": "ns",
            "range": "± 7593.4143842088115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80865.26315789473,
            "unit": "ns",
            "range": "± 7047.057155839648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99017.67676767676,
            "unit": "ns",
            "range": "± 16878.81674619396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5451.0204081632655,
            "unit": "ns",
            "range": "± 868.9660757568887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18903.684210526317,
            "unit": "ns",
            "range": "± 1966.5181740841756"
          }
        ]
      }
    ]
  }
}