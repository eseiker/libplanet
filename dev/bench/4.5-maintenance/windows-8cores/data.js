window.BENCHMARK_DATA = {
  "lastUpdate": 1716774840300,
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
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715675837601,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009850.5376344086,
            "unit": "ns",
            "range": "± 96786.14325863865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833042.0634920634,
            "unit": "ns",
            "range": "± 84009.06307019135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567334.831460674,
            "unit": "ns",
            "range": "± 86598.64068469654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6945920,
            "unit": "ns",
            "range": "± 136420.18118054722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36280.21978021978,
            "unit": "ns",
            "range": "± 3824.982782247952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5317496.666666667,
            "unit": "ns",
            "range": "± 99169.31312995299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14207042.857142856,
            "unit": "ns",
            "range": "± 77142.67216095037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34586700,
            "unit": "ns",
            "range": "± 110866.10080494537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68261671.42857143,
            "unit": "ns",
            "range": "± 298268.09166502295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142590514.2857143,
            "unit": "ns",
            "range": "± 993523.1349999958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369876.7020089286,
            "unit": "ns",
            "range": "± 8928.51970832349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087051.5494791667,
            "unit": "ns",
            "range": "± 1758.6604918666892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759670.3752790178,
            "unit": "ns",
            "range": "± 1743.2142743047448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932128.8411458333,
            "unit": "ns",
            "range": "± 7925.345434769179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624565.5533854166,
            "unit": "ns",
            "range": "± 2702.050686576803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565016.9661458334,
            "unit": "ns",
            "range": "± 1850.7397989489918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2243953.846153846,
            "unit": "ns",
            "range": "± 59380.665073872195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2431576.470588235,
            "unit": "ns",
            "range": "± 50016.22802604825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2980068.4210526315,
            "unit": "ns",
            "range": "± 59590.71565112191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963630.434782609,
            "unit": "ns",
            "range": "± 109911.03648873932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884472,
            "unit": "ns",
            "range": "± 147790.76854346035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191458.82352941178,
            "unit": "ns",
            "range": "± 5713.904765122021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183062.5,
            "unit": "ns",
            "range": "± 9518.620990963987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144570.83333333334,
            "unit": "ns",
            "range": "± 3026.187035035094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2768285.714285714,
            "unit": "ns",
            "range": "± 25048.68665812049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2547061.5384615385,
            "unit": "ns",
            "range": "± 28172.313195214036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12142.696629213484,
            "unit": "ns",
            "range": "± 1085.1149541585485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59977.65957446808,
            "unit": "ns",
            "range": "± 5882.805348180812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48402,
            "unit": "ns",
            "range": "± 1936.7013824794878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57979.72972972973,
            "unit": "ns",
            "range": "± 2734.2064401687376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2924.226804123711,
            "unit": "ns",
            "range": "± 555.5174671937763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11742.391304347826,
            "unit": "ns",
            "range": "± 1759.4475716218974"
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
          "id": "f8cbd4da619c690f41d329f5b5a901a62aafedc5",
          "message": "Merge pull request #3800 from greymistcube/chore/suppress-warning\n\n🔧 Suppressed security warnings during build",
          "timestamp": "2024-05-27T09:43:58+09:00",
          "tree_id": "a1871d2e438b7b74090577e0a07fbd863744452d",
          "url": "https://github.com/planetarium/libplanet/commit/f8cbd4da619c690f41d329f5b5a901a62aafedc5"
        },
        "date": 1716771436783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961227.8350515463,
            "unit": "ns",
            "range": "± 99950.16752348396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767045.9770114943,
            "unit": "ns",
            "range": "± 123672.8493869525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520389.6907216494,
            "unit": "ns",
            "range": "± 129117.92049367774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993167.741935484,
            "unit": "ns",
            "range": "± 181792.83335177027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35428.57142857143,
            "unit": "ns",
            "range": "± 3930.09148082065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5092278.571428572,
            "unit": "ns",
            "range": "± 28453.28637423989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13611660,
            "unit": "ns",
            "range": "± 212454.89538118104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32369007.692307692,
            "unit": "ns",
            "range": "± 121648.85573881945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68360086.66666667,
            "unit": "ns",
            "range": "± 623180.3635576217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132887379.16666667,
            "unit": "ns",
            "range": "± 2919074.3269174974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350491.9010416665,
            "unit": "ns",
            "range": "± 4532.379129894358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058410.2734375,
            "unit": "ns",
            "range": "± 5006.308136982237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737482.2893415178,
            "unit": "ns",
            "range": "± 2015.0190957376155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951879.8307291667,
            "unit": "ns",
            "range": "± 29448.39797282616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612969.5638020834,
            "unit": "ns",
            "range": "± 464.93873754459236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567812.6888020834,
            "unit": "ns",
            "range": "± 2183.4540695384003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160032.6086956523,
            "unit": "ns",
            "range": "± 81832.72926959081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316840,
            "unit": "ns",
            "range": "± 43172.789049188315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774740,
            "unit": "ns",
            "range": "± 42164.79235435311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2769294.827586207,
            "unit": "ns",
            "range": "± 66788.12380617305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8091151.3513513515,
            "unit": "ns",
            "range": "± 218431.370637733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169477.19298245615,
            "unit": "ns",
            "range": "± 7097.510065002164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164736.4705882353,
            "unit": "ns",
            "range": "± 8180.3022277795535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145455.55555555556,
            "unit": "ns",
            "range": "± 3042.149437916287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2670110,
            "unit": "ns",
            "range": "± 39455.37805094328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2463414.285714286,
            "unit": "ns",
            "range": "± 43248.01208669075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9853.191489361701,
            "unit": "ns",
            "range": "± 1188.8100246740435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49789.01098901099,
            "unit": "ns",
            "range": "± 2994.1962582989167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44080.61224489796,
            "unit": "ns",
            "range": "± 1713.9384568920805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50873.958333333336,
            "unit": "ns",
            "range": "± 8414.726999876832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2337.1134020618556,
            "unit": "ns",
            "range": "± 356.28862002036186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9444.21052631579,
            "unit": "ns",
            "range": "± 1432.7265918946505"
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
          "id": "56ecf057e4cadda0384943b8383850ec44919a76",
          "message": "Merge pull request #3802 from greymistcube/release/4.5.1\n\n🚀 Release 4.5.1",
          "timestamp": "2024-05-27T10:40:45+09:00",
          "tree_id": "4083e2db9d478b47f3241ff24140f6708124e097",
          "url": "https://github.com/planetarium/libplanet/commit/56ecf057e4cadda0384943b8383850ec44919a76"
        },
        "date": 1716774678596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942552.5252525252,
            "unit": "ns",
            "range": "± 72905.32488521846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719698.2758620689,
            "unit": "ns",
            "range": "± 74505.4089438309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513932.9896907217,
            "unit": "ns",
            "range": "± 129316.59287195247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6934462.5,
            "unit": "ns",
            "range": "± 179122.12936502532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36232.989690721646,
            "unit": "ns",
            "range": "± 5434.9892986993045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5234521.428571428,
            "unit": "ns",
            "range": "± 23092.09583623561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13171003.333333334,
            "unit": "ns",
            "range": "± 98387.49097803226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32416553.333333332,
            "unit": "ns",
            "range": "± 260743.79013744142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66206714.28571428,
            "unit": "ns",
            "range": "± 426641.42547819467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130650506.66666667,
            "unit": "ns",
            "range": "± 779939.9743081576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3422655.6119791665,
            "unit": "ns",
            "range": "± 6622.539569455575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059057.2005208333,
            "unit": "ns",
            "range": "± 3826.4029001283784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744459.6609933035,
            "unit": "ns",
            "range": "± 1008.4004675213324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960430.5943080357,
            "unit": "ns",
            "range": "± 4300.589441975218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618276.0221354166,
            "unit": "ns",
            "range": "± 840.3512800732174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569468.9662388393,
            "unit": "ns",
            "range": "± 842.7492325895698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133788,
            "unit": "ns",
            "range": "± 36613.0022441937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255314.814814815,
            "unit": "ns",
            "range": "± 88312.65087563639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810752.380952381,
            "unit": "ns",
            "range": "± 65177.270724138325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2828601.4492753623,
            "unit": "ns",
            "range": "± 135409.82618436698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8004416.129032258,
            "unit": "ns",
            "range": "± 220989.0496484297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173098.4375,
            "unit": "ns",
            "range": "± 7529.318192271873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168472.46376811594,
            "unit": "ns",
            "range": "± 7326.560947072504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144277.5,
            "unit": "ns",
            "range": "± 5096.881273675964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2689386.6666666665,
            "unit": "ns",
            "range": "± 46196.55006702598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2428157.8947368423,
            "unit": "ns",
            "range": "± 53776.43345668842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9953.191489361701,
            "unit": "ns",
            "range": "± 1400.053925817005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52353.846153846156,
            "unit": "ns",
            "range": "± 4226.196285400743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43416.666666666664,
            "unit": "ns",
            "range": "± 2152.823236432556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51402.1978021978,
            "unit": "ns",
            "range": "± 8747.367578902786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2325.773195876289,
            "unit": "ns",
            "range": "± 465.08922766574767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9421.978021978022,
            "unit": "ns",
            "range": "± 956.823703464541"
          }
        ]
      }
    ]
  }
}