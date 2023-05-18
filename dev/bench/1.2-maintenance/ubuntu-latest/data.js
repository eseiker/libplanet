window.BENCHMARK_DATA = {
  "lastUpdate": 1684395670011,
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
        "date": 1684228239326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421356,
            "unit": "ns",
            "range": "± 103716.57848193798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3554766.4444444445,
            "unit": "ns",
            "range": "± 75876.84411731035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4318924.428571428,
            "unit": "ns",
            "range": "± 122548.81278583212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4463259.121212121,
            "unit": "ns",
            "range": "± 138666.4872393375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6974192.888888889,
            "unit": "ns",
            "range": "± 260986.60174990722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279439.41818181815,
            "unit": "ns",
            "range": "± 11735.591216925308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268409.1111111111,
            "unit": "ns",
            "range": "± 5986.966471441003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238183.88235294117,
            "unit": "ns",
            "range": "± 9657.86382104668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4342038.4,
            "unit": "ns",
            "range": "± 73251.17539944324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915742,
            "unit": "ns",
            "range": "± 53501.526206535185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18095.83146067416,
            "unit": "ns",
            "range": "± 1023.3350250746006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88683.09375,
            "unit": "ns",
            "range": "± 4122.415945676354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74531.69879518072,
            "unit": "ns",
            "range": "± 3955.9572667022253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86391.54639175258,
            "unit": "ns",
            "range": "± 11587.836580890738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5468.18556701031,
            "unit": "ns",
            "range": "± 592.9449336766882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17045.197916666668,
            "unit": "ns",
            "range": "± 1250.77123677052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5886890.26328125,
            "unit": "ns",
            "range": "± 16014.958792383744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836453.216517857,
            "unit": "ns",
            "range": "± 3755.600387908369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345109.331752232,
            "unit": "ns",
            "range": "± 6157.282894817134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611713.0971354167,
            "unit": "ns",
            "range": "± 9648.538981622934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832584.1943359375,
            "unit": "ns",
            "range": "± 1472.5425486801576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747215.2203776041,
            "unit": "ns",
            "range": "± 752.0370532739131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7835845.266666667,
            "unit": "ns",
            "range": "± 110626.13297077082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20784523.4,
            "unit": "ns",
            "range": "± 341348.2396319462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53364334.93333333,
            "unit": "ns",
            "range": "± 679191.8293558756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107137512.625,
            "unit": "ns",
            "range": "± 2088764.2184695357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208635797.2352941,
            "unit": "ns",
            "range": "± 4242663.47570367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398149.9263157896,
            "unit": "ns",
            "range": "± 94125.40923515818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693649.806451613,
            "unit": "ns",
            "range": "± 82006.74740914894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251882.84057971,
            "unit": "ns",
            "range": "± 108649.56703747188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5359060.25,
            "unit": "ns",
            "range": "± 148856.66611446382"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49298.806818181816,
            "unit": "ns",
            "range": "± 2671.558135301908"
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
        "date": 1684289841166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3565127.2268041237,
            "unit": "ns",
            "range": "± 338665.80228786217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4159005.6153846155,
            "unit": "ns",
            "range": "± 214622.68523343743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5042825.138888889,
            "unit": "ns",
            "range": "± 166183.76299199677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4997159.071428572,
            "unit": "ns",
            "range": "± 344958.4423399627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7919998.12,
            "unit": "ns",
            "range": "± 674312.9030872127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333436.31313131313,
            "unit": "ns",
            "range": "± 38451.84217042023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297307.4948453608,
            "unit": "ns",
            "range": "± 28016.582399656527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277031.86315789475,
            "unit": "ns",
            "range": "± 29582.858855349717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4531237.542168675,
            "unit": "ns",
            "range": "± 230063.6648107512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4302164.631578947,
            "unit": "ns",
            "range": "± 213962.1297351998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19582.848484848484,
            "unit": "ns",
            "range": "± 5727.830802432864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89687.36,
            "unit": "ns",
            "range": "± 11126.189805421376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92777.49484536082,
            "unit": "ns",
            "range": "± 17648.17350329992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115346.65979381443,
            "unit": "ns",
            "range": "± 18022.446375912383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13460.07,
            "unit": "ns",
            "range": "± 5550.534023366176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18907.60606060606,
            "unit": "ns",
            "range": "± 6165.90748210854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6373985.676339285,
            "unit": "ns",
            "range": "± 106179.52525235538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2027231.37671875,
            "unit": "ns",
            "range": "± 53395.25644014265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1563034.75703125,
            "unit": "ns",
            "range": "± 34209.35717810282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2963465.9539535986,
            "unit": "ns",
            "range": "± 93160.56184477989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 936437.0039341518,
            "unit": "ns",
            "range": "± 30381.590453765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838569.5091796875,
            "unit": "ns",
            "range": "± 15066.166765901742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9617529.614583334,
            "unit": "ns",
            "range": "± 590585.5318836573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22157264.05,
            "unit": "ns",
            "range": "± 1490199.81342477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54455482.56,
            "unit": "ns",
            "range": "± 2169263.1985349986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107009494.46428572,
            "unit": "ns",
            "range": "± 2517996.9212952303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232512151.63265306,
            "unit": "ns",
            "range": "± 15525933.280691966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437354.6333333333,
            "unit": "ns",
            "range": "± 143332.81887040372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2900286.131313131,
            "unit": "ns",
            "range": "± 216347.8776048789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2430742.3854166665,
            "unit": "ns",
            "range": "± 252862.77879036832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6270573.177083333,
            "unit": "ns",
            "range": "± 490228.51210821205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57826.9175257732,
            "unit": "ns",
            "range": "± 11029.699742504044"
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
        "date": 1684328835339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4370157.129032258,
            "unit": "ns",
            "range": "± 405419.1603861642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4707539.242105263,
            "unit": "ns",
            "range": "± 359449.6335996012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6238662.642105263,
            "unit": "ns",
            "range": "± 462395.69668861234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6103322.723404256,
            "unit": "ns",
            "range": "± 488964.4978799125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10214746.659574468,
            "unit": "ns",
            "range": "± 666699.9106463256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398673.5729166667,
            "unit": "ns",
            "range": "± 50047.05980800676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376189.2,
            "unit": "ns",
            "range": "± 39068.45952859006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324708.8829787234,
            "unit": "ns",
            "range": "± 44497.70872435278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5815785.161290322,
            "unit": "ns",
            "range": "± 385163.0807255627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5244818.204819277,
            "unit": "ns",
            "range": "± 277257.85777682497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23863.114583333332,
            "unit": "ns",
            "range": "± 5913.010146002833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117922.8947368421,
            "unit": "ns",
            "range": "± 17861.55653105871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128959.27835051547,
            "unit": "ns",
            "range": "± 22409.65668697234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142339.4945054945,
            "unit": "ns",
            "range": "± 25478.310973311145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7666.788888888889,
            "unit": "ns",
            "range": "± 1770.4729990385604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25731.928571428572,
            "unit": "ns",
            "range": "± 6169.607027285775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8773912.997916667,
            "unit": "ns",
            "range": "± 253499.79662260492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2557312.6512096776,
            "unit": "ns",
            "range": "± 75796.82098153752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1839369.009765625,
            "unit": "ns",
            "range": "± 24756.8514126413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3625017.882595486,
            "unit": "ns",
            "range": "± 75476.15066661687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1183034.0877757352,
            "unit": "ns",
            "range": "± 24189.445708080268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1061868.3051525299,
            "unit": "ns",
            "range": "± 23959.76178132996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10958574.410526317,
            "unit": "ns",
            "range": "± 1149159.0461965995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28767035.858695652,
            "unit": "ns",
            "range": "± 1616327.3677086015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74167720.15384616,
            "unit": "ns",
            "range": "± 2856503.894206044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 150234794.9375,
            "unit": "ns",
            "range": "± 4567728.919422705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300117301.8333333,
            "unit": "ns",
            "range": "± 8731762.101596132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1938321.6458333333,
            "unit": "ns",
            "range": "± 202787.03076188234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3645628.1739130435,
            "unit": "ns",
            "range": "± 349721.585080381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3165957.4680851065,
            "unit": "ns",
            "range": "± 299392.74486715667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7848563.233333333,
            "unit": "ns",
            "range": "± 660484.0757601864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70254.90217391304,
            "unit": "ns",
            "range": "± 13851.891583494085"
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
        "date": 1684329959024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3904311.252631579,
            "unit": "ns",
            "range": "± 309150.12291469256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3992261.606060606,
            "unit": "ns",
            "range": "± 394299.8406001742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4987527.020618557,
            "unit": "ns",
            "range": "± 388342.8169167186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4999095.5625,
            "unit": "ns",
            "range": "± 339151.22171394166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8468170.824742269,
            "unit": "ns",
            "range": "± 625150.3659866229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338867.32584269665,
            "unit": "ns",
            "range": "± 25574.70385760085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323180.4516129032,
            "unit": "ns",
            "range": "± 22893.716541366488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299800.6129032258,
            "unit": "ns",
            "range": "± 31088.500319401013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4982434.107526882,
            "unit": "ns",
            "range": "± 350670.5195145705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4421597.649484536,
            "unit": "ns",
            "range": "± 326496.9124463839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24037.81818181818,
            "unit": "ns",
            "range": "± 7458.559288527669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97309.18279569893,
            "unit": "ns",
            "range": "± 9799.760774527187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107275.41414141415,
            "unit": "ns",
            "range": "± 15102.713589806182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118693.08791208791,
            "unit": "ns",
            "range": "± 14250.812530946634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12005.16,
            "unit": "ns",
            "range": "± 6090.412529724257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24679.42,
            "unit": "ns",
            "range": "± 6970.586028404924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7041201.660408266,
            "unit": "ns",
            "range": "± 210374.41888779044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165104.2271875,
            "unit": "ns",
            "range": "± 56496.10552301291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1592288.855844351,
            "unit": "ns",
            "range": "± 42999.59277106996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2985498.667236328,
            "unit": "ns",
            "range": "± 56079.577238192935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974620.9867466518,
            "unit": "ns",
            "range": "± 14135.485751247563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902874.7633846507,
            "unit": "ns",
            "range": "± 17279.858743903787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9380389.470588235,
            "unit": "ns",
            "range": "± 505023.4583781986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24297164.75301205,
            "unit": "ns",
            "range": "± 1294927.509140135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60673615.309278354,
            "unit": "ns",
            "range": "± 3793098.7697236836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120187347.67,
            "unit": "ns",
            "range": "± 7164238.355885025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242344983.53947368,
            "unit": "ns",
            "range": "± 12268151.450984363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1670187,
            "unit": "ns",
            "range": "± 192783.6365802263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3125890.567010309,
            "unit": "ns",
            "range": "± 246703.5130686946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2566351.8061224488,
            "unit": "ns",
            "range": "± 281937.4306809626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6648156.4375,
            "unit": "ns",
            "range": "± 532710.912084946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61561.98947368421,
            "unit": "ns",
            "range": "± 10501.988351244505"
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
        "date": 1684395642509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4114262.875,
            "unit": "ns",
            "range": "± 103927.8658306526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4329853.8,
            "unit": "ns",
            "range": "± 110245.98420842065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5317521.333333333,
            "unit": "ns",
            "range": "± 85657.19673347998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5370061.714285715,
            "unit": "ns",
            "range": "± 70091.41052327922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8354949.862068965,
            "unit": "ns",
            "range": "± 212017.4432467972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333041.425,
            "unit": "ns",
            "range": "± 11718.174258089382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328986.5975609756,
            "unit": "ns",
            "range": "± 11851.17408910374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287773.0566037736,
            "unit": "ns",
            "range": "± 12016.119230521934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5214081.266666667,
            "unit": "ns",
            "range": "± 81964.10167564359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4938358.357142857,
            "unit": "ns",
            "range": "± 46826.4696226843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23031.973684210527,
            "unit": "ns",
            "range": "± 1592.8197721110105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104810.6237113402,
            "unit": "ns",
            "range": "± 7250.191441808239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90038.61904761905,
            "unit": "ns",
            "range": "± 3234.0352423708423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103472.56790123456,
            "unit": "ns",
            "range": "± 6120.890141430149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6689.01030927835,
            "unit": "ns",
            "range": "± 813.2478544756685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22760.815789473683,
            "unit": "ns",
            "range": "± 1526.5460266747777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7143471.877790178,
            "unit": "ns",
            "range": "± 20002.856679129894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2229542.544661458,
            "unit": "ns",
            "range": "± 2706.7192369662753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1616499.7893229167,
            "unit": "ns",
            "range": "± 3764.8166592173466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3098602.77890625,
            "unit": "ns",
            "range": "± 4981.631783678906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007727.8120492789,
            "unit": "ns",
            "range": "± 1054.2999992250343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909177.4021344866,
            "unit": "ns",
            "range": "± 518.4416569532275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10093264.466666667,
            "unit": "ns",
            "range": "± 171982.88441414607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26139741.533333335,
            "unit": "ns",
            "range": "± 328490.67385562684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66044249.733333334,
            "unit": "ns",
            "range": "± 712549.0873115306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129408989.42857143,
            "unit": "ns",
            "range": "± 1051240.228160032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258772184.66666666,
            "unit": "ns",
            "range": "± 1699744.9607064864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695547.7159090908,
            "unit": "ns",
            "range": "± 87842.64535918743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3288592.296296296,
            "unit": "ns",
            "range": "± 90916.12034931083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2748375.943661972,
            "unit": "ns",
            "range": "± 125375.09228401529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6435876.94117647,
            "unit": "ns",
            "range": "± 130721.91897424404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57793.57317073171,
            "unit": "ns",
            "range": "± 2938.1268494516767"
          }
        ]
      }
    ]
  }
}