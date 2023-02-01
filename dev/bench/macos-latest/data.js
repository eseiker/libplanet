window.BENCHMARK_DATA = {
  "lastUpdate": 1675230085291,
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
          "id": "22b56dc3b389fb8531c06779a818dfce5c4894de",
          "message": "Merge pull request #2679 from riemannulus/fix/ci/benchmark/cache-problem\n\nFix benchmark problem",
          "timestamp": "2022-12-28T22:28:36+09:00",
          "tree_id": "2466dfb37280997af5192c08b774f5a7a134dd1b",
          "url": "https://github.com/planetarium/libplanet/commit/22b56dc3b389fb8531c06779a818dfce5c4894de"
        },
        "date": 1672235627589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 180350.9301075269,
            "unit": "ns",
            "range": "± 30774.805146629224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144975.28494623656,
            "unit": "ns",
            "range": "± 17829.95944595931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298754.56593406596,
            "unit": "ns",
            "range": "± 44382.67903455687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282410.73076923075,
            "unit": "ns",
            "range": "± 44000.48481275252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4398849.82967033,
            "unit": "ns",
            "range": "± 622271.6675162072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12821951.833333334,
            "unit": "ns",
            "range": "± 2649302.430083264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35531.441860465115,
            "unit": "ns",
            "range": "± 4456.512183059359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80893.39247311828,
            "unit": "ns",
            "range": "± 13778.748985983711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72091.64814814815,
            "unit": "ns",
            "range": "± 3047.500498598609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161013.46315789473,
            "unit": "ns",
            "range": "± 34118.8836694144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10356.308510638299,
            "unit": "ns",
            "range": "± 1142.9284521825984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33745.686046511626,
            "unit": "ns",
            "range": "± 3402.7790286647555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 8128581.708125,
            "unit": "ns",
            "range": "± 2455166.570485953"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 10613165.395604396,
            "unit": "ns",
            "range": "± 3653120.456406641"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 41912106.584269665,
            "unit": "ns",
            "range": "± 10920183.009968301"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 10072925.085106382,
            "unit": "ns",
            "range": "± 2222295.773466064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41462711.8045977,
            "unit": "ns",
            "range": "± 7673838.89187207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7887521.347301137,
            "unit": "ns",
            "range": "± 489035.9609600104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2349963.527889785,
            "unit": "ns",
            "range": "± 141425.26902468994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465352.5513980263,
            "unit": "ns",
            "range": "± 30923.380379213195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340701.988237847,
            "unit": "ns",
            "range": "± 197893.94530674492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008800.2906971807,
            "unit": "ns",
            "range": "± 59175.28836584513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901089.3865327381,
            "unit": "ns",
            "range": "± 18691.761589735343"
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
          "id": "892107b8521ea96557f73b801872329249df8b9b",
          "message": "Merge pull request #2682 from greymistcube/fix/relax-benchmark-threshold\n\n🔧 Relax benchmark alert threshold to 150%",
          "timestamp": "2022-12-29T00:28:05+09:00",
          "tree_id": "69481e12323d163c1f0d3e0fdf112d3578b22a92",
          "url": "https://github.com/planetarium/libplanet/commit/892107b8521ea96557f73b801872329249df8b9b"
        },
        "date": 1672242594432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156507.8956043956,
            "unit": "ns",
            "range": "± 12939.120516118826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133553.20833333334,
            "unit": "ns",
            "range": "± 20222.581194463448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284454.85164835164,
            "unit": "ns",
            "range": "± 39128.48776910746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245207.9,
            "unit": "ns",
            "range": "± 22794.401509108044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3714686.619402985,
            "unit": "ns",
            "range": "± 175825.65175346567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11482052.7,
            "unit": "ns",
            "range": "± 458883.40969033807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28278.159574468085,
            "unit": "ns",
            "range": "± 4204.774711219573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77954.59574468085,
            "unit": "ns",
            "range": "± 11356.744235971506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62685.04255319149,
            "unit": "ns",
            "range": "± 7055.68590611123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128953.55434782608,
            "unit": "ns",
            "range": "± 18066.15449899699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9942.938775510203,
            "unit": "ns",
            "range": "± 1618.0935267039947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34419.541666666664,
            "unit": "ns",
            "range": "± 6603.564069447517"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5600606.223845108,
            "unit": "ns",
            "range": "± 744322.1216383697"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6836033.237113402,
            "unit": "ns",
            "range": "± 732960.2266688795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29996330.659574468,
            "unit": "ns",
            "range": "± 2978893.7673997614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7710408.14893617,
            "unit": "ns",
            "range": "± 566701.2709215322"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31730438.95,
            "unit": "ns",
            "range": "± 705168.4708928167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8041128.238867188,
            "unit": "ns",
            "range": "± 418914.4194293964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2206988.073486328,
            "unit": "ns",
            "range": "± 64983.33577760522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445878.79296875,
            "unit": "ns",
            "range": "± 21154.501707881343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911276.9326891447,
            "unit": "ns",
            "range": "± 297671.8519200179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846433.1372070312,
            "unit": "ns",
            "range": "± 25935.000098537064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796384.1218345906,
            "unit": "ns",
            "range": "± 22487.456185537394"
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
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/planetarium/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672248300651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149457.45876288658,
            "unit": "ns",
            "range": "± 13510.599334347897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132761.06701030929,
            "unit": "ns",
            "range": "± 15716.414671389495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273199.2,
            "unit": "ns",
            "range": "± 14290.155142083311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238822.94444444444,
            "unit": "ns",
            "range": "± 10992.541943514625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242980.19047619,
            "unit": "ns",
            "range": "± 97865.33906681111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11594556.350877194,
            "unit": "ns",
            "range": "± 502336.3525304425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29731.705263157895,
            "unit": "ns",
            "range": "± 5287.722117207163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84310.99462365592,
            "unit": "ns",
            "range": "± 16628.10567044457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58635.54838709677,
            "unit": "ns",
            "range": "± 5321.375577137865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128435.88144329897,
            "unit": "ns",
            "range": "± 20289.754117659202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7088.225806451613,
            "unit": "ns",
            "range": "± 667.9742107920858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32819.6,
            "unit": "ns",
            "range": "± 4058.92719288519"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5351863.2504111845,
            "unit": "ns",
            "range": "± 232216.94528208705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7167120,
            "unit": "ns",
            "range": "± 60109.67465114636"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30380547.07142857,
            "unit": "ns",
            "range": "± 475187.6557103057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8596680.695402298,
            "unit": "ns",
            "range": "± 1670046.2720515558"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34610562.56896552,
            "unit": "ns",
            "range": "± 735067.884825172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7912851.455882353,
            "unit": "ns",
            "range": "± 152206.71482644475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2277312.5768229165,
            "unit": "ns",
            "range": "± 20021.907197888795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477274.873798077,
            "unit": "ns",
            "range": "± 15771.33602332873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2902810.862079327,
            "unit": "ns",
            "range": "± 19519.818127023893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 931432.7256673177,
            "unit": "ns",
            "range": "± 3968.0789422131356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849386.3342285156,
            "unit": "ns",
            "range": "± 3614.798134290766"
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
          "id": "d0dff731200fbb4de60d43ddcf9d61865ce4b647",
          "message": "Merge pull request #2693 from greymistcube/feature/apv-options\n\nIntroduce `AppProtocolVersionOptions`",
          "timestamp": "2023-01-05T14:12:47+09:00",
          "tree_id": "cf69d928f8349be78f52307259b762739850e6d8",
          "url": "https://github.com/planetarium/libplanet/commit/d0dff731200fbb4de60d43ddcf9d61865ce4b647"
        },
        "date": 1672896780315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146946.1264367816,
            "unit": "ns",
            "range": "± 10043.975551502339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138423.8901098901,
            "unit": "ns",
            "range": "± 20653.339200801052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284468.3404255319,
            "unit": "ns",
            "range": "± 40625.51038939687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250681.4540229885,
            "unit": "ns",
            "range": "± 20057.780103298574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3879605.84375,
            "unit": "ns",
            "range": "± 271568.26612894336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10867782.06862745,
            "unit": "ns",
            "range": "± 439299.7766408836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29509.719101123595,
            "unit": "ns",
            "range": "± 4011.8802721325633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75724.09375,
            "unit": "ns",
            "range": "± 11244.446065856713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66711.97777777778,
            "unit": "ns",
            "range": "± 7171.624088903039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145633.6494845361,
            "unit": "ns",
            "range": "± 30178.656523844675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8687.97191011236,
            "unit": "ns",
            "range": "± 857.1335831220408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30401.866666666665,
            "unit": "ns",
            "range": "± 2093.4525979289047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5791578.390049342,
            "unit": "ns",
            "range": "± 490669.45702869305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6673988.020833333,
            "unit": "ns",
            "range": "± 517001.4570086154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29443343.643835615,
            "unit": "ns",
            "range": "± 1372755.139557148"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8371319.265306123,
            "unit": "ns",
            "range": "± 867182.1306078457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34904438.973684214,
            "unit": "ns",
            "range": "± 1463848.9757767767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7673330.362165178,
            "unit": "ns",
            "range": "± 326858.0622395962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181510.7436655406,
            "unit": "ns",
            "range": "± 73555.70673781932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410352.2092848558,
            "unit": "ns",
            "range": "± 21403.915608757896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3075792.0442708335,
            "unit": "ns",
            "range": "± 96702.61850458544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883229.2580566406,
            "unit": "ns",
            "range": "± 27105.342457214214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790924.8118489584,
            "unit": "ns",
            "range": "± 13541.456713854215"
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
          "id": "a289e1a5d890de8a3b5296f48896bb1167e10b5d",
          "message": "Merge pull request #2690 from longfin/port/0.45.4\n\nPort/0.45.4 & remove `workers` option for `NetMQTransport`",
          "timestamp": "2023-01-10T16:08:09+09:00",
          "tree_id": "ec672276fc11e3274ad9cbe3398393b71987b2cc",
          "url": "https://github.com/planetarium/libplanet/commit/a289e1a5d890de8a3b5296f48896bb1167e10b5d"
        },
        "date": 1673335718805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156523.44444444444,
            "unit": "ns",
            "range": "± 8731.258742105747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 154965.69892473117,
            "unit": "ns",
            "range": "± 30691.750457179198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297492.70430107525,
            "unit": "ns",
            "range": "± 60064.32704004121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275287.61363636365,
            "unit": "ns",
            "range": "± 25278.945727430695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4478120.724137931,
            "unit": "ns",
            "range": "± 244588.3281009175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11674552.284210525,
            "unit": "ns",
            "range": "± 893577.0190518253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34735.846153846156,
            "unit": "ns",
            "range": "± 6339.4818451476995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81855.25,
            "unit": "ns",
            "range": "± 13148.812255410066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72299.04395604396,
            "unit": "ns",
            "range": "± 12434.294454283448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161267.6182795699,
            "unit": "ns",
            "range": "± 29916.01027254741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10945.021505376344,
            "unit": "ns",
            "range": "± 1532.2558460627133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36213.028735632186,
            "unit": "ns",
            "range": "± 5093.226520743656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6102167.104996566,
            "unit": "ns",
            "range": "± 557388.8920081062"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7097174.427835052,
            "unit": "ns",
            "range": "± 722884.7294202761"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31037604.11445783,
            "unit": "ns",
            "range": "± 1628098.7726814144"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7876992.880434782,
            "unit": "ns",
            "range": "± 683776.4560274573"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36515285.3021978,
            "unit": "ns",
            "range": "± 2988303.352031953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7817557.7878196025,
            "unit": "ns",
            "range": "± 286123.4827015578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2145017.0705422796,
            "unit": "ns",
            "range": "± 67962.65542120492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472896.394748264,
            "unit": "ns",
            "range": "± 28966.38061957512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150190.012651586,
            "unit": "ns",
            "range": "± 148617.3093777309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934347.0566796875,
            "unit": "ns",
            "range": "± 24850.71411756935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805871.0164713542,
            "unit": "ns",
            "range": "± 13875.097474175083"
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
          "id": "054d1c78a807fc6667270d7ee47e3096fa020361",
          "message": "Merge pull request #2699 from dahlia/cli-chain-ids",
          "timestamp": "2023-01-10T17:45:42+09:00",
          "tree_id": "9e7b12be880e83d8210f37b157f7dc8633b8ec26",
          "url": "https://github.com/planetarium/libplanet/commit/054d1c78a807fc6667270d7ee47e3096fa020361"
        },
        "date": 1673341465848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132141.43617021278,
            "unit": "ns",
            "range": "± 11812.639999564992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138660.53846153847,
            "unit": "ns",
            "range": "± 26544.648092227006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265418.1979166667,
            "unit": "ns",
            "range": "± 43423.248606107125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237533.76136363635,
            "unit": "ns",
            "range": "± 25654.578044542995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764830.8586956523,
            "unit": "ns",
            "range": "± 246360.69177857324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10579409.36904762,
            "unit": "ns",
            "range": "± 527797.5468044446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24849.31111111111,
            "unit": "ns",
            "range": "± 4803.934858721697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67174.50515463918,
            "unit": "ns",
            "range": "± 10603.585188828542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49930.97826086957,
            "unit": "ns",
            "range": "± 6649.579368632425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120635.67010309278,
            "unit": "ns",
            "range": "± 19268.150074303132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6404.159340659341,
            "unit": "ns",
            "range": "± 995.0790724558328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28505.178947368422,
            "unit": "ns",
            "range": "± 4579.908674595726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5047378.25078125,
            "unit": "ns",
            "range": "± 519873.86109053507"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6135807.269230769,
            "unit": "ns",
            "range": "± 66050.42784892193"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27796455.22105263,
            "unit": "ns",
            "range": "± 1852854.8406162898"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7457353.257731959,
            "unit": "ns",
            "range": "± 667840.5816681554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37448491.49473684,
            "unit": "ns",
            "range": "± 6908188.262652338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6571124.073029892,
            "unit": "ns",
            "range": "± 224180.4447648049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921203.3247575432,
            "unit": "ns",
            "range": "± 55373.59251441742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270912.2992466518,
            "unit": "ns",
            "range": "± 18021.478562968285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555303.8450520835,
            "unit": "ns",
            "range": "± 80914.80447383535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 778335.9841496394,
            "unit": "ns",
            "range": "± 7711.8067527564845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784636.2943209135,
            "unit": "ns",
            "range": "± 6010.599247172569"
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
          "id": "43edf035ffc013ea3eb7087df3df3e78929449eb",
          "message": "Merge pull request #2701 from greymistcube/feature/host-options\n\nIntroduce `HostOptions`",
          "timestamp": "2023-01-11T03:11:02+09:00",
          "tree_id": "1d15627c3db0a3689b01f026edd0d773d9e93677",
          "url": "https://github.com/planetarium/libplanet/commit/43edf035ffc013ea3eb7087df3df3e78929449eb"
        },
        "date": 1673375439155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 144884.52222222224,
            "unit": "ns",
            "range": "± 9901.25541804842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 136234.4065934066,
            "unit": "ns",
            "range": "± 16319.156781033635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268185.6956521739,
            "unit": "ns",
            "range": "± 29887.610627419588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236376.8125,
            "unit": "ns",
            "range": "± 3635.4318994905316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3727648.0714285714,
            "unit": "ns",
            "range": "± 85551.98431104414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10279198.857142856,
            "unit": "ns",
            "range": "± 170113.2699585133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27852.1,
            "unit": "ns",
            "range": "± 3840.629542810187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70832.28947368421,
            "unit": "ns",
            "range": "± 8602.315249822856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60188.71590909091,
            "unit": "ns",
            "range": "± 5136.762622528294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130001.38541666667,
            "unit": "ns",
            "range": "± 21172.286779193615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8752.968085106382,
            "unit": "ns",
            "range": "± 1749.5377005475343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31017.875,
            "unit": "ns",
            "range": "± 3880.656357603002"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5908615.22986469,
            "unit": "ns",
            "range": "± 410067.68730822706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6870224.78125,
            "unit": "ns",
            "range": "± 606164.0908651744"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36637412.59375,
            "unit": "ns",
            "range": "± 7814630.641082824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8169187.645833333,
            "unit": "ns",
            "range": "± 645040.4773198911"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38375008.91304348,
            "unit": "ns",
            "range": "± 2142929.5901657087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7751417.086774553,
            "unit": "ns",
            "range": "± 217112.03505229313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2285895.0941200657,
            "unit": "ns",
            "range": "± 165294.63504769464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413486.3561662945,
            "unit": "ns",
            "range": "± 24374.678087800316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3106640.2751885774,
            "unit": "ns",
            "range": "± 135055.44147284448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878177.1280381945,
            "unit": "ns",
            "range": "± 17037.93820872139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824156.312906901,
            "unit": "ns",
            "range": "± 15903.917609560569"
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
          "id": "f20f103ca562c3d48b0a6961814b24f50606f3eb",
          "message": "Merge pull request #2704 from tkiapril/chain-id-show-tip-hash",
          "timestamp": "2023-01-11T18:08:10+09:00",
          "tree_id": "24a8667bbcd91291876b38499606d0c19245fc2f",
          "url": "https://github.com/planetarium/libplanet/commit/f20f103ca562c3d48b0a6961814b24f50606f3eb"
        },
        "date": 1673429439003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 158968.45454545456,
            "unit": "ns",
            "range": "± 10527.117313891726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141031.7311827957,
            "unit": "ns",
            "range": "± 20944.480939077643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279004.2708333333,
            "unit": "ns",
            "range": "± 30696.28736593715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277852.8505747126,
            "unit": "ns",
            "range": "± 37015.05237518755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4126637.195652174,
            "unit": "ns",
            "range": "± 398175.57659454824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11467275.563157896,
            "unit": "ns",
            "range": "± 724406.5266077396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35992.44047619047,
            "unit": "ns",
            "range": "± 2425.5459221607443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87241.08163265306,
            "unit": "ns",
            "range": "± 18849.713389859946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78900.55421686747,
            "unit": "ns",
            "range": "± 4800.239684699221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155172.37628865978,
            "unit": "ns",
            "range": "± 27248.474380174684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10241.784210526315,
            "unit": "ns",
            "range": "± 2213.818409508773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36980.52222222222,
            "unit": "ns",
            "range": "± 7505.876592059782"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5740562.196463816,
            "unit": "ns",
            "range": "± 575941.8464597241"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7447511.802083333,
            "unit": "ns",
            "range": "± 647352.6269466502"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29673696.863157894,
            "unit": "ns",
            "range": "± 2429128.277195457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7472055.020833333,
            "unit": "ns",
            "range": "± 643881.9381964691"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32052930.5,
            "unit": "ns",
            "range": "± 759099.7776100978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7520653.444773707,
            "unit": "ns",
            "range": "± 201170.29851642277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2383273.641468395,
            "unit": "ns",
            "range": "± 192619.15847685613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478956.4745342548,
            "unit": "ns",
            "range": "± 38925.16090455373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340823.843914474,
            "unit": "ns",
            "range": "± 436524.58750407887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886723.4051460598,
            "unit": "ns",
            "range": "± 25489.629436717503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821013.6692810059,
            "unit": "ns",
            "range": "± 25176.43957310298"
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
          "id": "2b54fb44bc6300190695faef09e0ee94b9dab340",
          "message": "Merge pull request #2705 from dahlia/derive",
          "timestamp": "2023-01-11T18:47:52+09:00",
          "tree_id": "749a054f2e774af871d96519117f118ec1f53339",
          "url": "https://github.com/planetarium/libplanet/commit/2b54fb44bc6300190695faef09e0ee94b9dab340"
        },
        "date": 1673431596516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 142825.89130434784,
            "unit": "ns",
            "range": "± 12602.1077052384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124702.52127659574,
            "unit": "ns",
            "range": "± 16927.54963180368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267910.1907216495,
            "unit": "ns",
            "range": "± 41943.32093814243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286674.94943820225,
            "unit": "ns",
            "range": "± 76583.47729735704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3778750.339285714,
            "unit": "ns",
            "range": "± 161558.50992912494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10821622.195652174,
            "unit": "ns",
            "range": "± 263685.03402517503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26933.752688172044,
            "unit": "ns",
            "range": "± 4954.614589617471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69691.72340425532,
            "unit": "ns",
            "range": "± 13309.804392869022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53360.135416666664,
            "unit": "ns",
            "range": "± 9778.023168653901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119822.80927835051,
            "unit": "ns",
            "range": "± 21920.1312721134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6027.057894736842,
            "unit": "ns",
            "range": "± 1155.9134889570964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26840.08695652174,
            "unit": "ns",
            "range": "± 4880.355426734469"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5256131.203983516,
            "unit": "ns",
            "range": "± 442590.79484875844"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6937266.43298969,
            "unit": "ns",
            "range": "± 540476.3295817154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28638027.758064516,
            "unit": "ns",
            "range": "± 1229952.5308860962"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7624154.5578947365,
            "unit": "ns",
            "range": "± 438467.16190438176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34795061.54736842,
            "unit": "ns",
            "range": "± 1987562.0499476062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7031236.937282986,
            "unit": "ns",
            "range": "± 232320.90788095485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2077162.1169621395,
            "unit": "ns",
            "range": "± 85459.81194338387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344939.0474853516,
            "unit": "ns",
            "range": "± 23467.17078887376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711205.115534856,
            "unit": "ns",
            "range": "± 134788.89707890214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837148.993347168,
            "unit": "ns",
            "range": "± 15947.573600819922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744838.5424804688,
            "unit": "ns",
            "range": "± 11007.394273365866"
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
          "id": "4a5c11c9812926f76a9e9d0d76198c358230b492",
          "message": "Merge pull request #2710 from greymistcube/refactor/optimize-preload\n\n♻️ Optimize preload",
          "timestamp": "2023-01-13T17:51:47+09:00",
          "tree_id": "fdce00d536cafced976f265ea8a56217fb32517a",
          "url": "https://github.com/planetarium/libplanet/commit/4a5c11c9812926f76a9e9d0d76198c358230b492"
        },
        "date": 1673601284568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156348.6011235955,
            "unit": "ns",
            "range": "± 10290.946551840585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 145644.14444444445,
            "unit": "ns",
            "range": "± 20689.08963602955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276048.36516853934,
            "unit": "ns",
            "range": "± 31231.5221553594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280665.28571428574,
            "unit": "ns",
            "range": "± 36850.66303346996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4070186.840659341,
            "unit": "ns",
            "range": "± 260827.13732079422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10606552.068965517,
            "unit": "ns",
            "range": "± 304638.2861377138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33298.17525773196,
            "unit": "ns",
            "range": "± 5150.715809902683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81021.43298969071,
            "unit": "ns",
            "range": "± 12264.038286887142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64119.28723404255,
            "unit": "ns",
            "range": "± 11206.543145957225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136622.43617021278,
            "unit": "ns",
            "range": "± 21801.76142474934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7186.086021505376,
            "unit": "ns",
            "range": "± 1706.7369875566012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34423.26666666667,
            "unit": "ns",
            "range": "± 5824.879574971602"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5851787.563844086,
            "unit": "ns",
            "range": "± 699227.9227364826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6570755.166666667,
            "unit": "ns",
            "range": "± 270081.8214881879"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32500454.545454547,
            "unit": "ns",
            "range": "± 3201750.0651684226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7980175.105263158,
            "unit": "ns",
            "range": "± 851060.5923629655"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37305278.69148936,
            "unit": "ns",
            "range": "± 2622460.0225151824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7779272.610476763,
            "unit": "ns",
            "range": "± 397561.76383315783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2367505.389036017,
            "unit": "ns",
            "range": "± 100756.02278485711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482892.7761101974,
            "unit": "ns",
            "range": "± 61382.14754164824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3275372.5385298296,
            "unit": "ns",
            "range": "± 78471.06140543714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926498.2883384968,
            "unit": "ns",
            "range": "± 40169.69147690458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794975.739917652,
            "unit": "ns",
            "range": "± 26941.114978011665"
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
          "id": "fa6aa6bb21208812c943ffb9923d0bad81b7a3e2",
          "message": "Merge pull request #2708 from colibrishin/transport/socket-count\n\nfix/transport: socket count",
          "timestamp": "2023-01-13T19:08:43+09:00",
          "tree_id": "778e222c51d60c6823a686ef96a7682632aff117",
          "url": "https://github.com/planetarium/libplanet/commit/fa6aa6bb21208812c943ffb9923d0bad81b7a3e2"
        },
        "date": 1673605746190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 145720.53125,
            "unit": "ns",
            "range": "± 9502.719180876184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 151053.7894736842,
            "unit": "ns",
            "range": "± 30160.122542253008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291761.2395833333,
            "unit": "ns",
            "range": "± 47362.245374014004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251526.84210526315,
            "unit": "ns",
            "range": "± 29900.335315957895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3737227.547169811,
            "unit": "ns",
            "range": "± 153847.59580164016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10351305.258064516,
            "unit": "ns",
            "range": "± 464542.87052887917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27535.664835164836,
            "unit": "ns",
            "range": "± 4562.749335077448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77394.97872340426,
            "unit": "ns",
            "range": "± 13454.868034362993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68561.75862068965,
            "unit": "ns",
            "range": "± 9045.41393625896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138157.87634408602,
            "unit": "ns",
            "range": "± 23512.59993803229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8660.618279569893,
            "unit": "ns",
            "range": "± 1712.303126414083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26550.19587628866,
            "unit": "ns",
            "range": "± 3478.9836298335013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5477971.895833333,
            "unit": "ns",
            "range": "± 448988.0159158373"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6661225.335051547,
            "unit": "ns",
            "range": "± 493221.1923210914"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 40965226.96236559,
            "unit": "ns",
            "range": "± 12637774.462903218"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7974485.326086956,
            "unit": "ns",
            "range": "± 596454.1430281199"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34496094.89795918,
            "unit": "ns",
            "range": "± 2467746.949049794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7650253.439002404,
            "unit": "ns",
            "range": "± 120688.0712670898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2137344.471042799,
            "unit": "ns",
            "range": "± 80324.13962615446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372809.1038736978,
            "unit": "ns",
            "range": "± 57894.729843714274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2990967.0912247472,
            "unit": "ns",
            "range": "± 269109.34312642843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880380.380859375,
            "unit": "ns",
            "range": "± 37465.63635858922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806103.3113199869,
            "unit": "ns",
            "range": "± 20412.953533935724"
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
          "id": "c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d",
          "message": "Merge pull request #2713 from longfin/feature/rocksdb-index-blockhash-iter\n\nTurn recursion to iteration on `RocksDBStore.IndexBlockHash()`",
          "timestamp": "2023-01-16T15:42:34+09:00",
          "tree_id": "c4b7e618a5e927bc18027604bd726b67d479da5c",
          "url": "https://github.com/planetarium/libplanet/commit/c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d"
        },
        "date": 1673852259757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146088.1224489796,
            "unit": "ns",
            "range": "± 10491.790510135199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 131710.60824742267,
            "unit": "ns",
            "range": "± 14799.565896333961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279984.2105263158,
            "unit": "ns",
            "range": "± 25934.621884160097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232275.79381443298,
            "unit": "ns",
            "range": "± 13858.757019434006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233141.142857143,
            "unit": "ns",
            "range": "± 53295.99222896905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10696064.57142857,
            "unit": "ns",
            "range": "± 111114.20139846024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28481.927835051545,
            "unit": "ns",
            "range": "± 3934.36351599442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72001.43617021276,
            "unit": "ns",
            "range": "± 6994.377089650373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55885.257731958765,
            "unit": "ns",
            "range": "± 4399.340749093244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127841.13541666667,
            "unit": "ns",
            "range": "± 16083.411291481143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7026.606382978724,
            "unit": "ns",
            "range": "± 718.5714504634768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25967.53488372093,
            "unit": "ns",
            "range": "± 2531.6397462220334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5397281.008370535,
            "unit": "ns",
            "range": "± 31651.84261358245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7287676.866666666,
            "unit": "ns",
            "range": "± 71719.71843111275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30124655.346153848,
            "unit": "ns",
            "range": "± 468090.62450374675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8212462.923076923,
            "unit": "ns",
            "range": "± 100762.65159146811"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34508873.06896552,
            "unit": "ns",
            "range": "± 1008334.3448274673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6919698.305288462,
            "unit": "ns",
            "range": "± 22884.47557894167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221269.828385417,
            "unit": "ns",
            "range": "± 12596.854851644077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448228.4353966345,
            "unit": "ns",
            "range": "± 9253.549016831672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2880819.246875,
            "unit": "ns",
            "range": "± 12155.340249575378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947756.9979771206,
            "unit": "ns",
            "range": "± 2794.3067808014293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848000.1630161831,
            "unit": "ns",
            "range": "± 2384.019335927309"
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
          "id": "4f0cb090c1b44a63dbe9eb283102fed2d3a9427f",
          "message": "Merge pull request #2706 from greymistcube/refactor/cleanup-preload\n\n🧹 Cleanup preload",
          "timestamp": "2023-01-16T18:25:15+09:00",
          "tree_id": "e9df5726db548acb8715354fbb0090fb74cd41f6",
          "url": "https://github.com/planetarium/libplanet/commit/4f0cb090c1b44a63dbe9eb283102fed2d3a9427f"
        },
        "date": 1673862251103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147372.19791666666,
            "unit": "ns",
            "range": "± 15013.561773921738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132927.91,
            "unit": "ns",
            "range": "± 20003.667966728786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268663.9896907217,
            "unit": "ns",
            "range": "± 29275.617855170465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237184.7985074627,
            "unit": "ns",
            "range": "± 11229.675850060052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3698137.8714285716,
            "unit": "ns",
            "range": "± 119450.07766921507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9988680.52173913,
            "unit": "ns",
            "range": "± 374194.81092366786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28409.102040816328,
            "unit": "ns",
            "range": "± 5543.654223923853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72691.89690721649,
            "unit": "ns",
            "range": "± 10238.987158451164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53778.13265306123,
            "unit": "ns",
            "range": "± 7780.387845310726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123726.6,
            "unit": "ns",
            "range": "± 13867.995231175808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6712.798969072165,
            "unit": "ns",
            "range": "± 1658.250597799709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25068.29292929293,
            "unit": "ns",
            "range": "± 4141.12575459351"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5550364.62628866,
            "unit": "ns",
            "range": "± 510207.2400038666"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6393886.782608695,
            "unit": "ns",
            "range": "± 942198.5928843849"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29881902.09090909,
            "unit": "ns",
            "range": "± 2238934.1647857605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7145253.540816327,
            "unit": "ns",
            "range": "± 616907.1254080095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32696417.970588237,
            "unit": "ns",
            "range": "± 1030392.5883073679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7084185.250132415,
            "unit": "ns",
            "range": "± 311607.7178873711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985062.9647135416,
            "unit": "ns",
            "range": "± 36418.371988797415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295647.8916766827,
            "unit": "ns",
            "range": "± 6702.757339285123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563073.388545867,
            "unit": "ns",
            "range": "± 77362.68161292383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819911.818761489,
            "unit": "ns",
            "range": "± 16738.158370998535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735267.5945172991,
            "unit": "ns",
            "range": "± 8612.077043201709"
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
          "id": "8707b88bda48d4d42b8e487e85a251144481368e",
          "message": "Merge pull request #2721 from moreal/boundpeer-validate\n\nValidate hostname in `BoundPeer` type",
          "timestamp": "2023-01-18T10:46:11+09:00",
          "tree_id": "fa8afe5c0c7d19887b236c2f44d8b86a0ce33681",
          "url": "https://github.com/planetarium/libplanet/commit/8707b88bda48d4d42b8e487e85a251144481368e"
        },
        "date": 1674007916707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141914.9157303371,
            "unit": "ns",
            "range": "± 14334.669033983333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 138263.44897959183,
            "unit": "ns",
            "range": "± 27862.228445716388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301924.40425531915,
            "unit": "ns",
            "range": "± 62494.1450615544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256574.50574712644,
            "unit": "ns",
            "range": "± 37253.67819763404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930967.5542168673,
            "unit": "ns",
            "range": "± 286000.1126456905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11099275.77173913,
            "unit": "ns",
            "range": "± 1205260.1972526044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31482.979166666668,
            "unit": "ns",
            "range": "± 6726.585213251992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77574.92708333333,
            "unit": "ns",
            "range": "± 12697.241627712765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64669.7,
            "unit": "ns",
            "range": "± 13809.029057183116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138688.5625,
            "unit": "ns",
            "range": "± 25240.26877653727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7520.974747474747,
            "unit": "ns",
            "range": "± 1382.8354288690302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28784.57471264368,
            "unit": "ns",
            "range": "± 3644.76078786365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5051331.909505208,
            "unit": "ns",
            "range": "± 435083.2577885957"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6248664.9069767445,
            "unit": "ns",
            "range": "± 802905.6923501608"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29966774.966666665,
            "unit": "ns",
            "range": "± 3508830.143230273"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8796981.212121213,
            "unit": "ns",
            "range": "± 1969912.3596421552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33956258.53448276,
            "unit": "ns",
            "range": "± 2425954.620021361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8133796.640209441,
            "unit": "ns",
            "range": "± 873277.6212784845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2411370.356573548,
            "unit": "ns",
            "range": "± 280138.9711254824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1502245.8195551657,
            "unit": "ns",
            "range": "± 126872.82617486545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3009748.878051758,
            "unit": "ns",
            "range": "± 295840.71375611314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967869.9454461349,
            "unit": "ns",
            "range": "± 76524.8191257986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912083.7858438297,
            "unit": "ns",
            "range": "± 87419.43936053988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3294d71ecaef386577c4f10ff4e202d8ca90ee",
          "message": "Merge pull request #2716 from planetarium/pow-dynamic-validator\n\nPow dynamic validator",
          "timestamp": "2023-01-18T12:52:06+09:00",
          "tree_id": "7cd68701d78ea8a7bef2ceb426022324839dcf9d",
          "url": "https://github.com/planetarium/libplanet/commit/ac3294d71ecaef386577c4f10ff4e202d8ca90ee"
        },
        "date": 1674014996465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133728.55102040817,
            "unit": "ns",
            "range": "± 15028.869391201135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 135952.72680412373,
            "unit": "ns",
            "range": "± 25197.422371686967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279226.6595744681,
            "unit": "ns",
            "range": "± 47434.78931661757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227417.24444444446,
            "unit": "ns",
            "range": "± 16273.52445722193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3781974.5185185187,
            "unit": "ns",
            "range": "± 157935.1772138357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10265617.396551725,
            "unit": "ns",
            "range": "± 450570.4622909168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30700.868686868685,
            "unit": "ns",
            "range": "± 7780.333230425188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69573.36363636363,
            "unit": "ns",
            "range": "± 8388.48837804211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53254.95263157895,
            "unit": "ns",
            "range": "± 10184.96352239514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133607.71978021978,
            "unit": "ns",
            "range": "± 27390.191129430175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6159.364583333333,
            "unit": "ns",
            "range": "± 1438.8127387741501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26459.073684210525,
            "unit": "ns",
            "range": "± 5245.583279419114"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4909544.038314494,
            "unit": "ns",
            "range": "± 409058.7983412132"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5952997.120689655,
            "unit": "ns",
            "range": "± 164387.63465345599"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36012124.86363637,
            "unit": "ns",
            "range": "± 10001420.40714694"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8924848.164948454,
            "unit": "ns",
            "range": "± 2548773.5623446982"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32687997.151162792,
            "unit": "ns",
            "range": "± 2384124.708098604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6670870.7724609375,
            "unit": "ns",
            "range": "± 170717.66873142775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052460.390625,
            "unit": "ns",
            "range": "± 26272.857946726406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301045.6346028645,
            "unit": "ns",
            "range": "± 13611.70137744877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610235.671530331,
            "unit": "ns",
            "range": "± 76760.88432273711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814270.8884277344,
            "unit": "ns",
            "range": "± 15344.855223171995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743563.6144205729,
            "unit": "ns",
            "range": "± 6160.88700675888"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b923ec9ea125a779f3d83c68a94a3cc69aab1f83",
          "message": "Merge pull request #2719 from longfin/bugfix/dealer-disposal\n\nFix NetMQSocket leak",
          "timestamp": "2023-01-18T14:41:04+09:00",
          "tree_id": "f38041db1ca49c6e90ae0de9fb40944156620b10",
          "url": "https://github.com/planetarium/libplanet/commit/b923ec9ea125a779f3d83c68a94a3cc69aab1f83"
        },
        "date": 1674021605502,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138982.5,
            "unit": "ns",
            "range": "± 13914.355582899134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121381.02105263158,
            "unit": "ns",
            "range": "± 22270.983237893444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256477.74468085106,
            "unit": "ns",
            "range": "± 34541.248357980054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226291.47191011236,
            "unit": "ns",
            "range": "± 13697.597271129083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3656390.964285714,
            "unit": "ns",
            "range": "± 104157.59491181375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9987566.966666667,
            "unit": "ns",
            "range": "± 186403.5138578465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25824.070707070707,
            "unit": "ns",
            "range": "± 5113.406070106953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66242.87368421053,
            "unit": "ns",
            "range": "± 9191.282647556805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56079.32795698925,
            "unit": "ns",
            "range": "± 6536.791497269524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127167.23711340207,
            "unit": "ns",
            "range": "± 24223.089178067446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7163.016483516483,
            "unit": "ns",
            "range": "± 1174.6499560165655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29353.973684210527,
            "unit": "ns",
            "range": "± 5399.033272099392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5474852.434546494,
            "unit": "ns",
            "range": "± 288450.19259752554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6704722.166666667,
            "unit": "ns",
            "range": "± 523755.320554363"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29862102.114583332,
            "unit": "ns",
            "range": "± 2067841.6690111344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6993480.068421053,
            "unit": "ns",
            "range": "± 432861.70321985846"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31307713.208333332,
            "unit": "ns",
            "range": "± 1152751.7844480153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6747763.477205883,
            "unit": "ns",
            "range": "± 363159.2879710743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166009.416183036,
            "unit": "ns",
            "range": "± 69730.41130382277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359392.0003004808,
            "unit": "ns",
            "range": "± 36961.34562340376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2803512.972628741,
            "unit": "ns",
            "range": "± 137449.86343270066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863338.1478407118,
            "unit": "ns",
            "range": "± 17996.09564916445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881273.8034667969,
            "unit": "ns",
            "range": "± 20237.77902340867"
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
          "id": "7c5392c7e40bca979415f316f6f0a5e083b2bf59",
          "message": "Merge pull request #2584 from greymistcube/refactor/block-locator\n\n♻️ Refactor `BlockLocator`",
          "timestamp": "2023-01-18T17:14:34+09:00",
          "tree_id": "a5b8ca613b01cffa39f3b6699fc6e85bbe549f6d",
          "url": "https://github.com/planetarium/libplanet/commit/7c5392c7e40bca979415f316f6f0a5e083b2bf59"
        },
        "date": 1674030836791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140104.36559139786,
            "unit": "ns",
            "range": "± 12223.127814129342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119169.06451612903,
            "unit": "ns",
            "range": "± 18613.002823415896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257705.03260869565,
            "unit": "ns",
            "range": "± 36493.632286174055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213049.47701149425,
            "unit": "ns",
            "range": "± 17784.995803869377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4068939.1911764704,
            "unit": "ns",
            "range": "± 192928.75022151967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9801940.738636363,
            "unit": "ns",
            "range": "± 588824.7549266464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23897.97894736842,
            "unit": "ns",
            "range": "± 6548.368741126665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59073.86170212766,
            "unit": "ns",
            "range": "± 8950.92223710197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49066.92222222222,
            "unit": "ns",
            "range": "± 6775.830185427304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93628.29347826086,
            "unit": "ns",
            "range": "± 15085.444462368676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5095.25,
            "unit": "ns",
            "range": "± 459.32558930235075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20210.325581395347,
            "unit": "ns",
            "range": "± 2518.431736298746"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5363306.237068965,
            "unit": "ns",
            "range": "± 300579.69937586365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7122007.733333333,
            "unit": "ns",
            "range": "± 128167.36811710955"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30241400.15,
            "unit": "ns",
            "range": "± 1049645.5493740719"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8482516.717391305,
            "unit": "ns",
            "range": "± 321278.31394918245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34984945.67816092,
            "unit": "ns",
            "range": "± 1897080.8510852929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7104332.111268939,
            "unit": "ns",
            "range": "± 221673.49989416124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2141152.344140625,
            "unit": "ns",
            "range": "± 34254.85173160137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375712.7315204327,
            "unit": "ns",
            "range": "± 15389.412695348974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690061.5603966345,
            "unit": "ns",
            "range": "± 36266.28091854071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015031.8127790178,
            "unit": "ns",
            "range": "± 16193.51573297397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809812.2585286458,
            "unit": "ns",
            "range": "± 12775.33710252514"
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
          "id": "ed9ee092c883ba93365316ea520f7da624646932",
          "message": "Merge pull request #2724 from greymistcube/release/0.46.0\n\n🚀 Release 0.46.0",
          "timestamp": "2023-01-18T17:37:55+09:00",
          "tree_id": "7919b8ddfe6f6a1c1e09c010681ebf2e3795eee6",
          "url": "https://github.com/planetarium/libplanet/commit/ed9ee092c883ba93365316ea520f7da624646932"
        },
        "date": 1674032339857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 152007.95604395604,
            "unit": "ns",
            "range": "± 13988.124324195776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 142351.7142857143,
            "unit": "ns",
            "range": "± 27757.32616025921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291100.8350515464,
            "unit": "ns",
            "range": "± 43603.01539593726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252054.8674698795,
            "unit": "ns",
            "range": "± 16505.245392971945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3880643.753164557,
            "unit": "ns",
            "range": "± 200529.82446358603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10969192.31958763,
            "unit": "ns",
            "range": "± 633580.7266686133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30023.862637362636,
            "unit": "ns",
            "range": "± 5009.560407674917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76526.09574468085,
            "unit": "ns",
            "range": "± 12620.935052240977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68719.75274725274,
            "unit": "ns",
            "range": "± 8159.025208106674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148066.38947368422,
            "unit": "ns",
            "range": "± 35775.03967534108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8756.947916666666,
            "unit": "ns",
            "range": "± 984.7224013827895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31034.919540229886,
            "unit": "ns",
            "range": "± 3699.6004819451914"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5671872.2778253425,
            "unit": "ns",
            "range": "± 281902.94609532837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7496648.531578948,
            "unit": "ns",
            "range": "± 1290800.7487029987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29419910.50877193,
            "unit": "ns",
            "range": "± 1262077.7766924829"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7764457.479166667,
            "unit": "ns",
            "range": "± 584341.7128312758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35919195.41919192,
            "unit": "ns",
            "range": "± 2340782.7739790324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7491656.186383928,
            "unit": "ns",
            "range": "± 174749.57878168244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2257149.0560344825,
            "unit": "ns",
            "range": "± 63811.05536589994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1452027.411640625,
            "unit": "ns",
            "range": "± 38373.26669549978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3183221.0115411934,
            "unit": "ns",
            "range": "± 118215.40948853157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918317.1762408088,
            "unit": "ns",
            "range": "± 17692.95067372976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904188.0645791331,
            "unit": "ns",
            "range": "± 27348.427823275506"
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
          "id": "124115fb5538ed5f6c111a32e2b8c6c5f4e1369e",
          "message": "Merge pull request #2726 from riemannulus/prepare-0.47\n\nrelease: prepare 0.47",
          "timestamp": "2023-01-19T01:32:16+09:00",
          "tree_id": "ee971d646c27028070577759dfef5c18036e0a94",
          "url": "https://github.com/planetarium/libplanet/commit/124115fb5538ed5f6c111a32e2b8c6c5f4e1369e"
        },
        "date": 1674060555805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147004.30434782608,
            "unit": "ns",
            "range": "± 8308.88347220649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123570.37234042553,
            "unit": "ns",
            "range": "± 10731.132538998356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280694.13265306124,
            "unit": "ns",
            "range": "± 28578.444312315507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231658.98,
            "unit": "ns",
            "range": "± 9271.360289182852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4196995.785714285,
            "unit": "ns",
            "range": "± 52317.43664390498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10742959.461538462,
            "unit": "ns",
            "range": "± 58657.6794796376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27106.968085106382,
            "unit": "ns",
            "range": "± 3224.299048445909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65426.14893617021,
            "unit": "ns",
            "range": "± 5377.980066017605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50888.52173913043,
            "unit": "ns",
            "range": "± 3528.7517124152932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128457.13684210526,
            "unit": "ns",
            "range": "± 16234.14627142204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6240.645161290323,
            "unit": "ns",
            "range": "± 488.51869362926686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26283.532608695652,
            "unit": "ns",
            "range": "± 2707.7477013764787"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5202786.551185345,
            "unit": "ns",
            "range": "± 225841.09035809402"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7734534.642857143,
            "unit": "ns",
            "range": "± 128095.68518921082"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30731636.6,
            "unit": "ns",
            "range": "± 288796.2899135454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8320104.235294118,
            "unit": "ns",
            "range": "± 164398.86566424713"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34925621.34615385,
            "unit": "ns",
            "range": "± 936571.3222581585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6975802.296875,
            "unit": "ns",
            "range": "± 49639.89296468726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2126400.7477678573,
            "unit": "ns",
            "range": "± 3979.6919557444025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450518.8515625,
            "unit": "ns",
            "range": "± 3515.776202484243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854176.5084635415,
            "unit": "ns",
            "range": "± 8547.613496518612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933614.1736188616,
            "unit": "ns",
            "range": "± 2893.312683877904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863510.683733259,
            "unit": "ns",
            "range": "± 6241.595085679331"
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
          "id": "ad15d083ca812dd294a422c507a17f847e95adf5",
          "message": "Merge pull request #2732 from dahlia/upgrade-net6-csharp10",
          "timestamp": "2023-01-19T18:14:56+09:00",
          "tree_id": "38ee257c8d8ffcfa24d4a0aecabb2ebef9c6b073",
          "url": "https://github.com/planetarium/libplanet/commit/ad15d083ca812dd294a422c507a17f847e95adf5"
        },
        "date": 1674121007725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141773.9659090909,
            "unit": "ns",
            "range": "± 9055.83572937612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132477.28421052633,
            "unit": "ns",
            "range": "± 18944.96748797666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277436.4183673469,
            "unit": "ns",
            "range": "± 38608.135863294774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242830.22619047618,
            "unit": "ns",
            "range": "± 17413.155212143414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3994503.387755102,
            "unit": "ns",
            "range": "± 237509.43653534655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11047275.524390243,
            "unit": "ns",
            "range": "± 570733.918383807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30526.43956043956,
            "unit": "ns",
            "range": "± 4368.721916352377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74693.73404255319,
            "unit": "ns",
            "range": "± 10180.439380873786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63054.54022988506,
            "unit": "ns",
            "range": "± 7230.9992117346355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130765.03333333334,
            "unit": "ns",
            "range": "± 18015.30092068743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8247.177777777777,
            "unit": "ns",
            "range": "± 1291.4672243752284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33184.0376344086,
            "unit": "ns",
            "range": "± 5497.2980073596555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5614157.655263158,
            "unit": "ns",
            "range": "± 327991.6144271284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7189520.571428572,
            "unit": "ns",
            "range": "± 838302.8573692358"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29067821.289473683,
            "unit": "ns",
            "range": "± 967114.5202924777"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7588341.716494845,
            "unit": "ns",
            "range": "± 542389.499331819"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33746411.97058824,
            "unit": "ns",
            "range": "± 1607752.3423655024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8250092.398995535,
            "unit": "ns",
            "range": "± 824179.8586893643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892217.442608173,
            "unit": "ns",
            "range": "± 26055.99789442708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405300.771091505,
            "unit": "ns",
            "range": "± 74044.76208193919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2841839.602416992,
            "unit": "ns",
            "range": "± 180680.1200659252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838899.0428677263,
            "unit": "ns",
            "range": "± 36761.418573619216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798750.5256640625,
            "unit": "ns",
            "range": "± 21259.343687476"
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
          "id": "4af0f1d21e7500a4c2702b850b917c5d28a771bd",
          "message": "Merge pull request #2733 from limebell/refactor/remove-validator-from-interface\n\nRemove Validator related methods from interfaces",
          "timestamp": "2023-01-20T13:55:48+09:00",
          "tree_id": "6deae8f6d719122481ddf5798149d819c6ace54f",
          "url": "https://github.com/planetarium/libplanet/commit/4af0f1d21e7500a4c2702b850b917c5d28a771bd"
        },
        "date": 1674192052796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 162782.97894736842,
            "unit": "ns",
            "range": "± 20420.362661656985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121323.09090909091,
            "unit": "ns",
            "range": "± 14373.364396813802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275258.9680851064,
            "unit": "ns",
            "range": "± 32730.82862965612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254742.36458333334,
            "unit": "ns",
            "range": "± 23871.43271365424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155229.8434343436,
            "unit": "ns",
            "range": "± 302089.6091103298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11139881.472527472,
            "unit": "ns",
            "range": "± 728679.797861163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32784.88947368421,
            "unit": "ns",
            "range": "± 6158.2153989518765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78797.7947368421,
            "unit": "ns",
            "range": "± 17417.135723967345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71169.2,
            "unit": "ns",
            "range": "± 12255.128374996339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149124.13043478262,
            "unit": "ns",
            "range": "± 27915.149366976388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8858.619565217392,
            "unit": "ns",
            "range": "± 1426.3770585015695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32912.63829787234,
            "unit": "ns",
            "range": "± 6053.328640608048"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5936399.023876404,
            "unit": "ns",
            "range": "± 700571.1871380184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7640206.957446809,
            "unit": "ns",
            "range": "± 1398876.2917432121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27298133.185714286,
            "unit": "ns",
            "range": "± 876226.2633983563"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7167214.141304348,
            "unit": "ns",
            "range": "± 789394.8520117484"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31004271.3,
            "unit": "ns",
            "range": "± 925833.3801572077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7842232.621582031,
            "unit": "ns",
            "range": "± 764052.3529218761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187972.997912177,
            "unit": "ns",
            "range": "± 93122.91662611181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1406955.5552201704,
            "unit": "ns",
            "range": "± 57220.38405535658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3023298.685078125,
            "unit": "ns",
            "range": "± 416167.422542261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924125.4675671215,
            "unit": "ns",
            "range": "± 45288.38827146164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888552.4780373087,
            "unit": "ns",
            "range": "± 52100.76193851082"
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
          "id": "a993bb7b036cdd3d63bb3aed4daf543073c403fc",
          "message": "Merge pull request #2748 from greymistcube/chore/changelog-fix\n\n🧹 Fixed typos",
          "timestamp": "2023-01-21T14:05:00+09:00",
          "tree_id": "43fea792d9a4293b7eb52bd492f241a118097909",
          "url": "https://github.com/planetarium/libplanet/commit/a993bb7b036cdd3d63bb3aed4daf543073c403fc"
        },
        "date": 1674278937561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 163587.42222222223,
            "unit": "ns",
            "range": "± 14873.062514536083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 150001.79545454544,
            "unit": "ns",
            "range": "± 22465.436001539998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305695.106741573,
            "unit": "ns",
            "range": "± 58527.54281137021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275609.6373626374,
            "unit": "ns",
            "range": "± 32498.803743630826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4334015.7727272725,
            "unit": "ns",
            "range": "± 566174.9942947908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13094827.565934066,
            "unit": "ns",
            "range": "± 2473011.207636273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34443.70224719101,
            "unit": "ns",
            "range": "± 4593.665691074888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81033.63043478261,
            "unit": "ns",
            "range": "± 15647.754671087356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88335.92783505155,
            "unit": "ns",
            "range": "± 22665.4859290726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 164312.45555555556,
            "unit": "ns",
            "range": "± 36479.84029382765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10852.440476190477,
            "unit": "ns",
            "range": "± 1450.9725558603825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 37560.833333333336,
            "unit": "ns",
            "range": "± 8583.361614585603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 9200768.053559924,
            "unit": "ns",
            "range": "± 1218732.5453850222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 9759077.551546391,
            "unit": "ns",
            "range": "± 2499698.6110723945"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 44092668.78571428,
            "unit": "ns",
            "range": "± 8845256.0067562"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 10561746.442105263,
            "unit": "ns",
            "range": "± 2153762.081838234"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 49596606.53684211,
            "unit": "ns",
            "range": "± 11571756.878649766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8222125.083482143,
            "unit": "ns",
            "range": "± 399574.8865695282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2420242.2961288625,
            "unit": "ns",
            "range": "± 133096.9069804799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1589939.7214192708,
            "unit": "ns",
            "range": "± 90275.81983228419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3568755.6225198414,
            "unit": "ns",
            "range": "± 162899.33671918814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985384.4698486328,
            "unit": "ns",
            "range": "± 18481.735495903147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925123.3918167372,
            "unit": "ns",
            "range": "± 40450.5479454968"
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
          "id": "e03a39d36d0512496e5f493b5000413b8dfd9c80",
          "message": "Merge pull request #2743 from greymistcube/refactor/extract-transport\n\nRefactor/extract transport",
          "timestamp": "2023-01-27T15:53:12+09:00",
          "tree_id": "fe89e2f6fc98e385eb6ba15ce51148c86df39924",
          "url": "https://github.com/planetarium/libplanet/commit/e03a39d36d0512496e5f493b5000413b8dfd9c80"
        },
        "date": 1674803539687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 151034.95555555556,
            "unit": "ns",
            "range": "± 20046.538703256196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 153817.85789473684,
            "unit": "ns",
            "range": "± 30947.397607194423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324411.1443298969,
            "unit": "ns",
            "range": "± 75089.3638345879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260474.70652173914,
            "unit": "ns",
            "range": "± 28034.356797023433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4194442.073684211,
            "unit": "ns",
            "range": "± 358731.19879046414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11630909.469387755,
            "unit": "ns",
            "range": "± 775996.3255972293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32146.505263157895,
            "unit": "ns",
            "range": "± 6043.203872108372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84686.72631578948,
            "unit": "ns",
            "range": "± 22910.028130150782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65853.57058823529,
            "unit": "ns",
            "range": "± 6369.662446741913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152645.7525773196,
            "unit": "ns",
            "range": "± 32906.47828570099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9446.978260869566,
            "unit": "ns",
            "range": "± 841.4983755217436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34693.37777777778,
            "unit": "ns",
            "range": "± 6518.431409555036"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5675689.8176546395,
            "unit": "ns",
            "range": "± 507291.3307133041"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7266234.835051547,
            "unit": "ns",
            "range": "± 652110.2270077327"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33667058.192307696,
            "unit": "ns",
            "range": "± 1735204.9250192535"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8242116.93298969,
            "unit": "ns",
            "range": "± 850056.4831109252"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37532271.67058823,
            "unit": "ns",
            "range": "± 2013539.5555616228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8382461.143080357,
            "unit": "ns",
            "range": "± 405369.3612044464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2304757.3425130206,
            "unit": "ns",
            "range": "± 102938.09871359404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1546821.2003102023,
            "unit": "ns",
            "range": "± 49307.58823184862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3370123.025647096,
            "unit": "ns",
            "range": "± 228342.11225996236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842576.9116536458,
            "unit": "ns",
            "range": "± 9136.015582031849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822185.69375,
            "unit": "ns",
            "range": "± 18394.735781617823"
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
          "id": "a58bb1ed94765944c567ad992ea6feebf2d66f36",
          "message": "Merge pull request #2754 from riemannulus/fix/swarm-test-stopping\n\nfix: Adjustment effective changes from hang in the CI research",
          "timestamp": "2023-01-27T17:56:35+09:00",
          "tree_id": "6930c9bac76d7cd195ab2af78b91d2b35bc37ea3",
          "url": "https://github.com/planetarium/libplanet/commit/a58bb1ed94765944c567ad992ea6feebf2d66f36"
        },
        "date": 1674811397720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 172613.46666666667,
            "unit": "ns",
            "range": "± 24018.734000751923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164304.86170212767,
            "unit": "ns",
            "range": "± 29033.312099272902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280720.93298969074,
            "unit": "ns",
            "range": "± 32776.797209785465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260086.09782608695,
            "unit": "ns",
            "range": "± 24992.458420319996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3936652.784090909,
            "unit": "ns",
            "range": "± 214714.1078049637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11214137.287234042,
            "unit": "ns",
            "range": "± 638023.3604439965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31080.434782608696,
            "unit": "ns",
            "range": "± 5565.417355092006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79586.74468085106,
            "unit": "ns",
            "range": "± 12735.813291351898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63222.4793814433,
            "unit": "ns",
            "range": "± 10424.112318301757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 158900.2,
            "unit": "ns",
            "range": "± 32177.69163940213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8235.765957446809,
            "unit": "ns",
            "range": "± 1824.0136540679985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30431.220930232557,
            "unit": "ns",
            "range": "± 3992.714897236665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5955794.272321428,
            "unit": "ns",
            "range": "± 636119.9011077203"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6540392.722222222,
            "unit": "ns",
            "range": "± 136194.17624223384"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29239207.01162791,
            "unit": "ns",
            "range": "± 1574402.0419884122"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7426850.261363637,
            "unit": "ns",
            "range": "± 496228.2810054351"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37469325.92222222,
            "unit": "ns",
            "range": "± 3574024.9038301716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7225788.7590880105,
            "unit": "ns",
            "range": "± 285331.4213175605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2328145.291232639,
            "unit": "ns",
            "range": "± 128834.69338569578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423575.8805752841,
            "unit": "ns",
            "range": "± 59163.38555919144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2780934.668010306,
            "unit": "ns",
            "range": "± 160638.38642806842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913839.3315637467,
            "unit": "ns",
            "range": "± 67676.17961570618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837934.6258463542,
            "unit": "ns",
            "range": "± 42283.883431948096"
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
          "id": "34f3e59036e469e0d4230769953ce803cc7dd9fb",
          "message": "Merge pull request #2756 from dahlia/block-json-serialization\n\nSerialize/deserialize `Block<T>` better with `System.Text.Json.JsonSerializer`",
          "timestamp": "2023-01-30T17:16:43+09:00",
          "tree_id": "40be0ff242cc5a62410886ca50defee62a04b603",
          "url": "https://github.com/planetarium/libplanet/commit/34f3e59036e469e0d4230769953ce803cc7dd9fb"
        },
        "date": 1675067764312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137804.09677419355,
            "unit": "ns",
            "range": "± 13933.686590468527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119342.34042553192,
            "unit": "ns",
            "range": "± 15508.04065763236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257434.33333333334,
            "unit": "ns",
            "range": "± 34020.80872193081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235238.20212765958,
            "unit": "ns",
            "range": "± 25839.99455190686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3805985.93373494,
            "unit": "ns",
            "range": "± 201752.7686077867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11159942.086021505,
            "unit": "ns",
            "range": "± 1376148.4047981815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26191.068965517243,
            "unit": "ns",
            "range": "± 4373.445456156867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67444.64583333333,
            "unit": "ns",
            "range": "± 14359.280800769617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58364.92105263158,
            "unit": "ns",
            "range": "± 11204.260955793092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125474.27083333333,
            "unit": "ns",
            "range": "± 21074.10543246163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7350.914893617021,
            "unit": "ns",
            "range": "± 1550.5550838160632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29131.145161290322,
            "unit": "ns",
            "range": "± 5545.48870047255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4899647.869035618,
            "unit": "ns",
            "range": "± 297370.8307058961"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6247496.67,
            "unit": "ns",
            "range": "± 545375.5093346802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27785981.903846152,
            "unit": "ns",
            "range": "± 1144069.1439543683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6804343.714285715,
            "unit": "ns",
            "range": "± 363981.3560619065"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31891797.62658228,
            "unit": "ns",
            "range": "± 1655620.0388253909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7192862.998139881,
            "unit": "ns",
            "range": "± 170599.2284689448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2108272.494668497,
            "unit": "ns",
            "range": "± 61762.02208569299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412688.3880709135,
            "unit": "ns",
            "range": "± 48421.82989383134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2773526.284610215,
            "unit": "ns",
            "range": "± 157076.6378554105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828533.9408398437,
            "unit": "ns",
            "range": "± 21330.23165615577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757875.4305943081,
            "unit": "ns",
            "range": "± 11160.635181470487"
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
          "id": "07f322e1d13d88e551c1bd3b242183559d13c448",
          "message": "Merge pull request #2758 from dahlia/planet-block",
          "timestamp": "2023-01-31T15:06:11+09:00",
          "tree_id": "982d38bd25720519ccd262c351c4d1c879bbd1af",
          "url": "https://github.com/planetarium/libplanet/commit/07f322e1d13d88e551c1bd3b242183559d13c448"
        },
        "date": 1675146468807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140866.47674418605,
            "unit": "ns",
            "range": "± 8949.50208930707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126935.54081632652,
            "unit": "ns",
            "range": "± 22581.37414489014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266724.0612244898,
            "unit": "ns",
            "range": "± 30239.433078747497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237455.22289156626,
            "unit": "ns",
            "range": "± 12992.066406843656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4100845.3777777776,
            "unit": "ns",
            "range": "± 454270.4781712913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10603705.516129032,
            "unit": "ns",
            "range": "± 321279.3629453834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29278.82222222222,
            "unit": "ns",
            "range": "± 4345.010550866485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77471.6875,
            "unit": "ns",
            "range": "± 17141.728237081214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64178.43258426966,
            "unit": "ns",
            "range": "± 10167.76999305979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134307.96739130435,
            "unit": "ns",
            "range": "± 20366.866904470593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7875.5,
            "unit": "ns",
            "range": "± 1561.7921918473864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31006.238636363636,
            "unit": "ns",
            "range": "± 6069.289587078821"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5385243.110855263,
            "unit": "ns",
            "range": "± 501037.00521789823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6241176.954022989,
            "unit": "ns",
            "range": "± 537088.7908758534"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28285345.2,
            "unit": "ns",
            "range": "± 410066.17280580464"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7063935.15,
            "unit": "ns",
            "range": "± 368295.3149444105"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32005991.55172414,
            "unit": "ns",
            "range": "± 1291429.3236784493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8441138.740093429,
            "unit": "ns",
            "range": "± 702958.4908677185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275524.3335069446,
            "unit": "ns",
            "range": "± 85030.3611763991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401288.7323774858,
            "unit": "ns",
            "range": "± 76805.9900325658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2771294.4396972656,
            "unit": "ns",
            "range": "± 216919.09181316785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973971.7979043496,
            "unit": "ns",
            "range": "± 31587.753799650614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750419.8288845486,
            "unit": "ns",
            "range": "± 14316.676982391446"
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
          "id": "c4a221fa87b0349581f1c553c409f03226a7d463",
          "message": "Merge pull request #2747 from greymistcube/bump/bencodex\n\n⬆️ Bump dependencies",
          "timestamp": "2023-02-01T00:16:32-05:00",
          "tree_id": "1a4a36fa3a502a8f1e77f01d995fe25a562bbc14",
          "url": "https://github.com/planetarium/libplanet/commit/c4a221fa87b0349581f1c553c409f03226a7d463"
        },
        "date": 1675230045473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 162098.8908045977,
            "unit": "ns",
            "range": "± 14854.65728969649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 149930.88461538462,
            "unit": "ns",
            "range": "± 21371.12618816396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301854.902173913,
            "unit": "ns",
            "range": "± 48441.778413797154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268707.9175824176,
            "unit": "ns",
            "range": "± 27018.775941130658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4172084.826530612,
            "unit": "ns",
            "range": "± 303268.913148859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12408185.010416666,
            "unit": "ns",
            "range": "± 1188313.3312121492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33931.23529411765,
            "unit": "ns",
            "range": "± 4481.489693455628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89671.58695652174,
            "unit": "ns",
            "range": "± 20152.48955533955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76490.81609195402,
            "unit": "ns",
            "range": "± 10230.058338882887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 170013.1443298969,
            "unit": "ns",
            "range": "± 41908.58631965871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11208.186046511628,
            "unit": "ns",
            "range": "± 1290.241767236147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 35128.99462365591,
            "unit": "ns",
            "range": "± 6334.560932630604"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7997880.8051075265,
            "unit": "ns",
            "range": "± 957985.1458307712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7367265.962365591,
            "unit": "ns",
            "range": "± 722200.7854045186"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30540977.882978722,
            "unit": "ns",
            "range": "± 2211814.0724749095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8220658.542105263,
            "unit": "ns",
            "range": "± 697194.271134544"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34982834.74226804,
            "unit": "ns",
            "range": "± 2174361.930555731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7197921.749837239,
            "unit": "ns",
            "range": "± 281533.5432311834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135630.0748197115,
            "unit": "ns",
            "range": "± 57830.88349205214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493105.2940747365,
            "unit": "ns",
            "range": "± 79318.84190861479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108655.53973327,
            "unit": "ns",
            "range": "± 375362.0558437915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906311.1669808321,
            "unit": "ns",
            "range": "± 49223.903073473426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749195.5327845982,
            "unit": "ns",
            "range": "± 7625.156925799869"
          }
        ]
      }
    ]
  }
}