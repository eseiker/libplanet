window.BENCHMARK_DATA = {
  "lastUpdate": 1687489154942,
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
        "date": 1687250142976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8574401.833333334,
            "unit": "ns",
            "range": "± 122089.87994493933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23998186.641791046,
            "unit": "ns",
            "range": "± 1096737.584654538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59230440.766666666,
            "unit": "ns",
            "range": "± 969082.2822330757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114856618.93333334,
            "unit": "ns",
            "range": "± 940161.0685128424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241350470.42307693,
            "unit": "ns",
            "range": "± 3168288.943651722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78833.30526315789,
            "unit": "ns",
            "range": "± 16651.931809261383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395856.32258064515,
            "unit": "ns",
            "range": "± 28853.85599623268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376153.6956521739,
            "unit": "ns",
            "range": "± 32976.29032949833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340308.1235955056,
            "unit": "ns",
            "range": "± 20446.28421444181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4909840.5813953485,
            "unit": "ns",
            "range": "± 180621.5703276608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4585006.447368421,
            "unit": "ns",
            "range": "± 99050.5626286526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20138.351648351647,
            "unit": "ns",
            "range": "± 1444.9274904808383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101437.66853932584,
            "unit": "ns",
            "range": "± 8031.399313767234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101098.30526315789,
            "unit": "ns",
            "range": "± 13969.827943375869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121644.96391752578,
            "unit": "ns",
            "range": "± 17069.823137302526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6661.876288659794,
            "unit": "ns",
            "range": "± 1020.9203798710663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19542.935483870966,
            "unit": "ns",
            "range": "± 1709.8360893121203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2138936.7023809524,
            "unit": "ns",
            "range": "± 413663.5426767146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4026022.6,
            "unit": "ns",
            "range": "± 845990.606326186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3286858.1379310344,
            "unit": "ns",
            "range": "± 439212.78630107397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16536359.99484536,
            "unit": "ns",
            "range": "± 3962088.158131207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4136003.9438202246,
            "unit": "ns",
            "range": "± 502607.49903155863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4213093.357142857,
            "unit": "ns",
            "range": "± 362163.97984321875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5292116.910958904,
            "unit": "ns",
            "range": "± 261234.7148398158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5221827.764044944,
            "unit": "ns",
            "range": "± 325264.09499188024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9378294.629629629,
            "unit": "ns",
            "range": "± 385057.0613622799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7251850.756610577,
            "unit": "ns",
            "range": "± 67225.61888785775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2250477.2622070312,
            "unit": "ns",
            "range": "± 34031.83046083989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1521011.9278846155,
            "unit": "ns",
            "range": "± 16193.564464667013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3227472.5868389425,
            "unit": "ns",
            "range": "± 36796.9895603068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031940.153515625,
            "unit": "ns",
            "range": "± 7187.999013732713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894812.4790414664,
            "unit": "ns",
            "range": "± 8552.680753543793"
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
        "date": 1687253587840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8573325.68852459,
            "unit": "ns",
            "range": "± 381439.0819011839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21445382.25,
            "unit": "ns",
            "range": "± 1138992.4346760914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58000613.76436782,
            "unit": "ns",
            "range": "± 5618890.62548731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110575204.44444445,
            "unit": "ns",
            "range": "± 2312357.1991289402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235086550.22413793,
            "unit": "ns",
            "range": "± 10248422.323675416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73337.35555555555,
            "unit": "ns",
            "range": "± 11071.855075893924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363614.7588235294,
            "unit": "ns",
            "range": "± 37939.108086308435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349786.8,
            "unit": "ns",
            "range": "± 40835.62774400326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334048.0119047619,
            "unit": "ns",
            "range": "± 32970.517966811756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4428332.75949367,
            "unit": "ns",
            "range": "± 229548.55346969876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3973498.276595745,
            "unit": "ns",
            "range": "± 154895.45031080494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21012.18947368421,
            "unit": "ns",
            "range": "± 4014.5885836076286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124557.30612244898,
            "unit": "ns",
            "range": "± 18014.055931014962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127385.42222222222,
            "unit": "ns",
            "range": "± 12151.681907888797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131578.01030927835,
            "unit": "ns",
            "range": "± 17241.999831742527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8362.815789473685,
            "unit": "ns",
            "range": "± 1099.3930652783304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22653.005154639177,
            "unit": "ns",
            "range": "± 3941.330988500034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742571.8894736841,
            "unit": "ns",
            "range": "± 186190.38234932878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3297282.5274725277,
            "unit": "ns",
            "range": "± 300901.65151614056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2906510.2210526317,
            "unit": "ns",
            "range": "± 382126.3072265776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6943363.043956044,
            "unit": "ns",
            "range": "± 439050.5963278773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3541690.197674419,
            "unit": "ns",
            "range": "± 220215.57085802348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4002229.2040816327,
            "unit": "ns",
            "range": "± 420567.0819912113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4881707.189655173,
            "unit": "ns",
            "range": "± 360484.0495716355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4851787.379120879,
            "unit": "ns",
            "range": "± 537041.9975950533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8545376.369565217,
            "unit": "ns",
            "range": "± 679174.5896131264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7432376.5445963545,
            "unit": "ns",
            "range": "± 460260.02136031416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2226975.470249369,
            "unit": "ns",
            "range": "± 151436.75663880527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422300.127907986,
            "unit": "ns",
            "range": "± 53467.27924010695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3081561.09125,
            "unit": "ns",
            "range": "± 242403.39593182236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929963.0241279987,
            "unit": "ns",
            "range": "± 58686.9476030894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891724.8890216885,
            "unit": "ns",
            "range": "± 41955.395035802496"
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
        "date": 1687434615292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9091420.122448979,
            "unit": "ns",
            "range": "± 636172.4829827063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23408803.35185185,
            "unit": "ns",
            "range": "± 1220145.9374410824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56678862.344262294,
            "unit": "ns",
            "range": "± 2545109.9337769733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111553430.96153846,
            "unit": "ns",
            "range": "± 2962906.480818134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269968279.5967742,
            "unit": "ns",
            "range": "± 54196363.145097874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79902.1046511628,
            "unit": "ns",
            "range": "± 9608.702444113227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387498.2,
            "unit": "ns",
            "range": "± 50094.306553851355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 380584.2888888889,
            "unit": "ns",
            "range": "± 59419.87832163831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358866.9193548387,
            "unit": "ns",
            "range": "± 45793.56529088438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4611698.81443299,
            "unit": "ns",
            "range": "± 449110.89620153327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4420083.822222223,
            "unit": "ns",
            "range": "± 573323.5029035453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26695.80681818182,
            "unit": "ns",
            "range": "± 2798.267523784247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127639.29885057472,
            "unit": "ns",
            "range": "± 15084.88380227884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127275.74117647059,
            "unit": "ns",
            "range": "± 13633.795719385234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139594.1935483871,
            "unit": "ns",
            "range": "± 28243.513534375987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9358.693548387097,
            "unit": "ns",
            "range": "± 1069.0459608827225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26394.784090909092,
            "unit": "ns",
            "range": "± 3622.3223894453854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1942582.4666666666,
            "unit": "ns",
            "range": "± 381604.39774697344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3627352.7444444443,
            "unit": "ns",
            "range": "± 596654.6351193086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2838535.925531915,
            "unit": "ns",
            "range": "± 388689.36924806953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9037272.257894738,
            "unit": "ns",
            "range": "± 2141329.206642094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4036651.8260869565,
            "unit": "ns",
            "range": "± 674682.4349124216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5121958.666666667,
            "unit": "ns",
            "range": "± 1725821.7926911567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6045443.683908046,
            "unit": "ns",
            "range": "± 1761724.9745116523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5349711.361702127,
            "unit": "ns",
            "range": "± 640934.5329127609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9086607.797752809,
            "unit": "ns",
            "range": "± 1427623.2388298009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7856956.35053228,
            "unit": "ns",
            "range": "± 727850.0351621269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2153492.5297976765,
            "unit": "ns",
            "range": "± 74289.65461580476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1510791.4109987745,
            "unit": "ns",
            "range": "± 61211.65259281709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3411190.397348873,
            "unit": "ns",
            "range": "± 152650.8033506478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855038.0322753906,
            "unit": "ns",
            "range": "± 15786.992577731415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845100.3881429037,
            "unit": "ns",
            "range": "± 21798.487028649117"
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
          "id": "24d5380751b1340f84acaa7a72e3293095d31c87",
          "message": "Merge pull request #3235 from greymistcube/release/2.1.1\n\n🚀 Release 2.1.1",
          "timestamp": "2023-06-22T23:47:07+09:00",
          "tree_id": "544a06c065337a6185577753894cdc601e3d170c",
          "url": "https://github.com/planetarium/libplanet/commit/24d5380751b1340f84acaa7a72e3293095d31c87"
        },
        "date": 1687446313848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8722327.1,
            "unit": "ns",
            "range": "± 280481.4997664677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21582341.42857143,
            "unit": "ns",
            "range": "± 381908.4875255739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53826806.64,
            "unit": "ns",
            "range": "± 1421898.005724241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118989264.84065934,
            "unit": "ns",
            "range": "± 22054464.759965282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255904700.1978022,
            "unit": "ns",
            "range": "± 43112226.725862585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69051.2311827957,
            "unit": "ns",
            "range": "± 9983.94185368792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347064.597826087,
            "unit": "ns",
            "range": "± 21996.402659965464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314358.87234042556,
            "unit": "ns",
            "range": "± 20947.050977794548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297623.6597938144,
            "unit": "ns",
            "range": "± 20951.820059109523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132800.9285714286,
            "unit": "ns",
            "range": "± 67317.1535845454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3787475.2,
            "unit": "ns",
            "range": "± 69667.81277421342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21799.458333333332,
            "unit": "ns",
            "range": "± 4454.911751542908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105941.84042553192,
            "unit": "ns",
            "range": "± 21825.991196033137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105959.17346938775,
            "unit": "ns",
            "range": "± 14957.199777051486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119330.3894736842,
            "unit": "ns",
            "range": "± 18320.076585883966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6632.979166666667,
            "unit": "ns",
            "range": "± 1316.725515729049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19184.532967032967,
            "unit": "ns",
            "range": "± 3979.697013734001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731328.3,
            "unit": "ns",
            "range": "± 184823.39968291996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3286994.1117647057,
            "unit": "ns",
            "range": "± 233137.17214157188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2818639.8214285714,
            "unit": "ns",
            "range": "± 467788.80261819833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12685118.469072165,
            "unit": "ns",
            "range": "± 5554967.747302984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362525.311111111,
            "unit": "ns",
            "range": "± 212919.89160128566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531699.7191011235,
            "unit": "ns",
            "range": "± 205327.22881044543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4511858.7397260275,
            "unit": "ns",
            "range": "± 199128.36307957428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4300311.369565218,
            "unit": "ns",
            "range": "± 190485.58996934132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8232223.994623655,
            "unit": "ns",
            "range": "± 631193.4851007089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7002235.783854167,
            "unit": "ns",
            "range": "± 193868.15328530944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947315.7405598958,
            "unit": "ns",
            "range": "± 15760.99970912723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277526.037109375,
            "unit": "ns",
            "range": "± 16085.030648776967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565975.4809570312,
            "unit": "ns",
            "range": "± 64107.39697103045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 763211.5521484375,
            "unit": "ns",
            "range": "± 13107.799778379234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771046.0532226562,
            "unit": "ns",
            "range": "± 6147.022270134688"
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
          "id": "af1aac12d85edc3ac639ebcd3484d55ed5c0076e",
          "message": "Merge pull request #3236 from greymistcube/prepare/2.1.2\n\n🔧 Prepare 2.1.2",
          "timestamp": "2023-06-23T11:35:27+09:00",
          "tree_id": "eec1297b63193313b8d4c6d719ea52a649f84825",
          "url": "https://github.com/planetarium/libplanet/commit/af1aac12d85edc3ac639ebcd3484d55ed5c0076e"
        },
        "date": 1687489106660,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9565735.132653061,
            "unit": "ns",
            "range": "± 779531.6790614105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24568980.476190478,
            "unit": "ns",
            "range": "± 895753.1071542535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61611813.53333333,
            "unit": "ns",
            "range": "± 3424439.060437909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118200390.14285715,
            "unit": "ns",
            "range": "± 2072154.7345971353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243834162.5952381,
            "unit": "ns",
            "range": "± 8253356.392895201"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80463.51685393258,
            "unit": "ns",
            "range": "± 12908.129458453304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331869.5,
            "unit": "ns",
            "range": "± 32038.19672237577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333697.175257732,
            "unit": "ns",
            "range": "± 41663.89427260188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 383531.11616161617,
            "unit": "ns",
            "range": "± 66353.61734379118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4460619.565217392,
            "unit": "ns",
            "range": "± 307474.2037280599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3928016.9943820224,
            "unit": "ns",
            "range": "± 217224.8005898981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17413.733333333334,
            "unit": "ns",
            "range": "± 2848.1558198520856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94135.68421052632,
            "unit": "ns",
            "range": "± 15644.291753661595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100547.04081632652,
            "unit": "ns",
            "range": "± 17278.545254945013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118612.94680851063,
            "unit": "ns",
            "range": "± 15241.65741743573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7526.4,
            "unit": "ns",
            "range": "± 1086.9885603524442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25144.044943820223,
            "unit": "ns",
            "range": "± 6877.845933122905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2041567.6744186047,
            "unit": "ns",
            "range": "± 475190.1515827406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3650634.8777777776,
            "unit": "ns",
            "range": "± 594190.5518817332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3197496.4139784947,
            "unit": "ns",
            "range": "± 496939.2126734122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8338784.725274725,
            "unit": "ns",
            "range": "± 1872845.3906866538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3779887.136842105,
            "unit": "ns",
            "range": "± 407604.3646209328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4034266.5319148935,
            "unit": "ns",
            "range": "± 419656.1936785169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5275618.4639175255,
            "unit": "ns",
            "range": "± 544595.0043663002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5255033.868131869,
            "unit": "ns",
            "range": "± 1020711.8362084941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8194277.329545454,
            "unit": "ns",
            "range": "± 495378.1046185478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6907042.329308712,
            "unit": "ns",
            "range": "± 207396.58179590016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2318048.8128083884,
            "unit": "ns",
            "range": "± 78973.81740626779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466782.7773664608,
            "unit": "ns",
            "range": "± 53915.3550623145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2800924.243430398,
            "unit": "ns",
            "range": "± 131816.1517681991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804748.1667131697,
            "unit": "ns",
            "range": "± 10560.732760673942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728104.0337890625,
            "unit": "ns",
            "range": "± 9819.22548040713"
          }
        ]
      }
    ]
  }
}