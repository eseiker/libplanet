window.BENCHMARK_DATA = {
  "lastUpdate": 1698646752361,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414729900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9731679.931818182,
            "unit": "ns",
            "range": "± 2393431.324901955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19362560.147058822,
            "unit": "ns",
            "range": "± 389108.3276760697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48466406,
            "unit": "ns",
            "range": "± 641827.7425209197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97612386.4736842,
            "unit": "ns",
            "range": "± 1660311.956905869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205742757.67333335,
            "unit": "ns",
            "range": "± 9895095.324903002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50079.416666666664,
            "unit": "ns",
            "range": "± 10429.959449551961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268706.3023255814,
            "unit": "ns",
            "range": "± 42855.52326241927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298723.3144329897,
            "unit": "ns",
            "range": "± 75181.26967665799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247596.29245283018,
            "unit": "ns",
            "range": "± 10260.504754712625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504160.076086956,
            "unit": "ns",
            "range": "± 812935.8881338031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716758.765957447,
            "unit": "ns",
            "range": "± 144089.30606190232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18609.9375,
            "unit": "ns",
            "range": "± 3846.586384978929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82638.4,
            "unit": "ns",
            "range": "± 11930.940996934836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70730.55,
            "unit": "ns",
            "range": "± 17442.827263287018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87695.7258064516,
            "unit": "ns",
            "range": "± 14539.165490322303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5838.721649484536,
            "unit": "ns",
            "range": "± 2326.7328074212955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19128.784090909092,
            "unit": "ns",
            "range": "± 3765.7430627854055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1139544.2978723405,
            "unit": "ns",
            "range": "± 113567.33543186224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498581.8214285714,
            "unit": "ns",
            "range": "± 174967.92980395976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1715328.2872340425,
            "unit": "ns",
            "range": "± 175502.87903809026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7868845.9125,
            "unit": "ns",
            "range": "± 623343.1712084503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138700.3139534886,
            "unit": "ns",
            "range": "± 307642.2908426665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532919.092783505,
            "unit": "ns",
            "range": "± 692378.501661469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4024036.817647059,
            "unit": "ns",
            "range": "± 442703.7847167705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5134558.221649485,
            "unit": "ns",
            "range": "± 1255686.4354156533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14075847.868131869,
            "unit": "ns",
            "range": "± 2988812.5106910127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4739845.506510417,
            "unit": "ns",
            "range": "± 177025.45631780883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408261.0536458334,
            "unit": "ns",
            "range": "± 23276.223736130403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 901269.2815104167,
            "unit": "ns",
            "range": "± 16128.109787414725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2115173.998545545,
            "unit": "ns",
            "range": "± 122796.02725080057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658704.5162179129,
            "unit": "ns",
            "range": "± 33236.33861793769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558074.2448828125,
            "unit": "ns",
            "range": "± 14727.193043061716"
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
          "distinct": false,
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698646699242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9029747.113402061,
            "unit": "ns",
            "range": "± 523519.23288706795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21735735.403225806,
            "unit": "ns",
            "range": "± 972908.3269122004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55006312.657142855,
            "unit": "ns",
            "range": "± 1793592.3264335762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105786120.5,
            "unit": "ns",
            "range": "± 1717484.6849213825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220974985.55555555,
            "unit": "ns",
            "range": "± 4520151.297625429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76000.71739130435,
            "unit": "ns",
            "range": "± 6167.044674571101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318168.9479166667,
            "unit": "ns",
            "range": "± 33868.57782956436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343745.25773195876,
            "unit": "ns",
            "range": "± 49405.21580664972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303379.1182795699,
            "unit": "ns",
            "range": "± 17753.077152040227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4389301.488888889,
            "unit": "ns",
            "range": "± 274547.52984019695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4357458.424242424,
            "unit": "ns",
            "range": "± 506102.2952124682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27165.074468085106,
            "unit": "ns",
            "range": "± 7209.43641517854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131915.20707070708,
            "unit": "ns",
            "range": "± 28079.71782311143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120944.77894736842,
            "unit": "ns",
            "range": "± 16489.38717180477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126504.65263157895,
            "unit": "ns",
            "range": "± 20135.91790687774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7994.55376344086,
            "unit": "ns",
            "range": "± 1058.8154924622484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22652.73076923077,
            "unit": "ns",
            "range": "± 3257.8163616376305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484514.0894736843,
            "unit": "ns",
            "range": "± 138979.38104154653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2908932.0428571426,
            "unit": "ns",
            "range": "± 140558.17135062948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504851.5,
            "unit": "ns",
            "range": "± 263593.6224911369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10620312.543209877,
            "unit": "ns",
            "range": "± 899641.9569552524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3529720.7040816327,
            "unit": "ns",
            "range": "± 419238.7491587459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3560941.173469388,
            "unit": "ns",
            "range": "± 232763.6689782736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4475103.58974359,
            "unit": "ns",
            "range": "± 230948.15909239714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4446121.36,
            "unit": "ns",
            "range": "± 309301.4347204874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16363452.113402061,
            "unit": "ns",
            "range": "± 2135343.1521494472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6751688.4521169355,
            "unit": "ns",
            "range": "± 304202.597002355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825003.823046875,
            "unit": "ns",
            "range": "± 26144.689819486357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147498.88671875,
            "unit": "ns",
            "range": "± 12311.894744596717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3181950.0203993055,
            "unit": "ns",
            "range": "± 65761.80834287651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895196.8186197917,
            "unit": "ns",
            "range": "± 12948.424818046566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761794.0929624496,
            "unit": "ns",
            "range": "± 23193.072640192193"
          }
        ]
      }
    ]
  }
}