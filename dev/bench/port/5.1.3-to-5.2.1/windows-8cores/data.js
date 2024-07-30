window.BENCHMARK_DATA = {
  "lastUpdate": 1722329645249,
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
          "id": "2ea68031fbd29cdfeb30980dbcd0332990a3ea74",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:41:36+09:00",
          "tree_id": "f1286f61ec1d31e86157086eb19a9aa7d15be065",
          "url": "https://github.com/planetarium/libplanet/commit/2ea68031fbd29cdfeb30980dbcd0332990a3ea74"
        },
        "date": 1722329431648,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002239.1752577319,
            "unit": "ns",
            "range": "± 109973.07488341279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758419.642857143,
            "unit": "ns",
            "range": "± 72390.41729561839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553386.956521739,
            "unit": "ns",
            "range": "± 102270.85909097901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749181.081081081,
            "unit": "ns",
            "range": "± 226704.8679056807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30225,
            "unit": "ns",
            "range": "± 391.0940365878077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9889678.57142857,
            "unit": "ns",
            "range": "± 88896.73506656195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24069466.666666668,
            "unit": "ns",
            "range": "± 64773.891111287805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59979192.85714286,
            "unit": "ns",
            "range": "± 226213.37940532612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118741600,
            "unit": "ns",
            "range": "± 581326.4209480829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240988093.33333334,
            "unit": "ns",
            "range": "± 1169815.2927868976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368114.481026786,
            "unit": "ns",
            "range": "± 6552.3563713163785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061909.0401785714,
            "unit": "ns",
            "range": "± 2799.251981974251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736704.2759486607,
            "unit": "ns",
            "range": "± 1406.932178984053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962032.2135416667,
            "unit": "ns",
            "range": "± 5037.407284270719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628176.0611979166,
            "unit": "ns",
            "range": "± 1851.9937265771066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563281.8229166666,
            "unit": "ns",
            "range": "± 2054.441283108628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2109033.3333333335,
            "unit": "ns",
            "range": "± 52995.2395660843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278113.3333333335,
            "unit": "ns",
            "range": "± 36282.00787219604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2699236,
            "unit": "ns",
            "range": "± 71413.13417945843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2209537.5,
            "unit": "ns",
            "range": "± 50005.47633053282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2880840,
            "unit": "ns",
            "range": "± 40884.642593521596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174113.33333333334,
            "unit": "ns",
            "range": "± 6468.23005156743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162681.42857142858,
            "unit": "ns",
            "range": "± 7875.287762989775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143293.10344827586,
            "unit": "ns",
            "range": "± 3757.747333793285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2671276.6666666665,
            "unit": "ns",
            "range": "± 33453.92282499845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457053.3333333335,
            "unit": "ns",
            "range": "± 36198.083348365806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10656.521739130434,
            "unit": "ns",
            "range": "± 1003.2150896022913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51113.333333333336,
            "unit": "ns",
            "range": "± 3875.316587284888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44163.88888888889,
            "unit": "ns",
            "range": "± 1479.9908837128073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52863.40206185567,
            "unit": "ns",
            "range": "± 11905.545179190482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2638.5416666666665,
            "unit": "ns",
            "range": "± 765.7634362849126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10473.863636363636,
            "unit": "ns",
            "range": "± 1355.8298403206306"
          }
        ]
      }
    ]
  }
}