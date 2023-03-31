window.BENCHMARK_DATA = {
  "lastUpdate": 1680265994361,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0592dab33dbeb79fc063cbfd4701914bf1aae8d",
          "message": "Merge pull request #2904 from colibrishin/benchmark/spliting-merged-fix-fix\n\nci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:41:52+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/planetarium/libplanet/commit/e0592dab33dbeb79fc063cbfd4701914bf1aae8d"
        },
        "date": 1678356259401,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618280.412371134,
            "unit": "ns",
            "range": "± 153381.2350261971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966303.846153846,
            "unit": "ns",
            "range": "± 79880.65338124987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471260,
            "unit": "ns",
            "range": "± 129243.29094063086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6249664,
            "unit": "ns",
            "range": "± 380296.86450923514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62602.04081632653,
            "unit": "ns",
            "range": "± 7932.797371838433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8599928.57142857,
            "unit": "ns",
            "range": "± 370203.3469296598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23854526.666666668,
            "unit": "ns",
            "range": "± 317109.907640568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59303320,
            "unit": "ns",
            "range": "± 742795.7133117326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120391750,
            "unit": "ns",
            "range": "± 561540.0405517465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 239765080,
            "unit": "ns",
            "range": "± 1112223.533031275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5185172.135416667,
            "unit": "ns",
            "range": "± 77039.17669190878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1600595.2311197917,
            "unit": "ns",
            "range": "± 2493.6223895343733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224137.2445913462,
            "unit": "ns",
            "range": "± 7017.050945084821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2740081.8917410714,
            "unit": "ns",
            "range": "± 20854.148712699352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859889.8356119791,
            "unit": "ns",
            "range": "± 1343.3477952008598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779087.5813802084,
            "unit": "ns",
            "range": "± 2102.059389060438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3887810,
            "unit": "ns",
            "range": "± 105756.34765329937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6057020,
            "unit": "ns",
            "range": "± 149666.7603934376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27986886.666666668,
            "unit": "ns",
            "range": "± 493833.916364987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7204806.862745098,
            "unit": "ns",
            "range": "± 294143.68139050814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32304507.14285714,
            "unit": "ns",
            "range": "± 523894.89618887036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221937.14285714287,
            "unit": "ns",
            "range": "± 10768.905471391225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229460.5633802817,
            "unit": "ns",
            "range": "± 11157.758080920832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232866.66666666666,
            "unit": "ns",
            "range": "± 12478.510041323269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13084746.666666666,
            "unit": "ns",
            "range": "± 166753.8342530547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10632940,
            "unit": "ns",
            "range": "± 108283.75290345798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33553.06122448979,
            "unit": "ns",
            "range": "± 3911.1578184405953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74725.80645161291,
            "unit": "ns",
            "range": "± 6572.751776741121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62382,
            "unit": "ns",
            "range": "± 6839.315637096915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145782.6530612245,
            "unit": "ns",
            "range": "± 23060.682054228742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9417.34693877551,
            "unit": "ns",
            "range": "± 1675.1073521655835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32564.583333333332,
            "unit": "ns",
            "range": "± 2980.6032298907357"
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
          "id": "6105566dddbe83ae6c4adb218287356746a639ef",
          "message": "Merge pull request #2894 from greymistcube/refactor/block-commit-cache\n\n♻️ Refactor block commit cache",
          "timestamp": "2023-03-13T15:51:32+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/planetarium/libplanet/commit/6105566dddbe83ae6c4adb218287356746a639ef"
        },
        "date": 1678691415486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398986.8686868686,
            "unit": "ns",
            "range": "± 99571.85145069522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631886,
            "unit": "ns",
            "range": "± 102637.48123907777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185341.935483871,
            "unit": "ns",
            "range": "± 140523.5198653365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5295485.454545454,
            "unit": "ns",
            "range": "± 222978.58427160903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52741.05263157895,
            "unit": "ns",
            "range": "± 3404.6743443121645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7164914.285714285,
            "unit": "ns",
            "range": "± 170424.73202476886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20400773.333333332,
            "unit": "ns",
            "range": "± 248372.60162525022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49231962.5,
            "unit": "ns",
            "range": "± 951802.1950489503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101225980,
            "unit": "ns",
            "range": "± 1269288.598951622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199895257.14285713,
            "unit": "ns",
            "range": "± 1943076.9828030234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775067.075892857,
            "unit": "ns",
            "range": "± 20461.262817139912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542733.41796875,
            "unit": "ns",
            "range": "± 2503.625582787006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162203.2682291667,
            "unit": "ns",
            "range": "± 4583.805992373674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627905.050223214,
            "unit": "ns",
            "range": "± 4220.145837415359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817552.6715959822,
            "unit": "ns",
            "range": "± 814.6432610225505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756309.1471354166,
            "unit": "ns",
            "range": "± 3316.666306808061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191566.6666666665,
            "unit": "ns",
            "range": "± 95070.65732946982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5075145.454545454,
            "unit": "ns",
            "range": "± 122954.45431336694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23905514.285714287,
            "unit": "ns",
            "range": "± 344580.5741592408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6770407.407407408,
            "unit": "ns",
            "range": "± 186780.95547361174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26596411.111111112,
            "unit": "ns",
            "range": "± 559861.7611821572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193916.98113207548,
            "unit": "ns",
            "range": "± 8053.277781057097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187161.90476190476,
            "unit": "ns",
            "range": "± 6855.012493306733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165091.83673469388,
            "unit": "ns",
            "range": "± 9926.904745626392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11169870.588235294,
            "unit": "ns",
            "range": "± 215881.82752580717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9084836,
            "unit": "ns",
            "range": "± 237450.30160716438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23738.383838383837,
            "unit": "ns",
            "range": "± 2807.8863817464844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57956.382978723406,
            "unit": "ns",
            "range": "± 5090.018875488129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43855.208333333336,
            "unit": "ns",
            "range": "± 2727.2453730021075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105039.75903614458,
            "unit": "ns",
            "range": "± 10863.442159416343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7753.6082474226805,
            "unit": "ns",
            "range": "± 1174.2073439550352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22038.947368421053,
            "unit": "ns",
            "range": "± 2007.819540125827"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5d31eda81c48c6d63fff52f7727afb334c60a8a",
          "message": "Merge pull request #2921 from OnedgeLee/merge/0.51.1\n\nMerge 0.51.1 to main",
          "timestamp": "2023-03-13T17:40:15+09:00",
          "tree_id": "49d0d5313e846d8a0a998dd5a33189bc7e9b128f",
          "url": "https://github.com/planetarium/libplanet/commit/b5d31eda81c48c6d63fff52f7727afb334c60a8a"
        },
        "date": 1678697859326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447739.393939394,
            "unit": "ns",
            "range": "± 118268.23267832081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527895.1612903224,
            "unit": "ns",
            "range": "± 75385.70527056031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196145.9183673467,
            "unit": "ns",
            "range": "± 132473.23570836795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5079888.461538462,
            "unit": "ns",
            "range": "± 135227.3828096161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52635.416666666664,
            "unit": "ns",
            "range": "± 4256.21475434308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7415826.666666667,
            "unit": "ns",
            "range": "± 126228.76323036152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20386920,
            "unit": "ns",
            "range": "± 181523.89925296337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50544564.28571428,
            "unit": "ns",
            "range": "± 235260.93077570392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102171113.33333333,
            "unit": "ns",
            "range": "± 689105.054054757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204442964.2857143,
            "unit": "ns",
            "range": "± 861426.1338100842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4918998.151041667,
            "unit": "ns",
            "range": "± 22831.81089856601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539282.578125,
            "unit": "ns",
            "range": "± 4293.410111981602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171229.2550223214,
            "unit": "ns",
            "range": "± 3270.5484957447734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656165.652901786,
            "unit": "ns",
            "range": "± 5849.460090264504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825889.74609375,
            "unit": "ns",
            "range": "± 1501.4864462075577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758518.4830729166,
            "unit": "ns",
            "range": "± 1189.865107513852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354100,
            "unit": "ns",
            "range": "± 27886.73519793954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5301296.96969697,
            "unit": "ns",
            "range": "± 163377.4951700212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23849246.666666668,
            "unit": "ns",
            "range": "± 297219.6755327775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6487764.285714285,
            "unit": "ns",
            "range": "± 93057.54718405213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27430606.666666668,
            "unit": "ns",
            "range": "± 430409.46528802527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194901.35135135136,
            "unit": "ns",
            "range": "± 9707.661756518442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193267.6923076923,
            "unit": "ns",
            "range": "± 8500.020361966563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186321,
            "unit": "ns",
            "range": "± 11268.184360751238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11609980,
            "unit": "ns",
            "range": "± 78657.92304112064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9352664.285714285,
            "unit": "ns",
            "range": "± 113811.9880608964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25624.48979591837,
            "unit": "ns",
            "range": "± 2630.0429703082796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59706.31578947369,
            "unit": "ns",
            "range": "± 5771.330657551219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46985.555555555555,
            "unit": "ns",
            "range": "± 2967.1066037475803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114450,
            "unit": "ns",
            "range": "± 17381.817481131497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7513.265306122449,
            "unit": "ns",
            "range": "± 1010.2197122563731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23735.05154639175,
            "unit": "ns",
            "range": "± 2372.939511323166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678703710486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1278093,
            "unit": "ns",
            "range": "± 130901.03845920005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2502583.3333333335,
            "unit": "ns",
            "range": "± 104503.35148548162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2044967,
            "unit": "ns",
            "range": "± 145902.49757625774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5265217.171717172,
            "unit": "ns",
            "range": "± 328535.2688302866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47561.84210526316,
            "unit": "ns",
            "range": "± 2421.017257560034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6853753.846153846,
            "unit": "ns",
            "range": "± 12403.199545857471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18334185.714285713,
            "unit": "ns",
            "range": "± 202748.2736610289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45590413.333333336,
            "unit": "ns",
            "range": "± 804301.0717978922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91464638.46153846,
            "unit": "ns",
            "range": "± 979476.849767655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 181209250,
            "unit": "ns",
            "range": "± 2135099.038184679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4745474.051339285,
            "unit": "ns",
            "range": "± 18380.63900911887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481180.8333333333,
            "unit": "ns",
            "range": "± 4990.136189160803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140693.2161458333,
            "unit": "ns",
            "range": "± 4884.658131918191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684157.1354166665,
            "unit": "ns",
            "range": "± 21734.605139102205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822661.7838541666,
            "unit": "ns",
            "range": "± 2535.290176019171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747215.0948660715,
            "unit": "ns",
            "range": "± 2112.2813041579475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948612.121212121,
            "unit": "ns",
            "range": "± 92745.80434437371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4678019.354838709,
            "unit": "ns",
            "range": "± 134800.71072847955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21787615.789473683,
            "unit": "ns",
            "range": "± 479890.46813154017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5580352.631578947,
            "unit": "ns",
            "range": "± 118674.44903517004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24979336,
            "unit": "ns",
            "range": "± 662325.5933199824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176455.84415584416,
            "unit": "ns",
            "range": "± 8997.419125658282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172577.10843373495,
            "unit": "ns",
            "range": "± 9217.974557977115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146541.66666666666,
            "unit": "ns",
            "range": "± 4877.140555694495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10299430.76923077,
            "unit": "ns",
            "range": "± 96066.12639752704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8389781.818181818,
            "unit": "ns",
            "range": "± 205212.84104526727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17419.14893617021,
            "unit": "ns",
            "range": "± 1721.2946237877397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50327.65957446808,
            "unit": "ns",
            "range": "± 3989.270670813761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37760.606060606064,
            "unit": "ns",
            "range": "± 1183.4640346086235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85711.53846153847,
            "unit": "ns",
            "range": "± 4694.428329696529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5479.166666666667,
            "unit": "ns",
            "range": "± 691.7432847016474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17643.478260869564,
            "unit": "ns",
            "range": "± 1592.448135876419"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba5b680d8f3173eec161e6af2e2edcb471a8f3b",
          "message": "Merge pull request #2925 from colibrishin/prepare/0.53\n\n🔧 Prepare 0.53.0",
          "timestamp": "2023-03-14T00:31:45+09:00",
          "tree_id": "9c83cab9a04832002ac43889c4b0401dbc846dcb",
          "url": "https://github.com/planetarium/libplanet/commit/4ba5b680d8f3173eec161e6af2e2edcb471a8f3b"
        },
        "date": 1678722791894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668202.06185567,
            "unit": "ns",
            "range": "± 138497.77448526432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3070322,
            "unit": "ns",
            "range": "± 122570.63817593976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582036.9565217393,
            "unit": "ns",
            "range": "± 181401.53246829045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5874431.818181818,
            "unit": "ns",
            "range": "± 112312.5290316676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62274.489795918365,
            "unit": "ns",
            "range": "± 5299.140393711601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9273246.511627907,
            "unit": "ns",
            "range": "± 342496.11978951655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24217087.5,
            "unit": "ns",
            "range": "± 379446.05391719827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59823158.333333336,
            "unit": "ns",
            "range": "± 192052.32931930217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120125557.14285715,
            "unit": "ns",
            "range": "± 730944.4677573359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 242106729.4117647,
            "unit": "ns",
            "range": "± 3541115.1327591543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5767556.473214285,
            "unit": "ns",
            "range": "± 65145.7348267403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908005.296875,
            "unit": "ns",
            "range": "± 50340.897725079725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425505.4565429688,
            "unit": "ns",
            "range": "± 43908.101367973344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136376.231971154,
            "unit": "ns",
            "range": "± 21686.83856338546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015732.9159007353,
            "unit": "ns",
            "range": "± 32289.37790361772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935729.5442708334,
            "unit": "ns",
            "range": "± 10670.407761741199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3991872.727272727,
            "unit": "ns",
            "range": "± 108920.27265598698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6275014.285714285,
            "unit": "ns",
            "range": "± 227480.00455835147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28842150,
            "unit": "ns",
            "range": "± 586469.0253091452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7568194.339622642,
            "unit": "ns",
            "range": "± 311626.42354582093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32392935,
            "unit": "ns",
            "range": "± 745914.9755942626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226541.66666666666,
            "unit": "ns",
            "range": "± 8705.533415979608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222979.3650793651,
            "unit": "ns",
            "range": "± 9610.312987588179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219137.5,
            "unit": "ns",
            "range": "± 7794.300596902315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13595900,
            "unit": "ns",
            "range": "± 226640.84430590243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11165186.842105264,
            "unit": "ns",
            "range": "± 246190.03321852887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28461.458333333332,
            "unit": "ns",
            "range": "± 2975.35030371628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69773.68421052632,
            "unit": "ns",
            "range": "± 6364.633173336151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59039.393939393936,
            "unit": "ns",
            "range": "± 5291.32555788762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123690.80459770115,
            "unit": "ns",
            "range": "± 13722.614438200671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9591.666666666666,
            "unit": "ns",
            "range": "± 1169.8552916958458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25921.978021978022,
            "unit": "ns",
            "range": "± 2025.9868485808863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "955091416ce990cac6d02fd02e57820fc1368b60",
          "message": "Merge pull request #2703 from longfin/feature/eliminate-completer\n\nRemove StateCompleters",
          "timestamp": "2023-03-14T01:19:32+09:00",
          "tree_id": "c74812b0f7d4eac0d6d751aeaf7ca384424b21f3",
          "url": "https://github.com/planetarium/libplanet/commit/955091416ce990cac6d02fd02e57820fc1368b60"
        },
        "date": 1678725418098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488925,
            "unit": "ns",
            "range": "± 22918.39773076326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2356950,
            "unit": "ns",
            "range": "± 82716.62158949365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087009.756097561,
            "unit": "ns",
            "range": "± 110298.72525343332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4742203.846153846,
            "unit": "ns",
            "range": "± 126895.01638998825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42845.58823529412,
            "unit": "ns",
            "range": "± 2043.1490052783652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7106750,
            "unit": "ns",
            "range": "± 52950.36500201064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18095486.666666668,
            "unit": "ns",
            "range": "± 87576.12090279491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46093593.333333336,
            "unit": "ns",
            "range": "± 272243.16721497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92418960,
            "unit": "ns",
            "range": "± 687394.9122801037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185013633.33333334,
            "unit": "ns",
            "range": "± 629218.4888150273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4781056.473214285,
            "unit": "ns",
            "range": "± 5457.636565188531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510912.665264423,
            "unit": "ns",
            "range": "± 929.1315782458726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231229.0364583333,
            "unit": "ns",
            "range": "± 1510.7459636451638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584594.921875,
            "unit": "ns",
            "range": "± 7955.0652516687605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825345.1998197115,
            "unit": "ns",
            "range": "± 5071.425044896627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726257.65625,
            "unit": "ns",
            "range": "± 1398.3694481880182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112042.8571428573,
            "unit": "ns",
            "range": "± 51555.13425578356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4787313.333333333,
            "unit": "ns",
            "range": "± 86166.10923647639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21607413.333333332,
            "unit": "ns",
            "range": "± 223280.97566796435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5860700,
            "unit": "ns",
            "range": "± 145036.55025231023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25017613.333333332,
            "unit": "ns",
            "range": "± 297931.32685874024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179486.36363636365,
            "unit": "ns",
            "range": "± 6687.774020783412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175444.18604651163,
            "unit": "ns",
            "range": "± 6408.3019935668635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152329.72972972973,
            "unit": "ns",
            "range": "± 7657.724718946148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10553926.666666666,
            "unit": "ns",
            "range": "± 68375.4599531844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8522371.42857143,
            "unit": "ns",
            "range": "± 59761.73754774266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18631.25,
            "unit": "ns",
            "range": "± 1858.42675400458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51200,
            "unit": "ns",
            "range": "± 4776.533137873566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35016.25,
            "unit": "ns",
            "range": "± 1833.4061646446382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91370.40816326531,
            "unit": "ns",
            "range": "± 14413.23996988961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4888.659793814433,
            "unit": "ns",
            "range": "± 649.8198931017657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18986.458333333332,
            "unit": "ns",
            "range": "± 1873.7308570233356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d6a86e7ba818a9568589c6dd80d936725d1c9cb",
          "message": "Merge pull request #2889 from dahlia/bencodex-js",
          "timestamp": "2023-03-15T14:37:59+09:00",
          "tree_id": "a6706f9443e0d4bc7c974bb1d6daad4a58dd04b6",
          "url": "https://github.com/planetarium/libplanet/commit/1d6a86e7ba818a9568589c6dd80d936725d1c9cb"
        },
        "date": 1678859587986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293707.2916666667,
            "unit": "ns",
            "range": "± 94892.86007724896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2316817.3913043477,
            "unit": "ns",
            "range": "± 57574.13128207298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024578.5714285714,
            "unit": "ns",
            "range": "± 141177.8422569558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4779858.536585365,
            "unit": "ns",
            "range": "± 164796.16041584485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42130,
            "unit": "ns",
            "range": "± 1912.557188687439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7012176.923076923,
            "unit": "ns",
            "range": "± 40427.48969546493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18129726.666666668,
            "unit": "ns",
            "range": "± 225079.80954911673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45011521.428571425,
            "unit": "ns",
            "range": "± 313437.9614203434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 90534690,
            "unit": "ns",
            "range": "± 926659.4541685743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 178791626.66666666,
            "unit": "ns",
            "range": "± 1915754.0445574152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749860.416666667,
            "unit": "ns",
            "range": "± 9148.622382210368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502553.0078125,
            "unit": "ns",
            "range": "± 1241.8408943554261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148420.4622395833,
            "unit": "ns",
            "range": "± 1475.6417039478313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699663.253348214,
            "unit": "ns",
            "range": "± 19865.889594234428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802990.1227678572,
            "unit": "ns",
            "range": "± 2186.235727897749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745035.37109375,
            "unit": "ns",
            "range": "± 1239.4461078744864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2870292.8571428573,
            "unit": "ns",
            "range": "± 17172.449504308406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4514566.666666667,
            "unit": "ns",
            "range": "± 83558.45458918765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20798413.333333332,
            "unit": "ns",
            "range": "± 240891.3325448595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5650213.636363637,
            "unit": "ns",
            "range": "± 135750.53554381616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24267563.157894738,
            "unit": "ns",
            "range": "± 516964.45849306625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168358.82352941178,
            "unit": "ns",
            "range": "± 6848.070574127817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170455.31914893616,
            "unit": "ns",
            "range": "± 6632.981115824635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142714.2857142857,
            "unit": "ns",
            "range": "± 2481.580496023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10249346.666666666,
            "unit": "ns",
            "range": "± 165173.24180848364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8178160,
            "unit": "ns",
            "range": "± 96706.71272313151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15910.526315789473,
            "unit": "ns",
            "range": "± 1324.36043851688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47636.17021276596,
            "unit": "ns",
            "range": "± 3593.777509518415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37546.153846153844,
            "unit": "ns",
            "range": "± 1316.4637948219174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81900,
            "unit": "ns",
            "range": "± 13274.632811820438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4050,
            "unit": "ns",
            "range": "± 516.0579322844328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14985.714285714286,
            "unit": "ns",
            "range": "± 1407.72246543221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "265bb73ca9c75e7e0b3db07877b4499ac5eaff40",
          "message": "Merge pull request #2915 from planetarium/ci-account-web3-secret-storage\n\n`@planetarium/account-web3-secret-storage`",
          "timestamp": "2023-03-16T10:14:58+09:00",
          "tree_id": "58eff47933c90310496dfcf5e4afb42d5c5dff14",
          "url": "https://github.com/planetarium/libplanet/commit/265bb73ca9c75e7e0b3db07877b4499ac5eaff40"
        },
        "date": 1678930211128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381147.0588235294,
            "unit": "ns",
            "range": "± 43250.885331937825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2332953.846153846,
            "unit": "ns",
            "range": "± 63255.83123013549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123018.3673469387,
            "unit": "ns",
            "range": "± 146062.99258707708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4818850,
            "unit": "ns",
            "range": "± 175570.77823695977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42019.718309859156,
            "unit": "ns",
            "range": "± 1857.4652250780487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7053473.333333333,
            "unit": "ns",
            "range": "± 26358.09625324329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18217273.333333332,
            "unit": "ns",
            "range": "± 156701.57017476915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46009456.666666664,
            "unit": "ns",
            "range": "± 269651.0005455906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93056978.57142857,
            "unit": "ns",
            "range": "± 456254.1235701057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 183753178.57142857,
            "unit": "ns",
            "range": "± 518141.264044367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898380.769230769,
            "unit": "ns",
            "range": "± 6608.70053365843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531470.99609375,
            "unit": "ns",
            "range": "± 4385.4524961718225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149001.875,
            "unit": "ns",
            "range": "± 1719.9505636011356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617920.8984375,
            "unit": "ns",
            "range": "± 30414.14777126385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811190.8268229166,
            "unit": "ns",
            "range": "± 1503.5644502783105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782297.2037760416,
            "unit": "ns",
            "range": "± 701.861613236987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3001556.25,
            "unit": "ns",
            "range": "± 57550.32544072478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4694796.153846154,
            "unit": "ns",
            "range": "± 127341.45116424338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21278693.333333332,
            "unit": "ns",
            "range": "± 166409.24367640275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5705210.52631579,
            "unit": "ns",
            "range": "± 122138.10896202183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24844613.333333332,
            "unit": "ns",
            "range": "± 413221.2722132342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174294.5945945946,
            "unit": "ns",
            "range": "± 5780.952725495548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176956.81818181818,
            "unit": "ns",
            "range": "± 6556.104832202161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152958.66666666666,
            "unit": "ns",
            "range": "± 7719.317525731343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10396086.666666666,
            "unit": "ns",
            "range": "± 70936.99283435232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8341526.666666667,
            "unit": "ns",
            "range": "± 85433.2861415993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16293.478260869566,
            "unit": "ns",
            "range": "± 1327.751495005466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48081.05263157895,
            "unit": "ns",
            "range": "± 4720.536724280995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35285.9375,
            "unit": "ns",
            "range": "± 1639.6251204815953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84539.24050632911,
            "unit": "ns",
            "range": "± 4676.027728019797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5006.451612903225,
            "unit": "ns",
            "range": "± 459.3962132902422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17203.191489361703,
            "unit": "ns",
            "range": "± 1198.3592840589297"
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
          "id": "9537674d4df800fc6b18690a8a0a32959fabe81e",
          "message": "Merge pull request #2948 from greymistcube/port/0.52.1-to-main\n\n🔀 Port 0.52.1 to main",
          "timestamp": "2023-03-16T10:54:39+09:00",
          "tree_id": "6ddce03a1f5692ba28751d1da2768d6c6078c57d",
          "url": "https://github.com/planetarium/libplanet/commit/9537674d4df800fc6b18690a8a0a32959fabe81e"
        },
        "date": 1678932624506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354004.6391752576,
            "unit": "ns",
            "range": "± 117664.86042695811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2388982,
            "unit": "ns",
            "range": "± 95336.33414477014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134427.551020408,
            "unit": "ns",
            "range": "± 146371.020440757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4773481.818181818,
            "unit": "ns",
            "range": "± 115044.54473258292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43576.470588235294,
            "unit": "ns",
            "range": "± 887.7847513366527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7110385.714285715,
            "unit": "ns",
            "range": "± 43920.85289109626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17759853.333333332,
            "unit": "ns",
            "range": "± 113202.65561414733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46010386.666666664,
            "unit": "ns",
            "range": "± 172338.2341570812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91154092.3076923,
            "unit": "ns",
            "range": "± 327185.3945944064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 184489726.66666666,
            "unit": "ns",
            "range": "± 955664.6897516384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849236.057692308,
            "unit": "ns",
            "range": "± 4492.202194792018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521527.5520833333,
            "unit": "ns",
            "range": "± 1802.4091394162529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142742.1316964286,
            "unit": "ns",
            "range": "± 2398.1543684706976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568317.9129464286,
            "unit": "ns",
            "range": "± 13444.831322208138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799518.6872209822,
            "unit": "ns",
            "range": "± 955.2751589251475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744920.6682477678,
            "unit": "ns",
            "range": "± 1297.3321890381671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3068066.6666666665,
            "unit": "ns",
            "range": "± 55980.46427953577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4694664,
            "unit": "ns",
            "range": "± 64711.10079937342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21781873.333333332,
            "unit": "ns",
            "range": "± 200135.23808617392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5921043.75,
            "unit": "ns",
            "range": "± 110011.56283924583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24874126.666666668,
            "unit": "ns",
            "range": "± 314383.1158376822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175814.2857142857,
            "unit": "ns",
            "range": "± 6345.098797153957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175157.77777777778,
            "unit": "ns",
            "range": "± 6483.8081153568755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152257.31707317074,
            "unit": "ns",
            "range": "± 7750.842733755384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10514884.615384616,
            "unit": "ns",
            "range": "± 37065.18685941131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8547753.846153846,
            "unit": "ns",
            "range": "± 33027.42838370898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18168.817204301075,
            "unit": "ns",
            "range": "± 2326.967540300861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50361.458333333336,
            "unit": "ns",
            "range": "± 4213.983483385479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35654.666666666664,
            "unit": "ns",
            "range": "± 1810.3526111165681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86418.88888888889,
            "unit": "ns",
            "range": "± 10622.76434583137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4826.80412371134,
            "unit": "ns",
            "range": "± 656.3020557000802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17968.478260869564,
            "unit": "ns",
            "range": "± 1264.296646563309"
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
          "id": "f0a07124aa5701cca761c35b8836c3dc5fb885ab",
          "message": "Merge pull request #2952 from greymistcube/port/0.50.4-to-main\n\n🔀 Port 0.50.4 to main",
          "timestamp": "2023-03-17T14:28:20+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/planetarium/libplanet/commit/f0a07124aa5701cca761c35b8836c3dc5fb885ab"
        },
        "date": 1679032126261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549800,
            "unit": "ns",
            "range": "± 24408.229486520864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534812.5,
            "unit": "ns",
            "range": "± 89692.898233861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153178.350515464,
            "unit": "ns",
            "range": "± 132449.1083293914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5060026.666666667,
            "unit": "ns",
            "range": "± 149778.7884557235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48872.72727272727,
            "unit": "ns",
            "range": "± 2638.822764025145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6928776.923076923,
            "unit": "ns",
            "range": "± 99287.81524643523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19858271.42857143,
            "unit": "ns",
            "range": "± 173588.56940643134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48810946.666666664,
            "unit": "ns",
            "range": "± 854958.8526996627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99973486.66666667,
            "unit": "ns",
            "range": "± 876792.7893885815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199902646.66666666,
            "unit": "ns",
            "range": "± 2092005.12354831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4761743.125,
            "unit": "ns",
            "range": "± 19254.1291577683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507782.34375,
            "unit": "ns",
            "range": "± 4159.4644717159545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161255.0325520833,
            "unit": "ns",
            "range": "± 4531.284538230119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617230.0130208335,
            "unit": "ns",
            "range": "± 11976.585684729485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829886.0281808035,
            "unit": "ns",
            "range": "± 1486.3731635934819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761676.6671316965,
            "unit": "ns",
            "range": "± 1013.751165288784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179091.6666666665,
            "unit": "ns",
            "range": "± 43766.351922522175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4953704.347826087,
            "unit": "ns",
            "range": "± 124848.65921390538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22817986.666666668,
            "unit": "ns",
            "range": "± 374869.28553576546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6020130,
            "unit": "ns",
            "range": "± 132113.11779962215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26014739.285714287,
            "unit": "ns",
            "range": "± 741041.9308070805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184311.11111111112,
            "unit": "ns",
            "range": "± 3923.2173004981646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181970.96774193548,
            "unit": "ns",
            "range": "± 4888.571266971369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154076.13636363635,
            "unit": "ns",
            "range": "± 8428.454737883307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11085396.551724138,
            "unit": "ns",
            "range": "± 321877.9388024049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8824820,
            "unit": "ns",
            "range": "± 164297.0967485427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20478.494623655915,
            "unit": "ns",
            "range": "± 1587.9881626958327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53555.78947368421,
            "unit": "ns",
            "range": "± 5792.212596557365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43933.333333333336,
            "unit": "ns",
            "range": "± 3376.2535034114735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108338.77551020408,
            "unit": "ns",
            "range": "± 16624.733980682708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6328.125,
            "unit": "ns",
            "range": "± 1006.7355399351019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19955.31914893617,
            "unit": "ns",
            "range": "± 1799.0210612355709"
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
          "id": "f4d254fa828bb0582c3f318ffb8d162b9e915fdf",
          "message": "Merge pull request #2954 from greymistcube/refactor/bencodable-validator\n\n♻️ `IBencodable` `Validator` and `ValidatorSet`",
          "timestamp": "2023-03-17T16:46:11+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/planetarium/libplanet/commit/f4d254fa828bb0582c3f318ffb8d162b9e915fdf"
        },
        "date": 1679040431832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423162.6262626264,
            "unit": "ns",
            "range": "± 181784.24337651252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856970,
            "unit": "ns",
            "range": "± 247348.9856600805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394977.777777778,
            "unit": "ns",
            "range": "± 173085.08262604373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5803435,
            "unit": "ns",
            "range": "± 417183.82678177115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54664.444444444445,
            "unit": "ns",
            "range": "± 4008.8823041266223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840168.604651162,
            "unit": "ns",
            "range": "± 421969.7045890513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21377798.795180723,
            "unit": "ns",
            "range": "± 1133710.969585946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53226182.828282826,
            "unit": "ns",
            "range": "± 3211124.8656290695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102412376,
            "unit": "ns",
            "range": "± 6341037.053667471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 210607035.7142857,
            "unit": "ns",
            "range": "± 9036126.644277878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5575821.40625,
            "unit": "ns",
            "range": "± 83921.3817451617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875669.545200893,
            "unit": "ns",
            "range": "± 9482.04129491871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413820.3190104167,
            "unit": "ns",
            "range": "± 9189.47929478192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3138948.8020833335,
            "unit": "ns",
            "range": "± 39114.384706301535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991390.8203125,
            "unit": "ns",
            "range": "± 9276.41973574062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910760.25390625,
            "unit": "ns",
            "range": "± 10528.002720764767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3401124.4680851065,
            "unit": "ns",
            "range": "± 239859.37039631855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5307371.717171717,
            "unit": "ns",
            "range": "± 408365.30465878453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26488251.020408165,
            "unit": "ns",
            "range": "± 1040258.3082906317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6719015.094339622,
            "unit": "ns",
            "range": "± 272752.3992676158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30171854,
            "unit": "ns",
            "range": "± 1914795.2714849205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210904.54545454544,
            "unit": "ns",
            "range": "± 9857.35854489008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204427.39726027398,
            "unit": "ns",
            "range": "± 9822.992589299702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176037.37373737374,
            "unit": "ns",
            "range": "± 15576.47746363797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12032300,
            "unit": "ns",
            "range": "± 723009.3071197757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9911993.421052631,
            "unit": "ns",
            "range": "± 501772.43615953403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21138.88888888889,
            "unit": "ns",
            "range": "± 1956.0734829401663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56307.77777777778,
            "unit": "ns",
            "range": "± 5566.315784317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51311.70212765958,
            "unit": "ns",
            "range": "± 4410.5410484911645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98495.88235294117,
            "unit": "ns",
            "range": "± 11816.448916065876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5709.375,
            "unit": "ns",
            "range": "± 848.2896879821434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21194.791666666668,
            "unit": "ns",
            "range": "± 2181.9050001832256"
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
          "id": "e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491",
          "message": "Merge pull request #2955 from greymistcube/refactor/bencodable-blockcommit\n\n♻️ `IBencodable` `BlockCommit`",
          "timestamp": "2023-03-17T17:32:41+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/planetarium/libplanet/commit/e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491"
        },
        "date": 1679042952261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342540,
            "unit": "ns",
            "range": "± 141862.00579037605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308119.4444444445,
            "unit": "ns",
            "range": "± 75881.34654820152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057095.918367347,
            "unit": "ns",
            "range": "± 138677.99899713343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4875477.419354838,
            "unit": "ns",
            "range": "± 221601.32746492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43902.94117647059,
            "unit": "ns",
            "range": "± 2092.9498277700723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6912720,
            "unit": "ns",
            "range": "± 11211.104189278465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17438140,
            "unit": "ns",
            "range": "± 98823.00773171628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44450376.92307692,
            "unit": "ns",
            "range": "± 178497.44234323618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91642573.33333333,
            "unit": "ns",
            "range": "± 1574727.5244882694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 180713830.76923078,
            "unit": "ns",
            "range": "± 1504671.2140224166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4840537.447916667,
            "unit": "ns",
            "range": "± 22705.002392762843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497940.1497395833,
            "unit": "ns",
            "range": "± 3245.034674637575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167353.828125,
            "unit": "ns",
            "range": "± 3803.042082417201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548061.9921875,
            "unit": "ns",
            "range": "± 6529.422399612281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812928.0552455357,
            "unit": "ns",
            "range": "± 1857.832703616141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724298.0608258928,
            "unit": "ns",
            "range": "± 961.1909396715254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2904335.135135135,
            "unit": "ns",
            "range": "± 79244.92348345033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4572240.625,
            "unit": "ns",
            "range": "± 141962.67764718324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21133553.846153848,
            "unit": "ns",
            "range": "± 197879.45663705052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5613406.666666667,
            "unit": "ns",
            "range": "± 78954.6476209753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24441307.14285714,
            "unit": "ns",
            "range": "± 217192.1604488513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169639.79591836734,
            "unit": "ns",
            "range": "± 6742.781476573027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174421.21212121213,
            "unit": "ns",
            "range": "± 5399.117843208137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177556,
            "unit": "ns",
            "range": "± 22480.79009359598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10086026.666666666,
            "unit": "ns",
            "range": "± 76954.27646769649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8144633.333333333,
            "unit": "ns",
            "range": "± 62366.00111629809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17971.27659574468,
            "unit": "ns",
            "range": "± 1713.803688863599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47365.463917525776,
            "unit": "ns",
            "range": "± 5575.361352380847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35341.758241758245,
            "unit": "ns",
            "range": "± 1958.007259892677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83986.73469387754,
            "unit": "ns",
            "range": "± 16124.059232559044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4685.714285714285,
            "unit": "ns",
            "range": "± 635.2205559009998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16077.551020408164,
            "unit": "ns",
            "range": "± 1863.4592935203054"
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
          "id": "bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1",
          "message": "Merge pull request #2959 from greymistcube/refactor/bencodable-blockhash\n\n♻️ `IBencodable` for `BlockHash`",
          "timestamp": "2023-03-17T18:04:31+09:00",
          "tree_id": "edaa51dbf9a310e61f1217962dc2578ac1139cee",
          "url": "https://github.com/planetarium/libplanet/commit/bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1"
        },
        "date": 1679044643266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992303.0612244898,
            "unit": "ns",
            "range": "± 100414.32564458124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1782050,
            "unit": "ns",
            "range": "± 90219.32165561875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528723,
            "unit": "ns",
            "range": "± 102500.39749122236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3537917.777777778,
            "unit": "ns",
            "range": "± 126010.95603321181"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33991.13924050633,
            "unit": "ns",
            "range": "± 1684.7117895049146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5018200,
            "unit": "ns",
            "range": "± 25102.1626842902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 12737600,
            "unit": "ns",
            "range": "± 81105.96108225908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 32475153.333333332,
            "unit": "ns",
            "range": "± 374053.7124659022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 65208923.07692308,
            "unit": "ns",
            "range": "± 521428.86084592296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 129498793.33333333,
            "unit": "ns",
            "range": "± 1307669.9231111512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3465178.7890625,
            "unit": "ns",
            "range": "± 16933.170970686173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093242.6822916667,
            "unit": "ns",
            "range": "± 3402.6777612794563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 827194.2317708334,
            "unit": "ns",
            "range": "± 2050.284384054483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894639.7005208333,
            "unit": "ns",
            "range": "± 19078.256907530635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600666.71875,
            "unit": "ns",
            "range": "± 2837.004636493638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523018.73046875,
            "unit": "ns",
            "range": "± 1042.6409708589026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2093781.8181818181,
            "unit": "ns",
            "range": "± 77084.62663397717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347177.272727273,
            "unit": "ns",
            "range": "± 74638.4359800038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15175426.666666666,
            "unit": "ns",
            "range": "± 245055.62478363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057903.5714285714,
            "unit": "ns",
            "range": "± 115758.15940249727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18248447.826086957,
            "unit": "ns",
            "range": "± 450768.2582089112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126819.71830985915,
            "unit": "ns",
            "range": "± 5869.402980549941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 129992.77108433735,
            "unit": "ns",
            "range": "± 6717.592177742763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 112058.16326530612,
            "unit": "ns",
            "range": "± 4416.061439728368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7300856.666666667,
            "unit": "ns",
            "range": "± 109119.00100785555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5964850,
            "unit": "ns",
            "range": "± 94070.49788019925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14014.285714285714,
            "unit": "ns",
            "range": "± 1809.9382002322052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 35993.406593406595,
            "unit": "ns",
            "range": "± 4133.274252206844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 26788.333333333332,
            "unit": "ns",
            "range": "± 1209.7193492520494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67589.69072164949,
            "unit": "ns",
            "range": "± 14622.139923589062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3558.9473684210525,
            "unit": "ns",
            "range": "± 460.2253695934951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13190.217391304348,
            "unit": "ns",
            "range": "± 1054.562018623272"
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
          "id": "e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb",
          "message": "Merge pull request #2961 from greymistcube/refactor/bencodable-vote\n\n♻️ `IBencodable` for `VoteMetadata` and `Vote`",
          "timestamp": "2023-03-20T09:53:41+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/planetarium/libplanet/commit/e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb"
        },
        "date": 1679274620136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512900,
            "unit": "ns",
            "range": "± 29703.782026312183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2627752.9850746267,
            "unit": "ns",
            "range": "± 124136.82696579664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170859.574468085,
            "unit": "ns",
            "range": "± 126475.62757191384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234680.357142857,
            "unit": "ns",
            "range": "± 223853.514943584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52571.57894736842,
            "unit": "ns",
            "range": "± 3333.2516600669846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7932657.142857143,
            "unit": "ns",
            "range": "± 119190.65344284286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20402053.333333332,
            "unit": "ns",
            "range": "± 219842.98574426337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50969816.666666664,
            "unit": "ns",
            "range": "± 312152.63131694926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101386271.42857143,
            "unit": "ns",
            "range": "± 536120.4319762656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203036092.85714287,
            "unit": "ns",
            "range": "± 1771316.8997036708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4830260.997596154,
            "unit": "ns",
            "range": "± 32010.40589968174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547026.6927083333,
            "unit": "ns",
            "range": "± 26531.767667011853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177635.6770833333,
            "unit": "ns",
            "range": "± 6182.682610760126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617303.2877604165,
            "unit": "ns",
            "range": "± 10419.973968353974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853360.5755974265,
            "unit": "ns",
            "range": "± 16863.494079807828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759520.3350360577,
            "unit": "ns",
            "range": "± 11077.15072115008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333717.8571428573,
            "unit": "ns",
            "range": "± 95395.44229182499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5114787.5,
            "unit": "ns",
            "range": "± 94244.71603225297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23812200,
            "unit": "ns",
            "range": "± 369202.01682922756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6275766.666666667,
            "unit": "ns",
            "range": "± 146096.34264187908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26862940,
            "unit": "ns",
            "range": "± 695300.1306390404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192258.82352941178,
            "unit": "ns",
            "range": "± 7853.640594541827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185125.64102564103,
            "unit": "ns",
            "range": "± 9541.058721745796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171797.91666666666,
            "unit": "ns",
            "range": "± 10209.396901272832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11195885.714285715,
            "unit": "ns",
            "range": "± 237876.66612283405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9193778.57142857,
            "unit": "ns",
            "range": "± 136762.63085288394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24630.927835051545,
            "unit": "ns",
            "range": "± 2797.966554211821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63373.19587628866,
            "unit": "ns",
            "range": "± 6692.650126941455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46222.68041237113,
            "unit": "ns",
            "range": "± 2943.3011920658905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101704.76190476191,
            "unit": "ns",
            "range": "± 8315.84211388778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8512.765957446809,
            "unit": "ns",
            "range": "± 912.5450694485615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25004.21052631579,
            "unit": "ns",
            "range": "± 2316.7253021063875"
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
          "id": "8546675a24fce872d823d8e90984403e68d6a1b5",
          "message": "Merge pull request #2970 from greymistcube/refactor/lastcommit-encoding\n\n♻️ Refactor `Block<T>.LastCommit` encoding",
          "timestamp": "2023-03-21T13:40:04+09:00",
          "tree_id": "db3ec865d2318a231fde499a7a361a3f9994869d",
          "url": "https://github.com/planetarium/libplanet/commit/8546675a24fce872d823d8e90984403e68d6a1b5"
        },
        "date": 1679374571825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358635.3535353534,
            "unit": "ns",
            "range": "± 88846.05501920599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510006.25,
            "unit": "ns",
            "range": "± 48738.656372534526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185274.4897959186,
            "unit": "ns",
            "range": "± 137697.7700941895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5115956.451612903,
            "unit": "ns",
            "range": "± 156142.49674679403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53435.48387096774,
            "unit": "ns",
            "range": "± 3135.998737012082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7487592.307692308,
            "unit": "ns",
            "range": "± 122468.8699325837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20137653.333333332,
            "unit": "ns",
            "range": "± 179906.96352228703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51430650,
            "unit": "ns",
            "range": "± 360579.53512900055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100633364.28571428,
            "unit": "ns",
            "range": "± 655664.5983652393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200959793.33333334,
            "unit": "ns",
            "range": "± 1249390.8689932907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4827221.822916667,
            "unit": "ns",
            "range": "± 10808.212619071954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526519.1015625,
            "unit": "ns",
            "range": "± 2717.0388888432067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159773.158482143,
            "unit": "ns",
            "range": "± 4502.343187357341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634890.6640625,
            "unit": "ns",
            "range": "± 7959.427389346591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826879.4401041666,
            "unit": "ns",
            "range": "± 1395.8674316362442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770172.8585379465,
            "unit": "ns",
            "range": "± 1167.4940311266648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393405,
            "unit": "ns",
            "range": "± 120144.19104153826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5275869.047619048,
            "unit": "ns",
            "range": "± 191996.1641996098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23814400,
            "unit": "ns",
            "range": "± 377578.56325349223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6480845,
            "unit": "ns",
            "range": "± 126610.0664285926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27489384.615384616,
            "unit": "ns",
            "range": "± 198105.99791590462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198040,
            "unit": "ns",
            "range": "± 6692.621271757389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198763.76811594202,
            "unit": "ns",
            "range": "± 9619.128782466443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188586.48648648648,
            "unit": "ns",
            "range": "± 9460.289380211849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11516816.666666666,
            "unit": "ns",
            "range": "± 77133.758281745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9445438.461538462,
            "unit": "ns",
            "range": "± 94955.28367308424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25357.44680851064,
            "unit": "ns",
            "range": "± 1992.3638827348443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59188.77551020408,
            "unit": "ns",
            "range": "± 5871.859900521539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47595,
            "unit": "ns",
            "range": "± 3799.7175599448883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115602.0202020202,
            "unit": "ns",
            "range": "± 20501.12480636412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8504.736842105263,
            "unit": "ns",
            "range": "± 1152.035056079775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23621.052631578947,
            "unit": "ns",
            "range": "± 1754.5621225483299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba9be20de483f0da4aa96b1a5f62d63fec62c0d",
          "message": "Merge pull request #2566 from longfin/feature/fee-calculator\n\nIntroduce `IFeeCalculator`",
          "timestamp": "2023-03-22T14:22:57+09:00",
          "tree_id": "0788e90971d1d5d79c82dfad36e3b0bb1589462e",
          "url": "https://github.com/planetarium/libplanet/commit/4ba9be20de483f0da4aa96b1a5f62d63fec62c0d"
        },
        "date": 1679463360961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1073140,
            "unit": "ns",
            "range": "± 97992.95377678433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1773043.9024390243,
            "unit": "ns",
            "range": "± 63802.05736800534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596644,
            "unit": "ns",
            "range": "± 126804.96542551344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3663523.913043478,
            "unit": "ns",
            "range": "± 122817.14535534816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33918.42105263158,
            "unit": "ns",
            "range": "± 1664.829162512141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4889507.142857143,
            "unit": "ns",
            "range": "± 17482.011162498275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13206680,
            "unit": "ns",
            "range": "± 78024.19221900712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33380713.333333332,
            "unit": "ns",
            "range": "± 370744.7482850599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66114706.666666664,
            "unit": "ns",
            "range": "± 352756.88606555463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132565314.28571428,
            "unit": "ns",
            "range": "± 1052040.693756036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3623986.746651786,
            "unit": "ns",
            "range": "± 7699.910973314194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1124947.5811298077,
            "unit": "ns",
            "range": "± 1165.5051749525485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 798456.2430245535,
            "unit": "ns",
            "range": "± 2304.8199026862358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967719.3489583333,
            "unit": "ns",
            "range": "± 5193.054809246371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641055.8035714285,
            "unit": "ns",
            "range": "± 705.5040700752603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571289.7181919643,
            "unit": "ns",
            "range": "± 658.5662158562352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221519.230769231,
            "unit": "ns",
            "range": "± 90198.0610166393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3346000,
            "unit": "ns",
            "range": "± 57564.00061380955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15466353.333333334,
            "unit": "ns",
            "range": "± 159911.99752482912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083255.263157895,
            "unit": "ns",
            "range": "± 139198.168474609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17413818.75,
            "unit": "ns",
            "range": "± 321529.37080718874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123656.71641791044,
            "unit": "ns",
            "range": "± 5863.34850758447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 125032.95454545454,
            "unit": "ns",
            "range": "± 6560.57051049659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 100761.90476190476,
            "unit": "ns",
            "range": "± 3631.095539913095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7477383.333333333,
            "unit": "ns",
            "range": "± 53988.115976265246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6053550,
            "unit": "ns",
            "range": "± 50647.27699162776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10997.894736842105,
            "unit": "ns",
            "range": "± 1545.9610346695952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32227.659574468085,
            "unit": "ns",
            "range": "± 4351.749228210413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23956.25,
            "unit": "ns",
            "range": "± 943.4897309141343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63262.06896551724,
            "unit": "ns",
            "range": "± 8658.296752037968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2633.3333333333335,
            "unit": "ns",
            "range": "± 546.3113950402986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10614.130434782608,
            "unit": "ns",
            "range": "± 1272.2379279982072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6b740bd81750f48dc355432d961edd8a2c76ab9",
          "message": "Merge pull request #2962 from planetarium/ci-account-aws-kms\n\n@planetarium/account-aws-kms",
          "timestamp": "2023-03-22T16:14:26+09:00",
          "tree_id": "a4ed25d72aa552b1640f782fcbd91e7e597231f9",
          "url": "https://github.com/planetarium/libplanet/commit/d6b740bd81750f48dc355432d961edd8a2c76ab9"
        },
        "date": 1679470548994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1839065.9574468085,
            "unit": "ns",
            "range": "± 169603.0746026287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3461341.052631579,
            "unit": "ns",
            "range": "± 209045.79946862345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2825995.789473684,
            "unit": "ns",
            "range": "± 194025.79556281943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7061542.473118279,
            "unit": "ns",
            "range": "± 437741.43778693565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78311.95652173914,
            "unit": "ns",
            "range": "± 8473.083982465476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10081421.739130436,
            "unit": "ns",
            "range": "± 388356.5285851211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25788387.5,
            "unit": "ns",
            "range": "± 673318.9944044402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64987231.25,
            "unit": "ns",
            "range": "± 1254853.609373752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134630172.09302327,
            "unit": "ns",
            "range": "± 4493801.383722418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267559546.66666666,
            "unit": "ns",
            "range": "± 4389563.531323338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6282250.572916667,
            "unit": "ns",
            "range": "± 108466.80496622784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2038862.8566576086,
            "unit": "ns",
            "range": "± 48238.23227496397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1555784.4856770833,
            "unit": "ns",
            "range": "± 46204.75744635422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3311294.0364583335,
            "unit": "ns",
            "range": "± 61657.56200696336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1112521.5877757352,
            "unit": "ns",
            "range": "± 22664.622921633203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1017201.5234375,
            "unit": "ns",
            "range": "± 12865.31246295316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4130920,
            "unit": "ns",
            "range": "± 222411.6795280234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6662939.705882353,
            "unit": "ns",
            "range": "± 307173.0773435203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32669981.666666668,
            "unit": "ns",
            "range": "± 1450485.1788505018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8113754.901960785,
            "unit": "ns",
            "range": "± 329212.97867108794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37387103.17460317,
            "unit": "ns",
            "range": "± 1712290.8578641783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249086.66666666666,
            "unit": "ns",
            "range": "± 15715.663123639753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252553.33333333334,
            "unit": "ns",
            "range": "± 12668.404337897824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231954.54545454544,
            "unit": "ns",
            "range": "± 10896.932268631059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15004689.393939395,
            "unit": "ns",
            "range": "± 466182.54802933283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12655058.333333334,
            "unit": "ns",
            "range": "± 130854.24548178045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33615.05376344086,
            "unit": "ns",
            "range": "± 3612.0253934226776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78700,
            "unit": "ns",
            "range": "± 9155.92528049107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60481.11111111111,
            "unit": "ns",
            "range": "± 8389.86674030642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150261.53846153847,
            "unit": "ns",
            "range": "± 33473.806573136055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9255.78947368421,
            "unit": "ns",
            "range": "± 2373.152844486059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31644.565217391304,
            "unit": "ns",
            "range": "± 6251.230456995581"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0db1e21533d957abbfa6ae62a87c21d9b69ec6e8",
          "message": "Merge pull request #2980 from moreal/remove-unused-logic\n\nRemove unused logic",
          "timestamp": "2023-03-23T10:55:24+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/planetarium/libplanet/commit/0db1e21533d957abbfa6ae62a87c21d9b69ec6e8"
        },
        "date": 1679537669842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707412.121212121,
            "unit": "ns",
            "range": "± 203717.01023660312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076566.3157894737,
            "unit": "ns",
            "range": "± 178089.11683242896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641796.875,
            "unit": "ns",
            "range": "± 221307.1256983571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6277190.322580645,
            "unit": "ns",
            "range": "± 282755.02790658135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58005.31914893617,
            "unit": "ns",
            "range": "± 8644.40109707759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8973291.803278688,
            "unit": "ns",
            "range": "± 396670.48890108685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23710630.303030305,
            "unit": "ns",
            "range": "± 749890.4730379166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59459494.11764706,
            "unit": "ns",
            "range": "± 1190068.3974411872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122089383.87096775,
            "unit": "ns",
            "range": "± 3604857.0479374793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242470053.33333334,
            "unit": "ns",
            "range": "± 4434071.480651142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6164589.118303572,
            "unit": "ns",
            "range": "± 62676.919250674604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872669.224330357,
            "unit": "ns",
            "range": "± 19632.493990598072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407064.609375,
            "unit": "ns",
            "range": "± 12468.953632247589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3185051.171875,
            "unit": "ns",
            "range": "± 47797.526657946175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018033.9425223215,
            "unit": "ns",
            "range": "± 15847.994840360068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952823.7890625,
            "unit": "ns",
            "range": "± 9015.842455771437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3806905.4545454546,
            "unit": "ns",
            "range": "± 161032.61162489417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6002066.666666667,
            "unit": "ns",
            "range": "± 302997.93297543697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28173707.14285714,
            "unit": "ns",
            "range": "± 438477.61887324107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7505716.216216216,
            "unit": "ns",
            "range": "± 253427.36140264632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32617560.86956522,
            "unit": "ns",
            "range": "± 815101.0694381462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216554.34782608695,
            "unit": "ns",
            "range": "± 14781.09434782979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209878.94736842104,
            "unit": "ns",
            "range": "± 13982.65562955218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199404.34782608695,
            "unit": "ns",
            "range": "± 18688.145816947435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13682436.363636363,
            "unit": "ns",
            "range": "± 431011.1627166559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10910080.76923077,
            "unit": "ns",
            "range": "± 420113.3185311313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23229.591836734693,
            "unit": "ns",
            "range": "± 3621.533797740965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62876.84210526316,
            "unit": "ns",
            "range": "± 6467.38877609712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45421.27659574468,
            "unit": "ns",
            "range": "± 6014.728738159343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126234.69387755102,
            "unit": "ns",
            "range": "± 24407.034232131024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6806.666666666667,
            "unit": "ns",
            "range": "± 1448.9670865749601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25918.556701030928,
            "unit": "ns",
            "range": "± 4247.580926659589"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4ef4023f8bc3fb7590c75f2dd71cb0de1c7a89a",
          "message": "Merge pull request #2971 from dahlia/remove-libplanet-node",
          "timestamp": "2023-03-23T11:48:34+09:00",
          "tree_id": "cd57406b44f9089bd65f630219bca8b26ec2ad22",
          "url": "https://github.com/planetarium/libplanet/commit/d4ef4023f8bc3fb7590c75f2dd71cb0de1c7a89a"
        },
        "date": 1679541095139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1838352.1276595744,
            "unit": "ns",
            "range": "± 201342.508013233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3546956.5217391304,
            "unit": "ns",
            "range": "± 254170.7539328664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2922334.0425531915,
            "unit": "ns",
            "range": "± 274606.8303989572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7115497.826086956,
            "unit": "ns",
            "range": "± 625724.0539116055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78241.05263157895,
            "unit": "ns",
            "range": "± 12357.403627465363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10393104.65116279,
            "unit": "ns",
            "range": "± 556046.9089198218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26673053.225806452,
            "unit": "ns",
            "range": "± 1199420.1523547408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66466018.18181818,
            "unit": "ns",
            "range": "± 2073983.9824981992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136984738.8888889,
            "unit": "ns",
            "range": "± 4463030.960250974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271000920,
            "unit": "ns",
            "range": "± 5945256.057395678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6391365.066964285,
            "unit": "ns",
            "range": "± 102818.59760714459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015399.7916666667,
            "unit": "ns",
            "range": "± 27103.25789904621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1585844.4075520833,
            "unit": "ns",
            "range": "± 19922.017175075143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3546072.8870738638,
            "unit": "ns",
            "range": "± 85040.47968475336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1096606.7457932692,
            "unit": "ns",
            "range": "± 6319.067935065179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1012676.875,
            "unit": "ns",
            "range": "± 14868.787579070611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4241100,
            "unit": "ns",
            "range": "± 331234.45589601225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6744579.012345679,
            "unit": "ns",
            "range": "± 354556.9318586401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33378364.36781609,
            "unit": "ns",
            "range": "± 1813156.8838840309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8044224.561403509,
            "unit": "ns",
            "range": "± 344293.1461086518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38875547.95918367,
            "unit": "ns",
            "range": "± 2408145.1337496205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252497.0588235294,
            "unit": "ns",
            "range": "± 16714.098612757276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244046.66666666666,
            "unit": "ns",
            "range": "± 16899.95977656273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221546.2365591398,
            "unit": "ns",
            "range": "± 16874.572839294302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15114715.789473685,
            "unit": "ns",
            "range": "± 332314.0303039312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11905405.555555556,
            "unit": "ns",
            "range": "± 252855.75863168036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31788.505747126437,
            "unit": "ns",
            "range": "± 4413.046864125351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80796.84210526316,
            "unit": "ns",
            "range": "± 12620.225683583922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56803.092783505155,
            "unit": "ns",
            "range": "± 10191.800765078346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147226.59574468085,
            "unit": "ns",
            "range": "± 23373.522266127176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8462.90322580645,
            "unit": "ns",
            "range": "± 2277.929351809952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33522.34042553192,
            "unit": "ns",
            "range": "± 5687.642788099026"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf6a8f0b3e0df75ca7b05f60344592237b7a2b",
          "message": "Merge pull request #2977 from dahlia/flatten-tx-interfaces",
          "timestamp": "2023-03-24T11:55:08+09:00",
          "tree_id": "6c8ece1623739860ceda4da6a26aeb7cdfe3ba31",
          "url": "https://github.com/planetarium/libplanet/commit/67bf6a8f0b3e0df75ca7b05f60344592237b7a2b"
        },
        "date": 1679627278002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065393.75,
            "unit": "ns",
            "range": "± 119151.90553283344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755548.888888889,
            "unit": "ns",
            "range": "± 65476.021364598615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1588347.3684210526,
            "unit": "ns",
            "range": "± 128739.92077226058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3527460.714285714,
            "unit": "ns",
            "range": "± 90717.07070882204"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33719.642857142855,
            "unit": "ns",
            "range": "± 1442.2734128460515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5032607.142857143,
            "unit": "ns",
            "range": "± 33782.25442870435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13204033.333333334,
            "unit": "ns",
            "range": "± 105437.10153903313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32168035.714285713,
            "unit": "ns",
            "range": "± 157035.8489553989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64427246.666666664,
            "unit": "ns",
            "range": "± 350380.9801317635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130194686.66666667,
            "unit": "ns",
            "range": "± 778721.3648637349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3614398.137019231,
            "unit": "ns",
            "range": "± 12751.07153998966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1128329.7572544643,
            "unit": "ns",
            "range": "± 2835.6025213556145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 805563.0013020834,
            "unit": "ns",
            "range": "± 3817.5293295501465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949378.564453125,
            "unit": "ns",
            "range": "± 1528.2492509642125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 650050.625,
            "unit": "ns",
            "range": "± 4076.5677547749947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572016.4713541666,
            "unit": "ns",
            "range": "± 988.2172693457023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178916.9811320757,
            "unit": "ns",
            "range": "± 81678.20473769434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3434904.1666666665,
            "unit": "ns",
            "range": "± 88678.28261739745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15085833.333333334,
            "unit": "ns",
            "range": "± 114535.53202058344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4245290.909090909,
            "unit": "ns",
            "range": "± 158857.10387111155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17838438.46153846,
            "unit": "ns",
            "range": "± 277988.93124985375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127967.44186046511,
            "unit": "ns",
            "range": "± 6903.561601861585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 125656.6265060241,
            "unit": "ns",
            "range": "± 6654.105513746333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 100885.9649122807,
            "unit": "ns",
            "range": "± 4329.608964382482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7539560,
            "unit": "ns",
            "range": "± 109081.26590495992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6149064.285714285,
            "unit": "ns",
            "range": "± 45655.32418430107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10714.130434782608,
            "unit": "ns",
            "range": "± 1524.7829261277811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 30489.130434782608,
            "unit": "ns",
            "range": "± 2746.644567177232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23423.4375,
            "unit": "ns",
            "range": "± 1088.9403889262812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70778.57142857143,
            "unit": "ns",
            "range": "± 16274.147799437551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3027.2727272727275,
            "unit": "ns",
            "range": "± 698.0758075052584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9917.021276595744,
            "unit": "ns",
            "range": "± 903.1174559974938"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d402c02d16124c08caec2273d957bc8390aa46",
          "message": "Merge pull request #2997 from tkiapril/release/0.53\n\n🚀 Release 0.53.0",
          "timestamp": "2023-03-27T17:55:04+09:00",
          "tree_id": "470c6e76c5b87e56493e384b6d88818eb6a20a81",
          "url": "https://github.com/planetarium/libplanet/commit/59d402c02d16124c08caec2273d957bc8390aa46"
        },
        "date": 1679908498443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403432.6530612244,
            "unit": "ns",
            "range": "± 107468.12980035342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615917.543859649,
            "unit": "ns",
            "range": "± 112523.18193346239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154177.906976744,
            "unit": "ns",
            "range": "± 116574.66418431306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5016013.793103448,
            "unit": "ns",
            "range": "± 144169.50768388165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50713.793103448275,
            "unit": "ns",
            "range": "± 2645.2314451776306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7042250,
            "unit": "ns",
            "range": "± 85471.53167735282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19651000,
            "unit": "ns",
            "range": "± 301770.86624504643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49215586.666666664,
            "unit": "ns",
            "range": "± 716387.94245523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99555460,
            "unit": "ns",
            "range": "± 1583510.3720170937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195695793.33333334,
            "unit": "ns",
            "range": "± 3426170.99824835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4870988.839285715,
            "unit": "ns",
            "range": "± 23369.497341401297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513643.3035714286,
            "unit": "ns",
            "range": "± 4816.980353034327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174295.982142857,
            "unit": "ns",
            "range": "± 8402.49201755182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620902.8180803573,
            "unit": "ns",
            "range": "± 7244.468783930628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832649.0169270834,
            "unit": "ns",
            "range": "± 1804.4565241364437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760531.8885216346,
            "unit": "ns",
            "range": "± 1131.1776839656368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3115011.320754717,
            "unit": "ns",
            "range": "± 129603.2476153774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4966346.428571428,
            "unit": "ns",
            "range": "± 141477.29953271223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23895421.42857143,
            "unit": "ns",
            "range": "± 203072.20458429377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6356954.285714285,
            "unit": "ns",
            "range": "± 202095.9605249551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27233176.470588237,
            "unit": "ns",
            "range": "± 520216.2369263043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196965.5172413793,
            "unit": "ns",
            "range": "± 8619.761093366511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200280,
            "unit": "ns",
            "range": "± 9951.028739430561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175613,
            "unit": "ns",
            "range": "± 13605.60382914171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11100007.894736841,
            "unit": "ns",
            "range": "± 245303.60172150724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9007531.818181818,
            "unit": "ns",
            "range": "± 219589.90215825074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25772.164948453606,
            "unit": "ns",
            "range": "± 2440.1051150531575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63116.32653061225,
            "unit": "ns",
            "range": "± 6323.278770364509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45312.37113402062,
            "unit": "ns",
            "range": "± 3846.704697204012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106760.52631578948,
            "unit": "ns",
            "range": "± 18441.370430015933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7434,
            "unit": "ns",
            "range": "± 1353.7243799864495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22890.721649484534,
            "unit": "ns",
            "range": "± 2507.5337516101185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37a63f0305fe6c56319a3a18f7c3d5dcba19574b",
          "message": "Merge pull request #2998 from tkiapril/prepare/0.54\n\n🔧 Prepare 0.54.0",
          "timestamp": "2023-03-27T18:04:13+09:00",
          "tree_id": "2c64ba22ed55634e57ff4b58425f439a8fb37ba9",
          "url": "https://github.com/planetarium/libplanet/commit/37a63f0305fe6c56319a3a18f7c3d5dcba19574b"
        },
        "date": 1679909179476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1748547.4226804124,
            "unit": "ns",
            "range": "± 185689.26894859388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3194184.946236559,
            "unit": "ns",
            "range": "± 263301.4601200604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2752505.789473684,
            "unit": "ns",
            "range": "± 279828.25345002493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6912566.304347826,
            "unit": "ns",
            "range": "± 548734.8746874761"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56252.12765957447,
            "unit": "ns",
            "range": "± 14255.606169235492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8465542.391304348,
            "unit": "ns",
            "range": "± 537522.3700397222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22991803.535353534,
            "unit": "ns",
            "range": "± 1706502.4147338546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61048078.94736842,
            "unit": "ns",
            "range": "± 2625450.902616325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120160757.14285715,
            "unit": "ns",
            "range": "± 1769226.632747195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250049774.2857143,
            "unit": "ns",
            "range": "± 8104588.602882098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5843247.708333333,
            "unit": "ns",
            "range": "± 89745.67632153946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2048434.8567708333,
            "unit": "ns",
            "range": "± 25943.05393517762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434655.703125,
            "unit": "ns",
            "range": "± 15367.16697263403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144413.5677083335,
            "unit": "ns",
            "range": "± 30898.797665321003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053536.1197916667,
            "unit": "ns",
            "range": "± 15458.85763576856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956593.9518229166,
            "unit": "ns",
            "range": "± 9328.38377163234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3465061.4583333335,
            "unit": "ns",
            "range": "± 300532.01611380745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5580347.872340426,
            "unit": "ns",
            "range": "± 423496.93318225956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30628111.458333332,
            "unit": "ns",
            "range": "± 2091280.5630632804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7228372.7272727275,
            "unit": "ns",
            "range": "± 738485.1274279543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37265936.84210526,
            "unit": "ns",
            "range": "± 2552601.5505275945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219568.13186813187,
            "unit": "ns",
            "range": "± 31238.78244576009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230202.04081632654,
            "unit": "ns",
            "range": "± 40699.30020318832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195961.45833333334,
            "unit": "ns",
            "range": "± 35222.68667774004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13375447.368421054,
            "unit": "ns",
            "range": "± 953579.3433212357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10328882.222222222,
            "unit": "ns",
            "range": "± 706662.0193331746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26980.61224489796,
            "unit": "ns",
            "range": "± 10560.973265865354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62298.913043478264,
            "unit": "ns",
            "range": "± 12020.061020536064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46245.26315789474,
            "unit": "ns",
            "range": "± 11626.06909676599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132648.91304347827,
            "unit": "ns",
            "range": "± 26206.963652061775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.090909090909,
            "unit": "ns",
            "range": "± 939.6607805187684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25953.125,
            "unit": "ns",
            "range": "± 11239.773861042242"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc67e98b313c9ac5a5f3f03265c9590ccfdd360c",
          "message": "Merge pull request #2964 from OnedgeLee/merge/0.51.3\n\n🔀 Port 0.51.3 to main",
          "timestamp": "2023-03-28T16:03:24+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/planetarium/libplanet/commit/cc67e98b313c9ac5a5f3f03265c9590ccfdd360c"
        },
        "date": 1679988038916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442548.4210526317,
            "unit": "ns",
            "range": "± 108177.60894597198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536529.6296296297,
            "unit": "ns",
            "range": "± 105594.68724062372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2143051,
            "unit": "ns",
            "range": "± 138363.75313212664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4875573.333333333,
            "unit": "ns",
            "range": "± 83033.56865635443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51369.072164948455,
            "unit": "ns",
            "range": "± 3395.197614055473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7042422.222222222,
            "unit": "ns",
            "range": "± 180120.87465693554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19691613.333333332,
            "unit": "ns",
            "range": "± 290453.31532098644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50077413.333333336,
            "unit": "ns",
            "range": "± 517312.4061182078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100373686.66666667,
            "unit": "ns",
            "range": "± 1129528.3844322353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197272728.57142857,
            "unit": "ns",
            "range": "± 1169685.4090070357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897176.458333333,
            "unit": "ns",
            "range": "± 18508.523733042563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521110.703125,
            "unit": "ns",
            "range": "± 5146.042153570275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140171.26953125,
            "unit": "ns",
            "range": "± 5025.777260125467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621048.1510416665,
            "unit": "ns",
            "range": "± 21292.5486289426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826729.1713169643,
            "unit": "ns",
            "range": "± 1663.9859146248962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760857.9622395834,
            "unit": "ns",
            "range": "± 1093.2466579543732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147100,
            "unit": "ns",
            "range": "± 71523.22699654987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5151530,
            "unit": "ns",
            "range": "± 114136.30862862362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23489100,
            "unit": "ns",
            "range": "± 602574.6145391096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6128456.521739131,
            "unit": "ns",
            "range": "± 152191.27267442396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26355288.888888888,
            "unit": "ns",
            "range": "± 550886.3680084272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185965.5172413793,
            "unit": "ns",
            "range": "± 8126.468595462046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188911.86440677967,
            "unit": "ns",
            "range": "± 8310.111928076514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166315.7894736842,
            "unit": "ns",
            "range": "± 8262.849429933622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11118633.333333334,
            "unit": "ns",
            "range": "± 174608.24586430483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9121478.57142857,
            "unit": "ns",
            "range": "± 101991.02847853772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22634.21052631579,
            "unit": "ns",
            "range": "± 2285.8173169067986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54347.191011235955,
            "unit": "ns",
            "range": "± 3546.12752576796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42134.17721518988,
            "unit": "ns",
            "range": "± 2199.6436818645207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101419.27710843373,
            "unit": "ns",
            "range": "± 7580.116123560688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6711.458333333333,
            "unit": "ns",
            "range": "± 1010.0411447238613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20823.711340206184,
            "unit": "ns",
            "range": "± 1772.4614003716863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a77a69c48decce34a03cb56f0e97b43c4a3c5e3e",
          "message": "Merge pull request #3008 from planetarium/0.53-maintenance\n\nFix build and upload artifacts",
          "timestamp": "2023-03-28T16:31:45+09:00",
          "tree_id": "3420c2bc5a00078db976a2da8519e1623951c323",
          "url": "https://github.com/planetarium/libplanet/commit/a77a69c48decce34a03cb56f0e97b43c4a3c5e3e"
        },
        "date": 1679989768139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309554.081632653,
            "unit": "ns",
            "range": "± 98343.29013779887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481406.896551724,
            "unit": "ns",
            "range": "± 108238.86655127585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2040824.0506329115,
            "unit": "ns",
            "range": "± 103087.06702836309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5171693.333333333,
            "unit": "ns",
            "range": "± 260959.8712722215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49881.42857142857,
            "unit": "ns",
            "range": "± 2313.745495827425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6842471.428571428,
            "unit": "ns",
            "range": "± 80076.60206203931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19177363.157894738,
            "unit": "ns",
            "range": "± 402982.995520112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48817673.333333336,
            "unit": "ns",
            "range": "± 644779.5675009147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94722429.41176471,
            "unit": "ns",
            "range": "± 1918081.989503025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189975411.7647059,
            "unit": "ns",
            "range": "± 3645890.862478324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4786418.125,
            "unit": "ns",
            "range": "± 11722.116466603322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517591.8229166667,
            "unit": "ns",
            "range": "± 7180.601579329203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149867.109375,
            "unit": "ns",
            "range": "± 6576.3469523557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608220.234375,
            "unit": "ns",
            "range": "± 6591.353518820361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820087.5911458334,
            "unit": "ns",
            "range": "± 2257.9014887310636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745664.2513020834,
            "unit": "ns",
            "range": "± 1347.60391820759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2974551.3513513515,
            "unit": "ns",
            "range": "± 93966.73353912019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4682285.714285715,
            "unit": "ns",
            "range": "± 70120.19194698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22114905.263157893,
            "unit": "ns",
            "range": "± 483047.0456426512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5886600,
            "unit": "ns",
            "range": "± 106862.55346627899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25470857.14285714,
            "unit": "ns",
            "range": "± 344044.1535042262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177077.4193548387,
            "unit": "ns",
            "range": "± 7998.1641203884055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178815.09433962265,
            "unit": "ns",
            "range": "± 7456.937818269926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152292.85714285713,
            "unit": "ns",
            "range": "± 5381.909302022066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10678175.862068966,
            "unit": "ns",
            "range": "± 304633.9438632776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8487520,
            "unit": "ns",
            "range": "± 140979.9742617977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19753.763440860213,
            "unit": "ns",
            "range": "± 1432.5076173850848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52396.666666666664,
            "unit": "ns",
            "range": "± 3766.8110078074437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39571.42857142857,
            "unit": "ns",
            "range": "± 1631.0302695718863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100685.41666666667,
            "unit": "ns",
            "range": "± 14727.510806697901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6027.659574468085,
            "unit": "ns",
            "range": "± 666.6243409121746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18655.31914893617,
            "unit": "ns",
            "range": "± 1487.1215626874696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "513a3865ee4ae40ddd1d1a229e65e3c8848148ca",
          "message": "Merge pull request #3014 from riemannulus/merge/main/0.51-maintenance\n\n🔀 Port 0.51.4 to main",
          "timestamp": "2023-03-28T18:42:39+09:00",
          "tree_id": "505611282659dd79def9c3c8d4219801ad3d1b4b",
          "url": "https://github.com/planetarium/libplanet/commit/513a3865ee4ae40ddd1d1a229e65e3c8848148ca"
        },
        "date": 1679997397843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051344.4444444445,
            "unit": "ns",
            "range": "± 107815.67625049464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1799070.9677419355,
            "unit": "ns",
            "range": "± 52423.405673092166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593866,
            "unit": "ns",
            "range": "± 117873.24404039307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3567924.1379310344,
            "unit": "ns",
            "range": "± 82736.08063843046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34715.333333333336,
            "unit": "ns",
            "range": "± 1754.876859723437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5078383.333333333,
            "unit": "ns",
            "range": "± 74828.30505961791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13019653.846153846,
            "unit": "ns",
            "range": "± 58142.89316538201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33643192.85714286,
            "unit": "ns",
            "range": "± 167149.12947280487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68622192.85714285,
            "unit": "ns",
            "range": "± 343323.52641671494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135257057.14285713,
            "unit": "ns",
            "range": "± 935149.7310914651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3558916.2239583335,
            "unit": "ns",
            "range": "± 10404.294162724691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099136.5234375,
            "unit": "ns",
            "range": "± 664.8946847915192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 823283.8151041666,
            "unit": "ns",
            "range": "± 1673.4966687264778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906320.99609375,
            "unit": "ns",
            "range": "± 7334.595188014649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609205.9895833334,
            "unit": "ns",
            "range": "± 4007.450515715338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 524833.8346354166,
            "unit": "ns",
            "range": "± 1154.2794674513673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208889.4736842103,
            "unit": "ns",
            "range": "± 64927.24322831686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399426.6666666665,
            "unit": "ns",
            "range": "± 60810.49564797495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15662566.666666666,
            "unit": "ns",
            "range": "± 128569.16796954452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4240602.777777778,
            "unit": "ns",
            "range": "± 140648.67778792683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18656440,
            "unit": "ns",
            "range": "± 348541.0404201245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139654.05405405405,
            "unit": "ns",
            "range": "± 4729.610895118035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 138494.64285714287,
            "unit": "ns",
            "range": "± 5964.574804410001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 124855.10204081633,
            "unit": "ns",
            "range": "± 10893.508635965341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7712807.692307692,
            "unit": "ns",
            "range": "± 80374.28549748215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6181585.714285715,
            "unit": "ns",
            "range": "± 57399.95788182396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16124.731182795698,
            "unit": "ns",
            "range": "± 1560.285363669826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40666.30434782609,
            "unit": "ns",
            "range": "± 3338.6605583582364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 28434.090909090908,
            "unit": "ns",
            "range": "± 1650.7668969186357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75298.45360824742,
            "unit": "ns",
            "range": "± 13174.803235422389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4663.1578947368425,
            "unit": "ns",
            "range": "± 867.2593947503566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15258.695652173914,
            "unit": "ns",
            "range": "± 1718.55754579899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84a1f0b6316de1aad5d7cea313360ee6ce7e2d6d",
          "message": "Merge pull request #3015 from riemannulus/merge/main/0.52-maintenance\n\n🔀 Port 0.52.2 to main",
          "timestamp": "2023-03-28T19:09:08+09:00",
          "tree_id": "28c67380d41870034ff1bba749b2f70b12511a10",
          "url": "https://github.com/planetarium/libplanet/commit/84a1f0b6316de1aad5d7cea313360ee6ce7e2d6d"
        },
        "date": 1679999050343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287908.163265306,
            "unit": "ns",
            "range": "± 92479.09395788888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2302789.189189189,
            "unit": "ns",
            "range": "± 78159.55114658372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024591.6666666667,
            "unit": "ns",
            "range": "± 113249.39471586052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696476,
            "unit": "ns",
            "range": "± 124875.5222878634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42519.04761904762,
            "unit": "ns",
            "range": "± 1924.1971214540313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6725730.769230769,
            "unit": "ns",
            "range": "± 12456.416326227529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17316121.42857143,
            "unit": "ns",
            "range": "± 146706.59981259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44152678.571428575,
            "unit": "ns",
            "range": "± 287653.9137937795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89313946.66666667,
            "unit": "ns",
            "range": "± 563887.4404735484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179412060,
            "unit": "ns",
            "range": "± 1707812.6222075503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876693.179086538,
            "unit": "ns",
            "range": "± 8239.400046730989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512234.5703125,
            "unit": "ns",
            "range": "± 2281.2369555471196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145194.2940848214,
            "unit": "ns",
            "range": "± 1308.6423758065466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607128.7109375,
            "unit": "ns",
            "range": "± 2470.261572403492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852940.0032552084,
            "unit": "ns",
            "range": "± 3219.930624943656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738325.341796875,
            "unit": "ns",
            "range": "± 661.1424290907204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2917655,
            "unit": "ns",
            "range": "± 96004.60712769773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4513343.478260869,
            "unit": "ns",
            "range": "± 111196.39802082765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21558061.53846154,
            "unit": "ns",
            "range": "± 158339.30623012056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5589764.705882353,
            "unit": "ns",
            "range": "± 76383.18647759197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24647586.666666668,
            "unit": "ns",
            "range": "± 306289.1091451872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182600,
            "unit": "ns",
            "range": "± 4077.9251690302663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172821.81818181818,
            "unit": "ns",
            "range": "± 7249.410982690912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145102.66666666666,
            "unit": "ns",
            "range": "± 7275.3373346761955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10137571.42857143,
            "unit": "ns",
            "range": "± 28563.22079909026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8085257.142857143,
            "unit": "ns",
            "range": "± 53747.210507733675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17431.052631578947,
            "unit": "ns",
            "range": "± 1696.1341988783502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47071.739130434784,
            "unit": "ns",
            "range": "± 4668.678098128687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33572,
            "unit": "ns",
            "range": "± 1363.8241552819823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83553.53535353535,
            "unit": "ns",
            "range": "± 13031.541900807933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4725.263157894737,
            "unit": "ns",
            "range": "± 686.6459369843789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17548.958333333332,
            "unit": "ns",
            "range": "± 2096.513134841135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "befdfa5b6df52e5aab73d5e22a0e941a11e1c279",
          "message": "Merge pull request #3016 from riemannulus/merge/main/0.53-maintenance\n\n🔀 Port 0.53.1 to main",
          "timestamp": "2023-03-28T19:52:06+09:00",
          "tree_id": "081932db25900e7a90f52678dd351852fe59b3c4",
          "url": "https://github.com/planetarium/libplanet/commit/befdfa5b6df52e5aab73d5e22a0e941a11e1c279"
        },
        "date": 1680001862151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373535.0515463918,
            "unit": "ns",
            "range": "± 110177.57545703693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578066.6666666665,
            "unit": "ns",
            "range": "± 111509.24742775713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2149288.888888889,
            "unit": "ns",
            "range": "± 142967.41450406564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5070803.448275862,
            "unit": "ns",
            "range": "± 144586.0926990229"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49963.541666666664,
            "unit": "ns",
            "range": "± 3073.490037200695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7633800,
            "unit": "ns",
            "range": "± 161071.15344029866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20306633.333333332,
            "unit": "ns",
            "range": "± 207432.67639910363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50491920,
            "unit": "ns",
            "range": "± 462284.0394636799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100762626.66666667,
            "unit": "ns",
            "range": "± 582983.7972101144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201860486.66666666,
            "unit": "ns",
            "range": "± 1350071.1922321867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4814974.776785715,
            "unit": "ns",
            "range": "± 11611.55957750966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526050.3645833333,
            "unit": "ns",
            "range": "± 2778.733009443491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181799.7526041667,
            "unit": "ns",
            "range": "± 4137.750225685953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635181.9791666665,
            "unit": "ns",
            "range": "± 10462.368945861233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823682.8971354166,
            "unit": "ns",
            "range": "± 1617.308879529577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759155.6770833334,
            "unit": "ns",
            "range": "± 1812.6182084897268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234307.6923076925,
            "unit": "ns",
            "range": "± 85603.99487443059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5230408.108108108,
            "unit": "ns",
            "range": "± 173871.38186726542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23736752.63157895,
            "unit": "ns",
            "range": "± 526825.3108831565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6318145,
            "unit": "ns",
            "range": "± 144413.02782388838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27467800,
            "unit": "ns",
            "range": "± 443593.7781349058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193189.33333333334,
            "unit": "ns",
            "range": "± 9745.249339277303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188714.58333333334,
            "unit": "ns",
            "range": "± 7351.305849645725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176235.05747126436,
            "unit": "ns",
            "range": "± 9657.730109541873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11357333.333333334,
            "unit": "ns",
            "range": "± 145677.81803235062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9314164.285714285,
            "unit": "ns",
            "range": "± 72540.78542068972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24265.625,
            "unit": "ns",
            "range": "± 2084.318802012075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57716.85393258427,
            "unit": "ns",
            "range": "± 4233.101054220185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43768.62745098039,
            "unit": "ns",
            "range": "± 1783.9832057593405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109356.12244897959,
            "unit": "ns",
            "range": "± 15760.900769214197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6876.8421052631575,
            "unit": "ns",
            "range": "± 1030.229537693395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21073.40425531915,
            "unit": "ns",
            "range": "± 1505.3435668229515"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5fbabad50c4076bf2bcde95c6f67c7725966085",
          "message": "Merge pull request #2986 from planetarium/tx-invoice",
          "timestamp": "2023-03-31T16:03:30+09:00",
          "tree_id": "606589d0a8afe3cba7ebbc4325300655d36cae40",
          "url": "https://github.com/planetarium/libplanet/commit/f5fbabad50c4076bf2bcde95c6f67c7725966085"
        },
        "date": 1680247559309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1755104.2105263157,
            "unit": "ns",
            "range": "± 183310.82597122595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3503593.9393939395,
            "unit": "ns",
            "range": "± 327874.8578526171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2860986.4583333335,
            "unit": "ns",
            "range": "± 287750.735193095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7781191.666666667,
            "unit": "ns",
            "range": "± 794899.81396753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69789.13043478261,
            "unit": "ns",
            "range": "± 15551.745999441715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8819559.18367347,
            "unit": "ns",
            "range": "± 625788.0051495214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25348831.25,
            "unit": "ns",
            "range": "± 1171654.8872773724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66407280.2631579,
            "unit": "ns",
            "range": "± 3262018.838000775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130801237.20930232,
            "unit": "ns",
            "range": "± 4829405.010972995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266140350,
            "unit": "ns",
            "range": "± 5171952.865214454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6108768.229166667,
            "unit": "ns",
            "range": "± 64871.38872166557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017947.7734375,
            "unit": "ns",
            "range": "± 45960.06856278137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1495801.3734879033,
            "unit": "ns",
            "range": "± 44504.9634702361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3360520.1171875,
            "unit": "ns",
            "range": "± 32394.71278537951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1070434.8754882812,
            "unit": "ns",
            "range": "± 20651.86397350818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1017736.328125,
            "unit": "ns",
            "range": "± 19298.22066029093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3917569.14893617,
            "unit": "ns",
            "range": "± 432283.90363169066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4338664.893617021,
            "unit": "ns",
            "range": "± 396940.0292472476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5048014.43298969,
            "unit": "ns",
            "range": "± 431134.39343919844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5481360.204081632,
            "unit": "ns",
            "range": "± 515385.6171638275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10102544.680851065,
            "unit": "ns",
            "range": "± 786046.779315632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 426982.2916666667,
            "unit": "ns",
            "range": "± 55015.390181277864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337739.4736842105,
            "unit": "ns",
            "range": "± 41261.57471052681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313431.52173913043,
            "unit": "ns",
            "range": "± 40455.8419675974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7186683.75,
            "unit": "ns",
            "range": "± 376053.18181791756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5279639.743589744,
            "unit": "ns",
            "range": "± 270008.64937552594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27969.072164948455,
            "unit": "ns",
            "range": "± 9403.084166298202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119562.1052631579,
            "unit": "ns",
            "range": "± 23746.843816924335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103901.06382978724,
            "unit": "ns",
            "range": "± 19607.292338173356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 247282.1052631579,
            "unit": "ns",
            "range": "± 35321.62853450032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7477.528089887641,
            "unit": "ns",
            "range": "± 1256.325161386896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31451.546391752578,
            "unit": "ns",
            "range": "± 11773.691659462473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9db060971a9ecc4403a964452823b399520f4f1d",
          "message": "Merge pull request #3033 from dahlia/make-rocksdb-store-blockchain-test-skippable",
          "timestamp": "2023-03-31T17:24:48+09:00",
          "tree_id": "d6b788a4eae4a7dfba47ea0bec2e61209da24360",
          "url": "https://github.com/planetarium/libplanet/commit/9db060971a9ecc4403a964452823b399520f4f1d"
        },
        "date": 1680252286269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1819550.5263157894,
            "unit": "ns",
            "range": "± 179831.40264531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3532988.888888889,
            "unit": "ns",
            "range": "± 212735.39952775778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2937613.5416666665,
            "unit": "ns",
            "range": "± 286270.29355591146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7302383.928571428,
            "unit": "ns",
            "range": "± 310807.65918770444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72648.42105263157,
            "unit": "ns",
            "range": "± 15611.090323786624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8984632.967032967,
            "unit": "ns",
            "range": "± 502433.00627047557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22823889.898989897,
            "unit": "ns",
            "range": "± 1513214.006372067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62010534.21052632,
            "unit": "ns",
            "range": "± 2006572.9099604622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133729424.56140351,
            "unit": "ns",
            "range": "± 5735606.782767523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260641605.55555555,
            "unit": "ns",
            "range": "± 5171130.525554375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5602544.661458333,
            "unit": "ns",
            "range": "± 111552.25510231424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034288.330078125,
            "unit": "ns",
            "range": "± 38143.31017600815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1487219.3129595588,
            "unit": "ns",
            "range": "± 28999.124040436483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3275047.890625,
            "unit": "ns",
            "range": "± 60835.70973468475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1084361.439732143,
            "unit": "ns",
            "range": "± 16405.07736703037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910798.818359375,
            "unit": "ns",
            "range": "± 17571.068510019635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3896746.4646464647,
            "unit": "ns",
            "range": "± 352721.1899206034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4344123.711340206,
            "unit": "ns",
            "range": "± 364427.7010982414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5179945.918367347,
            "unit": "ns",
            "range": "± 356936.106837921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5368981.25,
            "unit": "ns",
            "range": "± 447866.9617578534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10100035.820895523,
            "unit": "ns",
            "range": "± 473590.2370581724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417503.22580645164,
            "unit": "ns",
            "range": "± 31602.574370964932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352883.67346938775,
            "unit": "ns",
            "range": "± 44602.22520887271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306056.4516129032,
            "unit": "ns",
            "range": "± 32290.6562284416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6599183.870967742,
            "unit": "ns",
            "range": "± 373421.0132097441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4557084.810126582,
            "unit": "ns",
            "range": "± 235261.2944990879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23014.893617021276,
            "unit": "ns",
            "range": "± 5803.90964720007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109042.70833333333,
            "unit": "ns",
            "range": "± 22680.69313334078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78867.02127659574,
            "unit": "ns",
            "range": "± 11560.643174222316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 217952.08333333334,
            "unit": "ns",
            "range": "± 29856.928946901942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6393.6781609195405,
            "unit": "ns",
            "range": "± 1654.7817357251686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29188.88888888889,
            "unit": "ns",
            "range": "± 10118.450402544495"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f33f0a6984b598fac343d17f1e4b169369850e89",
          "message": "Merge pull request #3035 from planetarium/fix-errata\n\n[changelog skip]",
          "timestamp": "2023-03-31T18:47:51+09:00",
          "tree_id": "a02e4b3f84fd0e863ac5acdf2b8c9cc5fe5709ed",
          "url": "https://github.com/planetarium/libplanet/commit/f33f0a6984b598fac343d17f1e4b169369850e89"
        },
        "date": 1680257100964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1303594.4444444445,
            "unit": "ns",
            "range": "± 97776.44140758582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2452603.2258064514,
            "unit": "ns",
            "range": "± 72997.14370608833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095202.197802198,
            "unit": "ns",
            "range": "± 117051.83654928459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5533547.474747474,
            "unit": "ns",
            "range": "± 427775.4358766716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49267.03296703297,
            "unit": "ns",
            "range": "± 2774.4891399661287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6966244.117647059,
            "unit": "ns",
            "range": "± 135816.5926469785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19713728.57142857,
            "unit": "ns",
            "range": "± 216080.15403324983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49822871.428571425,
            "unit": "ns",
            "range": "± 517825.0271435938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97504920,
            "unit": "ns",
            "range": "± 1533880.040103714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197945514.2857143,
            "unit": "ns",
            "range": "± 4510815.006989947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4972018.90625,
            "unit": "ns",
            "range": "± 35737.14651610116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523183.7565104167,
            "unit": "ns",
            "range": "± 6691.732343835393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174038.1417410714,
            "unit": "ns",
            "range": "± 11551.046360375294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653272.421875,
            "unit": "ns",
            "range": "± 20510.57290350706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848767.5520833334,
            "unit": "ns",
            "range": "± 7302.731111936797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752392.2395833334,
            "unit": "ns",
            "range": "± 2351.922185623443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226066.6666666665,
            "unit": "ns",
            "range": "± 101721.65350438748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3370700,
            "unit": "ns",
            "range": "± 83717.0424704552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4016939.4736842103,
            "unit": "ns",
            "range": "± 88041.54256017024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4303000,
            "unit": "ns",
            "range": "± 224612.75987515532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7539022.7272727275,
            "unit": "ns",
            "range": "± 279654.8910284065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310142.42424242425,
            "unit": "ns",
            "range": "± 8425.854196423883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251416.66666666666,
            "unit": "ns",
            "range": "± 3479.507105463315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213012.90322580645,
            "unit": "ns",
            "range": "± 6480.881726816903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5269933.333333333,
            "unit": "ns",
            "range": "± 98030.23343166467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3625907.1428571427,
            "unit": "ns",
            "range": "± 57125.91307852282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22614.285714285714,
            "unit": "ns",
            "range": "± 3130.0340896006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91092.70833333333,
            "unit": "ns",
            "range": "± 8275.165697710314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82983,
            "unit": "ns",
            "range": "± 9224.769631133058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191647.91666666666,
            "unit": "ns",
            "range": "± 14331.004145717125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8243.434343434343,
            "unit": "ns",
            "range": "± 1360.6842228521275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21324.74226804124,
            "unit": "ns",
            "range": "± 2122.9416956899618"
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
          "id": "633703538f86dfb69361147287cbe4fae0b84a76",
          "message": "Merge pull request #3036 from greymistcube/chore/logging\n\n🧹 Small logging fix for consistency",
          "timestamp": "2023-03-31T21:16:31+09:00",
          "tree_id": "26356a172c2fea17776cc5cf1daba8b1789bffb8",
          "url": "https://github.com/planetarium/libplanet/commit/633703538f86dfb69361147287cbe4fae0b84a76"
        },
        "date": 1680265943475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503321.2121212122,
            "unit": "ns",
            "range": "± 174679.74151708305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2588634.0425531915,
            "unit": "ns",
            "range": "± 100854.20229350399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2313049,
            "unit": "ns",
            "range": "± 208794.37107577708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5253000,
            "unit": "ns",
            "range": "± 66788.1726056343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52676.086956521736,
            "unit": "ns",
            "range": "± 3529.8840240331833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7101486.666666667,
            "unit": "ns",
            "range": "± 113179.64775818428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19966825,
            "unit": "ns",
            "range": "± 366122.2045528879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50482540,
            "unit": "ns",
            "range": "± 914689.977767643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101372600,
            "unit": "ns",
            "range": "± 2142098.9766773973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198041773.33333334,
            "unit": "ns",
            "range": "± 3448691.6563628395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902416.927083333,
            "unit": "ns",
            "range": "± 19657.461070234163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546948.4830729167,
            "unit": "ns",
            "range": "± 10023.186568484924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1198724.5052083333,
            "unit": "ns",
            "range": "± 4363.24345682178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630769.921875,
            "unit": "ns",
            "range": "± 8897.193732010765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832966.1202566965,
            "unit": "ns",
            "range": "± 2798.3253266701113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773863.8736979166,
            "unit": "ns",
            "range": "± 2940.6350743200487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3134300,
            "unit": "ns",
            "range": "± 73175.658521123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417740.909090909,
            "unit": "ns",
            "range": "± 121774.92642630123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3986062.5,
            "unit": "ns",
            "range": "± 77176.26470187148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4392354,
            "unit": "ns",
            "range": "± 267284.41682744597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7497733.333333333,
            "unit": "ns",
            "range": "± 193452.55494433964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329611.1111111111,
            "unit": "ns",
            "range": "± 12294.330219884107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267329.06976744183,
            "unit": "ns",
            "range": "± 13942.46890347929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216672,
            "unit": "ns",
            "range": "± 5540.872374154333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5432484.615384615,
            "unit": "ns",
            "range": "± 68905.62200277814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739691.489361702,
            "unit": "ns",
            "range": "± 145481.81095002496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25107.291666666668,
            "unit": "ns",
            "range": "± 2496.9979782748665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98241.66666666667,
            "unit": "ns",
            "range": "± 8942.643747403923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95184.53608247422,
            "unit": "ns",
            "range": "± 9950.537466704433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 210335.7142857143,
            "unit": "ns",
            "range": "± 20372.233225592576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9192.929292929293,
            "unit": "ns",
            "range": "± 1745.7968489508273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22986.17021276596,
            "unit": "ns",
            "range": "± 2405.944746093251"
          }
        ]
      }
    ]
  }
}