window.BENCHMARK_DATA = {
  "lastUpdate": 1724648524271,
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
          "id": "c0d5e06cb475cde26e76fcb5520035b3c9411766",
          "message": "WIP",
          "timestamp": "2024-08-23T18:11:19+09:00",
          "tree_id": "fabe29fc9556d6e076bc96ff80a1b98a9ccde45b",
          "url": "https://github.com/planetarium/libplanet/commit/c0d5e06cb475cde26e76fcb5520035b3c9411766"
        },
        "date": 1724404977419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038888.4210526316,
            "unit": "ns",
            "range": "± 108666.00778293276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833052.9411764706,
            "unit": "ns",
            "range": "± 74721.82908077445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553661.9047619049,
            "unit": "ns",
            "range": "± 78304.83821510927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6719477.2727272725,
            "unit": "ns",
            "range": "± 147873.53406854815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31723.333333333332,
            "unit": "ns",
            "range": "± 1298.5476459108324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9865853.333333334,
            "unit": "ns",
            "range": "± 147907.85194392712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24804186.666666668,
            "unit": "ns",
            "range": "± 351412.41718582023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58787873.333333336,
            "unit": "ns",
            "range": "± 377085.65617806005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117980620,
            "unit": "ns",
            "range": "± 1390881.1673591263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238246973.33333334,
            "unit": "ns",
            "range": "± 2679753.6612443277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281282.5334821427,
            "unit": "ns",
            "range": "± 5843.472196171042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1089084.2447916667,
            "unit": "ns",
            "range": "± 3138.717366271898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745307.7018229166,
            "unit": "ns",
            "range": "± 2365.6455026287513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941860.7979910714,
            "unit": "ns",
            "range": "± 3968.884551904895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616808.4123883928,
            "unit": "ns",
            "range": "± 1380.205787200235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570442.8850446428,
            "unit": "ns",
            "range": "± 1114.5181264638045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155269.565217391,
            "unit": "ns",
            "range": "± 49186.291833678886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2222331.25,
            "unit": "ns",
            "range": "± 41463.60201027724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2687172.727272727,
            "unit": "ns",
            "range": "± 75163.6517570464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2272671.7391304346,
            "unit": "ns",
            "range": "± 86173.9962402773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2978117.6470588236,
            "unit": "ns",
            "range": "± 61137.33756157236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181110.29411764705,
            "unit": "ns",
            "range": "± 7759.9072872189345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171196.7213114754,
            "unit": "ns",
            "range": "± 7288.277510567105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144971.05263157896,
            "unit": "ns",
            "range": "± 3218.277480504201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2698846.6666666665,
            "unit": "ns",
            "range": "± 41045.564692818894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430578.5714285714,
            "unit": "ns",
            "range": "± 21369.647006602925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10746.153846153846,
            "unit": "ns",
            "range": "± 1244.4818370450582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55477.17391304348,
            "unit": "ns",
            "range": "± 4258.929939921311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45806.57894736842,
            "unit": "ns",
            "range": "± 2148.632776213177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59600,
            "unit": "ns",
            "range": "± 12298.61448974424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2620.618556701031,
            "unit": "ns",
            "range": "± 588.0650021344538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10363.04347826087,
            "unit": "ns",
            "range": "± 1042.895103014232"
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
          "id": "412140f79f5602b7574a10169af8867a708d561a",
          "message": "WIP",
          "timestamp": "2024-08-26T13:44:07+09:00",
          "tree_id": "640f070bdd3f1146a591f9fc70169c6f0d747921",
          "url": "https://github.com/planetarium/libplanet/commit/412140f79f5602b7574a10169af8867a708d561a"
        },
        "date": 1724648246527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989728,
            "unit": "ns",
            "range": "± 96382.09637173338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752361.5384615385,
            "unit": "ns",
            "range": "± 69612.41903468975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1514798.9010989012,
            "unit": "ns",
            "range": "± 94756.68078998206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6843219.607843137,
            "unit": "ns",
            "range": "± 275956.47484312294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31253.44827586207,
            "unit": "ns",
            "range": "± 1272.1325536750414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9738133.333333334,
            "unit": "ns",
            "range": "± 93776.23569408394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23444607.14285714,
            "unit": "ns",
            "range": "± 175176.34835210495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60101306.666666664,
            "unit": "ns",
            "range": "± 1107364.346072412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118697508.33333333,
            "unit": "ns",
            "range": "± 300581.61638074374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239908006.66666666,
            "unit": "ns",
            "range": "± 612487.0418065614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373313.4440104165,
            "unit": "ns",
            "range": "± 16962.283676041417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058875.3348214286,
            "unit": "ns",
            "range": "± 6956.116590113872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737228.4388950893,
            "unit": "ns",
            "range": "± 1733.5164971046943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920290.1432291667,
            "unit": "ns",
            "range": "± 3393.957300328977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629411.4388020834,
            "unit": "ns",
            "range": "± 1890.2937453177826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564281.7708333334,
            "unit": "ns",
            "range": "± 933.3655788080421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2088355.1724137932,
            "unit": "ns",
            "range": "± 55481.31336769999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2195064,
            "unit": "ns",
            "range": "± 25138.895494167333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2695000,
            "unit": "ns",
            "range": "± 69849.62108141597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2226513.3333333335,
            "unit": "ns",
            "range": "± 32874.95500630634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2908410,
            "unit": "ns",
            "range": "± 44693.173016532564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175069.84126984127,
            "unit": "ns",
            "range": "± 7769.556696795573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164110.9090909091,
            "unit": "ns",
            "range": "± 7001.790054911956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143814.8148148148,
            "unit": "ns",
            "range": "± 3377.9492758982205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714750,
            "unit": "ns",
            "range": "± 29967.925161104136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2433525,
            "unit": "ns",
            "range": "± 53428.72157813328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12261.290322580646,
            "unit": "ns",
            "range": "± 1124.725305406934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54528.88888888889,
            "unit": "ns",
            "range": "± 3424.014479533481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46443.24324324324,
            "unit": "ns",
            "range": "± 1543.5421997867509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50307.21649484536,
            "unit": "ns",
            "range": "± 9455.138014842783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2348.453608247423,
            "unit": "ns",
            "range": "± 451.8741994141952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9678.125,
            "unit": "ns",
            "range": "± 1142.5919863925271"
          }
        ]
      }
    ]
  }
}