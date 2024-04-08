window.BENCHMARK_DATA = {
  "lastUpdate": 1712566485397,
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712566452031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694501.433333334,
            "unit": "ns",
            "range": "± 105183.14012675136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14219250.333333334,
            "unit": "ns",
            "range": "± 83016.06100063171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36746865.07692308,
            "unit": "ns",
            "range": "± 105510.3293667351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73746369.86666666,
            "unit": "ns",
            "range": "± 220093.35456147647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146906835.53333333,
            "unit": "ns",
            "range": "± 442298.23968866887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84988.39344262295,
            "unit": "ns",
            "range": "± 3830.7486791256547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110508.25396825396,
            "unit": "ns",
            "range": "± 5034.51307818937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105526.79710144928,
            "unit": "ns",
            "range": "± 4606.319209966796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89395.85714285714,
            "unit": "ns",
            "range": "± 1523.1742971703663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3195223.6428571427,
            "unit": "ns",
            "range": "± 54529.20499865841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743760.74,
            "unit": "ns",
            "range": "± 179130.12213250026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5124.422222222222,
            "unit": "ns",
            "range": "± 560.7904328828942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26862.494382022473,
            "unit": "ns",
            "range": "± 1671.7040987322127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21836.41891891892,
            "unit": "ns",
            "range": "± 1030.5395050253985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30371.4375,
            "unit": "ns",
            "range": "± 5982.433998250299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1529.8711340206185,
            "unit": "ns",
            "range": "± 295.96133332707876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4918.922222222222,
            "unit": "ns",
            "range": "± 608.4410772165571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1180402.696969697,
            "unit": "ns",
            "range": "± 144086.75559795208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801451.1639344261,
            "unit": "ns",
            "range": "± 80415.73969175859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555928.72,
            "unit": "ns",
            "range": "± 166246.24887668068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8197480.197916667,
            "unit": "ns",
            "range": "± 701138.9628445634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2545545.446236559,
            "unit": "ns",
            "range": "± 165975.31793864424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2641748.404761905,
            "unit": "ns",
            "range": "± 119872.54523824048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3304171.1625,
            "unit": "ns",
            "range": "± 172866.18759961828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3290037.9285714286,
            "unit": "ns",
            "range": "± 175947.56524072567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9731124.863636363,
            "unit": "ns",
            "range": "± 238985.042599212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3025230.4359375,
            "unit": "ns",
            "range": "± 55695.74107329191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 930950.2600260417,
            "unit": "ns",
            "range": "± 2801.5607710171535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617895.6809244792,
            "unit": "ns",
            "range": "± 7422.207892498697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1629230.842578125,
            "unit": "ns",
            "range": "± 15844.48147499752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459874.7878766741,
            "unit": "ns",
            "range": "± 759.1748378023849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420254.9506184896,
            "unit": "ns",
            "range": "± 1163.1376037603495"
          }
        ]
      }
    ]
  }
}