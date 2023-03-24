window.BENCHMARK_DATA = {
  "lastUpdate": 1679619334374,
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679469888178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101832.82857142857,
            "unit": "ns",
            "range": "± 3348.395414538259"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4402345.159635416,
            "unit": "ns",
            "range": "± 42964.66278555664"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5452597.583333333,
            "unit": "ns",
            "range": "± 217777.3375803121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25526996.133333333,
            "unit": "ns",
            "range": "± 322683.53709585994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6698944.714285715,
            "unit": "ns",
            "range": "± 65556.77079322291"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28345433.125,
            "unit": "ns",
            "range": "± 554354.9258374547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5890813.116145833,
            "unit": "ns",
            "range": "± 27799.320339083853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822175.1474609375,
            "unit": "ns",
            "range": "± 3468.6971124858633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338430.9600360577,
            "unit": "ns",
            "range": "± 1315.0861089895488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563176.681510417,
            "unit": "ns",
            "range": "± 2358.351015627408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822965.8002115885,
            "unit": "ns",
            "range": "± 600.6546693847212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746605.1708286831,
            "unit": "ns",
            "range": "± 2173.5859591037633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90082.76842105263,
            "unit": "ns",
            "range": "± 8167.375950972508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196118.58666666667,
            "unit": "ns",
            "range": "± 9911.63612655475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170690.7142857143,
            "unit": "ns",
            "range": "± 2445.2978245092054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3760215.6,
            "unit": "ns",
            "range": "± 34370.732640680544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9483764.8,
            "unit": "ns",
            "range": "± 61482.74731081651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15532.38202247191,
            "unit": "ns",
            "range": "± 1123.9343084331645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47905.08045977011,
            "unit": "ns",
            "range": "± 3177.7361629559373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40508.43820224719,
            "unit": "ns",
            "range": "± 2243.8732541738477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91112.3125,
            "unit": "ns",
            "range": "± 13692.493759500034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5087.693877551021,
            "unit": "ns",
            "range": "± 576.78601882199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15033.954545454546,
            "unit": "ns",
            "range": "± 1093.8792922238324"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470137846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110158.7843137255,
            "unit": "ns",
            "range": "± 4356.882731099039"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5011884.51953125,
            "unit": "ns",
            "range": "± 284685.6939765789"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6313265.153846154,
            "unit": "ns",
            "range": "± 100133.46290147478"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28213629.125,
            "unit": "ns",
            "range": "± 524992.7417302548"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6573279.294736842,
            "unit": "ns",
            "range": "± 403691.0899086786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32047025.30612245,
            "unit": "ns",
            "range": "± 1157138.5940096339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5923498.542668269,
            "unit": "ns",
            "range": "± 35124.48610295226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886084.4194711538,
            "unit": "ns",
            "range": "± 1882.4402854339526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370286.48671875,
            "unit": "ns",
            "range": "± 4901.407475837059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642196.255108173,
            "unit": "ns",
            "range": "± 2619.17436447447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819655.3367745535,
            "unit": "ns",
            "range": "± 691.1978147919352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763645.4968610491,
            "unit": "ns",
            "range": "± 375.4763612481701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100196.47916666667,
            "unit": "ns",
            "range": "± 9792.976918479753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207044.1012658228,
            "unit": "ns",
            "range": "± 10322.599299464551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181976.26923076922,
            "unit": "ns",
            "range": "± 4923.479367745475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3955985.8,
            "unit": "ns",
            "range": "± 49358.14410032626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9841690.285714285,
            "unit": "ns",
            "range": "± 142598.60192778273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18835.935483870966,
            "unit": "ns",
            "range": "± 1553.8155897971853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53126.455555555556,
            "unit": "ns",
            "range": "± 3241.977639475083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41167.2962962963,
            "unit": "ns",
            "range": "± 1133.4145081537679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101069.81914893616,
            "unit": "ns",
            "range": "± 18296.28298108472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6321.561224489796,
            "unit": "ns",
            "range": "± 705.4840710912144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19587.574468085106,
            "unit": "ns",
            "range": "± 2006.817731726868"
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
          "id": "8aa2e534c2706a35f0f5712c365b5c388ee9039f",
          "message": "Merge pull request #2978 from greymistcube/refactor/additional-evaluation-logging\n\n♻️ Added additional metrics to measure evaluation duration",
          "timestamp": "2023-03-22T16:32:51+09:00",
          "tree_id": "31f691be0aaf62e39e260347c1ac0ce65a4cae9f",
          "url": "https://github.com/planetarium/libplanet/commit/8aa2e534c2706a35f0f5712c365b5c388ee9039f"
        },
        "date": 1679470976041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103470.78571428571,
            "unit": "ns",
            "range": "± 1629.824444466403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4374897.129947917,
            "unit": "ns",
            "range": "± 29618.419752480702"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5445007.018518519,
            "unit": "ns",
            "range": "± 165029.22826606804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25557731.583333332,
            "unit": "ns",
            "range": "± 646600.5968861751"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6923152.647058823,
            "unit": "ns",
            "range": "± 135328.63253250456"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27875223.666666668,
            "unit": "ns",
            "range": "± 494296.2624015027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5887920.085416666,
            "unit": "ns",
            "range": "± 34243.129126843705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926762.9625,
            "unit": "ns",
            "range": "± 9617.200971320495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343811.656529018,
            "unit": "ns",
            "range": "± 1042.9213113448584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568562.6676897323,
            "unit": "ns",
            "range": "± 5849.2455763764365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810050.4674729567,
            "unit": "ns",
            "range": "± 701.2572750320936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736106.9455915178,
            "unit": "ns",
            "range": "± 1756.7443217595708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82487.5,
            "unit": "ns",
            "range": "± 4391.516637050801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209506.47252747254,
            "unit": "ns",
            "range": "± 13070.071299083482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199563.2323232323,
            "unit": "ns",
            "range": "± 21349.59985947654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3948885.153846154,
            "unit": "ns",
            "range": "± 14701.503856443587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9552031.92857143,
            "unit": "ns",
            "range": "± 73832.42372318992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15853.244444444445,
            "unit": "ns",
            "range": "± 1089.5884215333676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59836.114583333336,
            "unit": "ns",
            "range": "± 5194.478469074622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46525.72,
            "unit": "ns",
            "range": "± 5638.355190491408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94828.70707070707,
            "unit": "ns",
            "range": "± 24173.05826034875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5135.440860215053,
            "unit": "ns",
            "range": "± 737.8699582370987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14509.866666666667,
            "unit": "ns",
            "range": "± 916.2861679481111"
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
          "id": "f96f3225123873e5c62fdd47de65bfabd23754a6",
          "message": "Merge pull request #2979 from limebell/log/getstate-logging\n\nAdd time measure for `AccountStateDeltaImpl.GetState()` method",
          "timestamp": "2023-03-22T18:06:30+09:00",
          "tree_id": "5419d5b724fb3ad6d51fee9bcfc63f452a315433",
          "url": "https://github.com/planetarium/libplanet/commit/f96f3225123873e5c62fdd47de65bfabd23754a6"
        },
        "date": 1679476719721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108111.37288135593,
            "unit": "ns",
            "range": "± 4790.436348631133"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5179968.491927084,
            "unit": "ns",
            "range": "± 29890.157963750185"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5951209.533333333,
            "unit": "ns",
            "range": "± 96912.59822855605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27839625.09090909,
            "unit": "ns",
            "range": "± 663577.8078879823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6957839.944444444,
            "unit": "ns",
            "range": "± 146768.45164627102"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30897109.777777776,
            "unit": "ns",
            "range": "± 631050.5760170709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5897009.569754465,
            "unit": "ns",
            "range": "± 10431.206192895643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826191.3863002232,
            "unit": "ns",
            "range": "± 2126.905043763411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360442.7543247768,
            "unit": "ns",
            "range": "± 2348.6428846121757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673645.961197917,
            "unit": "ns",
            "range": "± 2885.9827061008245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835025.5359933035,
            "unit": "ns",
            "range": "± 1087.1469184045184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765225.9694661458,
            "unit": "ns",
            "range": "± 441.79889419970664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97819.57731958762,
            "unit": "ns",
            "range": "± 8063.618482928756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203052.1896551724,
            "unit": "ns",
            "range": "± 8910.01359491923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185912.1012658228,
            "unit": "ns",
            "range": "± 9620.285288955616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3967302.466666667,
            "unit": "ns",
            "range": "± 58526.69230343496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9946018.733333332,
            "unit": "ns",
            "range": "± 179574.23173219906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19193.947916666668,
            "unit": "ns",
            "range": "± 2070.6256434115535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52132.05617977528,
            "unit": "ns",
            "range": "± 3459.289530181906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40921.42105263158,
            "unit": "ns",
            "range": "± 1403.368315423288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98827.36842105263,
            "unit": "ns",
            "range": "± 15276.877938015827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5929.1875,
            "unit": "ns",
            "range": "± 700.685518654861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19113.51111111111,
            "unit": "ns",
            "range": "± 1859.1673456083186"
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
          "id": "7944e4a33f6c9e7c3358b07f63623d18f1032d57",
          "message": "Merge pull request #2981 from greymistcube/chore/more-logging\n\n🔧 Added logging info",
          "timestamp": "2023-03-23T11:54:01+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/planetarium/libplanet/commit/7944e4a33f6c9e7c3358b07f63623d18f1032d57"
        },
        "date": 1679540783709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100813.54,
            "unit": "ns",
            "range": "± 3535.8275780406284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4362257.770572917,
            "unit": "ns",
            "range": "± 36902.73529238804"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6027300.642857143,
            "unit": "ns",
            "range": "± 49572.92704476622"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24638684.307692308,
            "unit": "ns",
            "range": "± 397534.5960190938"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6155543.939393939,
            "unit": "ns",
            "range": "± 172264.66650675557"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27714582.714285713,
            "unit": "ns",
            "range": "± 351560.45514477935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5962596.2890625,
            "unit": "ns",
            "range": "± 31428.675803184055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827924.3731971155,
            "unit": "ns",
            "range": "± 2901.499014658912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335306.8025841345,
            "unit": "ns",
            "range": "± 3086.8320733543665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553139.999441964,
            "unit": "ns",
            "range": "± 5461.105302598777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811580.0397135416,
            "unit": "ns",
            "range": "± 1143.1515045059573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731803.6210239956,
            "unit": "ns",
            "range": "± 885.2816026243077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84016.02173913043,
            "unit": "ns",
            "range": "± 5499.343826948334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190173.59677419355,
            "unit": "ns",
            "range": "± 8254.050982495128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167851.85714285713,
            "unit": "ns",
            "range": "± 3791.850066731467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3715033.6666666665,
            "unit": "ns",
            "range": "± 41554.67769211113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9410005.933333334,
            "unit": "ns",
            "range": "± 60885.70749652484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14528.7,
            "unit": "ns",
            "range": "± 771.5274083090968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44058.12727272727,
            "unit": "ns",
            "range": "± 1879.3486367133953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37125.57142857143,
            "unit": "ns",
            "range": "± 1179.879337941317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76598.63440860216,
            "unit": "ns",
            "range": "± 9286.789269177349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4123.947916666667,
            "unit": "ns",
            "range": "± 578.1653809984543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13697.782608695652,
            "unit": "ns",
            "range": "± 979.4501241146916"
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
          "id": "4ac5b5442c64be640ce105c95625a639758a24c6",
          "message": "Merge pull request #2983 from greymistcube/refactor/state-caching\n\n🔧 Added state caching",
          "timestamp": "2023-03-23T18:20:56+09:00",
          "tree_id": "d4cdb454c29ceb38ec313af5f3988a6cad100edc",
          "url": "https://github.com/planetarium/libplanet/commit/4ac5b5442c64be640ce105c95625a639758a24c6"
        },
        "date": 1679563830646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103507.35714285714,
            "unit": "ns",
            "range": "± 1395.8026423830543"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4427975.544270833,
            "unit": "ns",
            "range": "± 44499.08630778063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6133701.142857143,
            "unit": "ns",
            "range": "± 63731.662169608426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25502989.733333334,
            "unit": "ns",
            "range": "± 383232.7410795591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6783186.076923077,
            "unit": "ns",
            "range": "± 47034.492105017176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28739271.214285713,
            "unit": "ns",
            "range": "± 471167.11602657154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910702.571354167,
            "unit": "ns",
            "range": "± 39421.48773289945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995494.9033854166,
            "unit": "ns",
            "range": "± 4343.982256052345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348052.1587239583,
            "unit": "ns",
            "range": "± 4028.352051764334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578446.3270833334,
            "unit": "ns",
            "range": "± 890.1582050457433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792876.746233259,
            "unit": "ns",
            "range": "± 454.07575155315834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745304.6506510417,
            "unit": "ns",
            "range": "± 589.050865124984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88729.60869565218,
            "unit": "ns",
            "range": "± 6262.117018986789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194202.01612903227,
            "unit": "ns",
            "range": "± 8491.570915107108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170933.6,
            "unit": "ns",
            "range": "± 2440.984426707506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3825073.785714286,
            "unit": "ns",
            "range": "± 24816.896301259603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9560393.538461538,
            "unit": "ns",
            "range": "± 42272.50302228661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16029.958762886597,
            "unit": "ns",
            "range": "± 2389.1363193523416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47311.8023255814,
            "unit": "ns",
            "range": "± 2624.406343267514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44329.67346938775,
            "unit": "ns",
            "range": "± 2962.269117630647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88673.91397849462,
            "unit": "ns",
            "range": "± 11715.975733323461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4951.623655913979,
            "unit": "ns",
            "range": "± 616.555613239328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14918.117021276596,
            "unit": "ns",
            "range": "± 1500.0786707425839"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8361ae9a1d1b251f68d46b145a61d4163ecaecab",
          "message": "More logging",
          "timestamp": "2023-03-23T19:37:21+09:00",
          "tree_id": "c7a804c87d04f2578052416c55966df9db654b5d",
          "url": "https://github.com/planetarium/libplanet/commit/8361ae9a1d1b251f68d46b145a61d4163ecaecab"
        },
        "date": 1679568807730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126425.3,
            "unit": "ns",
            "range": "± 7451.224172780854"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5858825.277180989,
            "unit": "ns",
            "range": "± 337761.63514312153"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6846434.02247191,
            "unit": "ns",
            "range": "± 430388.036383896"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35162595.39622641,
            "unit": "ns",
            "range": "± 1453962.6229036096"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7623815.03125,
            "unit": "ns",
            "range": "± 351115.6830814835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39643079.7628866,
            "unit": "ns",
            "range": "± 2611083.3793987725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7081086.000901442,
            "unit": "ns",
            "range": "± 31495.39652917896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2183688.2899739584,
            "unit": "ns",
            "range": "± 9142.39991921974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1594143.398046875,
            "unit": "ns",
            "range": "± 7042.846780756561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118996.486458333,
            "unit": "ns",
            "range": "± 14279.629948650243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002648.9764322917,
            "unit": "ns",
            "range": "± 4487.799064506541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893052.6505859375,
            "unit": "ns",
            "range": "± 3418.991989656117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114382.10309278351,
            "unit": "ns",
            "range": "± 12453.778933256677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244168.9,
            "unit": "ns",
            "range": "± 12127.243173005776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212173.97,
            "unit": "ns",
            "range": "± 12808.386554535438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4662054.7727272725,
            "unit": "ns",
            "range": "± 112872.45177419207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11784487.533333333,
            "unit": "ns",
            "range": "± 203189.16120131811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22682.58510638298,
            "unit": "ns",
            "range": "± 2299.858235039971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62459.125,
            "unit": "ns",
            "range": "± 7094.159602688754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47450.69014084507,
            "unit": "ns",
            "range": "± 2340.7224806001936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111967.14285714286,
            "unit": "ns",
            "range": "± 15459.532710755542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6910.677083333333,
            "unit": "ns",
            "range": "± 825.9137267904421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21163.404494382023,
            "unit": "ns",
            "range": "± 1772.8298239044339"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "57902588f81bc45ac7d3c895aaeeb0004042e7c6",
          "message": "Even more logging",
          "timestamp": "2023-03-23T20:14:42+09:00",
          "tree_id": "8ffc356651c118f2d476bd744f639d6cffea2f23",
          "url": "https://github.com/planetarium/libplanet/commit/57902588f81bc45ac7d3c895aaeeb0004042e7c6"
        },
        "date": 1679571183575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107543.03225806452,
            "unit": "ns",
            "range": "± 3226.5835335420547"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4876363.287560096,
            "unit": "ns",
            "range": "± 132103.07753582718"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6049768.357142857,
            "unit": "ns",
            "range": "± 54339.110756302536"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27087834.06451613,
            "unit": "ns",
            "range": "± 824250.7076887846"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6749515.928571428,
            "unit": "ns",
            "range": "± 110562.28218621972"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29027262.846153848,
            "unit": "ns",
            "range": "± 389593.2525457044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5972738.017857143,
            "unit": "ns",
            "range": "± 45604.11740828173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814858.0763020834,
            "unit": "ns",
            "range": "± 13276.162913210717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337748.4690104167,
            "unit": "ns",
            "range": "± 11394.605538294149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601890.523177083,
            "unit": "ns",
            "range": "± 2901.757963136761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821186.9154897836,
            "unit": "ns",
            "range": "± 573.1222464749583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772005.3195963542,
            "unit": "ns",
            "range": "± 487.95215897563867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88820.92631578947,
            "unit": "ns",
            "range": "± 8113.671739123883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196441.3818181818,
            "unit": "ns",
            "range": "± 7926.807230533216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170124.42352941175,
            "unit": "ns",
            "range": "± 9084.145156438733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3678696.1333333333,
            "unit": "ns",
            "range": "± 36184.808576186195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9339594.266666668,
            "unit": "ns",
            "range": "± 158416.45735775356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16506.760869565216,
            "unit": "ns",
            "range": "± 1260.1256554260658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47754.82608695652,
            "unit": "ns",
            "range": "± 4036.0192841126977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39575.625,
            "unit": "ns",
            "range": "± 741.5705742993492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81119.94382022473,
            "unit": "ns",
            "range": "± 9992.063826265903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5123.03125,
            "unit": "ns",
            "range": "± 443.3044445887107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15645.86170212766,
            "unit": "ns",
            "range": "± 1219.0190891892648"
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
          "id": "fda564fa603611e27aef86aea50d932277227ee3",
          "message": "Merge pull request #2985 from greymistcube/refactor/account-state-delta-caching\n\n🔧 Added caching to `AccountStateDeltaImpl`",
          "timestamp": "2023-03-24T09:44:57+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/planetarium/libplanet/commit/fda564fa603611e27aef86aea50d932277227ee3"
        },
        "date": 1679619313223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100989.46666666666,
            "unit": "ns",
            "range": "± 3019.850918144154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4290635.788020833,
            "unit": "ns",
            "range": "± 17920.689615562802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6016716.615384615,
            "unit": "ns",
            "range": "± 40918.799425485064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24290302.42857143,
            "unit": "ns",
            "range": "± 218862.39480786317"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6788410.3125,
            "unit": "ns",
            "range": "± 129183.90075068371"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28154191.230769232,
            "unit": "ns",
            "range": "± 369899.3390133668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6206909.053125,
            "unit": "ns",
            "range": "± 38978.58957089865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882130.2359095982,
            "unit": "ns",
            "range": "± 13200.662336149659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372857.678013393,
            "unit": "ns",
            "range": "± 2802.6444257393223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537895.2391183036,
            "unit": "ns",
            "range": "± 6395.938939356268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805666.9236188616,
            "unit": "ns",
            "range": "± 1653.503817337627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751996.7401041667,
            "unit": "ns",
            "range": "± 3699.0826538609026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80390.8875,
            "unit": "ns",
            "range": "± 3881.524537345989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189155.41666666666,
            "unit": "ns",
            "range": "± 14024.675721303482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168765.88888888888,
            "unit": "ns",
            "range": "± 3593.2687869352885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3720495.6,
            "unit": "ns",
            "range": "± 38793.63960165193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9204849,
            "unit": "ns",
            "range": "± 44959.79275233965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14305.290322580646,
            "unit": "ns",
            "range": "± 1181.6127757235686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44867.80412371134,
            "unit": "ns",
            "range": "± 4570.910598646199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37199.8,
            "unit": "ns",
            "range": "± 856.4431710645827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74588.20833333333,
            "unit": "ns",
            "range": "± 9127.312675258245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3906.1020408163267,
            "unit": "ns",
            "range": "± 377.12084775337604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13617.282608695652,
            "unit": "ns",
            "range": "± 868.4287355363178"
          }
        ]
      }
    ]
  }
}