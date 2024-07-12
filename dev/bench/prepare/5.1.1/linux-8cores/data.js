window.BENCHMARK_DATA = {
  "lastUpdate": 1720761918936,
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
          "id": "cf3de69ec4b049161de30270cdf1e4b69413655d",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T13:46:38+09:00",
          "tree_id": "7bf03099fdc240cac41d733e2dfddd3315502ca9",
          "url": "https://github.com/planetarium/libplanet/commit/cf3de69ec4b049161de30270cdf1e4b69413655d"
        },
        "date": 1720673752288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3655259.836237981,
            "unit": "ns",
            "range": "± 3519.991863814423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199577.756640625,
            "unit": "ns",
            "range": "± 2536.2150622636277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758862.5405970982,
            "unit": "ns",
            "range": "± 744.1538808894488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000824.5630208333,
            "unit": "ns",
            "range": "± 1815.6476571872834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618767.3420758928,
            "unit": "ns",
            "range": "± 458.12340301312645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586511.1123744419,
            "unit": "ns",
            "range": "± 705.9900537662709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463679.3,
            "unit": "ns",
            "range": "± 43317.27632777877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581786.5384615385,
            "unit": "ns",
            "range": "± 61741.64380852248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039887.8181818184,
            "unit": "ns",
            "range": "± 71008.53805714483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638639.1875,
            "unit": "ns",
            "range": "± 48270.36003210631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324051.1666666665,
            "unit": "ns",
            "range": "± 52834.500612311844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015853.421686747,
            "unit": "ns",
            "range": "± 53918.45861658422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1956557.8333333333,
            "unit": "ns",
            "range": "± 70648.24225832555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1744282.6948051949,
            "unit": "ns",
            "range": "± 88951.95395742092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8375960.382352941,
            "unit": "ns",
            "range": "± 262418.2710509976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204685.81818181818,
            "unit": "ns",
            "range": "± 8619.946272692641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196116.156626506,
            "unit": "ns",
            "range": "± 10377.352880991975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170121.82352941178,
            "unit": "ns",
            "range": "± 3438.640578689748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141446.8571428573,
            "unit": "ns",
            "range": "± 38741.87862211034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851428.653846154,
            "unit": "ns",
            "range": "± 26502.58631984859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13195.445054945056,
            "unit": "ns",
            "range": "± 831.1405999874491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59929.425287356324,
            "unit": "ns",
            "range": "± 3239.532652312618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52076.57777777778,
            "unit": "ns",
            "range": "± 1973.0269832842316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56650.36734693877,
            "unit": "ns",
            "range": "± 8550.218319257352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2943.0208333333335,
            "unit": "ns",
            "range": "± 329.432461864074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12059.01052631579,
            "unit": "ns",
            "range": "± 1236.0261951945706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10597009.357142856,
            "unit": "ns",
            "range": "± 91522.40081288813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27637189.1,
            "unit": "ns",
            "range": "± 173092.2484774273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69093373.36666666,
            "unit": "ns",
            "range": "± 443696.95366494503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140337722.57142857,
            "unit": "ns",
            "range": "± 537486.468795364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287310315.6,
            "unit": "ns",
            "range": "± 636108.7044985539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32325.071428571428,
            "unit": "ns",
            "range": "± 374.5416612927807"
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
          "id": "48f1ba1f05a55879e3053e45c3e42173b0313d1a",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T17:53:17+09:00",
          "tree_id": "778cbdea0edb67bbd929081380c5f93ec173bb0d",
          "url": "https://github.com/planetarium/libplanet/commit/48f1ba1f05a55879e3053e45c3e42173b0313d1a"
        },
        "date": 1720688888385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707453.28515625,
            "unit": "ns",
            "range": "± 8622.454897404124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211452.54453125,
            "unit": "ns",
            "range": "± 4874.589013353394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763847.80078125,
            "unit": "ns",
            "range": "± 1042.7180235823753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928523.7569754464,
            "unit": "ns",
            "range": "± 2688.6001348509667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631006.4103816106,
            "unit": "ns",
            "range": "± 956.3959094418454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571082.4989583333,
            "unit": "ns",
            "range": "± 1124.2849757593044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470052.3181818184,
            "unit": "ns",
            "range": "± 77499.18158174904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546632.222222222,
            "unit": "ns",
            "range": "± 51823.29160522953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3109248.6875,
            "unit": "ns",
            "range": "± 59075.68508302859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2732255.375,
            "unit": "ns",
            "range": "± 63396.825279046556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3310687.285714286,
            "unit": "ns",
            "range": "± 33549.572360403254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1147118.2210526315,
            "unit": "ns",
            "range": "± 82649.11044702576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2016366.537037037,
            "unit": "ns",
            "range": "± 84646.5565205202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774326.9516129033,
            "unit": "ns",
            "range": "± 80430.23728111201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8451505.818181818,
            "unit": "ns",
            "range": "± 201012.86204296345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210254.8409090909,
            "unit": "ns",
            "range": "± 11061.288391094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202170.7373737374,
            "unit": "ns",
            "range": "± 14617.034571520226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168023.94,
            "unit": "ns",
            "range": "± 4467.044418852358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3129257.6666666665,
            "unit": "ns",
            "range": "± 45548.08791135971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807271.9615384615,
            "unit": "ns",
            "range": "± 29894.791958955506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16065.285714285714,
            "unit": "ns",
            "range": "± 4808.43882759913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75220.82,
            "unit": "ns",
            "range": "± 15353.812215968785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51412.3870967742,
            "unit": "ns",
            "range": "± 1420.1100351127575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66303.82653061225,
            "unit": "ns",
            "range": "± 11582.945798083956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3129.1382978723404,
            "unit": "ns",
            "range": "± 548.6858562420597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17057,
            "unit": "ns",
            "range": "± 4053.129642509588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10778730.266666668,
            "unit": "ns",
            "range": "± 111712.06825487099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28006248.07142857,
            "unit": "ns",
            "range": "± 119741.51987347535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69395588.73333333,
            "unit": "ns",
            "range": "± 436833.9085112436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139905192.23333332,
            "unit": "ns",
            "range": "± 986636.9923815856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291583496.4,
            "unit": "ns",
            "range": "± 1572519.3354215669"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33277.692307692305,
            "unit": "ns",
            "range": "± 907.333225192631"
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
          "id": "8d2792f6d39c7b0bef1b8bbc957ab350ec35bdc0",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T18:19:26+09:00",
          "tree_id": "d49a20a088b47d1a0e4467a05659cd5619cc06ce",
          "url": "https://github.com/planetarium/libplanet/commit/8d2792f6d39c7b0bef1b8bbc957ab350ec35bdc0"
        },
        "date": 1720690064347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731825.2672991073,
            "unit": "ns",
            "range": "± 5070.641742119184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211056.7361886161,
            "unit": "ns",
            "range": "± 1591.2314884591374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755488.0810546875,
            "unit": "ns",
            "range": "± 983.5694288412611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943310.3180989583,
            "unit": "ns",
            "range": "± 1596.4108824423938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625147.7271484375,
            "unit": "ns",
            "range": "± 926.1484548617398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571786.955078125,
            "unit": "ns",
            "range": "± 363.88659446740866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2412147.714285714,
            "unit": "ns",
            "range": "± 26379.430719869517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507703.1333333333,
            "unit": "ns",
            "range": "± 33480.391361142094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2969834.6428571427,
            "unit": "ns",
            "range": "± 21223.862791342064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2554592.2647058824,
            "unit": "ns",
            "range": "± 51128.46494435537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3262772.9411764704,
            "unit": "ns",
            "range": "± 64486.81930293061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022278.8157894737,
            "unit": "ns",
            "range": "± 45982.5137111085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1910810.9411764706,
            "unit": "ns",
            "range": "± 60445.490367889455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709607.3452380951,
            "unit": "ns",
            "range": "± 91776.7544961317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8171446.357142857,
            "unit": "ns",
            "range": "± 217976.27918188443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202376.7888888889,
            "unit": "ns",
            "range": "± 7617.265345677847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193791.5,
            "unit": "ns",
            "range": "± 8163.533596612368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165837.35714285713,
            "unit": "ns",
            "range": "± 2866.707267047868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3012687.285714286,
            "unit": "ns",
            "range": "± 38232.465159616884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2713393.6923076925,
            "unit": "ns",
            "range": "± 22529.04831317639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12993.708955223881,
            "unit": "ns",
            "range": "± 628.9169993248719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70241.05882352941,
            "unit": "ns",
            "range": "± 3277.989445141381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50471.5,
            "unit": "ns",
            "range": "± 358.0756649343569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51288.15306122449,
            "unit": "ns",
            "range": "± 7334.266303690108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2562.9895833333335,
            "unit": "ns",
            "range": "± 224.20101388529218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12024.605263157895,
            "unit": "ns",
            "range": "± 620.9035798242724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10425191.307692308,
            "unit": "ns",
            "range": "± 37303.8803195785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27012300.933333334,
            "unit": "ns",
            "range": "± 158489.5452277381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68317175.21428572,
            "unit": "ns",
            "range": "± 261989.06531275413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136613057.2142857,
            "unit": "ns",
            "range": "± 433584.2492949241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284026034.4,
            "unit": "ns",
            "range": "± 1218813.8795426595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31849,
            "unit": "ns",
            "range": "± 355.5741835398065"
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
          "id": "2fe886ea91e649a996f7f28310e32a035f71e045",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-12T14:06:44+09:00",
          "tree_id": "d49aae5a54c32de95131bf665075de50510f0082",
          "url": "https://github.com/planetarium/libplanet/commit/2fe886ea91e649a996f7f28310e32a035f71e045"
        },
        "date": 1720761312904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211325.64285714287,
            "unit": "ns",
            "range": "± 8349.358368561425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200928.6875,
            "unit": "ns",
            "range": "± 13761.80113694769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170520.23529411765,
            "unit": "ns",
            "range": "± 5449.8126854595075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072539.2666666666,
            "unit": "ns",
            "range": "± 30348.786208881254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800388.933333333,
            "unit": "ns",
            "range": "± 29193.367699498038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19194.561855670105,
            "unit": "ns",
            "range": "± 2100.290013776039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79096.85,
            "unit": "ns",
            "range": "± 18298.23778531637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52023.74,
            "unit": "ns",
            "range": "± 1392.5262499021937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62143.72448979592,
            "unit": "ns",
            "range": "± 11677.214013810935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3264.896907216495,
            "unit": "ns",
            "range": "± 391.82541511218375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12647.355555555556,
            "unit": "ns",
            "range": "± 726.5327163246933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026763.0280898877,
            "unit": "ns",
            "range": "± 54508.300873288565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1980349.894736842,
            "unit": "ns",
            "range": "± 42407.24212769787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1772305.553846154,
            "unit": "ns",
            "range": "± 77329.62754804727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8382175.076923077,
            "unit": "ns",
            "range": "± 223580.65058603315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733593.877403846,
            "unit": "ns",
            "range": "± 7840.659306168327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207627.525390625,
            "unit": "ns",
            "range": "± 1690.3920472474995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 786819.3744140625,
            "unit": "ns",
            "range": "± 1445.3133929210978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961470.5041666667,
            "unit": "ns",
            "range": "± 3805.24484319273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619261.3862304688,
            "unit": "ns",
            "range": "± 909.9805565605967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580952.6719401042,
            "unit": "ns",
            "range": "± 464.1616585606736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444111.7333333334,
            "unit": "ns",
            "range": "± 39991.38578220255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2597599.804347826,
            "unit": "ns",
            "range": "± 64191.34924047205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3096509.285714286,
            "unit": "ns",
            "range": "± 44125.29751379948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2663857.846153846,
            "unit": "ns",
            "range": "± 28112.05484261794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3399952.4375,
            "unit": "ns",
            "range": "± 64351.609808373614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32751.052631578947,
            "unit": "ns",
            "range": "± 721.5890238205163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10615669.133333333,
            "unit": "ns",
            "range": "± 139767.48900935779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27585922.466666665,
            "unit": "ns",
            "range": "± 230224.37066847473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69396222.5,
            "unit": "ns",
            "range": "± 282196.4583678068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139903129.7857143,
            "unit": "ns",
            "range": "± 504519.77775827405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288613380.73333335,
            "unit": "ns",
            "range": "± 1296638.0185882074"
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
          "id": "02b3865507374ddc0eff61e3c7b446eabe62f1b5",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-12T14:16:49+09:00",
          "tree_id": "f4265a0ab88d83def888e04ed52141f2d5f9bd4a",
          "url": "https://github.com/planetarium/libplanet/commit/02b3865507374ddc0eff61e3c7b446eabe62f1b5"
        },
        "date": 1720761892642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203523.73076923078,
            "unit": "ns",
            "range": "± 9493.999018737491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193234.5849056604,
            "unit": "ns",
            "range": "± 7619.4767749749835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165810.03846153847,
            "unit": "ns",
            "range": "± 2087.0321278226893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3061973.3333333335,
            "unit": "ns",
            "range": "± 50732.94622357161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800749.4375,
            "unit": "ns",
            "range": "± 53862.456499208856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12957.741573033707,
            "unit": "ns",
            "range": "± 805.9725284074498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59500.15,
            "unit": "ns",
            "range": "± 3110.4261342634168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51058.03846153846,
            "unit": "ns",
            "range": "± 754.1968813893596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55323.12244897959,
            "unit": "ns",
            "range": "± 9162.961852063854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2804.9845360824743,
            "unit": "ns",
            "range": "± 417.7798242246861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12145.927710843374,
            "unit": "ns",
            "range": "± 658.348354358207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039027.7872340425,
            "unit": "ns",
            "range": "± 80757.22487334843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1920822.2972972973,
            "unit": "ns",
            "range": "± 64483.85584946603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682775.1125,
            "unit": "ns",
            "range": "± 87133.27394154311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8299693.576923077,
            "unit": "ns",
            "range": "± 222485.5007029758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750474.6975446427,
            "unit": "ns",
            "range": "± 8257.049228729496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221744.5365084135,
            "unit": "ns",
            "range": "± 1148.8059516774993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769783.0826171875,
            "unit": "ns",
            "range": "± 1706.8564521007197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977551.65,
            "unit": "ns",
            "range": "± 6996.624342630349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629258.3423549107,
            "unit": "ns",
            "range": "± 838.7724185379191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565215.7602163461,
            "unit": "ns",
            "range": "± 1145.8024872067583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437048.4285714286,
            "unit": "ns",
            "range": "± 28814.20969087804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2609344.8571428573,
            "unit": "ns",
            "range": "± 36743.679209139846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110066.3,
            "unit": "ns",
            "range": "± 69849.09271090673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2587117,
            "unit": "ns",
            "range": "± 64397.19438393057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3246833.3333333335,
            "unit": "ns",
            "range": "± 65473.3357813189"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31855.071428571428,
            "unit": "ns",
            "range": "± 225.76867476577547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10545568.733333332,
            "unit": "ns",
            "range": "± 97818.98614238347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26873993.166666668,
            "unit": "ns",
            "range": "± 152254.68514990018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69281690.13333334,
            "unit": "ns",
            "range": "± 499268.2552920919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139535214,
            "unit": "ns",
            "range": "± 454782.34594296274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284327477.53846157,
            "unit": "ns",
            "range": "± 794803.0309869878"
          }
        ]
      }
    ]
  }
}