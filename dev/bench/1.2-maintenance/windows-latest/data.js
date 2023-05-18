window.BENCHMARK_DATA = {
  "lastUpdate": 1684395711724,
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
          "id": "245e9e7454eb1a52376e4c89e6a452f9da3ba9ef",
          "message": "Merge pull request #3174 from greymistcube/fix/tx-query\n\nFixed query for tx with actions",
          "timestamp": "2023-05-17T21:46:43+09:00",
          "tree_id": "167fa81d6a573d9aa9ff1c65d7b794d44324b59d",
          "url": "https://github.com/planetarium/libplanet/commit/245e9e7454eb1a52376e4c89e6a452f9da3ba9ef"
        },
        "date": 1684328592980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1127049.4845360825,
            "unit": "ns",
            "range": "± 97094.9075257805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2091736.8421052631,
            "unit": "ns",
            "range": "± 89973.48941211785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1795386.4583333333,
            "unit": "ns",
            "range": "± 124858.19377011301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4463273.80952381,
            "unit": "ns",
            "range": "± 161000.00312001785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32778.88888888889,
            "unit": "ns",
            "range": "± 1843.3905281304335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7033473.333333333,
            "unit": "ns",
            "range": "± 97412.88757996382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17119978.57142857,
            "unit": "ns",
            "range": "± 200461.98250184854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42285714.28571428,
            "unit": "ns",
            "range": "± 218637.2860633402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 85198226.66666667,
            "unit": "ns",
            "range": "± 178020.85939842102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 173075876.92307693,
            "unit": "ns",
            "range": "± 1686836.4167645532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862540.345982143,
            "unit": "ns",
            "range": "± 10765.389286205274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1484431.0611979167,
            "unit": "ns",
            "range": "± 4130.759490588522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1041111.5559895834,
            "unit": "ns",
            "range": "± 3434.0367794498984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545409.2447916665,
            "unit": "ns",
            "range": "± 7692.670415367979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808996.19140625,
            "unit": "ns",
            "range": "± 1524.5474560813168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721293.4895833334,
            "unit": "ns",
            "range": "± 2054.4112678985043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2649404.761904762,
            "unit": "ns",
            "range": "± 95551.2656484209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2799508.695652174,
            "unit": "ns",
            "range": "± 96197.71959895229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3569807.6923076925,
            "unit": "ns",
            "range": "± 48370.022767868344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3577696.7391304346,
            "unit": "ns",
            "range": "± 196433.5972310185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5959252.94117647,
            "unit": "ns",
            "range": "± 190793.64743140235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203202.32558139536,
            "unit": "ns",
            "range": "± 7355.674465598231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188201.7857142857,
            "unit": "ns",
            "range": "± 8043.732536384034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161677.77777777778,
            "unit": "ns",
            "range": "± 2559.998978757966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3543400,
            "unit": "ns",
            "range": "± 32635.607197398018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3266466.6666666665,
            "unit": "ns",
            "range": "± 41360.77622003496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9901.063829787234,
            "unit": "ns",
            "range": "± 1078.080201382593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52530,
            "unit": "ns",
            "range": "± 4040.120423169075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41127.27272727273,
            "unit": "ns",
            "range": "± 1301.2668652299783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62180.61224489796,
            "unit": "ns",
            "range": "± 11144.122931390859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2620.408163265306,
            "unit": "ns",
            "range": "± 628.8935110017412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9105.263157894737,
            "unit": "ns",
            "range": "± 1092.2715371473626"
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
          "id": "df50e75dd453cd8272f07fa3032f5ff5003f68d1",
          "message": "Merge pull request #3175 from greymistcube/release/1.2.1\n\n🚀 Release 1.2.1",
          "timestamp": "2023-05-17T22:08:02+09:00",
          "tree_id": "b2d3ed91786a1c1441663fba400fbb99f721c2ca",
          "url": "https://github.com/planetarium/libplanet/commit/df50e75dd453cd8272f07fa3032f5ff5003f68d1"
        },
        "date": 1684329856689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390821.0526315789,
            "unit": "ns",
            "range": "± 106857.79862293511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2635780.3921568627,
            "unit": "ns",
            "range": "± 101668.43958595577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224825,
            "unit": "ns",
            "range": "± 156366.94758797268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5461315.7894736845,
            "unit": "ns",
            "range": "± 277388.5294685088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51282.97872340425,
            "unit": "ns",
            "range": "± 3489.481530884086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6926200,
            "unit": "ns",
            "range": "± 84099.39555866815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19794990,
            "unit": "ns",
            "range": "± 308389.73672008887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49525520,
            "unit": "ns",
            "range": "± 582647.4886241251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101850873.33333333,
            "unit": "ns",
            "range": "± 1292935.8217785193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203318420,
            "unit": "ns",
            "range": "± 1866024.4709006364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4792771.5625,
            "unit": "ns",
            "range": "± 19398.97918891935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521059.1796875,
            "unit": "ns",
            "range": "± 4288.408356435823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165611.8582589286,
            "unit": "ns",
            "range": "± 4451.455097414612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652366.6927083335,
            "unit": "ns",
            "range": "± 8809.441974753696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846623.80859375,
            "unit": "ns",
            "range": "± 2941.7984934031592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758301.0393415178,
            "unit": "ns",
            "range": "± 2518.7909524648767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3263396.153846154,
            "unit": "ns",
            "range": "± 86979.76997334142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503393.75,
            "unit": "ns",
            "range": "± 67067.16999893963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4178212,
            "unit": "ns",
            "range": "± 110974.22868996808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4317435.714285715,
            "unit": "ns",
            "range": "± 156494.27609173872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6675048.780487805,
            "unit": "ns",
            "range": "± 193773.4193871172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272012.6984126984,
            "unit": "ns",
            "range": "± 11737.800696117294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261910.3448275862,
            "unit": "ns",
            "range": "± 11450.72876950162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243360,
            "unit": "ns",
            "range": "± 11771.082227713567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066076.923076923,
            "unit": "ns",
            "range": "± 33655.76111767875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685878.5714285714,
            "unit": "ns",
            "range": "± 47491.443416706104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19945.454545454544,
            "unit": "ns",
            "range": "± 1405.9732254043154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93060.82474226804,
            "unit": "ns",
            "range": "± 7004.248066665075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82234.78260869565,
            "unit": "ns",
            "range": "± 5698.649054918436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98960.86956521739,
            "unit": "ns",
            "range": "± 14310.646590177317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5675,
            "unit": "ns",
            "range": "± 879.3538297492863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20438.709677419356,
            "unit": "ns",
            "range": "± 1594.7626413319126"
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
          "id": "d1ef3e2666d17ac1b606684761befda11ca1df2a",
          "message": "Merge pull request #3177 from greymistcube/prepare/1.2.2\n\n🔧 Prepare 1.2.2",
          "timestamp": "2023-05-18T16:25:54+09:00",
          "tree_id": "02032a856fc0fc2cfdbf33544da2b4656195e77b",
          "url": "https://github.com/planetarium/libplanet/commit/d1ef3e2666d17ac1b606684761befda11ca1df2a"
        },
        "date": 1684395658533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392161.4583333333,
            "unit": "ns",
            "range": "± 113130.93519857206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2624775,
            "unit": "ns",
            "range": "± 132093.71837197003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2229414.285714286,
            "unit": "ns",
            "range": "± 162382.96086529965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5410396.0784313725,
            "unit": "ns",
            "range": "± 220952.13595779907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51300,
            "unit": "ns",
            "range": "± 3367.491648096547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7454406.666666667,
            "unit": "ns",
            "range": "± 116437.36186506134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19800521.42857143,
            "unit": "ns",
            "range": "± 232550.9842480252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50269930,
            "unit": "ns",
            "range": "± 740830.2660818179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101341200,
            "unit": "ns",
            "range": "± 661509.9999244154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203359280,
            "unit": "ns",
            "range": "± 3134953.3086520717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4801921.614583333,
            "unit": "ns",
            "range": "± 29080.605290503066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532799.9479166667,
            "unit": "ns",
            "range": "± 8145.870907450736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185234.7005208333,
            "unit": "ns",
            "range": "± 5784.015002280899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664755.7291666665,
            "unit": "ns",
            "range": "± 15765.518163082925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822259.9348958334,
            "unit": "ns",
            "range": "± 2996.686926504055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759340.625,
            "unit": "ns",
            "range": "± 1948.8758640686383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3077386.567164179,
            "unit": "ns",
            "range": "± 144161.86808849408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245367.1641791044,
            "unit": "ns",
            "range": "± 153704.8148809719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4121917.3913043477,
            "unit": "ns",
            "range": "± 157804.69969673528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4191915,
            "unit": "ns",
            "range": "± 89880.13231082009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6794312.328767124,
            "unit": "ns",
            "range": "± 337982.3585736414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269866.6666666667,
            "unit": "ns",
            "range": "± 11352.582616985075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254813.9534883721,
            "unit": "ns",
            "range": "± 8530.354243617008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242625.25252525252,
            "unit": "ns",
            "range": "± 16814.97354725139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4016000,
            "unit": "ns",
            "range": "± 81353.68000281241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3628155.5555555555,
            "unit": "ns",
            "range": "± 75874.85417931309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21998.989898989897,
            "unit": "ns",
            "range": "± 3475.4678131591277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98027.27272727272,
            "unit": "ns",
            "range": "± 8566.663177474029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79891.39784946236,
            "unit": "ns",
            "range": "± 5179.551262961638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93339.28571428571,
            "unit": "ns",
            "range": "± 8688.671725362787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5357.142857142857,
            "unit": "ns",
            "range": "± 816.0755978727088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18460.227272727272,
            "unit": "ns",
            "range": "± 1149.8665362561308"
          }
        ]
      }
    ]
  }
}