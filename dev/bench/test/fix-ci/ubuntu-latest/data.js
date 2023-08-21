window.BENCHMARK_DATA = {
  "lastUpdate": 1692631367456,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050039ddb74fe85fc58cfa0892c3808a77c22fe3",
          "message": "Merge pull request #3356 from moreal/feature/rocksdb/readonly\n\nfeat(#3354): support rocksdb read-only mode",
          "timestamp": "2023-08-21T13:02:45+09:00",
          "tree_id": "d45cec8ff9a732a463bb60493b2d7699df2cc75a",
          "url": "https://github.com/planetarium/libplanet/commit/050039ddb74fe85fc58cfa0892c3808a77c22fe3"
        },
        "date": 1692591447881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388699.8225806453,
            "unit": "ns",
            "range": "± 150609.4068448194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3665781.8928571427,
            "unit": "ns",
            "range": "± 102745.31239062613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225774.7272727275,
            "unit": "ns",
            "range": "± 98241.47545627986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3999192.205128205,
            "unit": "ns",
            "range": "± 131978.79036444484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6214997.076923077,
            "unit": "ns",
            "range": "± 140852.54817174535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8062681.8,
            "unit": "ns",
            "range": "± 116189.09446931756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22352480.266666666,
            "unit": "ns",
            "range": "± 414516.2981694045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56618941.666666664,
            "unit": "ns",
            "range": "± 640873.1155086859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107688818,
            "unit": "ns",
            "range": "± 2082625.3796042148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218436275,
            "unit": "ns",
            "range": "± 4074314.211193514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47941.4578313253,
            "unit": "ns",
            "range": "± 2335.672427861683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4956039.426339285,
            "unit": "ns",
            "range": "± 33077.815149759124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577445.5559895833,
            "unit": "ns",
            "range": "± 6258.062857622922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082472.1643229167,
            "unit": "ns",
            "range": "± 6148.8014011505975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614134.15,
            "unit": "ns",
            "range": "± 8115.671060707216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851583.1902994792,
            "unit": "ns",
            "range": "± 2177.079938014023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750750.4694661458,
            "unit": "ns",
            "range": "± 2321.2822703050883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284366.2272727273,
            "unit": "ns",
            "range": "± 6810.639645030331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265719.40476190473,
            "unit": "ns",
            "range": "± 8664.878235276703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233895.14285714287,
            "unit": "ns",
            "range": "± 6089.734809735975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299259.1875,
            "unit": "ns",
            "range": "± 84214.94622865845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920432.294117647,
            "unit": "ns",
            "range": "± 78605.43423387207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18528.610526315788,
            "unit": "ns",
            "range": "± 1679.2946042827405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84068.92045454546,
            "unit": "ns",
            "range": "± 4575.087038231392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68670.07692307692,
            "unit": "ns",
            "range": "± 792.1579663108512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79049.82653061225,
            "unit": "ns",
            "range": "± 12652.762984208097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4619.8125,
            "unit": "ns",
            "range": "± 371.8165736941862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17708.55789473684,
            "unit": "ns",
            "range": "± 2036.9565726984338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444793.07,
            "unit": "ns",
            "range": "± 120693.0521831223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729190.65,
            "unit": "ns",
            "range": "± 95030.39693416048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775313.9759036144,
            "unit": "ns",
            "range": "± 93234.06569476107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696099.96,
            "unit": "ns",
            "range": "± 125134.48084909823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "732587ddc261c59e44eb826e936333a84cf1cadd",
          "message": "refactor: add console output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:09:24+09:00",
          "tree_id": "e4b2c411230a697f2aef03ec5700c4eb1e097dff",
          "url": "https://github.com/planetarium/libplanet/commit/732587ddc261c59e44eb826e936333a84cf1cadd"
        },
        "date": 1692591720726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272397.0714285714,
            "unit": "ns",
            "range": "± 93656.97368072356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366158.789473684,
            "unit": "ns",
            "range": "± 48681.400263549156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185455.8571428573,
            "unit": "ns",
            "range": "± 40401.1098588167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3662722.96875,
            "unit": "ns",
            "range": "± 102483.78564483147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5967977.892857143,
            "unit": "ns",
            "range": "± 73273.98864300184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7885250.6,
            "unit": "ns",
            "range": "± 94487.38525387549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19687699.076923076,
            "unit": "ns",
            "range": "± 79278.41709597631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51069052.928571425,
            "unit": "ns",
            "range": "± 267882.4461149573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102374692.26666667,
            "unit": "ns",
            "range": "± 1538493.699604002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204837988.26666668,
            "unit": "ns",
            "range": "± 1737275.596455573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45652.57142857143,
            "unit": "ns",
            "range": "± 2231.1589148959492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5045556.678485577,
            "unit": "ns",
            "range": "± 16672.306674147432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1633048.0044642857,
            "unit": "ns",
            "range": "± 2288.020402698908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059324.4027622768,
            "unit": "ns",
            "range": "± 514.3293640904006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2511573.024939904,
            "unit": "ns",
            "range": "± 3302.316782722729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792307.2255859375,
            "unit": "ns",
            "range": "± 415.3471633722214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742821.7671595982,
            "unit": "ns",
            "range": "± 953.9088287763332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271645.77777777775,
            "unit": "ns",
            "range": "± 5579.358687114239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253583.29545454544,
            "unit": "ns",
            "range": "± 9459.94361205365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215027.07142857142,
            "unit": "ns",
            "range": "± 3663.8671134847023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173318.8666666667,
            "unit": "ns",
            "range": "± 31728.943674431364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745607.933333333,
            "unit": "ns",
            "range": "± 36119.08014266672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18173.347826086956,
            "unit": "ns",
            "range": "± 1356.6437937727187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83625.77631578948,
            "unit": "ns",
            "range": "± 4125.363568943338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68405.65384615384,
            "unit": "ns",
            "range": "± 1835.830688104057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69872.20512820513,
            "unit": "ns",
            "range": "± 3745.0798592528245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4417.670103092783,
            "unit": "ns",
            "range": "± 501.2663904562432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18219.063829787236,
            "unit": "ns",
            "range": "± 1222.5979790849462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301134.3764705881,
            "unit": "ns",
            "range": "± 69872.18836612224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2504902.8387096776,
            "unit": "ns",
            "range": "± 64267.18628719571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681755.9789473685,
            "unit": "ns",
            "range": "± 119262.1784239458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4429202.8125,
            "unit": "ns",
            "range": "± 135899.8977099564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "453591bbb880d9ef869ca01c018ad4a3c76afa44",
          "message": "refactor: add file output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:23:17+09:00",
          "tree_id": "a6284d52c357e9b9e7429d9de734b2bfbf826b3b",
          "url": "https://github.com/planetarium/libplanet/commit/453591bbb880d9ef869ca01c018ad4a3c76afa44"
        },
        "date": 1692592574951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3238531.846153846,
            "unit": "ns",
            "range": "± 28740.17557892944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3551442.466666667,
            "unit": "ns",
            "range": "± 54235.320817008265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4231920.076923077,
            "unit": "ns",
            "range": "± 22850.73574476155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3850585.6086956523,
            "unit": "ns",
            "range": "± 95079.28398817251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6036155.5,
            "unit": "ns",
            "range": "± 130679.44245225252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7708876.866666666,
            "unit": "ns",
            "range": "± 87896.25170121767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20124954,
            "unit": "ns",
            "range": "± 120111.92137463996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51155550.53333333,
            "unit": "ns",
            "range": "± 264081.96982021286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103367586.06666666,
            "unit": "ns",
            "range": "± 750052.0818290332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203245124,
            "unit": "ns",
            "range": "± 1080276.1899093874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47415.43421052631,
            "unit": "ns",
            "range": "± 2093.97587592297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5101493.050223215,
            "unit": "ns",
            "range": "± 22932.29178390968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1575195.5767728365,
            "unit": "ns",
            "range": "± 725.3725284021276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070086.5239955357,
            "unit": "ns",
            "range": "± 463.35457140701243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642235.0533854165,
            "unit": "ns",
            "range": "± 6724.468933820719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947351.3538411459,
            "unit": "ns",
            "range": "± 6638.033035810778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742859.9924665178,
            "unit": "ns",
            "range": "± 572.2993698567327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270827.75,
            "unit": "ns",
            "range": "± 9567.216389717252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259544.5,
            "unit": "ns",
            "range": "± 10907.390647871884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231584.34285714285,
            "unit": "ns",
            "range": "± 7587.8747971889425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150488.8333333335,
            "unit": "ns",
            "range": "± 17533.384788782656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3831928.2,
            "unit": "ns",
            "range": "± 36234.560606060695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18879.228260869564,
            "unit": "ns",
            "range": "± 1577.337847003029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83579.53333333334,
            "unit": "ns",
            "range": "± 4600.816173807485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70239.66666666667,
            "unit": "ns",
            "range": "± 1311.1173896809582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76234.74725274726,
            "unit": "ns",
            "range": "± 8542.991908372625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5004.135416666667,
            "unit": "ns",
            "range": "± 480.7665068418111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19257.076923076922,
            "unit": "ns",
            "range": "± 1714.8474129124872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364378.6,
            "unit": "ns",
            "range": "± 112186.03035668892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539905.5172413792,
            "unit": "ns",
            "range": "± 72642.57863658824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1735763.494736842,
            "unit": "ns",
            "range": "± 127266.97574030119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4474576.2,
            "unit": "ns",
            "range": "± 157552.05899185946"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "47d3e69c92a75415b1b8592198fc2c0139660174",
          "message": "refactor: dump linux core",
          "timestamp": "2023-08-21T13:31:21+09:00",
          "tree_id": "3fd022f76677056b587770f46908c2b4e0d089bd",
          "url": "https://github.com/planetarium/libplanet/commit/47d3e69c92a75415b1b8592198fc2c0139660174"
        },
        "date": 1692593361776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3661332.3789473684,
            "unit": "ns",
            "range": "± 260032.09658581062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882075.1836734693,
            "unit": "ns",
            "range": "± 260785.81029235886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601604.154639175,
            "unit": "ns",
            "range": "± 314573.0422827218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931079.3917525774,
            "unit": "ns",
            "range": "± 267097.87072245625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6811373.378947369,
            "unit": "ns",
            "range": "± 521666.0416374286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9444944.557142857,
            "unit": "ns",
            "range": "± 458351.0757157198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24685251.091954023,
            "unit": "ns",
            "range": "± 1343822.004031132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61434733.07,
            "unit": "ns",
            "range": "± 3914640.149327842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128403394.85294117,
            "unit": "ns",
            "range": "± 6139767.0801879335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255694746.2962963,
            "unit": "ns",
            "range": "± 7069495.730069141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64915.552083333336,
            "unit": "ns",
            "range": "± 15564.447540448211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5356325.5640625,
            "unit": "ns",
            "range": "± 93653.77646764508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878416.431919643,
            "unit": "ns",
            "range": "± 24444.897742857996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168053.171875,
            "unit": "ns",
            "range": "± 34980.55841783632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2796780.899639423,
            "unit": "ns",
            "range": "± 38192.34063188759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998074.8684895834,
            "unit": "ns",
            "range": "± 14765.606501429704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913098.9237548828,
            "unit": "ns",
            "range": "± 32026.487030542597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331988.3645833333,
            "unit": "ns",
            "range": "± 49464.07423790572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326860.2244897959,
            "unit": "ns",
            "range": "± 53225.6587759574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291197.7395833333,
            "unit": "ns",
            "range": "± 41178.45375876865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4719508.989583333,
            "unit": "ns",
            "range": "± 290243.661907878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136532.3402061854,
            "unit": "ns",
            "range": "± 296226.2923116481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28039.99,
            "unit": "ns",
            "range": "± 10863.099005808608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106552.94897959183,
            "unit": "ns",
            "range": "± 24638.269381825314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94023.40816326531,
            "unit": "ns",
            "range": "± 17217.928652698538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102852.89795918367,
            "unit": "ns",
            "range": "± 26492.918523378798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4490.361445783133,
            "unit": "ns",
            "range": "± 763.2751090884477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29281.61224489796,
            "unit": "ns",
            "range": "± 11111.237493258845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613891.836734694,
            "unit": "ns",
            "range": "± 178502.47477499527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051567.547368421,
            "unit": "ns",
            "range": "± 217333.44818297404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1994685.7,
            "unit": "ns",
            "range": "± 251384.68843428406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5447135.597938145,
            "unit": "ns",
            "range": "± 480897.5285116549"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1be722264dae1d03dba687fd2ce39f1375243e6f",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T13:55:52+09:00",
          "tree_id": "c56415f9d4061f4f5ef8ba079576b88d8bda8735",
          "url": "https://github.com/planetarium/libplanet/commit/1be722264dae1d03dba687fd2ce39f1375243e6f"
        },
        "date": 1692594602585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3562521.48,
            "unit": "ns",
            "range": "± 94729.40105423097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3685375.1481481483,
            "unit": "ns",
            "range": "± 101303.14067638913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536107.583333333,
            "unit": "ns",
            "range": "± 113393.96786920894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4166810.2580645164,
            "unit": "ns",
            "range": "± 127083.09651325722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6361561.947368421,
            "unit": "ns",
            "range": "± 140138.39030816552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8179674.068965517,
            "unit": "ns",
            "range": "± 237320.80126185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22247360.85714286,
            "unit": "ns",
            "range": "± 176446.46106957778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57220495.428571425,
            "unit": "ns",
            "range": "± 473154.6651584309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112419061.6,
            "unit": "ns",
            "range": "± 1681057.0717369982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222660038.66666666,
            "unit": "ns",
            "range": "± 2240739.7827084973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48030.822222222225,
            "unit": "ns",
            "range": "± 2691.214113786229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5100173.845552885,
            "unit": "ns",
            "range": "± 15450.381755056907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579339.6473214286,
            "unit": "ns",
            "range": "± 2494.0259338002297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081629.1614583333,
            "unit": "ns",
            "range": "± 1776.8842059714984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637037.1688701925,
            "unit": "ns",
            "range": "± 1670.1475757077033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832203.4588541667,
            "unit": "ns",
            "range": "± 854.4899414338997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759538.953500601,
            "unit": "ns",
            "range": "± 525.2518915978044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278692.25,
            "unit": "ns",
            "range": "± 8659.097036289117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266591.875,
            "unit": "ns",
            "range": "± 4376.854683064846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239980.94,
            "unit": "ns",
            "range": "± 9588.01130964485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438134.866666666,
            "unit": "ns",
            "range": "± 61239.641722226515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4081587.5714285714,
            "unit": "ns",
            "range": "± 43180.63239590048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20455.694736842106,
            "unit": "ns",
            "range": "± 1422.5357945141952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91466.90721649484,
            "unit": "ns",
            "range": "± 7060.113238413263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71942.09090909091,
            "unit": "ns",
            "range": "± 1747.5977773337866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80245.63218390805,
            "unit": "ns",
            "range": "± 8715.407851955575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5536.144329896907,
            "unit": "ns",
            "range": "± 777.8394488058293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19067.397727272728,
            "unit": "ns",
            "range": "± 1075.655881602922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437296.8620689656,
            "unit": "ns",
            "range": "± 76912.24252704436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736885.3414634145,
            "unit": "ns",
            "range": "± 94583.54976332032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1852567.2567567567,
            "unit": "ns",
            "range": "± 90307.89233369967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4743790.153846154,
            "unit": "ns",
            "range": "± 129215.83083869943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "dd8d483365b9cf8bfb306654bde8d7cdc99df2d7",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:20:52+09:00",
          "tree_id": "8e1f8f785d7086e9ae7b6c3dbd7d8db2723ef781",
          "url": "https://github.com/planetarium/libplanet/commit/dd8d483365b9cf8bfb306654bde8d7cdc99df2d7"
        },
        "date": 1692596070255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3395498.88,
            "unit": "ns",
            "range": "± 90582.92506745776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516218.2,
            "unit": "ns",
            "range": "± 30942.330185593422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258880.066666666,
            "unit": "ns",
            "range": "± 45477.7383978244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3976429.153846154,
            "unit": "ns",
            "range": "± 41864.62058398506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6173430.40625,
            "unit": "ns",
            "range": "± 175780.13443409454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7883991.133333334,
            "unit": "ns",
            "range": "± 63028.91368804668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20288554.2,
            "unit": "ns",
            "range": "± 61897.5065989853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51861615.93333333,
            "unit": "ns",
            "range": "± 159436.86006444535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103851291.06666666,
            "unit": "ns",
            "range": "± 254415.85850741825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207102793.42857143,
            "unit": "ns",
            "range": "± 531418.2594377071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47605.20652173913,
            "unit": "ns",
            "range": "± 2890.9212324559608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902165.110576923,
            "unit": "ns",
            "range": "± 4265.712140515751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571028.8822544643,
            "unit": "ns",
            "range": "± 604.0134368332857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061542.5255208334,
            "unit": "ns",
            "range": "± 621.9636945237204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552950.1666666665,
            "unit": "ns",
            "range": "± 5338.274402766454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796050.8874699519,
            "unit": "ns",
            "range": "± 914.1527480906968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750561.7639322917,
            "unit": "ns",
            "range": "± 635.442993225808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275644.6296296296,
            "unit": "ns",
            "range": "± 10664.394652027833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266836.6808510638,
            "unit": "ns",
            "range": "± 9645.033973628679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243955.9180327869,
            "unit": "ns",
            "range": "± 10958.900802992792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284987.785714285,
            "unit": "ns",
            "range": "± 23661.915759551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3963102.3333333335,
            "unit": "ns",
            "range": "± 34357.85500053947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20695.705263157895,
            "unit": "ns",
            "range": "± 1973.0984806475592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86792.87837837837,
            "unit": "ns",
            "range": "± 4212.60059252344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71769.5,
            "unit": "ns",
            "range": "± 2898.459522236047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86128.08163265306,
            "unit": "ns",
            "range": "± 12657.343806687488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5113.652631578947,
            "unit": "ns",
            "range": "± 539.6067868684478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20180.947368421053,
            "unit": "ns",
            "range": "± 1524.5596669371491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343877.5764705883,
            "unit": "ns",
            "range": "± 72166.26254341536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637489.2666666666,
            "unit": "ns",
            "range": "± 100029.71664992177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1717472.9670329671,
            "unit": "ns",
            "range": "± 95360.00040063975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4574758.760869565,
            "unit": "ns",
            "range": "± 159051.92257696993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:46:34+09:00",
          "tree_id": "9314475d2f7f6fb3e7b3b845f3d8d66ded773606",
          "url": "https://github.com/planetarium/libplanet/commit/ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513"
        },
        "date": 1692597822763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4493825,
            "unit": "ns",
            "range": "± 197996.29857224692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4616094.208955224,
            "unit": "ns",
            "range": "± 218552.3165327571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5426262.842105263,
            "unit": "ns",
            "range": "± 120064.91113618648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4891239.230769231,
            "unit": "ns",
            "range": "± 71014.43789839951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7689993.324324325,
            "unit": "ns",
            "range": "± 234247.37222503978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10498819.933333334,
            "unit": "ns",
            "range": "± 188082.89162056282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27249971.866666667,
            "unit": "ns",
            "range": "± 201313.28206620313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67808943.92307693,
            "unit": "ns",
            "range": "± 183538.4392865527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135695693.26666668,
            "unit": "ns",
            "range": "± 311473.2870934215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274829493.6666667,
            "unit": "ns",
            "range": "± 1571846.7197995503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59627.34065934066,
            "unit": "ns",
            "range": "± 3716.3773645843767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982886.0296875,
            "unit": "ns",
            "range": "± 48905.45318202961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925750.45390625,
            "unit": "ns",
            "range": "± 1236.7933988030877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302999.011997768,
            "unit": "ns",
            "range": "± 669.5416115117273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3073646.676041667,
            "unit": "ns",
            "range": "± 6836.05195373182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987897.4528245192,
            "unit": "ns",
            "range": "± 697.2091197560777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913036.7133789062,
            "unit": "ns",
            "range": "± 310.6478141814767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331062.9,
            "unit": "ns",
            "range": "± 11675.636390276493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320301.53125,
            "unit": "ns",
            "range": "± 9585.521383448076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289976,
            "unit": "ns",
            "range": "± 8808.964252396532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5429523.333333333,
            "unit": "ns",
            "range": "± 60269.68013931415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5085753.466666667,
            "unit": "ns",
            "range": "± 55568.40318262409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24873.042105263157,
            "unit": "ns",
            "range": "± 2023.1127266149226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109944.55102040817,
            "unit": "ns",
            "range": "± 8212.7151808461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90335.67142857143,
            "unit": "ns",
            "range": "± 4391.82851134751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99069.64948453609,
            "unit": "ns",
            "range": "± 13741.746963360436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7251.656565656565,
            "unit": "ns",
            "range": "± 777.2823031617875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24600.35106382979,
            "unit": "ns",
            "range": "± 1732.554895761405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779190.8333333333,
            "unit": "ns",
            "range": "± 106514.56014764185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3357685.5675675673,
            "unit": "ns",
            "range": "± 109296.72015017462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217476.8068181816,
            "unit": "ns",
            "range": "± 123067.8943838144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5768352.28125,
            "unit": "ns",
            "range": "± 176666.42724660403"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "75fb1636b37a96065bfc58c7fc831e7dc5ff71a8",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T15:02:48+09:00",
          "tree_id": "81d385dcaa484a315b2a08cb206277449c29ebd8",
          "url": "https://github.com/planetarium/libplanet/commit/75fb1636b37a96065bfc58c7fc831e7dc5ff71a8"
        },
        "date": 1692598530624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3263167.5714285714,
            "unit": "ns",
            "range": "± 43195.86249188205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3320699.2413793104,
            "unit": "ns",
            "range": "± 61845.971043654186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193885.9285714286,
            "unit": "ns",
            "range": "± 72307.03434283586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3640746.977272727,
            "unit": "ns",
            "range": "± 135667.2473177182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6007808.97368421,
            "unit": "ns",
            "range": "± 181087.1923119681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7798873.785714285,
            "unit": "ns",
            "range": "± 29292.619708931597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19614961.133333333,
            "unit": "ns",
            "range": "± 284205.2677929575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49259014.14285714,
            "unit": "ns",
            "range": "± 298037.1130645044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100437078.26666667,
            "unit": "ns",
            "range": "± 874683.3783912461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201127394.4,
            "unit": "ns",
            "range": "± 1170397.987874137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45449.82432432433,
            "unit": "ns",
            "range": "± 2274.6476792254443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5143620.764322917,
            "unit": "ns",
            "range": "± 4594.139501194384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1620900.0279017857,
            "unit": "ns",
            "range": "± 5918.1989212236585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091127.1028180805,
            "unit": "ns",
            "range": "± 806.6472817833356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862851.265625,
            "unit": "ns",
            "range": "± 18756.262621574053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802637.1884114583,
            "unit": "ns",
            "range": "± 3347.545937092504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746211.0452473959,
            "unit": "ns",
            "range": "± 724.2960836651031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263109.7659574468,
            "unit": "ns",
            "range": "± 10249.000543452297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253652.87037037036,
            "unit": "ns",
            "range": "± 9218.353821130882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218309.8947368421,
            "unit": "ns",
            "range": "± 4802.374133867272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197139.333333333,
            "unit": "ns",
            "range": "± 37668.39252451519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808243.933333333,
            "unit": "ns",
            "range": "± 21674.49172732997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17744.278350515466,
            "unit": "ns",
            "range": "± 2307.0643988549423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80301.22727272728,
            "unit": "ns",
            "range": "± 3737.6694087480378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67866.44444444444,
            "unit": "ns",
            "range": "± 1411.701860801653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73661.5617977528,
            "unit": "ns",
            "range": "± 6953.797461484061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4416.326530612245,
            "unit": "ns",
            "range": "± 521.2383900758559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16859.333333333332,
            "unit": "ns",
            "range": "± 1621.876240762802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301046.303030303,
            "unit": "ns",
            "range": "± 87835.85276949253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2434636.8620689656,
            "unit": "ns",
            "range": "± 68643.8231643835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1653539.1927710844,
            "unit": "ns",
            "range": "± 84302.41420413363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4328832.142857143,
            "unit": "ns",
            "range": "± 107773.54419945634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "d8ee9a4f08cefc93a43afe68e87475e68609627a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:30:20+09:00",
          "tree_id": "721ab642828cec0656e765138744693a9f1245ef",
          "url": "https://github.com/planetarium/libplanet/commit/d8ee9a4f08cefc93a43afe68e87475e68609627a"
        },
        "date": 1692600256037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3525258.8846153845,
            "unit": "ns",
            "range": "± 96264.84520958911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3706635.093023256,
            "unit": "ns",
            "range": "± 135755.3974482211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4426102.961538462,
            "unit": "ns",
            "range": "± 118571.22852141857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4071998.875,
            "unit": "ns",
            "range": "± 153785.8740125823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6285996.653846154,
            "unit": "ns",
            "range": "± 168433.09395150165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8031813.666666667,
            "unit": "ns",
            "range": "± 140282.66404488264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22770791.133333333,
            "unit": "ns",
            "range": "± 280105.96306369145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56876592.4,
            "unit": "ns",
            "range": "± 885496.1860944565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112352101.42857143,
            "unit": "ns",
            "range": "± 1321429.6074876175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228140350.46666667,
            "unit": "ns",
            "range": "± 3032720.7705598255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48554.438356164384,
            "unit": "ns",
            "range": "± 2259.364278743896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5145733.557477678,
            "unit": "ns",
            "range": "± 21339.005673606887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1591892.903125,
            "unit": "ns",
            "range": "± 3395.612234749179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079127.1489583333,
            "unit": "ns",
            "range": "± 2818.824181568492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2776635.9888020833,
            "unit": "ns",
            "range": "± 7786.172401853865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933927.7987467448,
            "unit": "ns",
            "range": "± 1005.4681660726457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756877.0701171875,
            "unit": "ns",
            "range": "± 799.811684027854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275652.3958333333,
            "unit": "ns",
            "range": "± 9842.584969535974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274994.725,
            "unit": "ns",
            "range": "± 9749.986784968034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249976.2857142857,
            "unit": "ns",
            "range": "± 14742.662491565292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426338.294117647,
            "unit": "ns",
            "range": "± 88497.1573743789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4140234.705882353,
            "unit": "ns",
            "range": "± 83863.16919748257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20516.56989247312,
            "unit": "ns",
            "range": "± 2042.6413707546576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85909.9344262295,
            "unit": "ns",
            "range": "± 3533.6439542812486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72703.2641509434,
            "unit": "ns",
            "range": "± 2916.689866104431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81547.12121212122,
            "unit": "ns",
            "range": "± 13105.318473477864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5286.762886597938,
            "unit": "ns",
            "range": "± 709.8328701942785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19482.75,
            "unit": "ns",
            "range": "± 1529.5285754630067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430019.3804347827,
            "unit": "ns",
            "range": "± 80251.2182186598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2737880.2580645164,
            "unit": "ns",
            "range": "± 79460.57637217244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811301.5227272727,
            "unit": "ns",
            "range": "± 96314.0379282556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4775664.924528302,
            "unit": "ns",
            "range": "± 195567.6353941215"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f18c8b532a93098d5b8bbafd3f3f883dd9451aa7",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:55:31+09:00",
          "tree_id": "5ff132714a603bce55a62ee15e222eef3ec7506e",
          "url": "https://github.com/planetarium/libplanet/commit/f18c8b532a93098d5b8bbafd3f3f883dd9451aa7"
        },
        "date": 1692601936995,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4240796.684210527,
            "unit": "ns",
            "range": "± 91643.3397265075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4532359.5,
            "unit": "ns",
            "range": "± 60290.18765137874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5434826.5625,
            "unit": "ns",
            "range": "± 106330.84747834233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4959277.133333334,
            "unit": "ns",
            "range": "± 76384.35743084973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7749173.909090909,
            "unit": "ns",
            "range": "± 238585.5514132147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9960106,
            "unit": "ns",
            "range": "± 160159.89832084326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27004928.066666666,
            "unit": "ns",
            "range": "± 213708.45292141972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68498077.2,
            "unit": "ns",
            "range": "± 498648.8712067269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135020144.53333333,
            "unit": "ns",
            "range": "± 726482.398512455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269133030.26666665,
            "unit": "ns",
            "range": "± 2101132.7123029027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56776.95652173913,
            "unit": "ns",
            "range": "± 3415.0797004940064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6033617.454427083,
            "unit": "ns",
            "range": "± 18374.204799930947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919779.312779018,
            "unit": "ns",
            "range": "± 1225.6546614499214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309863.0110212055,
            "unit": "ns",
            "range": "± 1187.253968190193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145734.2008928573,
            "unit": "ns",
            "range": "± 884.1891575301283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001021.7723958333,
            "unit": "ns",
            "range": "± 587.5059290076539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890829.4928152902,
            "unit": "ns",
            "range": "± 477.56136384700125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330173.23255813954,
            "unit": "ns",
            "range": "± 12235.13895232597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318153.30303030304,
            "unit": "ns",
            "range": "± 9974.29340381077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282724.95,
            "unit": "ns",
            "range": "± 6379.549666295956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5264057.714285715,
            "unit": "ns",
            "range": "± 89979.4882390328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4986422.4,
            "unit": "ns",
            "range": "± 60108.831537708094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25029.4375,
            "unit": "ns",
            "range": "± 1866.6175308774284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106073.68253968254,
            "unit": "ns",
            "range": "± 4781.561085432505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90722.15217391304,
            "unit": "ns",
            "range": "± 3485.7005606550206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103668.4693877551,
            "unit": "ns",
            "range": "± 14135.391302774693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6902.59375,
            "unit": "ns",
            "range": "± 762.8747786894821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24658.31182795699,
            "unit": "ns",
            "range": "± 1568.1578709518194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698793.6133333333,
            "unit": "ns",
            "range": "± 70847.93733400856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242683.64516129,
            "unit": "ns",
            "range": "± 96716.11740227113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147010.1710526315,
            "unit": "ns",
            "range": "± 102343.9110701284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5700604.354166667,
            "unit": "ns",
            "range": "± 223599.35445987293"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:58:58+09:00",
          "tree_id": "9034f836b9c8bb4c07dc45c620e30745fd5b7f1a",
          "url": "https://github.com/planetarium/libplanet/commit/dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb"
        },
        "date": 1692601950394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344806.5263157897,
            "unit": "ns",
            "range": "± 114842.53551022899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567900.5625,
            "unit": "ns",
            "range": "± 69579.41225196693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267735.2,
            "unit": "ns",
            "range": "± 39039.6661929523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3854397.263157895,
            "unit": "ns",
            "range": "± 82168.06436055455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6153505.96875,
            "unit": "ns",
            "range": "± 174069.3168608941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7942609.176470588,
            "unit": "ns",
            "range": "± 160634.22137508375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20391815,
            "unit": "ns",
            "range": "± 90322.18137233591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51909159.13333333,
            "unit": "ns",
            "range": "± 255786.2058388011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103618021.06666666,
            "unit": "ns",
            "range": "± 307499.47402149363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207339601.13333333,
            "unit": "ns",
            "range": "± 287337.4946785118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48988.645833333336,
            "unit": "ns",
            "range": "± 5019.812571420669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890399.736458333,
            "unit": "ns",
            "range": "± 14759.048742609728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569940.2495492788,
            "unit": "ns",
            "range": "± 1218.6307859143935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061909.830078125,
            "unit": "ns",
            "range": "± 735.6455288339098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529138.0135216345,
            "unit": "ns",
            "range": "± 2811.7023290109273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797011.4889973958,
            "unit": "ns",
            "range": "± 2859.283919743496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733275.2708984375,
            "unit": "ns",
            "range": "± 647.2785598859051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271186.10714285716,
            "unit": "ns",
            "range": "± 7645.309398769291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274313.93333333335,
            "unit": "ns",
            "range": "± 4494.452905950793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241443.29761904763,
            "unit": "ns",
            "range": "± 12902.629489903566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4225040.6,
            "unit": "ns",
            "range": "± 38288.858571204684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871349.785714286,
            "unit": "ns",
            "range": "± 30168.499838225485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19266.303370786518,
            "unit": "ns",
            "range": "± 1524.9364547453233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85924.09782608696,
            "unit": "ns",
            "range": "± 5718.847182799606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72717.17073170732,
            "unit": "ns",
            "range": "± 3856.96585095449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80374.25842696629,
            "unit": "ns",
            "range": "± 6983.203578340495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4840,
            "unit": "ns",
            "range": "± 493.23077331476475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19330.302083333332,
            "unit": "ns",
            "range": "± 1591.3657168065401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378855.275510204,
            "unit": "ns",
            "range": "± 86649.69594806657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606178.6296296297,
            "unit": "ns",
            "range": "± 70513.89882533696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764210.54,
            "unit": "ns",
            "range": "± 130385.81335037488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4610914.303030303,
            "unit": "ns",
            "range": "± 145467.35280370575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:56:11+09:00",
          "tree_id": "32ebda4ba1257e16026df3d9ce56d3dac0f8ab4a",
          "url": "https://github.com/planetarium/libplanet/commit/20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed"
        },
        "date": 1692601953970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4096289.5384615385,
            "unit": "ns",
            "range": "± 111626.34389040277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4560273.866666666,
            "unit": "ns",
            "range": "± 134218.1913714236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5246421.545454546,
            "unit": "ns",
            "range": "± 165085.17175614435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4717361.216216216,
            "unit": "ns",
            "range": "± 158347.09927107306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7341165,
            "unit": "ns",
            "range": "± 188937.24743324745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9667686.35483871,
            "unit": "ns",
            "range": "± 286592.6705618445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26430638.8,
            "unit": "ns",
            "range": "± 232342.1780764618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65558991.266666666,
            "unit": "ns",
            "range": "± 798829.0093062529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139768329.57142857,
            "unit": "ns",
            "range": "± 750803.6540866075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261471289.66666666,
            "unit": "ns",
            "range": "± 3360235.328380241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55701.03296703297,
            "unit": "ns",
            "range": "± 3055.497927963622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959022.848214285,
            "unit": "ns",
            "range": "± 22471.51328091649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865184.394810268,
            "unit": "ns",
            "range": "± 5701.048053578971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292384.32421875,
            "unit": "ns",
            "range": "± 3193.6952225277405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3068386.627083333,
            "unit": "ns",
            "range": "± 8857.963389353445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981352.1815755208,
            "unit": "ns",
            "range": "± 3372.1860766125274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 887740.2442708333,
            "unit": "ns",
            "range": "± 4239.6256302450465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327401.17647058825,
            "unit": "ns",
            "range": "± 10492.467163638667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318484.9487179487,
            "unit": "ns",
            "range": "± 10932.974054735128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280071.5833333333,
            "unit": "ns",
            "range": "± 9228.512018661047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5178230.625,
            "unit": "ns",
            "range": "± 96565.98282823685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4711022.6,
            "unit": "ns",
            "range": "± 67030.36897641461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21491.445652173912,
            "unit": "ns",
            "range": "± 1404.266742797088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100696.13924050632,
            "unit": "ns",
            "range": "± 5200.406975529199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84158.79166666667,
            "unit": "ns",
            "range": "± 2192.0842172644075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90469.83838383839,
            "unit": "ns",
            "range": "± 12822.660531904867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5745.1875,
            "unit": "ns",
            "range": "± 626.0184512582592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21363.17391304348,
            "unit": "ns",
            "range": "± 1221.8378573450993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740092.9042553192,
            "unit": "ns",
            "range": "± 101628.31433758143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3279030.4909090907,
            "unit": "ns",
            "range": "± 139543.7202139295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166071.1555555556,
            "unit": "ns",
            "range": "± 115502.78603137346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549499.6,
            "unit": "ns",
            "range": "± 115577.86785967923"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "8003de7afe93ec8604207cc01d9e080ea4bd3af4",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:11:57+09:00",
          "tree_id": "27436bd6a662788c77b6f825da86805b1d25ca9b",
          "url": "https://github.com/planetarium/libplanet/commit/8003de7afe93ec8604207cc01d9e080ea4bd3af4"
        },
        "date": 1692602934572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718314.4666666666,
            "unit": "ns",
            "range": "± 80055.16551464106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240113.296296296,
            "unit": "ns",
            "range": "± 90528.08475776362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148090.210526316,
            "unit": "ns",
            "range": "± 122175.04055159957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5674056.377777778,
            "unit": "ns",
            "range": "± 215533.81082857013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336481.0153846154,
            "unit": "ns",
            "range": "± 15647.558748783613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318139.1176470588,
            "unit": "ns",
            "range": "± 9882.025101513955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299217.74,
            "unit": "ns",
            "range": "± 22031.168215549038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5330691.6,
            "unit": "ns",
            "range": "± 89508.01850816015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4874502.266666667,
            "unit": "ns",
            "range": "± 81562.27585844773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25496,
            "unit": "ns",
            "range": "± 2121.091775277283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105726.96875,
            "unit": "ns",
            "range": "± 7137.264185361554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95519.23655913978,
            "unit": "ns",
            "range": "± 8068.801622133523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97510.21348314607,
            "unit": "ns",
            "range": "± 9242.660233533601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7446.652631578947,
            "unit": "ns",
            "range": "± 996.3212522203771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28058.29591836735,
            "unit": "ns",
            "range": "± 3740.5106057785656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58794.231578947365,
            "unit": "ns",
            "range": "± 4737.507825071023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9986864.511627907,
            "unit": "ns",
            "range": "± 364541.48170278966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26929517.388888888,
            "unit": "ns",
            "range": "± 558852.9688793655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69348932.4,
            "unit": "ns",
            "range": "± 248299.19567006253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135295827.4,
            "unit": "ns",
            "range": "± 1093607.1881727525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270443020.9285714,
            "unit": "ns",
            "range": "± 2880305.825788656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4321150.739130435,
            "unit": "ns",
            "range": "± 106879.46342033985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4609607.714285715,
            "unit": "ns",
            "range": "± 102352.19375135192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5437835.866666666,
            "unit": "ns",
            "range": "± 86438.80119802902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5018361.285714285,
            "unit": "ns",
            "range": "± 54783.0190526907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7724244.571428572,
            "unit": "ns",
            "range": "± 174851.92621746304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000571.2671875,
            "unit": "ns",
            "range": "± 45348.559254952816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926628.8438895089,
            "unit": "ns",
            "range": "± 10383.109046371937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275956.3782552083,
            "unit": "ns",
            "range": "± 3589.9197349762135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126720.634375,
            "unit": "ns",
            "range": "± 21223.664824831718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995326.8052455357,
            "unit": "ns",
            "range": "± 2276.6950612585365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911772.5746744792,
            "unit": "ns",
            "range": "± 2093.167697011578"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5f7be7776916fe0376ffda3b2513bce3f47f042f",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:42:07+09:00",
          "tree_id": "e0217b1f670bfce114359f4fa1ac51fa09ce59da",
          "url": "https://github.com/planetarium/libplanet/commit/5f7be7776916fe0376ffda3b2513bce3f47f042f"
        },
        "date": 1692605026467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4057786.5204081633,
            "unit": "ns",
            "range": "± 306450.55023838143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4701922.481481481,
            "unit": "ns",
            "range": "± 247540.5050428167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5773883.425531914,
            "unit": "ns",
            "range": "± 206636.88850501104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5250881.117647059,
            "unit": "ns",
            "range": "± 282181.57169953414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8255089.474226804,
            "unit": "ns",
            "range": "± 534743.4849955337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10308069.341463415,
            "unit": "ns",
            "range": "± 543774.0365716149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28424193.166666668,
            "unit": "ns",
            "range": "± 1033918.5715929829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69980962.04166667,
            "unit": "ns",
            "range": "± 1798899.5639780902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138791191.1025641,
            "unit": "ns",
            "range": "± 4802288.765128817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278206923.5151515,
            "unit": "ns",
            "range": "± 8695245.874277297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75785.33684210526,
            "unit": "ns",
            "range": "± 15170.224427581905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6399391.71203125,
            "unit": "ns",
            "range": "± 255930.99949952713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983608.7904947917,
            "unit": "ns",
            "range": "± 26792.5194375294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337585.9761555989,
            "unit": "ns",
            "range": "± 33418.20073950815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3318958.6300495425,
            "unit": "ns",
            "range": "± 174830.64005059056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051755.272235577,
            "unit": "ns",
            "range": "± 15908.29120775164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946068.52328125,
            "unit": "ns",
            "range": "± 24413.26666441142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357932.15625,
            "unit": "ns",
            "range": "± 44527.096944699835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339183.27368421055,
            "unit": "ns",
            "range": "± 47810.573279870136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326909.967032967,
            "unit": "ns",
            "range": "± 31460.232941657407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4861492.428571428,
            "unit": "ns",
            "range": "± 588144.875294809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4574910.060606061,
            "unit": "ns",
            "range": "± 461992.71362258913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33151.30434782609,
            "unit": "ns",
            "range": "± 5205.685251657224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121114.25773195876,
            "unit": "ns",
            "range": "± 20545.392519917103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122116.37894736842,
            "unit": "ns",
            "range": "± 23602.960726280944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130751.23333333334,
            "unit": "ns",
            "range": "± 10901.807559691159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10509.147727272728,
            "unit": "ns",
            "range": "± 980.5783015710765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34321.23333333333,
            "unit": "ns",
            "range": "± 3893.091311050869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1680561.375,
            "unit": "ns",
            "range": "± 192285.77490737994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3203398.285714286,
            "unit": "ns",
            "range": "± 332344.3758941222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317757.7311827955,
            "unit": "ns",
            "range": "± 216498.59939667146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5964654.7894736845,
            "unit": "ns",
            "range": "± 532725.327799778"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f97ee7be56164bcd96a5cd40508f258c7aeccbdb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T18:45:49+09:00",
          "tree_id": "97730f03587381befe31dac35c77460ff40aebfd",
          "url": "https://github.com/planetarium/libplanet/commit/f97ee7be56164bcd96a5cd40508f258c7aeccbdb"
        },
        "date": 1692611993380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3573687.28,
            "unit": "ns",
            "range": "± 92357.42826311626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3732626.4583333335,
            "unit": "ns",
            "range": "± 95611.9055034371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373075.652173913,
            "unit": "ns",
            "range": "± 106805.57555271282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4143472.5,
            "unit": "ns",
            "range": "± 120591.9964027321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6344836.512820513,
            "unit": "ns",
            "range": "± 206890.07807565626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8490921,
            "unit": "ns",
            "range": "± 247642.46395213748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22702643.4,
            "unit": "ns",
            "range": "± 229135.14162008662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56399376.266666666,
            "unit": "ns",
            "range": "± 837839.1159059516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114418513.73333333,
            "unit": "ns",
            "range": "± 1301996.4070109227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224443025.13333333,
            "unit": "ns",
            "range": "± 2414331.639941576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47878.67901234568,
            "unit": "ns",
            "range": "± 2533.440969448274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5011250.037946428,
            "unit": "ns",
            "range": "± 9421.912212243762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586834.5524739583,
            "unit": "ns",
            "range": "± 2411.5887603870415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078451.1337239584,
            "unit": "ns",
            "range": "± 1726.6453645312638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617255.4481770834,
            "unit": "ns",
            "range": "± 5237.071286020904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839775.5412760417,
            "unit": "ns",
            "range": "± 431.02942970128754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755110.8886067708,
            "unit": "ns",
            "range": "± 935.5996938241404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274080.375,
            "unit": "ns",
            "range": "± 7429.221744288325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268593.0243902439,
            "unit": "ns",
            "range": "± 9644.862270887555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236065.38888888888,
            "unit": "ns",
            "range": "± 4692.824123236879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4427371.066666666,
            "unit": "ns",
            "range": "± 65391.09731832949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4085097.8,
            "unit": "ns",
            "range": "± 61062.55255204641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19839.73404255319,
            "unit": "ns",
            "range": "± 1507.3205891958053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87518.2435897436,
            "unit": "ns",
            "range": "± 4507.433762321042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72717.86075949368,
            "unit": "ns",
            "range": "± 3774.370678513844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85437.27551020408,
            "unit": "ns",
            "range": "± 12732.038044176712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5413.397959183673,
            "unit": "ns",
            "range": "± 690.1159433410621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19440.020833333332,
            "unit": "ns",
            "range": "± 1288.7214470095762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426972.0454545454,
            "unit": "ns",
            "range": "± 78172.49913983833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2743328.4102564105,
            "unit": "ns",
            "range": "± 95874.92120952447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1756877.5411764707,
            "unit": "ns",
            "range": "± 76191.26703122011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4736386.805194805,
            "unit": "ns",
            "range": "± 241927.4100628903"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "faadefa3bc8cec6f5f7e0f69ce6f81b433eb933a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T19:09:14+09:00",
          "tree_id": "8a8d7464f6f88170ae3eb5b2869efec20a206333",
          "url": "https://github.com/planetarium/libplanet/commit/faadefa3bc8cec6f5f7e0f69ce6f81b433eb933a"
        },
        "date": 1692613400983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3417615.263157895,
            "unit": "ns",
            "range": "± 72411.78817310686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575616.3620689656,
            "unit": "ns",
            "range": "± 155942.843770458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4325083.571428572,
            "unit": "ns",
            "range": "± 139353.91746921508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3898395.565217391,
            "unit": "ns",
            "range": "± 96773.7141728185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6595156,
            "unit": "ns",
            "range": "± 227364.40126821536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9133542.4,
            "unit": "ns",
            "range": "± 100782.35380745694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22848540.2,
            "unit": "ns",
            "range": "± 262610.8794150986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55897628.571428575,
            "unit": "ns",
            "range": "± 1318171.226018478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108154543.53333333,
            "unit": "ns",
            "range": "± 1904261.75241475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216389052,
            "unit": "ns",
            "range": "± 2706698.839911188"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47172.13333333333,
            "unit": "ns",
            "range": "± 2973.1378014678126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5006139.814583333,
            "unit": "ns",
            "range": "± 63432.588418741245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1570342.352669271,
            "unit": "ns",
            "range": "± 14843.76394587732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048799.265904018,
            "unit": "ns",
            "range": "± 2604.524997617286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603540.838020833,
            "unit": "ns",
            "range": "± 21804.899067316022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839363.9347956731,
            "unit": "ns",
            "range": "± 2131.2344303437626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758909.3466796875,
            "unit": "ns",
            "range": "± 5424.747249927278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275993.48,
            "unit": "ns",
            "range": "± 7289.557297486133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267753.75757575757,
            "unit": "ns",
            "range": "± 8408.898110893837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222862.58333333334,
            "unit": "ns",
            "range": "± 1336.6790230291117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198212.285714285,
            "unit": "ns",
            "range": "± 66147.29380990296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3888277.6,
            "unit": "ns",
            "range": "± 54994.876397455686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18967.45054945055,
            "unit": "ns",
            "range": "± 1971.796210248335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81658.80303030302,
            "unit": "ns",
            "range": "± 6915.954452486531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67308.28571428571,
            "unit": "ns",
            "range": "± 1128.5340680976994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79065.92857142857,
            "unit": "ns",
            "range": "± 13631.214572693225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4851.20652173913,
            "unit": "ns",
            "range": "± 559.0275807157957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16599.284210526315,
            "unit": "ns",
            "range": "± 1606.5397708697838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393960.3033707866,
            "unit": "ns",
            "range": "± 77118.96303062097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2740400.2769230767,
            "unit": "ns",
            "range": "± 127628.90239204095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1803295.8163265307,
            "unit": "ns",
            "range": "± 119876.74507406991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4969411.68,
            "unit": "ns",
            "range": "± 346753.0622220099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "6dba091ff32e0e731687b20b5eb15fa068a80a89",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T19:27:42+09:00",
          "tree_id": "9857b558da3240becfc46c7b1d075d809fb38a4c",
          "url": "https://github.com/planetarium/libplanet/commit/6dba091ff32e0e731687b20b5eb15fa068a80a89"
        },
        "date": 1692614520506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414757.3406593406,
            "unit": "ns",
            "range": "± 78980.63071668195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773332.466666667,
            "unit": "ns",
            "range": "± 82546.24341699306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1856714.375,
            "unit": "ns",
            "range": "± 138080.05843013112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4973448.414141414,
            "unit": "ns",
            "range": "± 294172.03110262036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277046.2173913043,
            "unit": "ns",
            "range": "± 6891.636063549139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267459.8775510204,
            "unit": "ns",
            "range": "± 10539.397807814283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231061.88,
            "unit": "ns",
            "range": "± 6092.662125595564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4450527.285714285,
            "unit": "ns",
            "range": "± 56627.644819100875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4035532.238095238,
            "unit": "ns",
            "range": "± 93296.73445941437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20861.21111111111,
            "unit": "ns",
            "range": "± 2082.7043487661754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88164.48863636363,
            "unit": "ns",
            "range": "± 4859.171340343115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72712.1264367816,
            "unit": "ns",
            "range": "± 3770.298954295015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85024.23469387754,
            "unit": "ns",
            "range": "± 10810.765595404608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6127.260869565217,
            "unit": "ns",
            "range": "± 797.6644323171562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20967.935483870966,
            "unit": "ns",
            "range": "± 1763.9154865294747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47981.84782608696,
            "unit": "ns",
            "range": "± 3102.0449048931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8127104.2105263155,
            "unit": "ns",
            "range": "± 175029.8666490249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22248880.2,
            "unit": "ns",
            "range": "± 244304.14258437316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55430692.6,
            "unit": "ns",
            "range": "± 787747.5011114012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112124350.26666667,
            "unit": "ns",
            "range": "± 1787015.9399344432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222619154.26666668,
            "unit": "ns",
            "range": "± 4114267.296154695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3489829.757575758,
            "unit": "ns",
            "range": "± 107715.93180880623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3790645.1904761903,
            "unit": "ns",
            "range": "± 84669.95253430762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4424218.423076923,
            "unit": "ns",
            "range": "± 120432.38162360589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4420825.428571428,
            "unit": "ns",
            "range": "± 69662.65094639394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322399.413793104,
            "unit": "ns",
            "range": "± 184070.67239892966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5112784.159855769,
            "unit": "ns",
            "range": "± 23880.545443738643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586909.962890625,
            "unit": "ns",
            "range": "± 3511.709466165175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084008.4119791666,
            "unit": "ns",
            "range": "± 2862.812346264391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629044.869010417,
            "unit": "ns",
            "range": "± 5936.087723610182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841374.7279296875,
            "unit": "ns",
            "range": "± 1256.576793624503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761073.0176432292,
            "unit": "ns",
            "range": "± 884.7202530708278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f9522219438a8eab92facec06ddd7be3cdd834aa",
          "message": "fix: remove unusual timeout test",
          "timestamp": "2023-08-21T20:15:05+09:00",
          "tree_id": "b4bc4ed077e24b593d50ad16cd321b97a132dd6f",
          "url": "https://github.com/planetarium/libplanet/commit/f9522219438a8eab92facec06ddd7be3cdd834aa"
        },
        "date": 1692617735415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682981.4421052632,
            "unit": "ns",
            "range": "± 205581.75835018943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3193510.1515151514,
            "unit": "ns",
            "range": "± 406630.92091900244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2072433.1340206186,
            "unit": "ns",
            "range": "± 272447.4067804811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5994030.897959184,
            "unit": "ns",
            "range": "± 604146.1577845077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335888.0103092783,
            "unit": "ns",
            "range": "± 49515.30218749193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328018.35714285716,
            "unit": "ns",
            "range": "± 48471.12251432774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267014.7173913043,
            "unit": "ns",
            "range": "± 42848.90371078306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4832097.520833333,
            "unit": "ns",
            "range": "± 480797.66122905165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4017927.4166666665,
            "unit": "ns",
            "range": "± 447379.54355023225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29653.494845360823,
            "unit": "ns",
            "range": "± 12622.796353162428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104595.6105263158,
            "unit": "ns",
            "range": "± 19417.758100372164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99800.79569892473,
            "unit": "ns",
            "range": "± 23770.075946705663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110739.75,
            "unit": "ns",
            "range": "± 26324.411120648096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5457.881578947368,
            "unit": "ns",
            "range": "± 1008.8064230182155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30421.958333333332,
            "unit": "ns",
            "range": "± 11016.03210819449"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64190.09782608696,
            "unit": "ns",
            "range": "± 13658.406096621049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8345737.23,
            "unit": "ns",
            "range": "± 844066.1085954653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24401216.802083332,
            "unit": "ns",
            "range": "± 2365597.8774232306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64730233.202020206,
            "unit": "ns",
            "range": "± 4198550.60552413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128476655.8275862,
            "unit": "ns",
            "range": "± 5627546.058706594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248868182.89,
            "unit": "ns",
            "range": "± 18944449.20451399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3491886.0721649486,
            "unit": "ns",
            "range": "± 435255.9799160636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3873892.913043478,
            "unit": "ns",
            "range": "± 335761.5663177462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749640.530612245,
            "unit": "ns",
            "range": "± 672820.746518365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4105390.536082474,
            "unit": "ns",
            "range": "± 502137.8314452754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7055839.072916667,
            "unit": "ns",
            "range": "± 621313.1001166251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5726215.722585227,
            "unit": "ns",
            "range": "± 243404.27363948818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819006.3433657787,
            "unit": "ns",
            "range": "± 81839.44812070632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259905.6552734375,
            "unit": "ns",
            "range": "± 17034.90775772707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2913633.3110351562,
            "unit": "ns",
            "range": "± 51077.692316585475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976412.6768727022,
            "unit": "ns",
            "range": "± 18892.94679669206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897985.2928819444,
            "unit": "ns",
            "range": "± 33922.70974922346"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "c8eb7f56b04bcbf9c23689a856eee337f62e65fc",
          "message": "fix: see method more globally",
          "timestamp": "2023-08-21T20:25:07+09:00",
          "tree_id": "430f003215504920c4b88eade60593888d24621e",
          "url": "https://github.com/planetarium/libplanet/commit/c8eb7f56b04bcbf9c23689a856eee337f62e65fc"
        },
        "date": 1692617943457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481913.8541666667,
            "unit": "ns",
            "range": "± 87370.42499899393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2844292.2682926827,
            "unit": "ns",
            "range": "± 101526.59979385314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1860083.3953488371,
            "unit": "ns",
            "range": "± 100619.10261239768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4781582.59375,
            "unit": "ns",
            "range": "± 148575.2216670407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283049.1666666667,
            "unit": "ns",
            "range": "± 9311.109470488927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278109.2888888889,
            "unit": "ns",
            "range": "± 10575.230475937247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237608.3488372093,
            "unit": "ns",
            "range": "± 8660.103103102621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4387032.066666666,
            "unit": "ns",
            "range": "± 78016.17831346326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4076275.4,
            "unit": "ns",
            "range": "± 67820.77447402928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21219.63440860215,
            "unit": "ns",
            "range": "± 1411.590120834643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88970.9587628866,
            "unit": "ns",
            "range": "± 5855.187852660958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75397.9,
            "unit": "ns",
            "range": "± 3387.199831969604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85528.95918367348,
            "unit": "ns",
            "range": "± 12940.986208150985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5253.229166666667,
            "unit": "ns",
            "range": "± 588.3429805133213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20176.052631578947,
            "unit": "ns",
            "range": "± 1761.2161681115322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51627.11363636364,
            "unit": "ns",
            "range": "± 2865.988856375646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078532.4,
            "unit": "ns",
            "range": "± 88113.41728120315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22557379.5,
            "unit": "ns",
            "range": "± 173478.93524519826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56810736.46666667,
            "unit": "ns",
            "range": "± 601619.3738376766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114788960.33333333,
            "unit": "ns",
            "range": "± 1487726.0393316785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230469429,
            "unit": "ns",
            "range": "± 1686701.5477420376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3751687.4285714286,
            "unit": "ns",
            "range": "± 41339.76794567427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3861802.2926829266,
            "unit": "ns",
            "range": "± 138233.494877552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457699.684210527,
            "unit": "ns",
            "range": "± 90343.56415561201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4304697.066666666,
            "unit": "ns",
            "range": "± 73807.67228360349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6363298.352941177,
            "unit": "ns",
            "range": "± 129916.9980059101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5141936.774038462,
            "unit": "ns",
            "range": "± 17394.338986029612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1619180.114955357,
            "unit": "ns",
            "range": "± 2159.8010575805743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1088304.5623697916,
            "unit": "ns",
            "range": "± 1699.4284168838105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596198.0622209823,
            "unit": "ns",
            "range": "± 3736.7177115637805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809914.2463541667,
            "unit": "ns",
            "range": "± 566.4650448148647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758238.8923688616,
            "unit": "ns",
            "range": "± 905.3634308543998"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "e25d5fb125e8e5a3827f58220b503fa06b735e04",
          "message": "fix: see method more globally",
          "timestamp": "2023-08-21T20:32:29+09:00",
          "tree_id": "d90fb97099259c63eb92ea0c30b1fa0047ee0c07",
          "url": "https://github.com/planetarium/libplanet/commit/e25d5fb125e8e5a3827f58220b503fa06b735e04"
        },
        "date": 1692618339790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343300.6741573033,
            "unit": "ns",
            "range": "± 73936.33619598554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562924.3181818184,
            "unit": "ns",
            "range": "± 52370.89145097809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1697030.6438356165,
            "unit": "ns",
            "range": "± 79477.40400288659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4458444.631578947,
            "unit": "ns",
            "range": "± 96025.79744944152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261457.73170731709,
            "unit": "ns",
            "range": "± 8198.015055561895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261959.9411764706,
            "unit": "ns",
            "range": "± 8408.275872493128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227624.29166666666,
            "unit": "ns",
            "range": "± 5480.6605875979285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4224950.4,
            "unit": "ns",
            "range": "± 57917.476412318145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3881036.4285714286,
            "unit": "ns",
            "range": "± 49728.29352006343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18700.288659793816,
            "unit": "ns",
            "range": "± 1293.006106253006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84719.04838709677,
            "unit": "ns",
            "range": "± 3815.18884833241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70386.78571428571,
            "unit": "ns",
            "range": "± 972.6400376589188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71545.11904761905,
            "unit": "ns",
            "range": "± 5977.269494690944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5072.5204081632655,
            "unit": "ns",
            "range": "± 481.8072127945602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18047.62365591398,
            "unit": "ns",
            "range": "± 1080.8395681334998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47194.13157894737,
            "unit": "ns",
            "range": "± 2401.097628680712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7966563.692307692,
            "unit": "ns",
            "range": "± 49340.43006565815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21975795.92857143,
            "unit": "ns",
            "range": "± 186547.16843756012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55352443,
            "unit": "ns",
            "range": "± 681731.6974807611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108415758.46666667,
            "unit": "ns",
            "range": "± 1490848.4500110217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209954645.5,
            "unit": "ns",
            "range": "± 1923263.22320208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361675.3421052634,
            "unit": "ns",
            "range": "± 71843.6710034465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583813,
            "unit": "ns",
            "range": "± 37669.112970708506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193811.4444444445,
            "unit": "ns",
            "range": "± 87128.07585335795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3823379.789473684,
            "unit": "ns",
            "range": "± 119941.33888588315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6126566.961538462,
            "unit": "ns",
            "range": "± 165300.49758605828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4936060.712611607,
            "unit": "ns",
            "range": "± 25709.129937342524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566064.2657645089,
            "unit": "ns",
            "range": "± 3241.5059267883635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074458.7943638393,
            "unit": "ns",
            "range": "± 1534.7196676400072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595208.059375,
            "unit": "ns",
            "range": "± 7279.52113443353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855672.5049479167,
            "unit": "ns",
            "range": "± 3633.0402759946132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754735.0109375,
            "unit": "ns",
            "range": "± 1192.788688351479"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "283994a2da857faa59eaddf0270dc3e8f831e52f",
          "message": "fix(ci): use circleci test splitter",
          "timestamp": "2023-08-21T20:50:37+09:00",
          "tree_id": "285bc2798d72e4e1ad3117189460275d49159119",
          "url": "https://github.com/planetarium/libplanet/commit/283994a2da857faa59eaddf0270dc3e8f831e52f"
        },
        "date": 1692619830448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749441.71875,
            "unit": "ns",
            "range": "± 193803.5324640152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3355249.6875,
            "unit": "ns",
            "range": "± 329865.1429550954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155666.1354166665,
            "unit": "ns",
            "range": "± 231992.04606930722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6024828.4845360825,
            "unit": "ns",
            "range": "± 581079.9438901478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387347.7373737374,
            "unit": "ns",
            "range": "± 54079.62621225164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375372.4791666667,
            "unit": "ns",
            "range": "± 46131.74734285299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317595.42553191487,
            "unit": "ns",
            "range": "± 41196.08612594824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5282348.84375,
            "unit": "ns",
            "range": "± 339575.7288037166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4703796.819148936,
            "unit": "ns",
            "range": "± 326647.3035768736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36229.56701030928,
            "unit": "ns",
            "range": "± 9427.436485363722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124279.43478260869,
            "unit": "ns",
            "range": "± 17139.822529313402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133010.0306122449,
            "unit": "ns",
            "range": "± 23697.967527123063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140760.68085106384,
            "unit": "ns",
            "range": "± 24775.11645761623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 15052.92,
            "unit": "ns",
            "range": "± 9011.011196387122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34554.31313131313,
            "unit": "ns",
            "range": "± 10097.541214801833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75688.98947368421,
            "unit": "ns",
            "range": "± 15517.591365858309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10486713.663157895,
            "unit": "ns",
            "range": "± 760564.2936693643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27124676.565789472,
            "unit": "ns",
            "range": "± 1376851.3212733015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69999137.65306123,
            "unit": "ns",
            "range": "± 2788447.448512916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141651573.55555555,
            "unit": "ns",
            "range": "± 3956546.944510563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285438671.68421054,
            "unit": "ns",
            "range": "± 9636610.972095381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4286466.03125,
            "unit": "ns",
            "range": "± 337372.92897892685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4561203.083333333,
            "unit": "ns",
            "range": "± 338263.3184039872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5618244.265060241,
            "unit": "ns",
            "range": "± 297987.97213093913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4862824.020618557,
            "unit": "ns",
            "range": "± 635237.8802263596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8349279.979591837,
            "unit": "ns",
            "range": "± 565255.7483693897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998002.760529892,
            "unit": "ns",
            "range": "± 149357.45588960554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887352.306640625,
            "unit": "ns",
            "range": "± 40864.96533193055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236837.1844308036,
            "unit": "ns",
            "range": "± 21345.47286571919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3083873.1333007812,
            "unit": "ns",
            "range": "± 86298.50764219412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002674.6194069602,
            "unit": "ns",
            "range": "± 21731.8041585569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962428.8254743303,
            "unit": "ns",
            "range": "± 15865.952217603024"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1becd84cae80c40649bac919aaff17f0b9f0afb9",
          "message": "fix(swarm): break when `ObjectDisposedException`",
          "timestamp": "2023-08-21T21:07:08+09:00",
          "tree_id": "e35891be0b1ede8408f033468304136dcfd4c63c",
          "url": "https://github.com/planetarium/libplanet/commit/1becd84cae80c40649bac919aaff17f0b9f0afb9"
        },
        "date": 1692620476861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429780.3246753246,
            "unit": "ns",
            "range": "± 72926.18248133583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2653075.434782609,
            "unit": "ns",
            "range": "± 66204.16832443139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1813419.537313433,
            "unit": "ns",
            "range": "± 85192.66085553564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4824418.40625,
            "unit": "ns",
            "range": "± 148586.76325947212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285184.829787234,
            "unit": "ns",
            "range": "± 10956.408818029247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274704.10256410256,
            "unit": "ns",
            "range": "± 9602.353883005298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251318.11290322582,
            "unit": "ns",
            "range": "± 11368.598740166386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4570635.133333334,
            "unit": "ns",
            "range": "± 53774.66741859919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4204235.466666667,
            "unit": "ns",
            "range": "± 35245.328042707944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22510.284210526315,
            "unit": "ns",
            "range": "± 1633.8584385094277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94525.12087912088,
            "unit": "ns",
            "range": "± 5123.828728673651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83082.90425531915,
            "unit": "ns",
            "range": "± 5245.660389904998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95060.36734693877,
            "unit": "ns",
            "range": "± 12494.36781104533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6295.958333333333,
            "unit": "ns",
            "range": "± 768.7504819567737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22573.947368421053,
            "unit": "ns",
            "range": "± 2144.273781584791"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48568.680555555555,
            "unit": "ns",
            "range": "± 2274.8435007393423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8345417.066666666,
            "unit": "ns",
            "range": "± 131416.9416407547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22468016.933333334,
            "unit": "ns",
            "range": "± 153931.969969328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58866585.13333333,
            "unit": "ns",
            "range": "± 210773.76911712257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112540504.86666666,
            "unit": "ns",
            "range": "± 1808395.4516613367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227618121.53333333,
            "unit": "ns",
            "range": "± 3818678.3276979644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3686049.5,
            "unit": "ns",
            "range": "± 76195.93915923042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3800347.53125,
            "unit": "ns",
            "range": "± 116254.51004445553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467778.866666666,
            "unit": "ns",
            "range": "± 79739.7684066889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063808.163265306,
            "unit": "ns",
            "range": "± 161687.5310970653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6532160.035714285,
            "unit": "ns",
            "range": "± 171235.27128474915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5197412.252403846,
            "unit": "ns",
            "range": "± 25138.208166675067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1604666.5651506695,
            "unit": "ns",
            "range": "± 893.5575870199801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087344.0922154018,
            "unit": "ns",
            "range": "± 1832.9839585401564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2718359.8072916665,
            "unit": "ns",
            "range": "± 9493.867176879183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818185.0298978365,
            "unit": "ns",
            "range": "± 293.88943984087337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748528.838671875,
            "unit": "ns",
            "range": "± 429.2719633446075"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "eb2285b7e1091f73ef8f3543b0128b430df8b3d8",
          "message": "test: more logging",
          "timestamp": "2023-08-21T21:42:16+09:00",
          "tree_id": "3e02247bf132d957c02edace95bcb603e707a4ad",
          "url": "https://github.com/planetarium/libplanet/commit/eb2285b7e1091f73ef8f3543b0128b430df8b3d8"
        },
        "date": 1692622554974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360076.0930232557,
            "unit": "ns",
            "range": "± 73777.93044434134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2629281.888888889,
            "unit": "ns",
            "range": "± 87112.7832137422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1748661.5652173914,
            "unit": "ns",
            "range": "± 98626.08428176565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4561657,
            "unit": "ns",
            "range": "± 145991.4490668788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282810.13636363635,
            "unit": "ns",
            "range": "± 6463.2527731082055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272135.4375,
            "unit": "ns",
            "range": "± 8192.532106653496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234241.86486486485,
            "unit": "ns",
            "range": "± 7954.847621147476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4248006.857142857,
            "unit": "ns",
            "range": "± 20693.785971256584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3877254.5714285714,
            "unit": "ns",
            "range": "± 29173.66342258897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20861.572916666668,
            "unit": "ns",
            "range": "± 1614.8728269615451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89404.38157894737,
            "unit": "ns",
            "range": "± 4393.241436470662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73848.3,
            "unit": "ns",
            "range": "± 2772.674132843378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82460.07216494845,
            "unit": "ns",
            "range": "± 9394.31731292849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5530.938144329897,
            "unit": "ns",
            "range": "± 584.7520452870207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21852.177083333332,
            "unit": "ns",
            "range": "± 1473.2043628184083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49166.12765957447,
            "unit": "ns",
            "range": "± 3626.1481184689883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8667417.8,
            "unit": "ns",
            "range": "± 47664.27007758088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20258760.4,
            "unit": "ns",
            "range": "± 67158.1727978275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52106989.733333334,
            "unit": "ns",
            "range": "± 257901.7708094268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104354513.13333334,
            "unit": "ns",
            "range": "± 318825.5108268172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205127649.42857143,
            "unit": "ns",
            "range": "± 611088.3529890575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322821.3181818184,
            "unit": "ns",
            "range": "± 45301.830455382544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547754.3529411764,
            "unit": "ns",
            "range": "± 72161.68362342751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4259722.333333333,
            "unit": "ns",
            "range": "± 61404.11491756496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796511.4444444445,
            "unit": "ns",
            "range": "± 143395.55932542865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6131809.5,
            "unit": "ns",
            "range": "± 118688.48361712831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5198128.106370192,
            "unit": "ns",
            "range": "± 35435.32234103423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1682042.906529018,
            "unit": "ns",
            "range": "± 2011.2357877766333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070559.784877232,
            "unit": "ns",
            "range": "± 455.59129054830606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570813.8055889425,
            "unit": "ns",
            "range": "± 4059.54995100387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796669.2111816406,
            "unit": "ns",
            "range": "± 612.2103218458327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737784.5756835938,
            "unit": "ns",
            "range": "± 327.0252744611113"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "27c61a66bda5c039efed7ac6d700e67ae06a413c",
          "message": "test: make cleanup netmq surely",
          "timestamp": "2023-08-21T22:45:36+09:00",
          "tree_id": "7c9c1fcf43137031c14ed3b496c9aa2d0492f950",
          "url": "https://github.com/planetarium/libplanet/commit/27c61a66bda5c039efed7ac6d700e67ae06a413c"
        },
        "date": 1692626337608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1288825.3404255318,
            "unit": "ns",
            "range": "± 96539.70916836745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471359.314285714,
            "unit": "ns",
            "range": "± 79115.14106807779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666032.0869565217,
            "unit": "ns",
            "range": "± 93643.7597906482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4260454.857142857,
            "unit": "ns",
            "range": "± 95140.87925329442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271857.53571428574,
            "unit": "ns",
            "range": "± 6628.234838382789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258031.82857142857,
            "unit": "ns",
            "range": "± 8417.565941619501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219338.76923076922,
            "unit": "ns",
            "range": "± 2278.2644035115177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4162647.6,
            "unit": "ns",
            "range": "± 34107.88815718231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3706690.2666666666,
            "unit": "ns",
            "range": "± 33047.39994195927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17545.744680851065,
            "unit": "ns",
            "range": "± 1354.7737099157669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83739.30927835051,
            "unit": "ns",
            "range": "± 5233.391115712371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67133.33333333333,
            "unit": "ns",
            "range": "± 1043.0142798057886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69528.62637362638,
            "unit": "ns",
            "range": "± 8005.681894266447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4886.731958762886,
            "unit": "ns",
            "range": "± 500.7300610829803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16417.126315789475,
            "unit": "ns",
            "range": "± 1576.5966661465345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45675.585106382976,
            "unit": "ns",
            "range": "± 3169.337932997874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7996199.214285715,
            "unit": "ns",
            "range": "± 51556.87848487722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20146064.85714286,
            "unit": "ns",
            "range": "± 61429.12097300826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51979507.333333336,
            "unit": "ns",
            "range": "± 215857.66476667862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103340622.28571428,
            "unit": "ns",
            "range": "± 261628.64856934108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208318556.86666667,
            "unit": "ns",
            "range": "± 582729.6549675092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3206948.8571428573,
            "unit": "ns",
            "range": "± 41838.78793445355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444308.344262295,
            "unit": "ns",
            "range": "± 150650.31865824087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225874.866666666,
            "unit": "ns",
            "range": "± 44756.655160141374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3800146.9,
            "unit": "ns",
            "range": "± 134723.49285258306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6128416.4,
            "unit": "ns",
            "range": "± 89739.23352070827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908906.156770834,
            "unit": "ns",
            "range": "± 26633.682681374197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571395.8167317708,
            "unit": "ns",
            "range": "± 1798.6112335875443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059693.323939732,
            "unit": "ns",
            "range": "± 876.5311490982812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605318.943489583,
            "unit": "ns",
            "range": "± 4891.965626482976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810185.5829427083,
            "unit": "ns",
            "range": "± 12846.45148342094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728795.03359375,
            "unit": "ns",
            "range": "± 634.2361061276071"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "8b2faad12857c818e40d995d02f644943880d54e",
          "message": "fix: dispose `ConsensusReactor` surely",
          "timestamp": "2023-08-21T23:16:20+09:00",
          "tree_id": "c34cde4aa7b93590c6b2d949f30b808084934cf4",
          "url": "https://github.com/planetarium/libplanet/commit/8b2faad12857c818e40d995d02f644943880d54e"
        },
        "date": 1692628204278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395163.5263157894,
            "unit": "ns",
            "range": "± 111900.82925337231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657190.577777778,
            "unit": "ns",
            "range": "± 100136.60419589761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1776442.0111111111,
            "unit": "ns",
            "range": "± 98699.57629594908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4682036.527777778,
            "unit": "ns",
            "range": "± 154884.8702433956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275663.0256410256,
            "unit": "ns",
            "range": "± 9636.219490976355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262040.41176470587,
            "unit": "ns",
            "range": "± 9845.040296873285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227790.4516129032,
            "unit": "ns",
            "range": "± 6918.941098360401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4223301.142857143,
            "unit": "ns",
            "range": "± 16159.873385152987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3948044.9285714286,
            "unit": "ns",
            "range": "± 32092.019402060036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20961.967391304348,
            "unit": "ns",
            "range": "± 1376.4755315787052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91144.67741935483,
            "unit": "ns",
            "range": "± 5625.256100761857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73684.93023255814,
            "unit": "ns",
            "range": "± 3966.1521930713475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89130.27083333333,
            "unit": "ns",
            "range": "± 10636.136634857176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5819.791666666667,
            "unit": "ns",
            "range": "± 859.206462739914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22265.65625,
            "unit": "ns",
            "range": "± 2236.1973636092944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51092.68421052631,
            "unit": "ns",
            "range": "± 5621.09601689306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8027773.866666666,
            "unit": "ns",
            "range": "± 43566.56527309949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20375256.615384616,
            "unit": "ns",
            "range": "± 36591.65093419186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51800840.615384616,
            "unit": "ns",
            "range": "± 168586.26555443284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102874551.57142857,
            "unit": "ns",
            "range": "± 351076.20771295496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207503116.42857143,
            "unit": "ns",
            "range": "± 333844.17311713524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3409764.4615384615,
            "unit": "ns",
            "range": "± 34343.993765565916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3507096.066666667,
            "unit": "ns",
            "range": "± 55194.546626930285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4235869.733333333,
            "unit": "ns",
            "range": "± 61658.25978785541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3812973.909090909,
            "unit": "ns",
            "range": "± 120175.21164204467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6151505.947368421,
            "unit": "ns",
            "range": "± 175214.35400334062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4958834.658854167,
            "unit": "ns",
            "range": "± 5831.953996856106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567489.211216518,
            "unit": "ns",
            "range": "± 578.8634756913011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069340.0756510417,
            "unit": "ns",
            "range": "± 842.9935178413651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552604.4771634615,
            "unit": "ns",
            "range": "± 2641.2331326976964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823346.1296223958,
            "unit": "ns",
            "range": "± 643.5535007344996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739960.9706333706,
            "unit": "ns",
            "range": "± 468.80098050556893"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "53234c87e1252f2b6e723f2c5c168415af9563c8",
          "message": "fix: skip problem test",
          "timestamp": "2023-08-21T23:34:08+09:00",
          "tree_id": "962279f071ce9b813c91ee727a0029269deb8ed2",
          "url": "https://github.com/planetarium/libplanet/commit/53234c87e1252f2b6e723f2c5c168415af9563c8"
        },
        "date": 1692629456381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1727823.5555555555,
            "unit": "ns",
            "range": "± 94277.35394277851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3293305.3225806453,
            "unit": "ns",
            "range": "± 87139.24093670891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2184402.5507246377,
            "unit": "ns",
            "range": "± 104800.47715898562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5686533.7,
            "unit": "ns",
            "range": "± 163940.81636858027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326954.24242424243,
            "unit": "ns",
            "range": "± 9954.44285554917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323881.7380952381,
            "unit": "ns",
            "range": "± 11762.374233659619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283053.6666666667,
            "unit": "ns",
            "range": "± 10203.56305693803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5451030.214285715,
            "unit": "ns",
            "range": "± 52189.62088116545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4911677.8,
            "unit": "ns",
            "range": "± 91345.34362845213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23917.473684210527,
            "unit": "ns",
            "range": "± 2081.0724671817206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107136.65625,
            "unit": "ns",
            "range": "± 4688.402832314599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96017.14948453609,
            "unit": "ns",
            "range": "± 6714.333888284013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102118.7052631579,
            "unit": "ns",
            "range": "± 14884.961033027908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6209.895833333333,
            "unit": "ns",
            "range": "± 889.5572462176033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23607,
            "unit": "ns",
            "range": "± 2074.1910680929377"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57632.489130434784,
            "unit": "ns",
            "range": "± 4285.737597908009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9703276.764705881,
            "unit": "ns",
            "range": "± 196606.79950904846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27891207.2,
            "unit": "ns",
            "range": "± 514112.2640981942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67727025.06666666,
            "unit": "ns",
            "range": "± 306412.6958530338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136040324.73333332,
            "unit": "ns",
            "range": "± 1009997.0317709191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268976480.64285713,
            "unit": "ns",
            "range": "± 1759770.3674083166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4232369.363636363,
            "unit": "ns",
            "range": "± 101284.3065164991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4629267.9677419355,
            "unit": "ns",
            "range": "± 139899.79853559093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5332487.769230769,
            "unit": "ns",
            "range": "± 75396.88586755849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4982893.538461538,
            "unit": "ns",
            "range": "± 47492.170080297416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7761155.166666667,
            "unit": "ns",
            "range": "± 143360.75619402895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6187421.016927083,
            "unit": "ns",
            "range": "± 16784.62407363362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891062.03828125,
            "unit": "ns",
            "range": "± 8550.565931601435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289777.9044363839,
            "unit": "ns",
            "range": "± 1158.5948222236088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3143997.684795673,
            "unit": "ns",
            "range": "± 3289.8625519485863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988845.3235677084,
            "unit": "ns",
            "range": "± 980.8246126649901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900403.600390625,
            "unit": "ns",
            "range": "± 743.3195831390971"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "6e12780dae1e840aa10d8424f107cd7f092a03b5",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-21T23:52:23+09:00",
          "tree_id": "0c2f05c765f195c8044314f704ed1036e9e4447b",
          "url": "https://github.com/planetarium/libplanet/commit/6e12780dae1e840aa10d8424f107cd7f092a03b5"
        },
        "date": 1692630429919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493258.0666666667,
            "unit": "ns",
            "range": "± 77291.8761140617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2874041.222222222,
            "unit": "ns",
            "range": "± 94188.14062839822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1868979.293478261,
            "unit": "ns",
            "range": "± 104838.30863098294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4845252.148148148,
            "unit": "ns",
            "range": "± 132652.82243908016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293798.0243902439,
            "unit": "ns",
            "range": "± 10510.439796906228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286994.42307692306,
            "unit": "ns",
            "range": "± 6999.02996234808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268447.5606060606,
            "unit": "ns",
            "range": "± 12659.853039770172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4573265.2,
            "unit": "ns",
            "range": "± 47160.142284712056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4319999.142857143,
            "unit": "ns",
            "range": "± 38939.56628271191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24917.115789473683,
            "unit": "ns",
            "range": "± 2034.5661771009954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103060.94736842105,
            "unit": "ns",
            "range": "± 6899.605607551321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85326.96842105263,
            "unit": "ns",
            "range": "± 5699.790373996469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95183.68085106384,
            "unit": "ns",
            "range": "± 12002.011315503698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.673469387755,
            "unit": "ns",
            "range": "± 1017.068343814663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23452.88172043011,
            "unit": "ns",
            "range": "± 2406.775638689305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52734.05376344086,
            "unit": "ns",
            "range": "± 3239.6960719151443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9259928.266666668,
            "unit": "ns",
            "range": "± 35104.23312582659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23151267.333333332,
            "unit": "ns",
            "range": "± 281025.6526904532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58472475.833333336,
            "unit": "ns",
            "range": "± 142122.92177729512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116471568.26666667,
            "unit": "ns",
            "range": "± 265693.8972656495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232703745.6,
            "unit": "ns",
            "range": "± 561866.9492187629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3831957.3333333335,
            "unit": "ns",
            "range": "± 57519.01263640281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4035774.8666666667,
            "unit": "ns",
            "range": "± 61890.52252262708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4697778.142857143,
            "unit": "ns",
            "range": "± 56169.88805381423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4263800.675,
            "unit": "ns",
            "range": "± 151345.74140627397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6657591.703703703,
            "unit": "ns",
            "range": "± 181857.78116996447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5068692.44140625,
            "unit": "ns",
            "range": "± 29612.183275693307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1605054.9764322916,
            "unit": "ns",
            "range": "± 1222.0275712024497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083721.6463448661,
            "unit": "ns",
            "range": "± 882.0940684116306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604673.1657366073,
            "unit": "ns",
            "range": "± 1962.14770148661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820528.8051432292,
            "unit": "ns",
            "range": "± 559.295440203426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762991.2635967548,
            "unit": "ns",
            "range": "± 692.3442364525569"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "3f431f8d16d36808358a89e31647fe21fcbc19da",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-21T23:52:10+09:00",
          "tree_id": "6d0198dd42c0f378b366bd928f7cf2a6e7f89382",
          "url": "https://github.com/planetarium/libplanet/commit/3f431f8d16d36808358a89e31647fe21fcbc19da"
        },
        "date": 1692630733492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705170.2424242424,
            "unit": "ns",
            "range": "± 237697.3780899112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3209649.63,
            "unit": "ns",
            "range": "± 382238.6471358109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132179.3673469387,
            "unit": "ns",
            "range": "± 290944.24772218225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5962419.175257732,
            "unit": "ns",
            "range": "± 606291.4700100592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351841.55102040817,
            "unit": "ns",
            "range": "± 66058.06095548371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353143.6224489796,
            "unit": "ns",
            "range": "± 61888.146286287265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293466.8617021277,
            "unit": "ns",
            "range": "± 49981.51473297076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4828206.979591837,
            "unit": "ns",
            "range": "± 467016.9353293653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4520658.306122449,
            "unit": "ns",
            "range": "± 441192.10821360716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26781.622448979593,
            "unit": "ns",
            "range": "± 9825.524881984733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111852.61855670103,
            "unit": "ns",
            "range": "± 26017.25485913279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113774,
            "unit": "ns",
            "range": "± 23057.87501050346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117898.875,
            "unit": "ns",
            "range": "± 26758.80154001473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6224.444444444444,
            "unit": "ns",
            "range": "± 1061.4079171279168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26057.14285714286,
            "unit": "ns",
            "range": "± 10253.5585977516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60049.379310344826,
            "unit": "ns",
            "range": "± 10574.672501654195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9704040.308510639,
            "unit": "ns",
            "range": "± 777039.7985071018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25713629.45360825,
            "unit": "ns",
            "range": "± 2454053.070242824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70001994.9090909,
            "unit": "ns",
            "range": "± 5411699.007080911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139043905.43333334,
            "unit": "ns",
            "range": "± 4045447.8722423445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275074269.8611111,
            "unit": "ns",
            "range": "± 13444358.395224893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4034120.3608247424,
            "unit": "ns",
            "range": "± 387133.9928496492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4156030.5306122447,
            "unit": "ns",
            "range": "± 456204.73494822416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5352837.144329897,
            "unit": "ns",
            "range": "± 575084.467726825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4427817.097826087,
            "unit": "ns",
            "range": "± 474614.1097933398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7872913.34,
            "unit": "ns",
            "range": "± 656747.7834863142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5904887.667131697,
            "unit": "ns",
            "range": "± 169368.98661520478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880664.609592014,
            "unit": "ns",
            "range": "± 36515.766409881115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304883.9311266448,
            "unit": "ns",
            "range": "± 27718.099953997527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3073955.296875,
            "unit": "ns",
            "range": "± 60953.59543495418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990688.7791466346,
            "unit": "ns",
            "range": "± 13216.730208918185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946421.7840670072,
            "unit": "ns",
            "range": "± 25311.262258993494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "80fb21ad158f0ba4cdcc6c4298561c6e60c7df16",
          "message": "fix: change timeout config",
          "timestamp": "2023-08-22T00:08:19+09:00",
          "tree_id": "b2e85b2aa24adc76412975b8f276ec2495628f11",
          "url": "https://github.com/planetarium/libplanet/commit/80fb21ad158f0ba4cdcc6c4298561c6e60c7df16"
        },
        "date": 1692631338906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1419616.292929293,
            "unit": "ns",
            "range": "± 128017.15817948818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2588929.8913043477,
            "unit": "ns",
            "range": "± 99714.55750451513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732431.1341463414,
            "unit": "ns",
            "range": "± 91755.14991067219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4440668.65,
            "unit": "ns",
            "range": "± 98860.9065134471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282869.9552238806,
            "unit": "ns",
            "range": "± 13447.66811196201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272107.9285714286,
            "unit": "ns",
            "range": "± 9594.056184322888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243383.45454545456,
            "unit": "ns",
            "range": "± 11396.991152434546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291352.533333333,
            "unit": "ns",
            "range": "± 63536.234390718986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3930618.214285714,
            "unit": "ns",
            "range": "± 34967.8847893729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23237.98969072165,
            "unit": "ns",
            "range": "± 1953.5235873013187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97323.11340206186,
            "unit": "ns",
            "range": "± 7919.241886691093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78372.17171717172,
            "unit": "ns",
            "range": "± 6171.841919094653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82726.14285714286,
            "unit": "ns",
            "range": "± 12951.413193599383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5198.893617021276,
            "unit": "ns",
            "range": "± 524.532448601837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22152.908163265307,
            "unit": "ns",
            "range": "± 2495.4570809824518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52782.54838709677,
            "unit": "ns",
            "range": "± 5250.720135943527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7970098.733333333,
            "unit": "ns",
            "range": "± 60978.6115002239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20077486.2,
            "unit": "ns",
            "range": "± 86854.81236539845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51800949,
            "unit": "ns",
            "range": "± 205210.2664892072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104337333.46666667,
            "unit": "ns",
            "range": "± 324146.774914184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207093996.6,
            "unit": "ns",
            "range": "± 433413.57093473664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392379.6666666665,
            "unit": "ns",
            "range": "± 78850.62536488428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3560378.53125,
            "unit": "ns",
            "range": "± 108780.5435965471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4279002.928571428,
            "unit": "ns",
            "range": "± 48584.481448399645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3882988.269230769,
            "unit": "ns",
            "range": "± 91490.71417605513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6120843.35,
            "unit": "ns",
            "range": "± 99154.56193304577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5013760.849330357,
            "unit": "ns",
            "range": "± 15950.371613488329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551831.3631417411,
            "unit": "ns",
            "range": "± 623.3389639915227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086941.4423177084,
            "unit": "ns",
            "range": "± 598.2658649781846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544454.49609375,
            "unit": "ns",
            "range": "± 1793.6132724367744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869612.2036458333,
            "unit": "ns",
            "range": "± 2990.0608374771055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763703.0457682292,
            "unit": "ns",
            "range": "± 435.15352673459313"
          }
        ]
      }
    ]
  }
}