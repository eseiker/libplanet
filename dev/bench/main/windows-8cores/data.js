window.BENCHMARK_DATA = {
  "lastUpdate": 1712050659098,
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
          "id": "1cd705f8031f944afb22d53c6d7c52ad070ce6bb",
          "message": "Merge pull request #3690 from riemannulus/ci/benchmark/use-large-runner\n\n🔀 ci: use large runner",
          "timestamp": "2024-03-08T16:33:12+09:00",
          "tree_id": "338c9f6bc38dfb9bc884984ee4efbfe67e0e2cbf",
          "url": "https://github.com/planetarium/libplanet/commit/1cd705f8031f944afb22d53c6d7c52ad070ce6bb"
        },
        "date": 1709883738278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946314,
            "unit": "ns",
            "range": "± 109138.80701180307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1654367.0588235294,
            "unit": "ns",
            "range": "± 87814.19560401286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515415.9574468085,
            "unit": "ns",
            "range": "± 149848.43690775387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6677651.785714285,
            "unit": "ns",
            "range": "± 286507.49061511713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36860.215053763444,
            "unit": "ns",
            "range": "± 4410.711758222106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5133871.428571428,
            "unit": "ns",
            "range": "± 81139.12485612342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12778860,
            "unit": "ns",
            "range": "± 215682.45441587764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31179800,
            "unit": "ns",
            "range": "± 751065.0347098021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63794831.578947365,
            "unit": "ns",
            "range": "± 1375324.21997814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 122632144.44444445,
            "unit": "ns",
            "range": "± 2524725.5345813967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3300584.6819196427,
            "unit": "ns",
            "range": "± 9546.339536832653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077527.8776041667,
            "unit": "ns",
            "range": "± 1549.241648618532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713775.732421875,
            "unit": "ns",
            "range": "± 4380.271456538178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891011.5885416667,
            "unit": "ns",
            "range": "± 13312.882495743494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 597558.7760416666,
            "unit": "ns",
            "range": "± 6094.020495534064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543200.3776041666,
            "unit": "ns",
            "range": "± 6494.439094123303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2031990,
            "unit": "ns",
            "range": "± 60668.030267610666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2182313.888888889,
            "unit": "ns",
            "range": "± 71299.75016096391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2630155.263157895,
            "unit": "ns",
            "range": "± 90300.51838278199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2915900,
            "unit": "ns",
            "range": "± 60536.985939726685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7609932.558139535,
            "unit": "ns",
            "range": "± 281016.17452257103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163096.55172413794,
            "unit": "ns",
            "range": "± 6988.109337389676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154183.33333333334,
            "unit": "ns",
            "range": "± 7512.412264257667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138742.1875,
            "unit": "ns",
            "range": "± 6367.222730329059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2781403.3333333335,
            "unit": "ns",
            "range": "± 45855.454055833616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430200,
            "unit": "ns",
            "range": "± 34699.73239913283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9215.053763440861,
            "unit": "ns",
            "range": "± 883.2925356866847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48069.230769230766,
            "unit": "ns",
            "range": "± 3406.1282127526265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42368.333333333336,
            "unit": "ns",
            "range": "± 1758.7063491665886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43618.47826086957,
            "unit": "ns",
            "range": "± 5709.2931636143585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2135.0515463917527,
            "unit": "ns",
            "range": "± 348.22204276193105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8693.181818181818,
            "unit": "ns",
            "range": "± 783.5661851829581"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5716038dda700b49d47668e22fa8a6637d2e63a",
          "message": "Merge pull request #3688 from riemannulus/introduce/libplanet.store.remote",
          "timestamp": "2024-03-08T18:20:31+09:00",
          "tree_id": "56c5ac4603fa37d1f9bb8d744b3c1951d8b80316",
          "url": "https://github.com/planetarium/libplanet/commit/b5716038dda700b49d47668e22fa8a6637d2e63a"
        },
        "date": 1709890191866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959076.2886597938,
            "unit": "ns",
            "range": "± 108112.9258896262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727426.1904761905,
            "unit": "ns",
            "range": "± 78594.88351213274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517984.693877551,
            "unit": "ns",
            "range": "± 151203.19867344268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6835310.869565218,
            "unit": "ns",
            "range": "± 262424.7051617417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35123.59550561798,
            "unit": "ns",
            "range": "± 3226.876567205441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5205950,
            "unit": "ns",
            "range": "± 58385.48291642894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12741946.666666666,
            "unit": "ns",
            "range": "± 184144.78335835433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31479014.285714287,
            "unit": "ns",
            "range": "± 368491.24998930615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64239561.11111111,
            "unit": "ns",
            "range": "± 1163210.269868739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126678526.66666667,
            "unit": "ns",
            "range": "± 1168641.2296012023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335391.0714285714,
            "unit": "ns",
            "range": "± 10272.878302473931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1024328.5757211539,
            "unit": "ns",
            "range": "± 4607.218760415342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750878.88671875,
            "unit": "ns",
            "range": "± 4786.184486914573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936202.5651041667,
            "unit": "ns",
            "range": "± 7385.867544465429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619455.234375,
            "unit": "ns",
            "range": "± 3459.1966061556172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562137.109375,
            "unit": "ns",
            "range": "± 2008.694430218544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159750,
            "unit": "ns",
            "range": "± 85201.64893000697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264805.5555555555,
            "unit": "ns",
            "range": "± 47657.916720559566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823317.3913043477,
            "unit": "ns",
            "range": "± 71103.82710690763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2826298.5714285714,
            "unit": "ns",
            "range": "± 136034.19379695525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7852515,
            "unit": "ns",
            "range": "± 262802.21435862157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173323.80952380953,
            "unit": "ns",
            "range": "± 7618.477417219403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160167.08860759492,
            "unit": "ns",
            "range": "± 7515.909988390395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144550,
            "unit": "ns",
            "range": "± 3256.006595105179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2801968.75,
            "unit": "ns",
            "range": "± 35394.24093926393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519833.3333333335,
            "unit": "ns",
            "range": "± 36903.438993186115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10423.595505617977,
            "unit": "ns",
            "range": "± 1308.1929305786416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54544.444444444445,
            "unit": "ns",
            "range": "± 6841.2050230789355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43057.89473684211,
            "unit": "ns",
            "range": "± 939.4536174900837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54966.666666666664,
            "unit": "ns",
            "range": "± 12477.653494735852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2346.875,
            "unit": "ns",
            "range": "± 402.87209018822784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10144.736842105263,
            "unit": "ns",
            "range": "± 1871.4181913811983"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d95f209e8358f2f90568cfc4de9ff819c8eea40",
          "message": "Merge pull request #3691 from riemannulus/release/4.1.0\n\n🚀  release: 4.1.0",
          "timestamp": "2024-03-08T18:41:55+09:00",
          "tree_id": "47ecf2c1422b8b0c0364b1cf8110a0853147d579",
          "url": "https://github.com/planetarium/libplanet/commit/7d95f209e8358f2f90568cfc4de9ff819c8eea40"
        },
        "date": 1709891472470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937540.404040404,
            "unit": "ns",
            "range": "± 95474.5354651389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702291.0714285714,
            "unit": "ns",
            "range": "± 72116.0359844043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520528.8659793814,
            "unit": "ns",
            "range": "± 161721.52438603304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6895711.111111111,
            "unit": "ns",
            "range": "± 314141.67756639584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37845.91836734694,
            "unit": "ns",
            "range": "± 4842.534234024619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5100813.333333333,
            "unit": "ns",
            "range": "± 34912.29555546843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13218514.285714285,
            "unit": "ns",
            "range": "± 106993.78743389987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31727600,
            "unit": "ns",
            "range": "± 230574.85685864495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63817566.666666664,
            "unit": "ns",
            "range": "± 317608.3542142219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126995563.33333333,
            "unit": "ns",
            "range": "± 777173.5142412505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3242688.359375,
            "unit": "ns",
            "range": "± 7126.932928024077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067394.0848214286,
            "unit": "ns",
            "range": "± 4306.152896263585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729489.5368303572,
            "unit": "ns",
            "range": "± 2011.6604259309922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905795.6119791667,
            "unit": "ns",
            "range": "± 9472.510628559756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642730.8268229166,
            "unit": "ns",
            "range": "± 1602.833955060509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559550.4231770834,
            "unit": "ns",
            "range": "± 2071.3707511173347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141632.2580645164,
            "unit": "ns",
            "range": "± 64189.51309519219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2232433.3333333335,
            "unit": "ns",
            "range": "± 56549.74948367735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2757528.5714285714,
            "unit": "ns",
            "range": "± 46192.41410533899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2798078.787878788,
            "unit": "ns",
            "range": "± 185499.6249914947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884658.823529412,
            "unit": "ns",
            "range": "± 318454.9325581066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171115.73033707865,
            "unit": "ns",
            "range": "± 11282.346416137394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157830.1204819277,
            "unit": "ns",
            "range": "± 8410.964605505316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141947.8260869565,
            "unit": "ns",
            "range": "± 3577.5651401499053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2782885,
            "unit": "ns",
            "range": "± 63465.64155426727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458000,
            "unit": "ns",
            "range": "± 46802.62100922697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10037.755102040815,
            "unit": "ns",
            "range": "± 1343.293022982051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50932.989690721646,
            "unit": "ns",
            "range": "± 5306.63345982893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43647.457627118645,
            "unit": "ns",
            "range": "± 1771.9418465785893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48109.278350515466,
            "unit": "ns",
            "range": "± 8059.441699985423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2148.8888888888887,
            "unit": "ns",
            "range": "± 277.72933410286987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9291.666666666666,
            "unit": "ns",
            "range": "± 1152.449717288001"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b96bef3ed28520b43e8779dbec5087131d48cf98",
          "message": "Merge pull request #3692 from riemannulus/prepare/4.2.0\n\n🚀 prepare: 4.2.0",
          "timestamp": "2024-03-08T19:32:11+09:00",
          "tree_id": "a1e22e4e11ca2f7252c1d598507a159fff85889d",
          "url": "https://github.com/planetarium/libplanet/commit/b96bef3ed28520b43e8779dbec5087131d48cf98"
        },
        "date": 1709894481640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980604.081632653,
            "unit": "ns",
            "range": "± 108487.50312217527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739203.488372093,
            "unit": "ns",
            "range": "± 90488.26176416398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524150,
            "unit": "ns",
            "range": "± 132901.9525006861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6777136.363636363,
            "unit": "ns",
            "range": "± 213091.86372633665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34467.441860465115,
            "unit": "ns",
            "range": "± 2857.8248355519754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4953926.666666667,
            "unit": "ns",
            "range": "± 37468.03335924537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13453680,
            "unit": "ns",
            "range": "± 73319.69332022216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31877864.285714287,
            "unit": "ns",
            "range": "± 266839.48965952964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67352280,
            "unit": "ns",
            "range": "± 928557.3812563843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127842626.66666667,
            "unit": "ns",
            "range": "± 1627031.5913460606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3418061.796875,
            "unit": "ns",
            "range": "± 8178.905422727603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058465.1302083333,
            "unit": "ns",
            "range": "± 3155.265326771789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747800.3981370192,
            "unit": "ns",
            "range": "± 1610.6900110875063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963687.3197115385,
            "unit": "ns",
            "range": "± 1703.3863344703282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644086.07421875,
            "unit": "ns",
            "range": "± 1746.9733315295455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569949.51171875,
            "unit": "ns",
            "range": "± 1205.9244282652003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185576.3157894737,
            "unit": "ns",
            "range": "± 74285.91017766834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317660,
            "unit": "ns",
            "range": "± 43945.81472198402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823362.5,
            "unit": "ns",
            "range": "± 52556.24130395932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2889621.4285714286,
            "unit": "ns",
            "range": "± 67893.03873737506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7857970,
            "unit": "ns",
            "range": "± 239828.58964322082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170907.01754385966,
            "unit": "ns",
            "range": "± 7423.030273824516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164874.1935483871,
            "unit": "ns",
            "range": "± 6909.15134367411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144148.71794871794,
            "unit": "ns",
            "range": "± 5039.677923860642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818321.4285714286,
            "unit": "ns",
            "range": "± 28598.202702306273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555628.5714285714,
            "unit": "ns",
            "range": "± 60513.28897735722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10669.791666666666,
            "unit": "ns",
            "range": "± 1551.3403231546629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54207.291666666664,
            "unit": "ns",
            "range": "± 5707.432730851321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43443.333333333336,
            "unit": "ns",
            "range": "± 1219.859611293188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54971.27659574468,
            "unit": "ns",
            "range": "± 9572.334939931952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2662.5,
            "unit": "ns",
            "range": "± 393.43293416313094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9623.91304347826,
            "unit": "ns",
            "range": "± 1247.711713429027"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9671f7952a37890619ef9b0fd41709719331afbe",
          "message": "Merge pull request #3695 from riemannulus/ci/use/self-hosted-macos\n\nci: use self-hosted macos",
          "timestamp": "2024-03-14T14:54:36+09:00",
          "tree_id": "703011aae57abc4e5aa6fa7b1e4ced12b79af3d1",
          "url": "https://github.com/planetarium/libplanet/commit/9671f7952a37890619ef9b0fd41709719331afbe"
        },
        "date": 1710396221665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979798.9898989899,
            "unit": "ns",
            "range": "± 112546.19685951505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1694221.0526315789,
            "unit": "ns",
            "range": "± 71514.87541774115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1539418.5567010308,
            "unit": "ns",
            "range": "± 152898.1055923471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6717447.05882353,
            "unit": "ns",
            "range": "± 212353.00832011426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35160.86956521739,
            "unit": "ns",
            "range": "± 3742.904100251425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4891040,
            "unit": "ns",
            "range": "± 34737.25459996597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13163433.333333334,
            "unit": "ns",
            "range": "± 67130.20042815164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33277240,
            "unit": "ns",
            "range": "± 513713.1951362967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65233005.55555555,
            "unit": "ns",
            "range": "± 1338187.8464252548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130594933.33333333,
            "unit": "ns",
            "range": "± 976124.461960715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344743.777901786,
            "unit": "ns",
            "range": "± 10515.324956367016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077450.6277901786,
            "unit": "ns",
            "range": "± 1306.3505529055992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745204.4401041666,
            "unit": "ns",
            "range": "± 1189.9702287012776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952760.5747767857,
            "unit": "ns",
            "range": "± 4107.16354189939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624998.73046875,
            "unit": "ns",
            "range": "± 2617.751915809916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554157.1419270834,
            "unit": "ns",
            "range": "± 1655.956072724026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2110655.172413793,
            "unit": "ns",
            "range": "± 58165.56778595107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2313970.8333333335,
            "unit": "ns",
            "range": "± 58838.01994101866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2710196.296296296,
            "unit": "ns",
            "range": "± 66272.92335766071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2898160,
            "unit": "ns",
            "range": "± 42134.78033982988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7757802.94117647,
            "unit": "ns",
            "range": "± 217915.2246691417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174273.5294117647,
            "unit": "ns",
            "range": "± 8196.861751988476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166734.4262295082,
            "unit": "ns",
            "range": "± 7476.783739146614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144640,
            "unit": "ns",
            "range": "± 4178.648519351186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2844128.5714285714,
            "unit": "ns",
            "range": "± 33746.73610591397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493676.1904761903,
            "unit": "ns",
            "range": "± 57921.8430711757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10735.78947368421,
            "unit": "ns",
            "range": "± 1565.8534339087305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51852.63157894737,
            "unit": "ns",
            "range": "± 4046.5599286849774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43870.833333333336,
            "unit": "ns",
            "range": "± 964.8064309877719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55118.36734693877,
            "unit": "ns",
            "range": "± 12630.876478136151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2371.4285714285716,
            "unit": "ns",
            "range": "± 498.4512094953955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9930.851063829787,
            "unit": "ns",
            "range": "± 1011.0440250504694"
          }
        ]
      },
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
          "id": "5fc05429fba439add17e3c91f90d4fff3e17bd9f",
          "message": "Merge pull request #3685 from s2quake/chore/split-changeslog\n\nSplit changes.md by major version",
          "timestamp": "2024-03-14T16:36:50+09:00",
          "tree_id": "5ec541d47c2fa91af9db7266b8c10e833a4378cf",
          "url": "https://github.com/planetarium/libplanet/commit/5fc05429fba439add17e3c91f90d4fff3e17bd9f"
        },
        "date": 1710402364795,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967330,
            "unit": "ns",
            "range": "± 104920.90190503348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1687258.4905660378,
            "unit": "ns",
            "range": "± 69789.2030275189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551969.0721649486,
            "unit": "ns",
            "range": "± 166987.1654005336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749916.216216216,
            "unit": "ns",
            "range": "± 203649.30437930342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35116.666666666664,
            "unit": "ns",
            "range": "± 3724.388193479613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4906392.307692308,
            "unit": "ns",
            "range": "± 22486.27216542208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13348220,
            "unit": "ns",
            "range": "± 211775.22517990627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32655253.333333332,
            "unit": "ns",
            "range": "± 310818.58251735085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63920292.85714286,
            "unit": "ns",
            "range": "± 397988.5260508547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128613333.33333333,
            "unit": "ns",
            "range": "± 1387936.1876370185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3307505.3125,
            "unit": "ns",
            "range": "± 11062.004880796729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052178.9192708333,
            "unit": "ns",
            "range": "± 2516.880786247702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753745.0130208334,
            "unit": "ns",
            "range": "± 1758.3653642392424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917561.2630208333,
            "unit": "ns",
            "range": "± 4337.203889395001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618486.5559895834,
            "unit": "ns",
            "range": "± 2050.1432274639806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562571.2239583334,
            "unit": "ns",
            "range": "± 1637.7826478628608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182355.8139534886,
            "unit": "ns",
            "range": "± 44235.5131105658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283716.6666666665,
            "unit": "ns",
            "range": "± 63419.79186342384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858570.8333333335,
            "unit": "ns",
            "range": "± 74028.89259205353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2823665.3333333335,
            "unit": "ns",
            "range": "± 140061.0537657845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7743540,
            "unit": "ns",
            "range": "± 197066.30229443085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176546.66666666666,
            "unit": "ns",
            "range": "± 7245.664201266446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168580.39215686274,
            "unit": "ns",
            "range": "± 5887.648753376619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144683.33333333334,
            "unit": "ns",
            "range": "± 3074.8027196400553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824600,
            "unit": "ns",
            "range": "± 35284.797336486474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537240,
            "unit": "ns",
            "range": "± 32007.204546119658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11443.75,
            "unit": "ns",
            "range": "± 1523.487170242906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51343.181818181816,
            "unit": "ns",
            "range": "± 3841.7786665663098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44120.75471698113,
            "unit": "ns",
            "range": "± 1833.3825915887778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53247.87234042553,
            "unit": "ns",
            "range": "± 9822.694029900003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2237.7551020408164,
            "unit": "ns",
            "range": "± 482.1590844375533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9494.505494505494,
            "unit": "ns",
            "range": "± 1140.6004887643505"
          }
        ]
      },
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
        "date": 1710403608527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963653,
            "unit": "ns",
            "range": "± 96115.91954982842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1750267.6056338027,
            "unit": "ns",
            "range": "± 71263.12766210246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1536580.412371134,
            "unit": "ns",
            "range": "± 118681.26751160654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6917653.333333333,
            "unit": "ns",
            "range": "± 259114.4504934942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36438.88888888889,
            "unit": "ns",
            "range": "± 3663.3837874337523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5049866.666666667,
            "unit": "ns",
            "range": "± 48763.09592109102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13435914.285714285,
            "unit": "ns",
            "range": "± 88129.24824145724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33033123.333333332,
            "unit": "ns",
            "range": "± 500191.5425495469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65486560,
            "unit": "ns",
            "range": "± 1014016.2803708542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132949500,
            "unit": "ns",
            "range": "± 815455.6771698701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336202.421875,
            "unit": "ns",
            "range": "± 18531.862727670592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055166.796875,
            "unit": "ns",
            "range": "± 2329.862193061625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742510.625,
            "unit": "ns",
            "range": "± 2471.514483564331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929920.6640625,
            "unit": "ns",
            "range": "± 6693.3042796157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642575.7291666666,
            "unit": "ns",
            "range": "± 598.0072396950866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559444.3229166666,
            "unit": "ns",
            "range": "± 715.6625176151961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2250443.243243243,
            "unit": "ns",
            "range": "± 75648.45059932212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2364902.3255813955,
            "unit": "ns",
            "range": "± 64443.65751928503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2830657.1428571427,
            "unit": "ns",
            "range": "± 64229.13335417637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2797005.797101449,
            "unit": "ns",
            "range": "± 123808.33727041208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7780645.945945946,
            "unit": "ns",
            "range": "± 224422.55604921636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178053.94736842104,
            "unit": "ns",
            "range": "± 9063.383338679858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172148.14814814815,
            "unit": "ns",
            "range": "± 7063.799307517399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145887.5,
            "unit": "ns",
            "range": "± 4685.339245578046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2854414.285714286,
            "unit": "ns",
            "range": "± 21829.826354813697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2456108.8235294116,
            "unit": "ns",
            "range": "± 47930.60163955186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11207.865168539325,
            "unit": "ns",
            "range": "± 1033.2236314191534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57665.9793814433,
            "unit": "ns",
            "range": "± 5980.191026037863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46189.0243902439,
            "unit": "ns",
            "range": "± 2295.621495103339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57828.260869565216,
            "unit": "ns",
            "range": "± 10912.220451583009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2691.4893617021276,
            "unit": "ns",
            "range": "± 376.36049250116196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11562.36559139785,
            "unit": "ns",
            "range": "± 1747.0418462979706"
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
          "id": "d23ccf45a60ff011dcc112274755f6dcc1cd8e9e",
          "message": "Merge pull request #3697 from greymistcube/refactor/iworld-currency-handling\n\nMove FAV related operations from `IAccount` to `IWorld`",
          "timestamp": "2024-03-19T16:55:40+09:00",
          "tree_id": "243ee74689121f2566388a90479c76b16fd15d7d",
          "url": "https://github.com/planetarium/libplanet/commit/d23ccf45a60ff011dcc112274755f6dcc1cd8e9e"
        },
        "date": 1710835562675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972526.0416666666,
            "unit": "ns",
            "range": "± 100893.6044551692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720061.1940298507,
            "unit": "ns",
            "range": "± 81703.22117314496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499475.2577319588,
            "unit": "ns",
            "range": "± 107632.64493843538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6909624.561403509,
            "unit": "ns",
            "range": "± 297319.0129429894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37224.489795918365,
            "unit": "ns",
            "range": "± 5548.605494435921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5002736.666666667,
            "unit": "ns",
            "range": "± 40380.01391542014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13215020,
            "unit": "ns",
            "range": "± 88249.81748261175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32029613.333333332,
            "unit": "ns",
            "range": "± 199666.47142052618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64860386.666666664,
            "unit": "ns",
            "range": "± 398224.7765605082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129598033.33333333,
            "unit": "ns",
            "range": "± 1544138.5428528779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266352.734375,
            "unit": "ns",
            "range": "± 5801.007842472848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079788.8020833333,
            "unit": "ns",
            "range": "± 2547.7827959866368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742310.6901041666,
            "unit": "ns",
            "range": "± 1502.6373773833513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928654.7526041667,
            "unit": "ns",
            "range": "± 4449.59461984369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621705.80078125,
            "unit": "ns",
            "range": "± 1514.9532917561612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568723.2356770834,
            "unit": "ns",
            "range": "± 1505.3335215612549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159638.888888889,
            "unit": "ns",
            "range": "± 72168.70226976225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2256192.3076923075,
            "unit": "ns",
            "range": "± 25591.029077213156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2743446.3414634145,
            "unit": "ns",
            "range": "± 79612.69715805694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2925515.909090909,
            "unit": "ns",
            "range": "± 108754.74636673964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7772600,
            "unit": "ns",
            "range": "± 253750.47725252135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175745,
            "unit": "ns",
            "range": "± 9002.501761992804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169168.8524590164,
            "unit": "ns",
            "range": "± 7281.884851776737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140984.2105263158,
            "unit": "ns",
            "range": "± 2882.9504867014157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2765578.5714285714,
            "unit": "ns",
            "range": "± 26359.064374997735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506923.3333333335,
            "unit": "ns",
            "range": "± 35279.60695170322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10780.645161290322,
            "unit": "ns",
            "range": "± 1258.2128513262915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54306.25,
            "unit": "ns",
            "range": "± 5475.818852488015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45295.38461538462,
            "unit": "ns",
            "range": "± 2116.2637159353785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53350.574712643676,
            "unit": "ns",
            "range": "± 8386.019284100568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2737.1134020618556,
            "unit": "ns",
            "range": "± 541.8562977604676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10354.347826086956,
            "unit": "ns",
            "range": "± 1382.65654825585"
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
          "id": "19ab254e527b7686280b57b8472bc789f64238a4",
          "message": "Merge pull request #3699 from greymistcube/refactor/simplify-iworld-delta\n\n🧹 Removed unnecessary methods and properties from `IWorldDelta`",
          "timestamp": "2024-03-19T18:20:26+09:00",
          "tree_id": "15ab5a662974ada3e2d9b22783e6225f894d7a9b",
          "url": "https://github.com/planetarium/libplanet/commit/19ab254e527b7686280b57b8472bc789f64238a4"
        },
        "date": 1710840575606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970577,
            "unit": "ns",
            "range": "± 96728.57145830097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701329.1666666667,
            "unit": "ns",
            "range": "± 66675.4315603496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495010.4166666667,
            "unit": "ns",
            "range": "± 113088.0574263089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6514800,
            "unit": "ns",
            "range": "± 180413.01587273658"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35792.391304347824,
            "unit": "ns",
            "range": "± 4168.411658807968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4930400,
            "unit": "ns",
            "range": "± 18423.814020905746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13189837.5,
            "unit": "ns",
            "range": "± 249776.47574047747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32484386.666666668,
            "unit": "ns",
            "range": "± 288159.66027451487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66125100,
            "unit": "ns",
            "range": "± 346457.3988685611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128706696.66666667,
            "unit": "ns",
            "range": "± 1106183.324296828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332087.6802884615,
            "unit": "ns",
            "range": "± 7740.5286566923505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064080.4947916667,
            "unit": "ns",
            "range": "± 2442.8796266919603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729929.51171875,
            "unit": "ns",
            "range": "± 2056.0574951036747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925783.7760416667,
            "unit": "ns",
            "range": "± 5871.394270561477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627120.6575520834,
            "unit": "ns",
            "range": "± 1524.8054947049634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549098.6537388393,
            "unit": "ns",
            "range": "± 524.4521922053608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209385.714285714,
            "unit": "ns",
            "range": "± 28005.07803246396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2222378.5714285714,
            "unit": "ns",
            "range": "± 27444.802746643993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2833348.275862069,
            "unit": "ns",
            "range": "± 81003.99293813351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2775082.9545454546,
            "unit": "ns",
            "range": "± 152335.5893252735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7674654.545454546,
            "unit": "ns",
            "range": "± 283351.12038020743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176502.7027027027,
            "unit": "ns",
            "range": "± 8654.50983826008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166370.11494252874,
            "unit": "ns",
            "range": "± 8084.037026003616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143354.83870967742,
            "unit": "ns",
            "range": "± 3835.1739386610543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815270.588235294,
            "unit": "ns",
            "range": "± 56110.1680257897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462356.25,
            "unit": "ns",
            "range": "± 45512.0638768814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11253.125,
            "unit": "ns",
            "range": "± 1497.3276633986789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52177.17391304348,
            "unit": "ns",
            "range": "± 4266.328767949684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44044.897959183676,
            "unit": "ns",
            "range": "± 1644.0627046651073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55717.34693877551,
            "unit": "ns",
            "range": "± 11650.326534162868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2589.6907216494847,
            "unit": "ns",
            "range": "± 451.2677826788092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9996.875,
            "unit": "ns",
            "range": "± 1083.702534928532"
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
          "id": "0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50",
          "message": "Merge pull request #3702 from greymistcube/refactor/move-validator-mutation\n\n🚚 Move `Validator` related methods from `IAccount` to `IWorld`",
          "timestamp": "2024-03-21T15:56:52+09:00",
          "tree_id": "a761e93f03edfdcd597e405bad0050b411e979c3",
          "url": "https://github.com/planetarium/libplanet/commit/0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50"
        },
        "date": 1711004764032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948617,
            "unit": "ns",
            "range": "± 101304.47660793713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704900,
            "unit": "ns",
            "range": "± 99809.38577294268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1473886,
            "unit": "ns",
            "range": "± 137168.9513562075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6658685.106382979,
            "unit": "ns",
            "range": "± 259665.02751138518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35570.21276595745,
            "unit": "ns",
            "range": "± 4024.383470773538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4841584.615384615,
            "unit": "ns",
            "range": "± 14637.443205346472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13027246.153846154,
            "unit": "ns",
            "range": "± 63593.71844483561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31827692.85714286,
            "unit": "ns",
            "range": "± 149984.27848014203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64244773.333333336,
            "unit": "ns",
            "range": "± 480187.9133164829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129543940,
            "unit": "ns",
            "range": "± 889934.3224562778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371079.0457589286,
            "unit": "ns",
            "range": "± 5511.982075615854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086106.4453125,
            "unit": "ns",
            "range": "± 2147.398217543304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733055.9375,
            "unit": "ns",
            "range": "± 1449.517853539468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932397.0442708333,
            "unit": "ns",
            "range": "± 5072.232207675746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611982.6869419643,
            "unit": "ns",
            "range": "± 1417.95042325968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566665.9114583334,
            "unit": "ns",
            "range": "± 1676.6565324050368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106696,
            "unit": "ns",
            "range": "± 62350.39551124085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212765.5172413792,
            "unit": "ns",
            "range": "± 46141.43068453517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826069.4444444445,
            "unit": "ns",
            "range": "± 94430.4757690453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2827115.789473684,
            "unit": "ns",
            "range": "± 95667.24290777958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7642585.714285715,
            "unit": "ns",
            "range": "± 247873.89956192163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168730.23255813954,
            "unit": "ns",
            "range": "± 8907.103176909088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163787.5,
            "unit": "ns",
            "range": "± 6619.641915610624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144006.25,
            "unit": "ns",
            "range": "± 2589.3290636765346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818520,
            "unit": "ns",
            "range": "± 42831.98404396949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2427633.3333333335,
            "unit": "ns",
            "range": "± 40453.56538527788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9928.421052631578,
            "unit": "ns",
            "range": "± 1355.498115077112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52027.83505154639,
            "unit": "ns",
            "range": "± 4733.782452314631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43471.42857142857,
            "unit": "ns",
            "range": "± 1418.692734749231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47392.47311827957,
            "unit": "ns",
            "range": "± 7251.1054113679465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2260.4166666666665,
            "unit": "ns",
            "range": "± 273.179781430574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9159.550561797752,
            "unit": "ns",
            "range": "± 764.2166371109573"
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
          "id": "6815582f07d67a2c4468c2d7723eb8844bd39651",
          "message": "Merge pull request #3704 from greymistcube/refactor/cleanup\n\n♻️ Docs cleanup",
          "timestamp": "2024-03-21T17:53:16+09:00",
          "tree_id": "5a79dee718ab7a05427020dd64f4fa753ef2e2af",
          "url": "https://github.com/planetarium/libplanet/commit/6815582f07d67a2c4468c2d7723eb8844bd39651"
        },
        "date": 1711011752138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958631,
            "unit": "ns",
            "range": "± 96705.3743766774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1688845.8333333333,
            "unit": "ns",
            "range": "± 66427.16362585328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1456113.5416666667,
            "unit": "ns",
            "range": "± 136120.99464488952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6665941.935483871,
            "unit": "ns",
            "range": "± 192834.35339550464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37365.625,
            "unit": "ns",
            "range": "± 5046.454265907374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4973653.333333333,
            "unit": "ns",
            "range": "± 23445.982496754004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13180478.57142857,
            "unit": "ns",
            "range": "± 68950.50821000221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32420385.714285713,
            "unit": "ns",
            "range": "± 310452.210758492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64367766.666666664,
            "unit": "ns",
            "range": "± 326427.6307165772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129120992.85714285,
            "unit": "ns",
            "range": "± 739872.2576481447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294528.152901786,
            "unit": "ns",
            "range": "± 4666.588571594675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061253.5546875,
            "unit": "ns",
            "range": "± 1836.5063147503618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731374.6469350961,
            "unit": "ns",
            "range": "± 1465.8009088242316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943256.3411458333,
            "unit": "ns",
            "range": "± 2752.7270777118933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599220.3255208334,
            "unit": "ns",
            "range": "± 1623.4652172883327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563028.9973958334,
            "unit": "ns",
            "range": "± 1166.9728548268522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2104526.6666666665,
            "unit": "ns",
            "range": "± 47695.83899535959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237962.5,
            "unit": "ns",
            "range": "± 41687.54552156918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834352,
            "unit": "ns",
            "range": "± 72257.44552178227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2820087,
            "unit": "ns",
            "range": "± 297310.85546745156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7632654.054054054,
            "unit": "ns",
            "range": "± 210448.04135013497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172355.55555555556,
            "unit": "ns",
            "range": "± 7135.616657977483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160461.33333333334,
            "unit": "ns",
            "range": "± 8060.059910804991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145682.60869565216,
            "unit": "ns",
            "range": "± 3674.562704213071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823140,
            "unit": "ns",
            "range": "± 31556.814975985322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2439386.6666666665,
            "unit": "ns",
            "range": "± 42761.47910489177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9760.526315789473,
            "unit": "ns",
            "range": "± 1182.0891787118987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51361.458333333336,
            "unit": "ns",
            "range": "± 5451.284151785593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43269.767441860466,
            "unit": "ns",
            "range": "± 1591.575272926455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50502.12765957447,
            "unit": "ns",
            "range": "± 8998.769076198902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2203.125,
            "unit": "ns",
            "range": "± 281.89327020961974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9589.583333333334,
            "unit": "ns",
            "range": "± 1076.6887999463097"
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
          "id": "e3df1917a9739c156d0e9eb0d58fef17b9b6206c",
          "message": "Merge pull request #3705 from greymistcube/refactor/cleanup\n\n🧹 Removed unnecessary test code",
          "timestamp": "2024-03-22T14:32:16+09:00",
          "tree_id": "244b5fe74be3f90bb2e7ed3f92e3709161f56e0d",
          "url": "https://github.com/planetarium/libplanet/commit/e3df1917a9739c156d0e9eb0d58fef17b9b6206c"
        },
        "date": 1711086224663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954657,
            "unit": "ns",
            "range": "± 104641.61566166124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1664523.5294117648,
            "unit": "ns",
            "range": "± 44029.61165303744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1483089.898989899,
            "unit": "ns",
            "range": "± 144412.67292384733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6782555.882352941,
            "unit": "ns",
            "range": "± 323110.978754587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35913.82978723404,
            "unit": "ns",
            "range": "± 5144.8398005056115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5184505.882352941,
            "unit": "ns",
            "range": "± 105999.76102914239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12926393.333333334,
            "unit": "ns",
            "range": "± 164712.03211608288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32511993.333333332,
            "unit": "ns",
            "range": "± 570487.207151755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62528914.28571428,
            "unit": "ns",
            "range": "± 358147.08808434656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128207700,
            "unit": "ns",
            "range": "± 859249.4706760912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3323990.5729166665,
            "unit": "ns",
            "range": "± 8245.274159233633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058582.310267857,
            "unit": "ns",
            "range": "± 1282.8939669413664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748269.08203125,
            "unit": "ns",
            "range": "± 1568.6030944056897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893786.2760416667,
            "unit": "ns",
            "range": "± 5992.970481570289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610565.8203125,
            "unit": "ns",
            "range": "± 809.9833482586649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561097.6497395834,
            "unit": "ns",
            "range": "± 1348.701620400503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179968,
            "unit": "ns",
            "range": "± 40392.189013884024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2157967.3469387754,
            "unit": "ns",
            "range": "± 40192.80816553246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2751785.714285714,
            "unit": "ns",
            "range": "± 63531.63216630189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2742144.6428571427,
            "unit": "ns",
            "range": "± 97531.61523721024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7655916.216216216,
            "unit": "ns",
            "range": "± 252053.38446174178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166173.77049180327,
            "unit": "ns",
            "range": "± 6900.867134868976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162523.5294117647,
            "unit": "ns",
            "range": "± 8788.285588522609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142960,
            "unit": "ns",
            "range": "± 3133.083230033283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2788720,
            "unit": "ns",
            "range": "± 37232.19037338523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2387923.529411765,
            "unit": "ns",
            "range": "± 47783.35915111773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9123.595505617977,
            "unit": "ns",
            "range": "± 808.9025213648921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48564.36781609195,
            "unit": "ns",
            "range": "± 2665.105129541852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43166.666666666664,
            "unit": "ns",
            "range": "± 609.5204274797946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44120.65217391304,
            "unit": "ns",
            "range": "± 5785.383971860759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1898.936170212766,
            "unit": "ns",
            "range": "± 232.0987372626969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8850.54945054945,
            "unit": "ns",
            "range": "± 744.2182514967003"
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
          "id": "5210b9336f9bb6e4f3c79b3c9f9612cad6719342",
          "message": "Merge pull request #3706 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2024-03-22T17:50:34+09:00",
          "tree_id": "594bbc5288a619fc2040847db66ae22c22e2db13",
          "url": "https://github.com/planetarium/libplanet/commit/5210b9336f9bb6e4f3c79b3c9f9612cad6719342"
        },
        "date": 1711097989541,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937704.2105263158,
            "unit": "ns",
            "range": "± 81673.00384185064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741130.3278688525,
            "unit": "ns",
            "range": "± 77802.01758239121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499802,
            "unit": "ns",
            "range": "± 137322.4789620506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6693771.052631579,
            "unit": "ns",
            "range": "± 230794.14240060252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35249.45054945055,
            "unit": "ns",
            "range": "± 3550.817546749657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5090933.333333333,
            "unit": "ns",
            "range": "± 16307.958909977784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13346478.57142857,
            "unit": "ns",
            "range": "± 98402.98759200845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32539878.57142857,
            "unit": "ns",
            "range": "± 179238.23501170136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65728614.28571428,
            "unit": "ns",
            "range": "± 895119.5398098796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129798192.3076923,
            "unit": "ns",
            "range": "± 584641.4605857999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364077.3697916665,
            "unit": "ns",
            "range": "± 7727.074897564723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077345.982142857,
            "unit": "ns",
            "range": "± 2103.8827357062305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734062.5651041666,
            "unit": "ns",
            "range": "± 992.1835012394668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919192.9129464286,
            "unit": "ns",
            "range": "± 26520.963139130152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616435.9305245535,
            "unit": "ns",
            "range": "± 1765.9589717622148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565602.34375,
            "unit": "ns",
            "range": "± 1070.6498280562741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2311686.3636363638,
            "unit": "ns",
            "range": "± 55600.80117146776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208100,
            "unit": "ns",
            "range": "± 40009.10081654108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785436.3636363638,
            "unit": "ns",
            "range": "± 65823.21594677487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2870026,
            "unit": "ns",
            "range": "± 303698.89048998593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777529.545454546,
            "unit": "ns",
            "range": "± 289177.3315921657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174956.6037735849,
            "unit": "ns",
            "range": "± 7145.426440252702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167220.2380952381,
            "unit": "ns",
            "range": "± 8561.341801178338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143757.8947368421,
            "unit": "ns",
            "range": "± 3120.953520511477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2875453.3333333335,
            "unit": "ns",
            "range": "± 50990.64153165289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2497421.4285714286,
            "unit": "ns",
            "range": "± 21015.605138578794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10631.578947368422,
            "unit": "ns",
            "range": "± 1588.5402879249184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54248.97959183674,
            "unit": "ns",
            "range": "± 6779.612325047041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47752.380952380954,
            "unit": "ns",
            "range": "± 1096.1838566677798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52335.10638297872,
            "unit": "ns",
            "range": "± 9792.631720332707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2372.1649484536083,
            "unit": "ns",
            "range": "± 445.2860195147136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9845.360824742267,
            "unit": "ns",
            "range": "± 1502.0833184389758"
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
          "id": "30938b465c34003a3ea9268ed23166a34acc301b",
          "message": "Merge pull request #3642 from greymistcube/feature/mocks\n\n✨ Mocks",
          "timestamp": "2024-03-22T19:00:38+09:00",
          "tree_id": "031a5cb565d418e6075c81a74d21d70109ec35ae",
          "url": "https://github.com/planetarium/libplanet/commit/30938b465c34003a3ea9268ed23166a34acc301b"
        },
        "date": 1711102217577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037163,
            "unit": "ns",
            "range": "± 144751.78312608734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1756346.2962962964,
            "unit": "ns",
            "range": "± 73715.85864800356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578523,
            "unit": "ns",
            "range": "± 177115.14137430603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6869069.811320755,
            "unit": "ns",
            "range": "± 285397.00997362746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38165.625,
            "unit": "ns",
            "range": "± 5552.122934423135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4878664.285714285,
            "unit": "ns",
            "range": "± 41715.64191307357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13382435.714285715,
            "unit": "ns",
            "range": "± 173510.32603784202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33401584.210526317,
            "unit": "ns",
            "range": "± 659098.5563321045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67962053.33333333,
            "unit": "ns",
            "range": "± 883688.7508511989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133046100,
            "unit": "ns",
            "range": "± 1062839.613054069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344059.347098214,
            "unit": "ns",
            "range": "± 8226.69040659838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047893.8020833334,
            "unit": "ns",
            "range": "± 4478.188672076239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739337.28515625,
            "unit": "ns",
            "range": "± 2182.598669312122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946702.7473958333,
            "unit": "ns",
            "range": "± 2836.5795973488925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602942.4934895834,
            "unit": "ns",
            "range": "± 1417.1361031532488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576149.5884486607,
            "unit": "ns",
            "range": "± 1610.5935002143785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2143307.5,
            "unit": "ns",
            "range": "± 76028.58904756882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2305800,
            "unit": "ns",
            "range": "± 48095.27581328082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2874595.8333333335,
            "unit": "ns",
            "range": "± 73808.85701044562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2882564.8936170214,
            "unit": "ns",
            "range": "± 163826.3864074463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777116.326530612,
            "unit": "ns",
            "range": "± 257276.870435771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183565.38461538462,
            "unit": "ns",
            "range": "± 9412.506558843916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177687.5,
            "unit": "ns",
            "range": "± 7552.77342197132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147566.66666666666,
            "unit": "ns",
            "range": "± 1941.1024671250066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2927642.8571428573,
            "unit": "ns",
            "range": "± 30754.87364219292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540365.789473684,
            "unit": "ns",
            "range": "± 54358.25873220794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11578.021978021978,
            "unit": "ns",
            "range": "± 1399.1904165387286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58051.54639175258,
            "unit": "ns",
            "range": "± 7380.366880589082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46227.450980392154,
            "unit": "ns",
            "range": "± 1894.4211180592927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65883.50515463918,
            "unit": "ns",
            "range": "± 14884.329570141117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3142.8571428571427,
            "unit": "ns",
            "range": "± 720.3950806085148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11557.575757575758,
            "unit": "ns",
            "range": "± 1969.8798735306177"
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711106359094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023062.2448979592,
            "unit": "ns",
            "range": "± 160030.2474729346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1817380.2325581396,
            "unit": "ns",
            "range": "± 94271.13564827714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1494551.5463917525,
            "unit": "ns",
            "range": "± 121657.38615866593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7512451.685393258,
            "unit": "ns",
            "range": "± 432919.9955251966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36326.666666666664,
            "unit": "ns",
            "range": "± 3291.316460771255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5345368.75,
            "unit": "ns",
            "range": "± 104259.1304954471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13655100,
            "unit": "ns",
            "range": "± 197211.3671504088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33695814.28571428,
            "unit": "ns",
            "range": "± 367947.7886396862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68203197.36842105,
            "unit": "ns",
            "range": "± 1435176.4105148348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133954173.33333333,
            "unit": "ns",
            "range": "± 1994247.6277199546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3376559.6354166665,
            "unit": "ns",
            "range": "± 25863.834927710403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062727.4135044643,
            "unit": "ns",
            "range": "± 4654.059433406883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765593.2198660715,
            "unit": "ns",
            "range": "± 2457.575645889804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942844.2578125,
            "unit": "ns",
            "range": "± 6627.871613873956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612013.57421875,
            "unit": "ns",
            "range": "± 2602.956976273216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581322.7678571428,
            "unit": "ns",
            "range": "± 1682.5171926455373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154322.727272727,
            "unit": "ns",
            "range": "± 47132.45703857912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297919.1919191917,
            "unit": "ns",
            "range": "± 169473.8651074035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2882496.296296296,
            "unit": "ns",
            "range": "± 120563.35367836572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2909119.1919191917,
            "unit": "ns",
            "range": "± 171882.44480456228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8507831.034482758,
            "unit": "ns",
            "range": "± 579165.8173836414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180662.92134831462,
            "unit": "ns",
            "range": "± 10486.532293878745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172244.94382022473,
            "unit": "ns",
            "range": "± 11060.946976103429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149521.73913043478,
            "unit": "ns",
            "range": "± 5515.711419551255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2897786.206896552,
            "unit": "ns",
            "range": "± 78919.14815691314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2542030.434782609,
            "unit": "ns",
            "range": "± 62162.54670972494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11004.301075268817,
            "unit": "ns",
            "range": "± 1548.7662676616696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56289,
            "unit": "ns",
            "range": "± 7232.919901604767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44297.4358974359,
            "unit": "ns",
            "range": "± 1553.3473498235282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58800,
            "unit": "ns",
            "range": "± 13425.965855005923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2457.8947368421054,
            "unit": "ns",
            "range": "± 420.88532510281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9774.117647058823,
            "unit": "ns",
            "range": "± 1089.3590231106057"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e9ea5bd1ebbf2d303391caeee97ac71c23507c1",
          "message": "Merge pull request #3708 from greymistcube/prepare/4.3.0\n\n🔧 Prepare 4.3.0",
          "timestamp": "2024-03-22T22:19:38+09:00",
          "tree_id": "3bd385ff7052df8da1bc5a68e3098fe6e3e329ce",
          "url": "https://github.com/planetarium/libplanet/commit/0e9ea5bd1ebbf2d303391caeee97ac71c23507c1"
        },
        "date": 1711114269623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981119.191919192,
            "unit": "ns",
            "range": "± 113537.10863006438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1706379.5918367347,
            "unit": "ns",
            "range": "± 56295.11146476158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496324.7422680412,
            "unit": "ns",
            "range": "± 134767.24072678035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6686271.428571428,
            "unit": "ns",
            "range": "± 218653.14672199116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34951.19047619047,
            "unit": "ns",
            "range": "± 2022.3149116386192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5001680,
            "unit": "ns",
            "range": "± 26473.98183662054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13047464.285714285,
            "unit": "ns",
            "range": "± 126475.51059481746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32572007.692307692,
            "unit": "ns",
            "range": "± 159853.77412674404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64920426.666666664,
            "unit": "ns",
            "range": "± 730166.9099465904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131851523.07692307,
            "unit": "ns",
            "range": "± 821780.9573865026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309725.0520833335,
            "unit": "ns",
            "range": "± 9504.866404661054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070422.642299107,
            "unit": "ns",
            "range": "± 1958.8768662385046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748087.6236979166,
            "unit": "ns",
            "range": "± 1866.301777234894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972577.7864583333,
            "unit": "ns",
            "range": "± 5520.836365852997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624051.5973772322,
            "unit": "ns",
            "range": "± 793.0131766200639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557984.3880208334,
            "unit": "ns",
            "range": "± 1036.8049794285935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171110.8695652173,
            "unit": "ns",
            "range": "± 80816.96254365546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2276998.113207547,
            "unit": "ns",
            "range": "± 93664.31364301831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2745404.1666666665,
            "unit": "ns",
            "range": "± 70563.66523536936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2762193.6363636362,
            "unit": "ns",
            "range": "± 116793.2468298168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7750254.054054054,
            "unit": "ns",
            "range": "± 237661.1810897964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175164.19753086418,
            "unit": "ns",
            "range": "± 9049.769453444314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168525.33333333334,
            "unit": "ns",
            "range": "± 8352.279076142378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149012.28070175438,
            "unit": "ns",
            "range": "± 5989.158961211219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2898328.5714285714,
            "unit": "ns",
            "range": "± 46844.00345124934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486571.4285714286,
            "unit": "ns",
            "range": "± 33413.06581313614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10611.458333333334,
            "unit": "ns",
            "range": "± 1706.5736551203631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52862.10526315789,
            "unit": "ns",
            "range": "± 4127.880785104609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43213.333333333336,
            "unit": "ns",
            "range": "± 768.920083778604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55135.051546391755,
            "unit": "ns",
            "range": "± 12452.058407792074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2359.183673469388,
            "unit": "ns",
            "range": "± 483.7752598043204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10333.333333333334,
            "unit": "ns",
            "range": "± 1247.0315630721805"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "757ba26ea62bc3ef51199853d452e4b119a10e5a",
          "message": "Merge pull request #3710 from xiaoxianBoy/fix-typos\n\nchore: fix typos",
          "timestamp": "2024-03-25T17:49:36+09:00",
          "tree_id": "3ac7612ac12e4b8910b4ff8d747654a7bd720f66",
          "url": "https://github.com/planetarium/libplanet/commit/757ba26ea62bc3ef51199853d452e4b119a10e5a"
        },
        "date": 1711357199617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014411.3402061856,
            "unit": "ns",
            "range": "± 98362.2798598467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776618.1818181819,
            "unit": "ns",
            "range": "± 84574.06708303976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1562068.686868687,
            "unit": "ns",
            "range": "± 173418.31850515693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6724270.9677419355,
            "unit": "ns",
            "range": "± 152433.92709312536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36636.31578947369,
            "unit": "ns",
            "range": "± 4234.197417640862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5145773.333333333,
            "unit": "ns",
            "range": "± 34377.57713283194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13431464.285714285,
            "unit": "ns",
            "range": "± 126409.68565095645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32892142.85714286,
            "unit": "ns",
            "range": "± 438913.64441396354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67109320,
            "unit": "ns",
            "range": "± 1247294.338157598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133767842.85714285,
            "unit": "ns",
            "range": "± 1186159.6946022492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301702.8385416665,
            "unit": "ns",
            "range": "± 12132.93668159483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070422.446986607,
            "unit": "ns",
            "range": "± 3194.7148946363536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731253.5026041666,
            "unit": "ns",
            "range": "± 1501.7127820779724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010831.1197916667,
            "unit": "ns",
            "range": "± 7346.126275799929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620994.6354166666,
            "unit": "ns",
            "range": "± 2234.4961446312536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556151.5364583334,
            "unit": "ns",
            "range": "± 1859.945860522589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185385,
            "unit": "ns",
            "range": "± 50144.38390131148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2341044.4444444445,
            "unit": "ns",
            "range": "± 96300.85261219901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2842709.090909091,
            "unit": "ns",
            "range": "± 68415.43204563823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2855473.8636363638,
            "unit": "ns",
            "range": "± 156719.3057772128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777500,
            "unit": "ns",
            "range": "± 213572.20740952643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176733.33333333334,
            "unit": "ns",
            "range": "± 8153.938117701731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172593.47826086957,
            "unit": "ns",
            "range": "± 6596.1066689681265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144635,
            "unit": "ns",
            "range": "± 3233.2605345394804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863707.1428571427,
            "unit": "ns",
            "range": "± 40340.84519700586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2592020,
            "unit": "ns",
            "range": "± 42402.092266436906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11280.41237113402,
            "unit": "ns",
            "range": "± 1662.743664803857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55293.15789473684,
            "unit": "ns",
            "range": "± 5356.754587326789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44907.40740740741,
            "unit": "ns",
            "range": "± 1883.1779494721304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62490.721649484534,
            "unit": "ns",
            "range": "± 13684.937602420061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2590.625,
            "unit": "ns",
            "range": "± 527.5720205262077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11247.916666666666,
            "unit": "ns",
            "range": "± 1555.8364930102568"
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
          "id": "200a0686c37ec092e96f7582fbc6c472d71babd2",
          "message": "Merge pull request #3713 from greymistcube/refactor/add-info-to-action-context\n\n✨ ♻️ Added `Txs` property to `IActionContext`",
          "timestamp": "2024-03-28T14:27:37+09:00",
          "tree_id": "e833efb9d625c8f530880a2800a40c432cc015d4",
          "url": "https://github.com/planetarium/libplanet/commit/200a0686c37ec092e96f7582fbc6c472d71babd2"
        },
        "date": 1711604209754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 923001,
            "unit": "ns",
            "range": "± 83998.26897567051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1637418.9189189188,
            "unit": "ns",
            "range": "± 55535.453330071745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1411757.3684210526,
            "unit": "ns",
            "range": "± 106811.88200110577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6667181.25,
            "unit": "ns",
            "range": "± 308743.0672057578"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33777.90697674418,
            "unit": "ns",
            "range": "± 2887.474009571472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5016840,
            "unit": "ns",
            "range": "± 21973.549033846517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12907526.666666666,
            "unit": "ns",
            "range": "± 145941.02266065596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31295480,
            "unit": "ns",
            "range": "± 122851.39803844318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64120535.71428572,
            "unit": "ns",
            "range": "± 217538.35950733576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127778213.33333333,
            "unit": "ns",
            "range": "± 786016.7554254322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316725.5022321427,
            "unit": "ns",
            "range": "± 3147.567243446177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052113.4765625,
            "unit": "ns",
            "range": "± 1973.4118527792223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734023.5281808035,
            "unit": "ns",
            "range": "± 923.9452466823213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1895680.5598958333,
            "unit": "ns",
            "range": "± 1262.6946821021886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643873.88671875,
            "unit": "ns",
            "range": "± 1081.6928733334082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559399.2563100961,
            "unit": "ns",
            "range": "± 445.7247632269005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138959.2592592593,
            "unit": "ns",
            "range": "± 59843.740494334714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2167321.875,
            "unit": "ns",
            "range": "± 34796.92917833319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2696613.3333333335,
            "unit": "ns",
            "range": "± 39320.675525854385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2877025,
            "unit": "ns",
            "range": "± 34455.64012413115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7645741.860465116,
            "unit": "ns",
            "range": "± 282207.9967755615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170073.4693877551,
            "unit": "ns",
            "range": "± 6429.968102247349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160655.35714285713,
            "unit": "ns",
            "range": "± 6037.125132886502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143130.55555555556,
            "unit": "ns",
            "range": "± 4251.844604366737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720760,
            "unit": "ns",
            "range": "± 29955.796004875487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533393.3333333335,
            "unit": "ns",
            "range": "± 43195.195940995014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8917.045454545454,
            "unit": "ns",
            "range": "± 667.5089376316857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47866.29213483146,
            "unit": "ns",
            "range": "± 3146.388399282896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42363.04347826087,
            "unit": "ns",
            "range": "± 1393.055585658483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44002.10526315789,
            "unit": "ns",
            "range": "± 6437.506107369439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2123.157894736842,
            "unit": "ns",
            "range": "± 230.84149096938256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8614.772727272728,
            "unit": "ns",
            "range": "± 646.7495691723809"
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
          "id": "c8c03a16a0d34aa8b3274fef5cbfb64298084a41",
          "message": "Merge pull request #3714 from greymistcube/remove/total-updated-fungible-assets\n\n🧹 Removed `TotalUpdatedFungibleAssets` from `IWorld`",
          "timestamp": "2024-03-28T15:38:23+09:00",
          "tree_id": "33555845d43c83cb9f31a0f0daf13075fab4237b",
          "url": "https://github.com/planetarium/libplanet/commit/c8c03a16a0d34aa8b3274fef5cbfb64298084a41"
        },
        "date": 1711608487924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988347.8723404255,
            "unit": "ns",
            "range": "± 115336.36150731897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698927.2727272727,
            "unit": "ns",
            "range": "± 62441.71370961608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557771.7391304348,
            "unit": "ns",
            "range": "± 113508.6561312502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756740.625,
            "unit": "ns",
            "range": "± 205465.54512096386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48051.02040816326,
            "unit": "ns",
            "range": "± 7780.152449914405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5477007.142857143,
            "unit": "ns",
            "range": "± 25939.67748704421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14523393.333333334,
            "unit": "ns",
            "range": "± 126102.72720890619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35093466.666666664,
            "unit": "ns",
            "range": "± 259546.40286102064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71602564.28571428,
            "unit": "ns",
            "range": "± 427503.3721992825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142463020,
            "unit": "ns",
            "range": "± 852779.4658811687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3597661.4118303573,
            "unit": "ns",
            "range": "± 39367.11310796008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1089483.775111607,
            "unit": "ns",
            "range": "± 3410.141370029296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751486.484375,
            "unit": "ns",
            "range": "± 1787.383981344612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2023459.7935267857,
            "unit": "ns",
            "range": "± 19283.15706353131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628280.9640066965,
            "unit": "ns",
            "range": "± 493.140897364303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573396.6517857143,
            "unit": "ns",
            "range": "± 1038.0330392607761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439032,
            "unit": "ns",
            "range": "± 59937.58364610083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492675,
            "unit": "ns",
            "range": "± 93347.36282862426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3083530,
            "unit": "ns",
            "range": "± 69178.46561801698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3111394.6808510637,
            "unit": "ns",
            "range": "± 176210.119787396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7963964.705882353,
            "unit": "ns",
            "range": "± 143664.79900850204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211616.04938271604,
            "unit": "ns",
            "range": "± 11029.975711556708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209134.52380952382,
            "unit": "ns",
            "range": "± 11133.932656389505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180147.91666666666,
            "unit": "ns",
            "range": "± 10807.239086217473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027307.1428571427,
            "unit": "ns",
            "range": "± 23516.89128741671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2712570,
            "unit": "ns",
            "range": "± 40406.24421334618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17417.391304347828,
            "unit": "ns",
            "range": "± 1563.7099233295023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89220.52631578948,
            "unit": "ns",
            "range": "± 5754.163593104996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76776.28865979382,
            "unit": "ns",
            "range": "± 5993.221399976886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81469.27710843373,
            "unit": "ns",
            "range": "± 8578.140935545378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4953.6082474226805,
            "unit": "ns",
            "range": "± 825.7650311062695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18447.872340425532,
            "unit": "ns",
            "range": "± 2336.9278943792415"
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
          "id": "b15c7261184cdbdbd9cb5850914a0999f9137ab8",
          "message": "Merge pull request #3715 from greymistcube/refactor/iworld-extensions\n\n♻️ 🚚 Moved `Currency` and `Validator` related methods from `IWorldState` and `IWorld` to an extension `class`",
          "timestamp": "2024-03-29T08:57:43+09:00",
          "tree_id": "e5b1e33019de8451e46cbbf3bb85c042d0273f24",
          "url": "https://github.com/planetarium/libplanet/commit/b15c7261184cdbdbd9cb5850914a0999f9137ab8"
        },
        "date": 1711670785244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 931063.5416666666,
            "unit": "ns",
            "range": "± 92001.35825060487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1676643.8596491227,
            "unit": "ns",
            "range": "± 71863.70288247016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1464041.836734694,
            "unit": "ns",
            "range": "± 139044.72314966464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6791112.6760563385,
            "unit": "ns",
            "range": "± 332793.8816958103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33822.41379310345,
            "unit": "ns",
            "range": "± 1482.7715991497168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4964333.333333333,
            "unit": "ns",
            "range": "± 21725.87879750344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12897907.142857144,
            "unit": "ns",
            "range": "± 83872.60911906556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31766935.714285713,
            "unit": "ns",
            "range": "± 145446.9589133539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63367760,
            "unit": "ns",
            "range": "± 304451.9826085646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130107671.05263157,
            "unit": "ns",
            "range": "± 2809240.568706336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339090.066964286,
            "unit": "ns",
            "range": "± 6337.204675407793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060529.3880208333,
            "unit": "ns",
            "range": "± 2067.181490544869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731956.4322916666,
            "unit": "ns",
            "range": "± 1609.535761986586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928969.3080357143,
            "unit": "ns",
            "range": "± 9872.00178319447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612559.9479166666,
            "unit": "ns",
            "range": "± 2255.6641687614524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582969.0690104166,
            "unit": "ns",
            "range": "± 1470.1405261310683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151929.0322580645,
            "unit": "ns",
            "range": "± 64702.1184277011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2195853.06122449,
            "unit": "ns",
            "range": "± 38791.11851764963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774088.4615384615,
            "unit": "ns",
            "range": "± 75291.18581572788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2847038.095238095,
            "unit": "ns",
            "range": "± 65895.67873685253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7641426.8292682925,
            "unit": "ns",
            "range": "± 271623.5455776894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169706.81818181818,
            "unit": "ns",
            "range": "± 8893.76373858821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157485.7142857143,
            "unit": "ns",
            "range": "± 6149.070249644652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146053.84615384616,
            "unit": "ns",
            "range": "± 1774.173697159415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813623.076923077,
            "unit": "ns",
            "range": "± 26611.906916709104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2468675,
            "unit": "ns",
            "range": "± 45127.751993645776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9475.531914893618,
            "unit": "ns",
            "range": "± 1104.018677788547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50676.041666666664,
            "unit": "ns",
            "range": "± 4147.332555337395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44250,
            "unit": "ns",
            "range": "± 1854.39305027431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49452.17391304348,
            "unit": "ns",
            "range": "± 12039.581956351623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2432.2916666666665,
            "unit": "ns",
            "range": "± 266.9495484234967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9443.617021276596,
            "unit": "ns",
            "range": "± 816.4384378003729"
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
          "id": "362de2c5404515ccb1b22a0d454c87d1db580b79",
          "message": "Merge pull request #3716 from greymistcube/refactor/dumb-action\n\n🧹 Cleanup `DumbAction`",
          "timestamp": "2024-03-29T20:27:00+09:00",
          "tree_id": "7145d7a7252499b8292eaabb2d5a56d421e6c0c3",
          "url": "https://github.com/planetarium/libplanet/commit/362de2c5404515ccb1b22a0d454c87d1db580b79"
        },
        "date": 1711712169949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941148.9583333334,
            "unit": "ns",
            "range": "± 91307.04359155335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1695718.8679245282,
            "unit": "ns",
            "range": "± 70261.93864227404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566534.3434343433,
            "unit": "ns",
            "range": "± 165333.56089890975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6625576.470588235,
            "unit": "ns",
            "range": "± 198213.90352546447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35312.5,
            "unit": "ns",
            "range": "± 2931.2353717498877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5409807.692307692,
            "unit": "ns",
            "range": "± 19737.842736667953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13191780,
            "unit": "ns",
            "range": "± 151952.0704508027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32663133.333333332,
            "unit": "ns",
            "range": "± 282925.63047725527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63932411.538461536,
            "unit": "ns",
            "range": "± 252064.62973630903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132059220,
            "unit": "ns",
            "range": "± 981511.5967585042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3300673.6886160714,
            "unit": "ns",
            "range": "± 19158.265534534872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038618.9174107143,
            "unit": "ns",
            "range": "± 2242.369225730712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747614.4010416666,
            "unit": "ns",
            "range": "± 2108.646564266759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928046.328125,
            "unit": "ns",
            "range": "± 4813.033921669018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 590928.7955729166,
            "unit": "ns",
            "range": "± 1022.5729281664029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558738.57421875,
            "unit": "ns",
            "range": "± 1198.6732425831606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150320,
            "unit": "ns",
            "range": "± 45095.90482049282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274248,
            "unit": "ns",
            "range": "± 59203.421353837315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2782916.129032258,
            "unit": "ns",
            "range": "± 82516.60074099916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2723560,
            "unit": "ns",
            "range": "± 92864.55532851937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7583870.212765957,
            "unit": "ns",
            "range": "± 292288.7478794048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172219.44444444444,
            "unit": "ns",
            "range": "± 7691.803555768444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161176.66666666666,
            "unit": "ns",
            "range": "± 6988.498218117592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144454.16666666666,
            "unit": "ns",
            "range": "± 3653.7032037987533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2805326.6666666665,
            "unit": "ns",
            "range": "± 30787.53148984334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720021.4285714286,
            "unit": "ns",
            "range": "± 32081.654920181132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9760.63829787234,
            "unit": "ns",
            "range": "± 1229.5832045909403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52802.0618556701,
            "unit": "ns",
            "range": "± 5083.449029723883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42529.72972972973,
            "unit": "ns",
            "range": "± 959.1271682758887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49920,
            "unit": "ns",
            "range": "± 10106.397805140301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2583.505154639175,
            "unit": "ns",
            "range": "± 510.24512335803155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9491.836734693878,
            "unit": "ns",
            "range": "± 1224.7173853998188"
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
          "id": "ad08e71a984c56196853c85567a50b7e6ea7e374",
          "message": "Merge pull request #3717 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup",
          "timestamp": "2024-03-29T20:58:16+09:00",
          "tree_id": "e2d7a8ace564d7f0e6b01893b169194ab2e4d640",
          "url": "https://github.com/planetarium/libplanet/commit/ad08e71a984c56196853c85567a50b7e6ea7e374"
        },
        "date": 1711714050991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960416.1616161616,
            "unit": "ns",
            "range": "± 107023.48751089182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1669112.8205128205,
            "unit": "ns",
            "range": "± 58289.38776523463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1459209,
            "unit": "ns",
            "range": "± 128845.44033041835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6587947.05882353,
            "unit": "ns",
            "range": "± 182501.251527953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36815.30612244898,
            "unit": "ns",
            "range": "± 5764.3295591202705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5062078.571428572,
            "unit": "ns",
            "range": "± 16619.829609948963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13378486.666666666,
            "unit": "ns",
            "range": "± 135733.36186733725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32111380,
            "unit": "ns",
            "range": "± 209356.89691460915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66105626.666666664,
            "unit": "ns",
            "range": "± 627569.7223264937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133811813.33333333,
            "unit": "ns",
            "range": "± 929397.6550638027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360587.9947916665,
            "unit": "ns",
            "range": "± 11482.898902065486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087264.0755208333,
            "unit": "ns",
            "range": "± 3851.083747667956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762073.4895833334,
            "unit": "ns",
            "range": "± 3600.5375505948123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918442.4088541667,
            "unit": "ns",
            "range": "± 5212.87316877452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634643.41796875,
            "unit": "ns",
            "range": "± 1598.8433679735012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565183.6197916666,
            "unit": "ns",
            "range": "± 803.684384992067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2144256.862745098,
            "unit": "ns",
            "range": "± 86095.57306831046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280982.5,
            "unit": "ns",
            "range": "± 80786.48937405694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2779916.6666666665,
            "unit": "ns",
            "range": "± 46899.90354340777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2985856.923076923,
            "unit": "ns",
            "range": "± 139561.2051767418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7589691.891891892,
            "unit": "ns",
            "range": "± 222400.06791862773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177674.46808510637,
            "unit": "ns",
            "range": "± 12922.656075149755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167246.5909090909,
            "unit": "ns",
            "range": "± 10943.606214596095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142553.84615384616,
            "unit": "ns",
            "range": "± 2304.92783134143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806466.6666666665,
            "unit": "ns",
            "range": "± 27415.185225571266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2517728.5714285714,
            "unit": "ns",
            "range": "± 38324.814788481744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11518.556701030928,
            "unit": "ns",
            "range": "± 1145.4920610181766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56294.68085106383,
            "unit": "ns",
            "range": "± 5718.379479847708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45450,
            "unit": "ns",
            "range": "± 1241.0479442793498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57193.75,
            "unit": "ns",
            "range": "± 12796.618077075142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790,
            "unit": "ns",
            "range": "± 445.4020416695508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10922.340425531915,
            "unit": "ns",
            "range": "± 1586.2415343966309"
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
          "id": "ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc",
          "message": "Merge pull request #3718 from greymistcube/refactor/dumb-action\n\n♻️ Overhaul `DumbAction`",
          "timestamp": "2024-04-01T10:34:00+09:00",
          "tree_id": "87a583c1d570c6bc2afb4f2b8f7a1ca01ed70eaa",
          "url": "https://github.com/planetarium/libplanet/commit/ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc"
        },
        "date": 1711935907724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036593.9393939395,
            "unit": "ns",
            "range": "± 117669.70880841643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824025.3012048192,
            "unit": "ns",
            "range": "± 97374.9915850505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631298,
            "unit": "ns",
            "range": "± 192487.42316517117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6737123.9130434785,
            "unit": "ns",
            "range": "± 257148.64372773675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38312.63157894737,
            "unit": "ns",
            "range": "± 4813.3290577459065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5158278.571428572,
            "unit": "ns",
            "range": "± 69586.45069896238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13979200,
            "unit": "ns",
            "range": "± 135492.25779754695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34521057.14285714,
            "unit": "ns",
            "range": "± 372283.06324062636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68420320,
            "unit": "ns",
            "range": "± 482187.5334644929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136727960,
            "unit": "ns",
            "range": "± 1036443.3089037859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339354.921875,
            "unit": "ns",
            "range": "± 4734.777290745025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082248.3677455357,
            "unit": "ns",
            "range": "± 1492.8644598112603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757608.1333705357,
            "unit": "ns",
            "range": "± 950.5610322358772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1979083.1473214286,
            "unit": "ns",
            "range": "± 2640.175844650194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630289.0625,
            "unit": "ns",
            "range": "± 907.8079156849508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571728.5677083334,
            "unit": "ns",
            "range": "± 1642.0600711491554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200104.6511627906,
            "unit": "ns",
            "range": "± 47549.36759625712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2380977.5,
            "unit": "ns",
            "range": "± 77653.94136149406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2883260,
            "unit": "ns",
            "range": "± 53724.865219534455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2930591.6666666665,
            "unit": "ns",
            "range": "± 75042.97271312743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7806335.483870967,
            "unit": "ns",
            "range": "± 204435.40063369178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185449.20634920636,
            "unit": "ns",
            "range": "± 8491.910249321978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173500,
            "unit": "ns",
            "range": "± 7607.342943936908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149883.33333333334,
            "unit": "ns",
            "range": "± 4461.411817160443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2882753.3333333335,
            "unit": "ns",
            "range": "± 37726.55121617488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2558386.6666666665,
            "unit": "ns",
            "range": "± 35598.01091286395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13291.208791208792,
            "unit": "ns",
            "range": "± 1740.7947324042261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61108.79120879121,
            "unit": "ns",
            "range": "± 6216.45930577578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50470.87912087912,
            "unit": "ns",
            "range": "± 3949.669929486837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64022.72727272727,
            "unit": "ns",
            "range": "± 9936.982211164253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3003.2608695652175,
            "unit": "ns",
            "range": "± 606.8204084589712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12029.787234042553,
            "unit": "ns",
            "range": "± 1281.7016400195587"
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
          "id": "421ca95ad9e5ae172247b8b16b9057487bf47028",
          "message": "Merge pull request #3719 from greymistcube/refactor/test-util-bytes-equality\n\n♻️ Changed `AssertBytesEqual()` overloads and use more hex representation",
          "timestamp": "2024-04-01T12:48:45+09:00",
          "tree_id": "407de50a21cfd9ecda31c72e8385cd67126ba4b7",
          "url": "https://github.com/planetarium/libplanet/commit/421ca95ad9e5ae172247b8b16b9057487bf47028"
        },
        "date": 1711943884163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045467.6767676767,
            "unit": "ns",
            "range": "± 122752.54253843201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1817148.2142857143,
            "unit": "ns",
            "range": "± 77721.87709114743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521402.197802198,
            "unit": "ns",
            "range": "± 82068.65415684601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6801323.529411765,
            "unit": "ns",
            "range": "± 179534.66966412976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36694.444444444445,
            "unit": "ns",
            "range": "± 3567.561755443257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5277250,
            "unit": "ns",
            "range": "± 114408.74552511962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13798657.692307692,
            "unit": "ns",
            "range": "± 54369.29987806326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35813240,
            "unit": "ns",
            "range": "± 301765.98501866596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69509157.14285715,
            "unit": "ns",
            "range": "± 596224.1792045437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142790323.07692307,
            "unit": "ns",
            "range": "± 482104.25420553685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3397990.2864583335,
            "unit": "ns",
            "range": "± 8566.50997437706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069808.9713541667,
            "unit": "ns",
            "range": "± 1328.1272228404018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755816.3295200893,
            "unit": "ns",
            "range": "± 1488.595189805571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952641.685267857,
            "unit": "ns",
            "range": "± 3636.996073908555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639861.9559151785,
            "unit": "ns",
            "range": "± 1061.920336346867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563890.9598214285,
            "unit": "ns",
            "range": "± 672.652622359229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215335.714285714,
            "unit": "ns",
            "range": "± 75689.77384106454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312841.6666666665,
            "unit": "ns",
            "range": "± 63521.30969772495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854955.3191489363,
            "unit": "ns",
            "range": "± 98989.6433065659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963909.090909091,
            "unit": "ns",
            "range": "± 110102.23751646049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7713388,
            "unit": "ns",
            "range": "± 127769.57553867562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186294.54545454544,
            "unit": "ns",
            "range": "± 7545.67372202058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179122.41379310345,
            "unit": "ns",
            "range": "± 7801.305403662256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147527.90697674418,
            "unit": "ns",
            "range": "± 5446.201191630003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2893252.6315789474,
            "unit": "ns",
            "range": "± 49473.083236364815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2562350,
            "unit": "ns",
            "range": "± 31943.405482918595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13329.670329670329,
            "unit": "ns",
            "range": "± 1410.555013342424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60105.37634408602,
            "unit": "ns",
            "range": "± 5172.804419591694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50640.425531914894,
            "unit": "ns",
            "range": "± 4039.3313390260378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66892.92929292929,
            "unit": "ns",
            "range": "± 15974.215528151843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2975.257731958763,
            "unit": "ns",
            "range": "± 563.1072514470955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11747.31182795699,
            "unit": "ns",
            "range": "± 1654.7422890017506"
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
          "id": "a763a2bd7072f072d207e8bd859df1389f5102eb",
          "message": "Merge pull request #3720 from greymistcube/refactor/dumb-action\n\n♻️ Refactor `DumbAction`",
          "timestamp": "2024-04-02T08:53:21+09:00",
          "tree_id": "4a1f60ea587825d5c1cadd8ec7f90693d651c6dd",
          "url": "https://github.com/planetarium/libplanet/commit/a763a2bd7072f072d207e8bd859df1389f5102eb"
        },
        "date": 1712016175562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986746.4646464647,
            "unit": "ns",
            "range": "± 86232.58216689127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1778082.2222222222,
            "unit": "ns",
            "range": "± 62024.70654684488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555413.1313131314,
            "unit": "ns",
            "range": "± 137530.71912616518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6743043.58974359,
            "unit": "ns",
            "range": "± 235978.99972898103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37354.255319148935,
            "unit": "ns",
            "range": "± 4597.279815015837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5307780,
            "unit": "ns",
            "range": "± 96525.54214151965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13722420,
            "unit": "ns",
            "range": "± 180743.53258534195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34551873.333333336,
            "unit": "ns",
            "range": "± 394557.7822370375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68566738.46153846,
            "unit": "ns",
            "range": "± 378785.67937216937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 139467671.42857143,
            "unit": "ns",
            "range": "± 837877.3349074721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3396333.125,
            "unit": "ns",
            "range": "± 6778.72439428789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064490.053013393,
            "unit": "ns",
            "range": "± 1723.7737483312221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744864.6028645834,
            "unit": "ns",
            "range": "± 1302.5153332494513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931838.8541666667,
            "unit": "ns",
            "range": "± 3454.06915341543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618941.953125,
            "unit": "ns",
            "range": "± 652.5772841546111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576682.734375,
            "unit": "ns",
            "range": "± 950.0490557402751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2299207.1428571427,
            "unit": "ns",
            "range": "± 83892.289080984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2334509.2592592593,
            "unit": "ns",
            "range": "± 97200.25092854969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2901470.909090909,
            "unit": "ns",
            "range": "± 93201.23324714044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3006038.383838384,
            "unit": "ns",
            "range": "± 295805.48204102746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7890429.487179487,
            "unit": "ns",
            "range": "± 243333.94443751482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185334.61538461538,
            "unit": "ns",
            "range": "± 8630.726916974296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178326.66666666666,
            "unit": "ns",
            "range": "± 11364.136867425215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149096.22641509434,
            "unit": "ns",
            "range": "± 6084.499924592468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2865076.923076923,
            "unit": "ns",
            "range": "± 43227.40554027722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2542421.4285714286,
            "unit": "ns",
            "range": "± 27738.398228155434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12907.368421052632,
            "unit": "ns",
            "range": "± 1975.3934219118444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61888.04347826087,
            "unit": "ns",
            "range": "± 5750.8115507808425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48556.666666666664,
            "unit": "ns",
            "range": "± 2169.0712428357847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59562.19512195122,
            "unit": "ns",
            "range": "± 6558.787155344478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.842105263158,
            "unit": "ns",
            "range": "± 615.5870112510923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11707.954545454546,
            "unit": "ns",
            "range": "± 1008.0391333980343"
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
          "id": "1ea676dfe55226895127f404097c0fb64399b925",
          "message": "Merge pull request #3721 from greymistcube/refactor/dumb-action\n\n♻️ Add mint and burn functionality to `DumbAction`",
          "timestamp": "2024-04-02T18:27:19+09:00",
          "tree_id": "581ef3be9c0e05074ee9c4ffb20168dd9eff71a3",
          "url": "https://github.com/planetarium/libplanet/commit/1ea676dfe55226895127f404097c0fb64399b925"
        },
        "date": 1712050596483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998258.1632653062,
            "unit": "ns",
            "range": "± 96074.82363656888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827740.3846153845,
            "unit": "ns",
            "range": "± 74416.9210665534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572390,
            "unit": "ns",
            "range": "± 131598.0408039358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6948933.333333333,
            "unit": "ns",
            "range": "± 292513.93387227546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36158.69565217391,
            "unit": "ns",
            "range": "± 3934.5511542583095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5031400,
            "unit": "ns",
            "range": "± 33100.237375065975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13380014.285714285,
            "unit": "ns",
            "range": "± 107932.45649402762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33534926.666666668,
            "unit": "ns",
            "range": "± 352357.7858343636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66633760,
            "unit": "ns",
            "range": "± 946237.6127137864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134405926.66666666,
            "unit": "ns",
            "range": "± 1311887.6386264765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352573.270089286,
            "unit": "ns",
            "range": "± 4955.067960435281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069163.2114955357,
            "unit": "ns",
            "range": "± 1213.1525051709334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759768.4500558035,
            "unit": "ns",
            "range": "± 1399.705619811622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964798.1370192308,
            "unit": "ns",
            "range": "± 2057.3052858807564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615770.2473958334,
            "unit": "ns",
            "range": "± 934.5441667227187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570661.796875,
            "unit": "ns",
            "range": "± 2138.304577669395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2266360.2040816327,
            "unit": "ns",
            "range": "± 90483.74449981324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2396642.5,
            "unit": "ns",
            "range": "± 80729.64024509562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2975864.285714286,
            "unit": "ns",
            "range": "± 52414.96567177762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958663.6363636362,
            "unit": "ns",
            "range": "± 73962.84885916466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7904964.705882353,
            "unit": "ns",
            "range": "± 218280.29226044394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184952.05479452055,
            "unit": "ns",
            "range": "± 8727.751231131157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172184.41558441558,
            "unit": "ns",
            "range": "± 7012.640184077099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150654.54545454544,
            "unit": "ns",
            "range": "± 5651.19680863964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2919000,
            "unit": "ns",
            "range": "± 29706.40956478533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2585528.5714285714,
            "unit": "ns",
            "range": "± 27582.838270072338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12168.131868131868,
            "unit": "ns",
            "range": "± 1499.9169696189574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59487.234042553195,
            "unit": "ns",
            "range": "± 5476.9160548174195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46533.333333333336,
            "unit": "ns",
            "range": "± 2494.999014092247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67443.43434343435,
            "unit": "ns",
            "range": "± 15688.499372939621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2898.913043478261,
            "unit": "ns",
            "range": "± 512.1586647221504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12074.468085106382,
            "unit": "ns",
            "range": "± 1663.3905114536822"
          }
        ]
      }
    ]
  }
}