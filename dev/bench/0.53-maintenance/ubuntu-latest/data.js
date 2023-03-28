window.BENCHMARK_DATA = {
  "lastUpdate": 1679987350081,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d8d5ed9b9406362876512cf8ef4b393304225b72",
          "message": "Version bump",
          "timestamp": "2023-03-27T17:58:08+09:00",
          "tree_id": "3dbd7bd8fcd4b144c04a448633d6660bc6df5655",
          "url": "https://github.com/planetarium/libplanet/commit/d8d5ed9b9406362876512cf8ef4b393304225b72"
        },
        "date": 1679908359647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3706008.8666666667,
            "unit": "ns",
            "range": "± 66586.25179941604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5722571.071428572,
            "unit": "ns",
            "range": "± 90042.51312272466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26183105.533333335,
            "unit": "ns",
            "range": "± 263312.6842942942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7036172.8,
            "unit": "ns",
            "range": "± 94677.56439259666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30501799.6,
            "unit": "ns",
            "range": "± 274367.8283506078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8619736.714285715,
            "unit": "ns",
            "range": "± 85338.55115175861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22265713.35714286,
            "unit": "ns",
            "range": "± 206470.8490165909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55692690.13333333,
            "unit": "ns",
            "range": "± 286653.995060712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111200479.06666666,
            "unit": "ns",
            "range": "± 662025.0451256646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222363383.92857143,
            "unit": "ns",
            "range": "± 706632.7688882584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495064.108695652,
            "unit": "ns",
            "range": "± 84093.301171117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729080.9285714286,
            "unit": "ns",
            "range": "± 76782.95325952218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312470.71875,
            "unit": "ns",
            "range": "± 105928.40272883164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5372373.761904762,
            "unit": "ns",
            "range": "± 127444.6627163746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53292.2,
            "unit": "ns",
            "range": "± 3610.358367902119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6039013.268973215,
            "unit": "ns",
            "range": "± 27469.106272978937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860953.4434895834,
            "unit": "ns",
            "range": "± 4838.616966542389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363282.8569010417,
            "unit": "ns",
            "range": "± 3623.840320578837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676955.3606770835,
            "unit": "ns",
            "range": "± 3707.4924122148104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838186.5526041667,
            "unit": "ns",
            "range": "± 1419.0295833758855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768720.1591796875,
            "unit": "ns",
            "range": "± 474.55081749746756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216112.62,
            "unit": "ns",
            "range": "± 8723.942971793318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209304.1379310345,
            "unit": "ns",
            "range": "± 9107.89463500735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181011.05263157896,
            "unit": "ns",
            "range": "± 9187.079590954152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12528082.933333334,
            "unit": "ns",
            "range": "± 169729.3773029233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10123568.733333332,
            "unit": "ns",
            "range": "± 174884.94199961735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22656.425531914894,
            "unit": "ns",
            "range": "± 2346.97270803142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60365.74193548387,
            "unit": "ns",
            "range": "± 5311.3844791026695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44858.87301587302,
            "unit": "ns",
            "range": "± 2067.527933985052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99385.08860759494,
            "unit": "ns",
            "range": "± 6343.393147224375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6779.381443298969,
            "unit": "ns",
            "range": "± 777.5412829782064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21702.225806451614,
            "unit": "ns",
            "range": "± 1699.2605369307753"
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
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5",
          "message": "Version bump",
          "timestamp": "2023-03-28T15:44:31+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5"
        },
        "date": 1679986698613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3133325.8571428573,
            "unit": "ns",
            "range": "± 31144.435134132324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5034602.4,
            "unit": "ns",
            "range": "± 96184.74607830166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23655247.933333334,
            "unit": "ns",
            "range": "± 331904.79982959543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6140664.823529412,
            "unit": "ns",
            "range": "± 120120.70773405147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26819374.57142857,
            "unit": "ns",
            "range": "± 459831.70969166106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7614649.615384615,
            "unit": "ns",
            "range": "± 16200.308682956536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19269248.2,
            "unit": "ns",
            "range": "± 65183.01196433666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49419565.6,
            "unit": "ns",
            "range": "± 270173.33671335626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98848304.26666667,
            "unit": "ns",
            "range": "± 792879.6361248632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196412460.13333333,
            "unit": "ns",
            "range": "± 1942661.3992571733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340476.5656565656,
            "unit": "ns",
            "range": "± 104087.85794331532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476690.8285714285,
            "unit": "ns",
            "range": "± 81315.7044630537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105135.0512820515,
            "unit": "ns",
            "range": "± 108653.51128850834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5122052.625,
            "unit": "ns",
            "range": "± 169188.97854321598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44760.78571428572,
            "unit": "ns",
            "range": "± 1930.602776471504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5916142.991629465,
            "unit": "ns",
            "range": "± 17831.98806238806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837621.3569010417,
            "unit": "ns",
            "range": "± 5693.157955505388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340564.9868164062,
            "unit": "ns",
            "range": "± 3059.9323630953754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550294.5647321427,
            "unit": "ns",
            "range": "± 3909.2664020414877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834513.5520582933,
            "unit": "ns",
            "range": "± 922.986220710915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737748.186328125,
            "unit": "ns",
            "range": "± 877.7647154451989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195573.3076923077,
            "unit": "ns",
            "range": "± 2347.1887576636364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196538.2,
            "unit": "ns",
            "range": "± 7445.001912814945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164685.90476190476,
            "unit": "ns",
            "range": "± 3861.095905371452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11288849.866666667,
            "unit": "ns",
            "range": "± 68320.62677642683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9018759.8,
            "unit": "ns",
            "range": "± 110068.91787434167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17004.52808988764,
            "unit": "ns",
            "range": "± 1133.6765320476684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49603.5632183908,
            "unit": "ns",
            "range": "± 2536.775341370392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37918.318181818184,
            "unit": "ns",
            "range": "± 887.8175695471095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77511.1975308642,
            "unit": "ns",
            "range": "± 5528.341354827307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.846153846154,
            "unit": "ns",
            "range": "± 87.70580193070293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14962.955056179775,
            "unit": "ns",
            "range": "± 1188.20943315899"
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
        "date": 1679987328571,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3405071.3921568627,
            "unit": "ns",
            "range": "± 137902.7914429695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5211536.538461538,
            "unit": "ns",
            "range": "± 50434.806003419544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24071374.466666665,
            "unit": "ns",
            "range": "± 205179.68151593604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6346555.8,
            "unit": "ns",
            "range": "± 73135.69825546404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27463962.266666666,
            "unit": "ns",
            "range": "± 413981.65126738005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7794854.6,
            "unit": "ns",
            "range": "± 38289.4737750655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19901806.666666668,
            "unit": "ns",
            "range": "± 56908.08211074953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50954238.4,
            "unit": "ns",
            "range": "± 193005.01467015973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101342127.21428572,
            "unit": "ns",
            "range": "± 290261.65528872487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205254538.7857143,
            "unit": "ns",
            "range": "± 370462.75740841054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357747.1609195403,
            "unit": "ns",
            "range": "± 69757.73939172321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2538619.066666667,
            "unit": "ns",
            "range": "± 74810.44424453292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202511.453333333,
            "unit": "ns",
            "range": "± 110451.12922651961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5037462.25,
            "unit": "ns",
            "range": "± 135946.96888605334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47666.030927835054,
            "unit": "ns",
            "range": "± 2958.293210245311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6353379.237980769,
            "unit": "ns",
            "range": "± 11179.315339982608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993255.529575893,
            "unit": "ns",
            "range": "± 907.5580017835043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365528.7657752405,
            "unit": "ns",
            "range": "± 760.9702244464886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573678.6497395835,
            "unit": "ns",
            "range": "± 7088.095689670858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820202.055094401,
            "unit": "ns",
            "range": "± 967.5257003646353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730061.4181780134,
            "unit": "ns",
            "range": "± 592.9287304442942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206623.86842105264,
            "unit": "ns",
            "range": "± 6759.902762658458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202935.5,
            "unit": "ns",
            "range": "± 7994.296786233482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172666.20754716982,
            "unit": "ns",
            "range": "± 7094.929780534208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11358592.733333332,
            "unit": "ns",
            "range": "± 47944.664266611515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9413197.214285715,
            "unit": "ns",
            "range": "± 42225.47605630183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20264.548387096773,
            "unit": "ns",
            "range": "± 1503.021301565393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60055.654320987655,
            "unit": "ns",
            "range": "± 3130.2282630843947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40857.17857142857,
            "unit": "ns",
            "range": "± 1732.8983404809294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96175.59183673469,
            "unit": "ns",
            "range": "± 11684.215197442181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5448.96875,
            "unit": "ns",
            "range": "± 533.3133660256219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21727.378947368423,
            "unit": "ns",
            "range": "± 1924.501561216966"
          }
        ]
      }
    ]
  }
}