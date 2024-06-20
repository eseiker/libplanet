window.BENCHMARK_DATA = {
  "lastUpdate": 1718873857283,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "752aea228a9adc1132cdd55dd98fc88e72cb910f",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-05-20T17:57:03+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/752aea228a9adc1132cdd55dd98fc88e72cb910f"
        },
        "date": 1716195944971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003049.1781609196,
            "unit": "ns",
            "range": "± 54654.49328248303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911721.121212121,
            "unit": "ns",
            "range": "± 59993.325102025716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1673184.4436619717,
            "unit": "ns",
            "range": "± 81833.48584462533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8479486.846153846,
            "unit": "ns",
            "range": "± 347457.43744544074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10831235.333333334,
            "unit": "ns",
            "range": "± 36510.36047610648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28299736.8,
            "unit": "ns",
            "range": "± 180059.5690059265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70399881.8,
            "unit": "ns",
            "range": "± 374823.48120057036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142433440.3,
            "unit": "ns",
            "range": "± 638836.8112301786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292667848.5714286,
            "unit": "ns",
            "range": "± 1142299.2756351426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717421.1618303573,
            "unit": "ns",
            "range": "± 6806.293790848557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1175613.6626302083,
            "unit": "ns",
            "range": "± 1766.198603886239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770819.9105747768,
            "unit": "ns",
            "range": "± 1811.208508789613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908244.7075520833,
            "unit": "ns",
            "range": "± 2919.0797616195973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618973.3227864583,
            "unit": "ns",
            "range": "± 646.139943911036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580334.0227864584,
            "unit": "ns",
            "range": "± 868.4751829437105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411922.214285714,
            "unit": "ns",
            "range": "± 42094.20042125038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2521636.8,
            "unit": "ns",
            "range": "± 43834.246341351485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3046223.8,
            "unit": "ns",
            "range": "± 45491.28085091849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572107.277777778,
            "unit": "ns",
            "range": "± 53045.01652237915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282365,
            "unit": "ns",
            "range": "± 68380.01300625275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203647.5172413793,
            "unit": "ns",
            "range": "± 4739.686115441234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191187.3111111111,
            "unit": "ns",
            "range": "± 7245.124880730058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164605.32432432432,
            "unit": "ns",
            "range": "± 5584.382349483712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3262659.066666667,
            "unit": "ns",
            "range": "± 31997.41159278505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2813541.2,
            "unit": "ns",
            "range": "± 31700.898870086137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12681.365168539325,
            "unit": "ns",
            "range": "± 711.86525459865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60885.005494505494,
            "unit": "ns",
            "range": "± 3563.25028395152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51802.45,
            "unit": "ns",
            "range": "± 1186.5428985080987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50164.62886597938,
            "unit": "ns",
            "range": "± 6978.859607652581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2562.0434782608695,
            "unit": "ns",
            "range": "± 178.29380081076565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12507.988095238095,
            "unit": "ns",
            "range": "± 813.2139346266928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38534.153846153844,
            "unit": "ns",
            "range": "± 502.3678675621823"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "ce8f7ecd0fec57e750b97aba0c14170f74f33792",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-06-04T19:38:01+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/ce8f7ecd0fec57e750b97aba0c14170f74f33792"
        },
        "date": 1717550435115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994405.5454545454,
            "unit": "ns",
            "range": "± 58548.20640320584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1993720.053846154,
            "unit": "ns",
            "range": "± 92266.17975168208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650611.8205128205,
            "unit": "ns",
            "range": "± 79569.04346079615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8119897.411764706,
            "unit": "ns",
            "range": "± 158640.2507822569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11282012.038461538,
            "unit": "ns",
            "range": "± 154346.97931155816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28723945.033333335,
            "unit": "ns",
            "range": "± 443080.02689305734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72824891.93333334,
            "unit": "ns",
            "range": "± 849143.8969614772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146240518.57142857,
            "unit": "ns",
            "range": "± 381830.54458504217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298160584.5,
            "unit": "ns",
            "range": "± 1582481.0674628713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3669266.4510216345,
            "unit": "ns",
            "range": "± 7225.427699421087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199746.9063895089,
            "unit": "ns",
            "range": "± 1377.2106347929591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769175.717578125,
            "unit": "ns",
            "range": "± 936.1533681649485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940391.2543247768,
            "unit": "ns",
            "range": "± 868.2080214515927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618200.3835797991,
            "unit": "ns",
            "range": "± 762.7056656195963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575815.0711495535,
            "unit": "ns",
            "range": "± 762.7814643256487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470493.0689655175,
            "unit": "ns",
            "range": "± 71597.95825846423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2490692.304347826,
            "unit": "ns",
            "range": "± 53393.99156053795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3029693.8571428573,
            "unit": "ns",
            "range": "± 44269.165561556314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2621374.5,
            "unit": "ns",
            "range": "± 42836.34234502288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3208287.3333333335,
            "unit": "ns",
            "range": "± 46062.31184209163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207367.8918918919,
            "unit": "ns",
            "range": "± 6911.083532927315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196325.47222222222,
            "unit": "ns",
            "range": "± 9439.176714177514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174288.65384615384,
            "unit": "ns",
            "range": "± 2711.674385754856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3226954.8571428573,
            "unit": "ns",
            "range": "± 18531.323049853243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857006.533333333,
            "unit": "ns",
            "range": "± 41900.849428598645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13006.189473684211,
            "unit": "ns",
            "range": "± 842.4288756484525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60825.77368421053,
            "unit": "ns",
            "range": "± 4301.389145831215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50753.307692307695,
            "unit": "ns",
            "range": "± 652.2890954956737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49824.029411764706,
            "unit": "ns",
            "range": "± 3403.063677770074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2674.7473684210527,
            "unit": "ns",
            "range": "± 230.6043387064414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15940.119565217392,
            "unit": "ns",
            "range": "± 1049.1923931552087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37993.5,
            "unit": "ns",
            "range": "± 566.1681407818385"
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
          "id": "c9ace8f6a908e54124b70bf48a5433b02d14eb8c",
          "message": "Merge pull request #3813 from limebell/feature/nullable-votepower\n\nMake `IVoteMetadata.ValidatorPower` nullable",
          "timestamp": "2024-06-10T20:41:38+09:00",
          "tree_id": "cec81941df4622fa80bf1becb8764cfbc351c656",
          "url": "https://github.com/planetarium/libplanet/commit/c9ace8f6a908e54124b70bf48a5433b02d14eb8c"
        },
        "date": 1718020218672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997496.472972973,
            "unit": "ns",
            "range": "± 45249.70057933872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918268.2727272727,
            "unit": "ns",
            "range": "± 71335.06431520284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716091.56185567,
            "unit": "ns",
            "range": "± 111545.1599616547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8263272.2727272725,
            "unit": "ns",
            "range": "± 199915.97365826374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10932687.866666667,
            "unit": "ns",
            "range": "± 94434.08808480931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28227410.785714287,
            "unit": "ns",
            "range": "± 117667.80239704721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71611448,
            "unit": "ns",
            "range": "± 306479.20582141145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145329926.3846154,
            "unit": "ns",
            "range": "± 920268.347092171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296849583.14285713,
            "unit": "ns",
            "range": "± 830513.7048989951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733419.809988839,
            "unit": "ns",
            "range": "± 7932.358092649616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226174.5767299107,
            "unit": "ns",
            "range": "± 2286.7925408906303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777687.638532366,
            "unit": "ns",
            "range": "± 1333.1583206658015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929260.828125,
            "unit": "ns",
            "range": "± 1739.4594252704926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607882.4024135044,
            "unit": "ns",
            "range": "± 627.4509192773795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576137.0278320312,
            "unit": "ns",
            "range": "± 516.1373357261456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464887.962962963,
            "unit": "ns",
            "range": "± 66520.90486657413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2487067.285714286,
            "unit": "ns",
            "range": "± 57298.53717953265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057154.7666666666,
            "unit": "ns",
            "range": "± 53471.273777163566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2547129.46875,
            "unit": "ns",
            "range": "± 78901.3435864113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3305620.55,
            "unit": "ns",
            "range": "± 71857.338612497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202236.02040816325,
            "unit": "ns",
            "range": "± 8018.562907637595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192742.6888888889,
            "unit": "ns",
            "range": "± 7188.829070231821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164919.61538461538,
            "unit": "ns",
            "range": "± 2172.551516016039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166970.6666666665,
            "unit": "ns",
            "range": "± 36736.06385452597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2806734,
            "unit": "ns",
            "range": "± 48525.41916651225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16521.32978723404,
            "unit": "ns",
            "range": "± 1467.2080822901667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61250.89473684211,
            "unit": "ns",
            "range": "± 4572.933504859395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51512.5,
            "unit": "ns",
            "range": "± 790.4862914200833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55210.45744680851,
            "unit": "ns",
            "range": "± 7678.086300992036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3396.3736842105263,
            "unit": "ns",
            "range": "± 294.91128280492063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12076.731182795698,
            "unit": "ns",
            "range": "± 940.8716257185574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38768.375,
            "unit": "ns",
            "range": "± 731.7404708410398"
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
          "id": "e1991162a1d98a3374ec4873608e2fb340fbfbdc",
          "message": "Merge pull request #3826 from limebell/chore/vp-followup\n\nFix `ValidatorSet.ValidateBlockCommitValidators()` behavior",
          "timestamp": "2024-06-14T15:19:39+09:00",
          "tree_id": "c80a492b39105394077e23ea54aa7847da02cb35",
          "url": "https://github.com/planetarium/libplanet/commit/e1991162a1d98a3374ec4873608e2fb340fbfbdc"
        },
        "date": 1718346561251,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004887.5172413794,
            "unit": "ns",
            "range": "± 51378.449974098854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1979256.0454545454,
            "unit": "ns",
            "range": "± 92997.93433842111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764425.440860215,
            "unit": "ns",
            "range": "± 99836.54549992141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8319152.1875,
            "unit": "ns",
            "range": "± 154216.0931456112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11165851.1,
            "unit": "ns",
            "range": "± 90435.79498880488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28663360.807692308,
            "unit": "ns",
            "range": "± 162491.35714727754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72157165.26666667,
            "unit": "ns",
            "range": "± 513801.39441692934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142307809.5,
            "unit": "ns",
            "range": "± 459156.8183956662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 306618789.6333333,
            "unit": "ns",
            "range": "± 2139463.9698094563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3688742.5323660714,
            "unit": "ns",
            "range": "± 4508.966074234176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205738.9287760416,
            "unit": "ns",
            "range": "± 1195.428013297062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770143.3696614583,
            "unit": "ns",
            "range": "± 2220.364722252253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958807.3643229166,
            "unit": "ns",
            "range": "± 3442.079261973061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610699.24375,
            "unit": "ns",
            "range": "± 577.3395193043619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574110.4744001116,
            "unit": "ns",
            "range": "± 742.018723534102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2471058.625,
            "unit": "ns",
            "range": "± 43205.35500124184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514325.652173913,
            "unit": "ns",
            "range": "± 62855.13651651614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156213,
            "unit": "ns",
            "range": "± 67155.91630741282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2608113.2195121953,
            "unit": "ns",
            "range": "± 93044.89911825155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3262918.466666667,
            "unit": "ns",
            "range": "± 54474.100308399065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205028.84285714285,
            "unit": "ns",
            "range": "± 9049.617856669962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193782.01785714287,
            "unit": "ns",
            "range": "± 8207.9727438212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166467.7619047619,
            "unit": "ns",
            "range": "± 6048.209188937458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3227553.2,
            "unit": "ns",
            "range": "± 32615.060334146245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814686.214285714,
            "unit": "ns",
            "range": "± 34567.4946115535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17297.59574468085,
            "unit": "ns",
            "range": "± 1884.8481318084216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62638.63440860215,
            "unit": "ns",
            "range": "± 5253.360369252996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51307.8125,
            "unit": "ns",
            "range": "± 938.5533704412694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58022.734042553195,
            "unit": "ns",
            "range": "± 9657.639330007414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2878.8695652173915,
            "unit": "ns",
            "range": "± 184.1293571444984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12475.978494623656,
            "unit": "ns",
            "range": "± 1088.7402670507367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35786.068181818184,
            "unit": "ns",
            "range": "± 2658.1880605805054"
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
          "id": "fe7a64bef1538836ba5bc4836f9a81c108980094",
          "message": "Merge pull request #3841 from limebell/feat/nodestate-self\n\nAdd \"self\" field to NodeState query",
          "timestamp": "2024-06-20T17:48:30+09:00",
          "tree_id": "975d44e2d619fed29ca688f6b17f938ded44e481",
          "url": "https://github.com/planetarium/libplanet/commit/fe7a64bef1538836ba5bc4836f9a81c108980094"
        },
        "date": 1718873832205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000019.4712643678,
            "unit": "ns",
            "range": "± 52995.456036417745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959724.0444444444,
            "unit": "ns",
            "range": "± 73392.37262077763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694359.8674698796,
            "unit": "ns",
            "range": "± 86018.42168393011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8512362.2,
            "unit": "ns",
            "range": "± 266968.04305558634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11019687.766666668,
            "unit": "ns",
            "range": "± 102282.21842282871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27780613.366666667,
            "unit": "ns",
            "range": "± 171325.77115078023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72318228.1,
            "unit": "ns",
            "range": "± 485817.53714946465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147012208.23333332,
            "unit": "ns",
            "range": "± 2035959.322995795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298883959.06666666,
            "unit": "ns",
            "range": "± 3061946.047765106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709166.3329326925,
            "unit": "ns",
            "range": "± 3832.1262559257193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1243099.6674107143,
            "unit": "ns",
            "range": "± 1325.645778110117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770903.1484375,
            "unit": "ns",
            "range": "± 1118.056108887535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940532.6239483173,
            "unit": "ns",
            "range": "± 1538.9228601877498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618538.8043619791,
            "unit": "ns",
            "range": "± 1376.0489751414962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587329.5433872768,
            "unit": "ns",
            "range": "± 944.870023654644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2459016.933333333,
            "unit": "ns",
            "range": "± 40135.033824162485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538517.523809524,
            "unit": "ns",
            "range": "± 47698.98971007567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3046616.3928571427,
            "unit": "ns",
            "range": "± 85948.89560548705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609334.911764706,
            "unit": "ns",
            "range": "± 51580.57247532595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3218838.714285714,
            "unit": "ns",
            "range": "± 46868.55671437954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208004.63157894736,
            "unit": "ns",
            "range": "± 7019.807156129439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191532.3085106383,
            "unit": "ns",
            "range": "± 7393.047961307086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164191.85714285713,
            "unit": "ns",
            "range": "± 2342.330713270368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3301328,
            "unit": "ns",
            "range": "± 50582.52272277451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819952.3333333335,
            "unit": "ns",
            "range": "± 42893.49759856493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12858.827956989247,
            "unit": "ns",
            "range": "± 917.2452213919858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69490.72340425532,
            "unit": "ns",
            "range": "± 2681.0524272165603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53901.25,
            "unit": "ns",
            "range": "± 776.8258404324848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61123.510204081635,
            "unit": "ns",
            "range": "± 14174.415259304133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2793.6666666666665,
            "unit": "ns",
            "range": "± 543.9342194491162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12438.647727272728,
            "unit": "ns",
            "range": "± 910.4466888995253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38134.055555555555,
            "unit": "ns",
            "range": "± 788.2551447358998"
          }
        ]
      }
    ]
  }
}