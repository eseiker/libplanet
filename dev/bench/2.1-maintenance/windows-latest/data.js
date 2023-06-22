window.BENCHMARK_DATA = {
  "lastUpdate": 1687434753844,
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
          "id": "278c0421ae8276ff3ea9dac2efaba18de37a6531",
          "message": "Merge pull request #3224 from greymistcube/release/2.1.0\n\n🚀 Release 2.1.0",
          "timestamp": "2023-06-20T17:11:44+09:00",
          "tree_id": "3c8b47900f776e7c6b705a66d3eb009253049fe9",
          "url": "https://github.com/planetarium/libplanet/commit/278c0421ae8276ff3ea9dac2efaba18de37a6531"
        },
        "date": 1687250446097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671526.8817204302,
            "unit": "ns",
            "range": "± 235986.81343953215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3095778.125,
            "unit": "ns",
            "range": "± 313560.2652401927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2438021.649484536,
            "unit": "ns",
            "range": "± 315016.7069732189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608585,
            "unit": "ns",
            "range": "± 775840.1180414855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60184.21052631579,
            "unit": "ns",
            "range": "± 13336.929339639102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8409950,
            "unit": "ns",
            "range": "± 584023.1761803546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22059865.979381442,
            "unit": "ns",
            "range": "± 1894282.3531115176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52312536,
            "unit": "ns",
            "range": "± 5570309.550590342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103941559.59595959,
            "unit": "ns",
            "range": "± 9968626.491658095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208273816.16161618,
            "unit": "ns",
            "range": "± 18397648.264737576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5315662.375,
            "unit": "ns",
            "range": "± 139796.81792536227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1694646.974609375,
            "unit": "ns",
            "range": "± 104284.71732514747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1287465.203125,
            "unit": "ns",
            "range": "± 84214.85647906674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3012974.75,
            "unit": "ns",
            "range": "± 199989.4966319083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952550.415319684,
            "unit": "ns",
            "range": "± 52132.16419765197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876033.984375,
            "unit": "ns",
            "range": "± 45417.89737335699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283059.793814433,
            "unit": "ns",
            "range": "± 308870.05920093704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3571922.1052631577,
            "unit": "ns",
            "range": "± 345251.29089963034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4771443.298969072,
            "unit": "ns",
            "range": "± 586413.9115042124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436315.555555556,
            "unit": "ns",
            "range": "± 356406.22477543325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8423465.263157895,
            "unit": "ns",
            "range": "± 610897.0494748774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296129.797979798,
            "unit": "ns",
            "range": "± 43707.63249976235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289620.21276595746,
            "unit": "ns",
            "range": "± 39278.83935988461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231492.78350515463,
            "unit": "ns",
            "range": "± 37612.171809310064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872096.8421052634,
            "unit": "ns",
            "range": "± 397461.03875769646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935133.3333333335,
            "unit": "ns",
            "range": "± 469809.4343043821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28909,
            "unit": "ns",
            "range": "± 8335.261534498173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97548.3870967742,
            "unit": "ns",
            "range": "± 14517.28814134934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103356.3829787234,
            "unit": "ns",
            "range": "± 26724.852750172766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122701.05263157895,
            "unit": "ns",
            "range": "± 21023.560717993463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6480,
            "unit": "ns",
            "range": "± 1858.064717490223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27687.628865979383,
            "unit": "ns",
            "range": "± 7897.550486964809"
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
          "id": "b063502fb1ce9ba870cf2ad0f32e179686dd9a48",
          "message": "Merge pull request #3226 from greymistcube/prepare/2.1.1\n\n🔧 Prepare 2.1.1",
          "timestamp": "2023-06-20T18:07:46+09:00",
          "tree_id": "d623fe48c67fa1f2775ded58df2ab190f7f15808",
          "url": "https://github.com/planetarium/libplanet/commit/b063502fb1ce9ba870cf2ad0f32e179686dd9a48"
        },
        "date": 1687253153025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334302.06185567,
            "unit": "ns",
            "range": "± 93058.26353619076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606008.3333333335,
            "unit": "ns",
            "range": "± 116328.90293556495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185528.947368421,
            "unit": "ns",
            "range": "± 102246.9465764652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5433838.888888889,
            "unit": "ns",
            "range": "± 265852.3891796928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46185,
            "unit": "ns",
            "range": "± 2428.1106891958902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7153769.230769231,
            "unit": "ns",
            "range": "± 76476.569228919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19628500,
            "unit": "ns",
            "range": "± 351584.00743736094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49136487.5,
            "unit": "ns",
            "range": "± 1261219.2714617557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97071450,
            "unit": "ns",
            "range": "± 1339184.4910817351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194617047.82608697,
            "unit": "ns",
            "range": "± 4151030.402077577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5218362.324617347,
            "unit": "ns",
            "range": "± 382708.9427937981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1591826.796875,
            "unit": "ns",
            "range": "± 28750.69680237425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261161.23046875,
            "unit": "ns",
            "range": "± 23226.65322630034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2782763.720703125,
            "unit": "ns",
            "range": "± 75090.35897292425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870157.6888020834,
            "unit": "ns",
            "range": "± 13263.949266450714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802852.5260416666,
            "unit": "ns",
            "range": "± 11367.56739365536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3106369.565217391,
            "unit": "ns",
            "range": "± 78170.80037725439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3299658.9743589745,
            "unit": "ns",
            "range": "± 114108.98695625835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043125,
            "unit": "ns",
            "range": "± 100868.12419322999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4097647.3684210526,
            "unit": "ns",
            "range": "± 139650.35438327433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6493618.181818182,
            "unit": "ns",
            "range": "± 205389.9971008591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251537.2093023256,
            "unit": "ns",
            "range": "± 9244.200839955569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242338.88888888888,
            "unit": "ns",
            "range": "± 8106.638471128912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218400,
            "unit": "ns",
            "range": "± 8148.191410111446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4017963.6363636362,
            "unit": "ns",
            "range": "± 96650.69430664588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3616080.769230769,
            "unit": "ns",
            "range": "± 96929.85512928726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17298.88888888889,
            "unit": "ns",
            "range": "± 1714.2820061192879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79871.57894736843,
            "unit": "ns",
            "range": "± 5712.726799034164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69268.08510638298,
            "unit": "ns",
            "range": "± 2663.203888011803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89739.79591836735,
            "unit": "ns",
            "range": "± 13988.675388798576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5532.98969072165,
            "unit": "ns",
            "range": "± 1176.5700192973127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17755.434782608696,
            "unit": "ns",
            "range": "± 1733.2155297662864"
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
          "id": "16f70677d09f762b695d209a74e0bfa26b056fe3",
          "message": "Merge pull request #3234 from moreal/port-2.0.1\n\nPort 2.0.1 to 2.1.1",
          "timestamp": "2023-06-22T20:27:53+09:00",
          "tree_id": "b7a983c6a93a1a0c54a5a7ccee3fcfc781203e0c",
          "url": "https://github.com/planetarium/libplanet/commit/16f70677d09f762b695d209a74e0bfa26b056fe3"
        },
        "date": 1687434676111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2001578.7878787878,
            "unit": "ns",
            "range": "± 166811.58151977343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3976388.1720430106,
            "unit": "ns",
            "range": "± 249175.44231771905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3145846.6666666665,
            "unit": "ns",
            "range": "± 203064.50859686284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7939112.5,
            "unit": "ns",
            "range": "± 500913.8972654724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81257.14285714286,
            "unit": "ns",
            "range": "± 25617.052954269653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9434767.213114753,
            "unit": "ns",
            "range": "± 421747.6882850343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25134557.14285714,
            "unit": "ns",
            "range": "± 904190.4499748844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63798384,
            "unit": "ns",
            "range": "± 1618296.6911437057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129526566.66666667,
            "unit": "ns",
            "range": "± 4159615.3610977903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240911253.125,
            "unit": "ns",
            "range": "± 7261417.309490658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6202757.331730769,
            "unit": "ns",
            "range": "± 82258.85602403291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020059.5635775863,
            "unit": "ns",
            "range": "± 58857.4387199191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1438371.7057291667,
            "unit": "ns",
            "range": "± 16803.14848550005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3254142.354910714,
            "unit": "ns",
            "range": "± 34913.20233503492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058045.0613839286,
            "unit": "ns",
            "range": "± 11207.366915043369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 985217.6432291666,
            "unit": "ns",
            "range": "± 10427.195462480104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3705661.224489796,
            "unit": "ns",
            "range": "± 276857.1180984591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3880054.1666666665,
            "unit": "ns",
            "range": "± 248805.95056205493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4995680.645161291,
            "unit": "ns",
            "range": "± 282911.96712591976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4972129.787234043,
            "unit": "ns",
            "range": "± 307334.2388540484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8396050,
            "unit": "ns",
            "range": "± 314980.05215539277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337660.6382978723,
            "unit": "ns",
            "range": "± 32848.75480229523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314631.9587628866,
            "unit": "ns",
            "range": "± 47095.48710331258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260771.27659574468,
            "unit": "ns",
            "range": "± 29288.97870567694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4697230.4878048785,
            "unit": "ns",
            "range": "± 246679.32972452184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4356004.255319149,
            "unit": "ns",
            "range": "± 290671.53021292127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19291.86046511628,
            "unit": "ns",
            "range": "± 1978.2473000868613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104718.75,
            "unit": "ns",
            "range": "± 15988.583509228669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101067.36842105263,
            "unit": "ns",
            "range": "± 18877.99260258483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119231.91489361702,
            "unit": "ns",
            "range": "± 21255.36093169827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6235.106382978724,
            "unit": "ns",
            "range": "± 1243.3658314074373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18050,
            "unit": "ns",
            "range": "± 1513.1949762487907"
          }
        ]
      }
    ]
  }
}