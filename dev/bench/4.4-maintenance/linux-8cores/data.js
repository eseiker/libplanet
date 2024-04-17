window.BENCHMARK_DATA = {
  "lastUpdate": 1713346775606,
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346751449,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201591.14,
            "unit": "ns",
            "range": "± 8020.676219672275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192765.0873015873,
            "unit": "ns",
            "range": "± 8743.842269470815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164007.67647058822,
            "unit": "ns",
            "range": "± 2965.093553230954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219462,
            "unit": "ns",
            "range": "± 32691.195200754686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2833047.8,
            "unit": "ns",
            "range": "± 36161.13747262779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12408.095744680852,
            "unit": "ns",
            "range": "± 1238.4284532201036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60372.63917525773,
            "unit": "ns",
            "range": "± 4927.157330351108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50496.666666666664,
            "unit": "ns",
            "range": "± 1699.4150748099266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64427.03296703297,
            "unit": "ns",
            "range": "± 8201.011950363942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5947.121212121212,
            "unit": "ns",
            "range": "± 1182.929115069939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14830.636363636364,
            "unit": "ns",
            "range": "± 3099.742143504071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757355.3,
            "unit": "ns",
            "range": "± 28082.69128637272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14692297.266666668,
            "unit": "ns",
            "range": "± 89543.12129476793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37680291.85714286,
            "unit": "ns",
            "range": "± 213495.2274803844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77370683.03333333,
            "unit": "ns",
            "range": "± 842038.0220000984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152274559.4,
            "unit": "ns",
            "range": "± 748439.5118109604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3667641.869698661,
            "unit": "ns",
            "range": "± 4504.987953064696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190731.603515625,
            "unit": "ns",
            "range": "± 1703.8289049285518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779855.74921875,
            "unit": "ns",
            "range": "± 913.5435111397516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952921.8228236607,
            "unit": "ns",
            "range": "± 3499.7966567590965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622773.4208984375,
            "unit": "ns",
            "range": "± 1556.3419166089382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581812.4937918527,
            "unit": "ns",
            "range": "± 534.6736364208307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779659.7626262626,
            "unit": "ns",
            "range": "± 255983.34831915423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037928.670212766,
            "unit": "ns",
            "range": "± 269091.60759969644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2351243.85,
            "unit": "ns",
            "range": "± 286318.63598147157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9202908.225,
            "unit": "ns",
            "range": "± 326971.4393742771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2649411.82,
            "unit": "ns",
            "range": "± 100646.33945606623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2868798.9615384615,
            "unit": "ns",
            "range": "± 115427.7210965098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903710.1511627906,
            "unit": "ns",
            "range": "± 142005.44202229308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798546.47,
            "unit": "ns",
            "range": "± 460180.98562620796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9788866.4,
            "unit": "ns",
            "range": "± 224086.00082637445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 192832.86,
            "unit": "ns",
            "range": "± 7782.506167379897"
          }
        ]
      }
    ]
  }
}