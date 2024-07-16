window.BENCHMARK_DATA = {
  "lastUpdate": 1721105303598,
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720676749187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10892878.666666666,
            "unit": "ns",
            "range": "± 80277.25594840708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26588648.714285713,
            "unit": "ns",
            "range": "± 154705.723699087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67722927.4,
            "unit": "ns",
            "range": "± 202854.3302213262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135083404.5,
            "unit": "ns",
            "range": "± 210216.01812595245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272366494.4285714,
            "unit": "ns",
            "range": "± 400393.0550803441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14147.130434782608,
            "unit": "ns",
            "range": "± 358.40154021937536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110165.56603773584,
            "unit": "ns",
            "range": "± 3819.5480678570516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107263.96363636364,
            "unit": "ns",
            "range": "± 4284.129852285735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93010.48148148147,
            "unit": "ns",
            "range": "± 2517.4707907612715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047197.0506329113,
            "unit": "ns",
            "range": "± 156801.22147646116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2727075.75,
            "unit": "ns",
            "range": "± 168940.36303103555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5122.797752808989,
            "unit": "ns",
            "range": "± 522.0768007716716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26803.282608695652,
            "unit": "ns",
            "range": "± 1738.8574645128394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22881.140845070422,
            "unit": "ns",
            "range": "± 1115.8653182399323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30468.35106382979,
            "unit": "ns",
            "range": "± 4606.2963423675355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1089.8736842105263,
            "unit": "ns",
            "range": "± 204.85953891164237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4731.078651685393,
            "unit": "ns",
            "range": "± 443.8394269614115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678304.22,
            "unit": "ns",
            "range": "± 34067.91529274302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289438.5405405406,
            "unit": "ns",
            "range": "± 42892.010299507216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076431.482352941,
            "unit": "ns",
            "range": "± 57867.60812974235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9368126.7,
            "unit": "ns",
            "range": "± 1298486.1921189323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195792.847826087,
            "unit": "ns",
            "range": "± 84132.64625841145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286317.56,
            "unit": "ns",
            "range": "± 110369.61467909496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585514.1315789474,
            "unit": "ns",
            "range": "± 56289.82618674979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2335039.8974358975,
            "unit": "ns",
            "range": "± 81202.66295373987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2838425.378378378,
            "unit": "ns",
            "range": "± 94225.76363104123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3017800.721047794,
            "unit": "ns",
            "range": "± 59624.69706229462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922302.3324869792,
            "unit": "ns",
            "range": "± 5670.777701041784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610012.4946614583,
            "unit": "ns",
            "range": "± 4725.028009726542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630307.9311197917,
            "unit": "ns",
            "range": "± 18640.384204674425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469589.77457682294,
            "unit": "ns",
            "range": "± 1231.4559910866499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419218.9615234375,
            "unit": "ns",
            "range": "± 1717.7447534571331"
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
          "id": "1715ccfb96803c319afff76dff631edd0f6b7b58",
          "message": "Merge pull request #3874 from planetarium/prepare/5.1.1\n\n🔧Prepare 5.1.1",
          "timestamp": "2024-07-12T15:13:54+09:00",
          "tree_id": "f4265a0ab88d83def888e04ed52141f2d5f9bd4a",
          "url": "https://github.com/planetarium/libplanet/commit/1715ccfb96803c319afff76dff631edd0f6b7b58"
        },
        "date": 1720765311647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10659519.615384616,
            "unit": "ns",
            "range": "± 149906.58504078377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26586077.285714287,
            "unit": "ns",
            "range": "± 140033.43908025275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67027583.64285714,
            "unit": "ns",
            "range": "± 138327.77502039642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135103658.66666666,
            "unit": "ns",
            "range": "± 259296.78649038073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273828824.6666667,
            "unit": "ns",
            "range": "± 412397.1221833334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14083.307692307691,
            "unit": "ns",
            "range": "± 378.58526323466623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110350.44545454545,
            "unit": "ns",
            "range": "± 4153.430542906366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104256.21428571429,
            "unit": "ns",
            "range": "± 3722.3837663762165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94474.81081081081,
            "unit": "ns",
            "range": "± 3151.6776382484672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063533.1754385964,
            "unit": "ns",
            "range": "± 132933.39964555865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738156,
            "unit": "ns",
            "range": "± 112684.54873331467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4959.593406593406,
            "unit": "ns",
            "range": "± 437.64932633894557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26668.25581395349,
            "unit": "ns",
            "range": "± 1764.9883864710173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23014.56842105263,
            "unit": "ns",
            "range": "± 1723.1506747607218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28673.896907216495,
            "unit": "ns",
            "range": "± 5090.61830823079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1258.2164948453608,
            "unit": "ns",
            "range": "± 223.5248041234333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4745.7555555555555,
            "unit": "ns",
            "range": "± 520.8962309287285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674366.2753623188,
            "unit": "ns",
            "range": "± 32207.138235035844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262719.3823529412,
            "unit": "ns",
            "range": "± 34430.2029177209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1058851.1014492754,
            "unit": "ns",
            "range": "± 48001.05554603643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9445846.58,
            "unit": "ns",
            "range": "± 1282239.9311628013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208903.4137931033,
            "unit": "ns",
            "range": "± 64083.32040204559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292122.659574468,
            "unit": "ns",
            "range": "± 89100.2011243708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2600033.3225806453,
            "unit": "ns",
            "range": "± 79068.62466844317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2297939.85,
            "unit": "ns",
            "range": "± 49968.04469624351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3054344.08,
            "unit": "ns",
            "range": "± 217408.3000802672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3078304.0127604166,
            "unit": "ns",
            "range": "± 34571.11349560526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921898.5182942708,
            "unit": "ns",
            "range": "± 6177.961959476833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614657.8914713542,
            "unit": "ns",
            "range": "± 5251.573427875235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1670426.3950520833,
            "unit": "ns",
            "range": "± 17801.213831544075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467177.0964704241,
            "unit": "ns",
            "range": "± 439.47545983731123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422627.3819486178,
            "unit": "ns",
            "range": "± 975.67715082365"
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
          "id": "0b596b218868c91141683cb0607890e04dc346ea",
          "message": "Merge pull request #3876 from planetarium/release/5.1.1\n\n🚀 Release 5.1.1",
          "timestamp": "2024-07-15T10:03:11+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/0b596b218868c91141683cb0607890e04dc346ea"
        },
        "date": 1721005885140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10807218.583333334,
            "unit": "ns",
            "range": "± 78568.08989944308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26506702.230769232,
            "unit": "ns",
            "range": "± 120692.4577898676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67805213.53333333,
            "unit": "ns",
            "range": "± 150140.7030601946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135897601,
            "unit": "ns",
            "range": "± 251048.85052813924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272647622.21428573,
            "unit": "ns",
            "range": "± 270811.1932555392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14282.184210526315,
            "unit": "ns",
            "range": "± 494.8032016798225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110956.2,
            "unit": "ns",
            "range": "± 4202.224454660523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105875.27777777778,
            "unit": "ns",
            "range": "± 4403.637614761047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89946.73076923077,
            "unit": "ns",
            "range": "± 2165.7779675246916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3005288.7346938774,
            "unit": "ns",
            "range": "± 183878.94871757468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2769889.5,
            "unit": "ns",
            "range": "± 171913.37237969475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4902.966292134832,
            "unit": "ns",
            "range": "± 439.8237107957471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27005,
            "unit": "ns",
            "range": "± 1523.7723449029088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22534.292307692307,
            "unit": "ns",
            "range": "± 991.9309408150114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29276.864583333332,
            "unit": "ns",
            "range": "± 5326.316996752104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1116.436170212766,
            "unit": "ns",
            "range": "± 255.273859205711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4675.175824175824,
            "unit": "ns",
            "range": "± 539.9835716308946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 695038.2921348314,
            "unit": "ns",
            "range": "± 42896.90710698739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271449.9807692308,
            "unit": "ns",
            "range": "± 51312.61050886923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1060211.36,
            "unit": "ns",
            "range": "± 53178.18080542108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9511806.61,
            "unit": "ns",
            "range": "± 1324873.1746101184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165740.6923076925,
            "unit": "ns",
            "range": "± 31140.50536248199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295393.62,
            "unit": "ns",
            "range": "± 92717.92914278297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557796.5,
            "unit": "ns",
            "range": "± 28178.079284554984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2271924.3125,
            "unit": "ns",
            "range": "± 30202.381418730874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3132163.05,
            "unit": "ns",
            "range": "± 279399.4782348864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3026566.706473214,
            "unit": "ns",
            "range": "± 42194.92709594969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917090.7063151042,
            "unit": "ns",
            "range": "± 4929.574383119384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617648.6764322916,
            "unit": "ns",
            "range": "± 3931.260880508747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1650472.6567708333,
            "unit": "ns",
            "range": "± 5885.74696365933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461743.01796875,
            "unit": "ns",
            "range": "± 1222.5136555586757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420727.0741489955,
            "unit": "ns",
            "range": "± 1312.6260242336446"
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
          "id": "4af3e101a46f0093686eae7f651451d1cc718dd9",
          "message": "Merge pull request #3879 from planetarium/prepare/5.1.2\n\n🔧 Prepare 5.1.2",
          "timestamp": "2024-07-15T18:06:43+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/4af3e101a46f0093686eae7f651451d1cc718dd9"
        },
        "date": 1721035674627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10966596.8,
            "unit": "ns",
            "range": "± 162547.4536190234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26566207.923076924,
            "unit": "ns",
            "range": "± 147789.0599810315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67474589.2,
            "unit": "ns",
            "range": "± 174289.58437988855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135965231,
            "unit": "ns",
            "range": "± 365657.2927666404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273482357.5714286,
            "unit": "ns",
            "range": "± 686320.3421128913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14296.611111111111,
            "unit": "ns",
            "range": "± 307.27648766100054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109020.21739130435,
            "unit": "ns",
            "range": "± 3709.250573681628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105320.78571428571,
            "unit": "ns",
            "range": "± 3752.0842307859903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91365.16666666667,
            "unit": "ns",
            "range": "± 3932.3802376338595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2997660.888888889,
            "unit": "ns",
            "range": "± 184004.85733090056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2829994.797101449,
            "unit": "ns",
            "range": "± 135906.49733771113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4969.417582417583,
            "unit": "ns",
            "range": "± 651.2239257468982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26977.715909090908,
            "unit": "ns",
            "range": "± 1774.0342196861802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22322.105263157893,
            "unit": "ns",
            "range": "± 476.9362751210226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28225.865979381444,
            "unit": "ns",
            "range": "± 5248.205148804181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1246.3829787234042,
            "unit": "ns",
            "range": "± 225.18093591756207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4887.689655172414,
            "unit": "ns",
            "range": "± 524.2860330264615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686937.6590909091,
            "unit": "ns",
            "range": "± 39360.58640954343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1286138.1395348837,
            "unit": "ns",
            "range": "± 47661.6465972486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066153.4366197183,
            "unit": "ns",
            "range": "± 51079.61878555936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9221756.010204082,
            "unit": "ns",
            "range": "± 1270312.7157761187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179230.230769231,
            "unit": "ns",
            "range": "± 31688.656995718637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272438.6666666665,
            "unit": "ns",
            "range": "± 94678.26501606812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2599085.8125,
            "unit": "ns",
            "range": "± 39042.318791654354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2292760,
            "unit": "ns",
            "range": "± 32460.101429806615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3061099.11,
            "unit": "ns",
            "range": "± 258321.34054453403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3019989.345833333,
            "unit": "ns",
            "range": "± 43350.709553347835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 940050.7913411459,
            "unit": "ns",
            "range": "± 3995.896544661782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612735.41328125,
            "unit": "ns",
            "range": "± 4438.7711147810605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1650521.8849158655,
            "unit": "ns",
            "range": "± 11817.802062012322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468294.71435546875,
            "unit": "ns",
            "range": "± 1038.4160588419147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423785.10358072916,
            "unit": "ns",
            "range": "± 839.6263283845157"
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
          "id": "13c88d911e399b8348ecd0c6fce3115ed66ce57a",
          "message": "Merge pull request #3881 from planetarium/port/pyroscope-from-main-to-5.1.2\n\n🔀 Port pyroscope from main to 5.1.2",
          "timestamp": "2024-07-16T13:39:56+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/13c88d911e399b8348ecd0c6fce3115ed66ce57a"
        },
        "date": 1721105291123,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10815416.166666666,
            "unit": "ns",
            "range": "± 80980.24119930102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26610533.07142857,
            "unit": "ns",
            "range": "± 217509.5020981716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67518621.86666666,
            "unit": "ns",
            "range": "± 109554.01495665875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135536539.2142857,
            "unit": "ns",
            "range": "± 204350.91555804707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273012553.1333333,
            "unit": "ns",
            "range": "± 703269.0413081982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14361.97619047619,
            "unit": "ns",
            "range": "± 521.7022904943822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110392.23809523809,
            "unit": "ns",
            "range": "± 3940.044278626542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104534.67647058824,
            "unit": "ns",
            "range": "± 2938.804804684321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90404,
            "unit": "ns",
            "range": "± 1262.9055784182758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060698.8105263156,
            "unit": "ns",
            "range": "± 174459.89822344252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2698140.96,
            "unit": "ns",
            "range": "± 173104.78383378038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5247.842696629214,
            "unit": "ns",
            "range": "± 509.75916548174547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26759.593023255813,
            "unit": "ns",
            "range": "± 1488.7571632891882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22836,
            "unit": "ns",
            "range": "± 1609.6586724106035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29750.153846153848,
            "unit": "ns",
            "range": "± 4802.980306071722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1101.9375,
            "unit": "ns",
            "range": "± 222.62504765211227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4981.824175824176,
            "unit": "ns",
            "range": "± 538.4996150500345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683585.6753246753,
            "unit": "ns",
            "range": "± 34047.57501003928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287799.857142857,
            "unit": "ns",
            "range": "± 47969.39879235511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066514.2428571428,
            "unit": "ns",
            "range": "± 50187.957526547565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11083676.59,
            "unit": "ns",
            "range": "± 2053642.4937792514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220807.1,
            "unit": "ns",
            "range": "± 32410.611667873753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2305229.224137931,
            "unit": "ns",
            "range": "± 66820.33129802879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2573681.785714286,
            "unit": "ns",
            "range": "± 31185.83427474865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2303973.5,
            "unit": "ns",
            "range": "± 29143.036605284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3179701.72,
            "unit": "ns",
            "range": "± 290943.0987761461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3062968.669791667,
            "unit": "ns",
            "range": "± 48331.712652613554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923447.2133463542,
            "unit": "ns",
            "range": "± 4732.733242021808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 601248.0169921875,
            "unit": "ns",
            "range": "± 1139.7323267560914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1664194.7475260417,
            "unit": "ns",
            "range": "± 17072.578942734854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463371.00237165176,
            "unit": "ns",
            "range": "± 338.2325728012609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422940.44186197914,
            "unit": "ns",
            "range": "± 1167.2727990768203"
          }
        ]
      }
    ]
  }
}