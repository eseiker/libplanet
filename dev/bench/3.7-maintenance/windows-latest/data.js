window.BENCHMARK_DATA = {
  "lastUpdate": 1700541875004,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414843248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606959.793814433,
            "unit": "ns",
            "range": "± 130142.5713879092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3128912.9411764704,
            "unit": "ns",
            "range": "± 187870.35726813323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350288.1720430106,
            "unit": "ns",
            "range": "± 147307.58403795952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11395155.681818182,
            "unit": "ns",
            "range": "± 1440640.9082485023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65146.739130434784,
            "unit": "ns",
            "range": "± 7909.660960030323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10352478.260869564,
            "unit": "ns",
            "range": "± 391028.4973491452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27171682.978723403,
            "unit": "ns",
            "range": "± 1047777.5559060709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66796693.75,
            "unit": "ns",
            "range": "± 1294266.8063263977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134114077.77777778,
            "unit": "ns",
            "range": "± 4455835.182006438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266441444.64285713,
            "unit": "ns",
            "range": "± 11334419.811512502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5893418.06344697,
            "unit": "ns",
            "range": "± 277046.3009959459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886954.0690104167,
            "unit": "ns",
            "range": "± 23236.899966277404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397619.9462890625,
            "unit": "ns",
            "range": "± 31624.349289539055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3315316.1328125,
            "unit": "ns",
            "range": "± 61806.26626631712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048723.076923077,
            "unit": "ns",
            "range": "± 13469.837476510775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970796.4657738095,
            "unit": "ns",
            "range": "± 22108.8296154381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3966176.7441860465,
            "unit": "ns",
            "range": "± 144103.9172614668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4166549.438202247,
            "unit": "ns",
            "range": "± 237477.89855230143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5163645.348837209,
            "unit": "ns",
            "range": "± 274552.5560560959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4774473.076923077,
            "unit": "ns",
            "range": "± 119723.21932755504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12991434.782608695,
            "unit": "ns",
            "range": "± 1147187.4963813887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304817.7419354839,
            "unit": "ns",
            "range": "± 13736.472024141274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292783.63636363635,
            "unit": "ns",
            "range": "± 11240.481794675483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280750,
            "unit": "ns",
            "range": "± 17818.493473843948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5059533.333333333,
            "unit": "ns",
            "range": "± 128104.97959525793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4657241.666666667,
            "unit": "ns",
            "range": "± 51811.975771372905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27392.55319148936,
            "unit": "ns",
            "range": "± 3109.722504706815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111114.58333333333,
            "unit": "ns",
            "range": "± 11469.40074758799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92215.625,
            "unit": "ns",
            "range": "± 9496.008337301799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108020.40816326531,
            "unit": "ns",
            "range": "± 16700.113952223564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7046.153846153846,
            "unit": "ns",
            "range": "± 1097.9078783767377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25819.14893617021,
            "unit": "ns",
            "range": "± 1893.6950621291141"
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
          "distinct": false,
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698646729046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635212.5,
            "unit": "ns",
            "range": "± 173089.52064724985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3120379.347826087,
            "unit": "ns",
            "range": "± 205501.7930127086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2387170.5263157897,
            "unit": "ns",
            "range": "± 168973.96178215844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10794297.727272727,
            "unit": "ns",
            "range": "± 971516.3393870043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62210.11235955056,
            "unit": "ns",
            "range": "± 6067.874514489854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9417258.490566038,
            "unit": "ns",
            "range": "± 387399.7028681013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25389565,
            "unit": "ns",
            "range": "± 566615.5312815504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65708725.423728816,
            "unit": "ns",
            "range": "± 2884988.404960457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131422930,
            "unit": "ns",
            "range": "± 3920582.2482917877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262410813.33333334,
            "unit": "ns",
            "range": "± 7697324.905837286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5846550.703125,
            "unit": "ns",
            "range": "± 130911.41930624754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868552.0905671297,
            "unit": "ns",
            "range": "± 51058.899720442976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392177.4832589286,
            "unit": "ns",
            "range": "± 32362.251056239253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3350428.7917564656,
            "unit": "ns",
            "range": "± 98194.02291365033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037946.5294471154,
            "unit": "ns",
            "range": "± 27361.128700984405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981837.8125,
            "unit": "ns",
            "range": "± 22337.059412436647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4143907.6923076925,
            "unit": "ns",
            "range": "± 64107.558856691016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4210084.042553191,
            "unit": "ns",
            "range": "± 294774.41832630435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5061131.25,
            "unit": "ns",
            "range": "± 98680.8641953106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4928296.96969697,
            "unit": "ns",
            "range": "± 228741.6096618103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12305191.07142857,
            "unit": "ns",
            "range": "± 529418.725594156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299293.0232558139,
            "unit": "ns",
            "range": "± 10667.962615072718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291224,
            "unit": "ns",
            "range": "± 11702.686940726606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270139.3617021277,
            "unit": "ns",
            "range": "± 16560.71409091704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5020962.5,
            "unit": "ns",
            "range": "± 125079.42802562455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4522807.692307692,
            "unit": "ns",
            "range": "± 66577.91752949399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24616.129032258064,
            "unit": "ns",
            "range": "± 2164.6010940155193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104737.11340206186,
            "unit": "ns",
            "range": "± 10235.592715979994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87913.82978723405,
            "unit": "ns",
            "range": "± 5909.780503971759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104657.73195876289,
            "unit": "ns",
            "range": "± 14824.352396279315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6656.8421052631575,
            "unit": "ns",
            "range": "± 933.9520958578242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24307.52688172043,
            "unit": "ns",
            "range": "± 2337.605452591799"
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
          "id": "14419c5bf4f1227746805085cc75c6e14c984e90",
          "message": "Merge pull request #3464 from OnedgeLee/prepare/3.7.1\n\n🔧 Prepare 3.7.1",
          "timestamp": "2023-10-30T17:36:19+09:00",
          "tree_id": "128822e516289030ef4a4d75fb9f83ebcd06916b",
          "url": "https://github.com/planetarium/libplanet/commit/14419c5bf4f1227746805085cc75c6e14c984e90"
        },
        "date": 1698655935903,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1262645.4545454546,
            "unit": "ns",
            "range": "± 135659.4718423914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2423792.6829268294,
            "unit": "ns",
            "range": "± 127553.7134792346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891629.4736842106,
            "unit": "ns",
            "range": "± 138908.13578005522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8285216.483516484,
            "unit": "ns",
            "range": "± 503999.74190111033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53373.958333333336,
            "unit": "ns",
            "range": "± 5431.41437025417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7476282.352941177,
            "unit": "ns",
            "range": "± 150964.92239628927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19779083.333333332,
            "unit": "ns",
            "range": "± 216134.09087438113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49251720,
            "unit": "ns",
            "range": "± 372246.2456876784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98822440,
            "unit": "ns",
            "range": "± 1241666.1800062964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198581771.42857143,
            "unit": "ns",
            "range": "± 2717225.6029262277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4176300.8333333335,
            "unit": "ns",
            "range": "± 21954.697384006624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1334536.9303385417,
            "unit": "ns",
            "range": "± 4237.114376165755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 970750.7421875,
            "unit": "ns",
            "range": "± 5567.971046210396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2432998.6067708335,
            "unit": "ns",
            "range": "± 19694.13563894172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764081.4908854166,
            "unit": "ns",
            "range": "± 4716.295905030701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 686177.0084635416,
            "unit": "ns",
            "range": "± 3495.601298770619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3076268,
            "unit": "ns",
            "range": "± 122369.79492588881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256612.765957447,
            "unit": "ns",
            "range": "± 125044.13067431918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3993862.745098039,
            "unit": "ns",
            "range": "± 162786.9699463496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3853978.5714285714,
            "unit": "ns",
            "range": "± 205513.91068998523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9461809.302325582,
            "unit": "ns",
            "range": "± 310192.0847397882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252981.6326530612,
            "unit": "ns",
            "range": "± 19075.674567195834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241279.16666666666,
            "unit": "ns",
            "range": "± 18206.661109932535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231190.81632653062,
            "unit": "ns",
            "range": "± 16336.349241591155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3892510,
            "unit": "ns",
            "range": "± 115481.35645919289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3600639.024390244,
            "unit": "ns",
            "range": "± 128038.57598014902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23890.625,
            "unit": "ns",
            "range": "± 2518.607724204199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90801.02040816327,
            "unit": "ns",
            "range": "± 7975.558603038851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78456.12244897959,
            "unit": "ns",
            "range": "± 8557.965678954975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93433.67346938775,
            "unit": "ns",
            "range": "± 11991.379583044216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6422.631578947368,
            "unit": "ns",
            "range": "± 895.074239790668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22916.129032258064,
            "unit": "ns",
            "range": "± 1991.519537972507"
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
          "id": "488a3058fdbab4bb136baf75ce95cf52206e06d3",
          "message": "Merge pull request #3500 from greymistcube/port/3.6.1-to-3.7.1\n\n🔀 Port 3.6.1 to 3.7.1",
          "timestamp": "2023-11-20T23:23:14+09:00",
          "tree_id": "acbf576ffed94e9f951fd1e72fa90f9712fea70c",
          "url": "https://github.com/planetarium/libplanet/commit/488a3058fdbab4bb136baf75ce95cf52206e06d3"
        },
        "date": 1700491113215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048017.1717171717,
            "unit": "ns",
            "range": "± 140022.61190600757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888114.8351648352,
            "unit": "ns",
            "range": "± 111884.99787592057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1460932.2916666667,
            "unit": "ns",
            "range": "± 141544.46911040225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4941871.794871795,
            "unit": "ns",
            "range": "± 172056.8861692917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37885.10638297872,
            "unit": "ns",
            "range": "± 4691.99632975703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5216540,
            "unit": "ns",
            "range": "± 62953.56338490414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13292255.555555556,
            "unit": "ns",
            "range": "± 278559.39797934366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34094207.14285714,
            "unit": "ns",
            "range": "± 477550.3847187802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66178035.71428572,
            "unit": "ns",
            "range": "± 947931.6176303525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 143459153.33333334,
            "unit": "ns",
            "range": "± 1770203.0185694469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311735.6584821427,
            "unit": "ns",
            "range": "± 5560.6592136269055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053727.44140625,
            "unit": "ns",
            "range": "± 2459.5267697834593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763282.2335379465,
            "unit": "ns",
            "range": "± 1433.691555643176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938099.302455357,
            "unit": "ns",
            "range": "± 2962.200150575426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621217.822265625,
            "unit": "ns",
            "range": "± 1928.3452419824378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571256.1783854166,
            "unit": "ns",
            "range": "± 1464.5543145354811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166817.3913043477,
            "unit": "ns",
            "range": "± 83477.03690729119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2337037.777777778,
            "unit": "ns",
            "range": "± 87342.4198950963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2872698.888888889,
            "unit": "ns",
            "range": "± 107846.60955226728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2704532.3529411764,
            "unit": "ns",
            "range": "± 128172.67788251546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6087283.076923077,
            "unit": "ns",
            "range": "± 275906.97230295686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185042.85714285713,
            "unit": "ns",
            "range": "± 9465.830913724269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175435.29411764705,
            "unit": "ns",
            "range": "± 10865.198986654954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138306.66666666666,
            "unit": "ns",
            "range": "± 2403.410275500409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748064.285714286,
            "unit": "ns",
            "range": "± 48461.04870675254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2701442.8571428573,
            "unit": "ns",
            "range": "± 21361.92566534834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13214.432989690722,
            "unit": "ns",
            "range": "± 2356.5064931448155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63685.416666666664,
            "unit": "ns",
            "range": "± 7340.127335288238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53825,
            "unit": "ns",
            "range": "± 8170.769467082677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73896.875,
            "unit": "ns",
            "range": "± 15034.979937150774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3314.285714285714,
            "unit": "ns",
            "range": "± 726.8063171715092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13066.326530612245,
            "unit": "ns",
            "range": "± 2163.8403183244363"
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
          "id": "700fbe90eb629396532bb718f07b5ecf07a628a8",
          "message": "Merge pull request #3509 from greymistcube/port/3.6.2-to-3.7.1\n\n🔀 Port 3.6.2 to 3.7.1",
          "timestamp": "2023-11-21T12:04:12+09:00",
          "tree_id": "926763fbb16b0e0f2a4b6cd5d2017c45634db74e",
          "url": "https://github.com/planetarium/libplanet/commit/700fbe90eb629396532bb718f07b5ecf07a628a8"
        },
        "date": 1700536651201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953858.1632653062,
            "unit": "ns",
            "range": "± 112908.0658076591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1690339.1304347827,
            "unit": "ns",
            "range": "± 77873.12875174388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1334873,
            "unit": "ns",
            "range": "± 133374.84494325143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5147903.092783505,
            "unit": "ns",
            "range": "± 298334.18637690245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34805.06329113924,
            "unit": "ns",
            "range": "± 1784.8291402947902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5026921.428571428,
            "unit": "ns",
            "range": "± 81185.37362179157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13600641.666666666,
            "unit": "ns",
            "range": "± 91832.6883604915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31853506.666666668,
            "unit": "ns",
            "range": "± 378047.3127356769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63865385.71428572,
            "unit": "ns",
            "range": "± 552081.324635229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130531326.66666667,
            "unit": "ns",
            "range": "± 711736.9683353803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314298.6886160714,
            "unit": "ns",
            "range": "± 5018.970801282521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055013.0078125,
            "unit": "ns",
            "range": "± 1884.347605267769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732616.1783854166,
            "unit": "ns",
            "range": "± 1684.1901844773777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923174.8465401786,
            "unit": "ns",
            "range": "± 4195.509162137373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611288.4207589285,
            "unit": "ns",
            "range": "± 1782.2633342633226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559977.4204799107,
            "unit": "ns",
            "range": "± 658.8897846516239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118219.6078431373,
            "unit": "ns",
            "range": "± 85678.9379476843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2373652.9411764704,
            "unit": "ns",
            "range": "± 47671.03572462868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2728276.923076923,
            "unit": "ns",
            "range": "± 19401.681793346073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2560180.487804878,
            "unit": "ns",
            "range": "± 152774.83507390175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5780302.631578947,
            "unit": "ns",
            "range": "± 196573.1243993717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171292.40506329114,
            "unit": "ns",
            "range": "± 7889.343220395776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165675.38461538462,
            "unit": "ns",
            "range": "± 7329.777255509516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140926.31578947368,
            "unit": "ns",
            "range": "± 4092.2923074988453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2664250,
            "unit": "ns",
            "range": "± 14751.979836310416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2448800,
            "unit": "ns",
            "range": "± 41689.29290425952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11600,
            "unit": "ns",
            "range": "± 2132.442690427339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53457.471264367814,
            "unit": "ns",
            "range": "± 4162.13921360963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44003.52112676056,
            "unit": "ns",
            "range": "± 2139.881905013551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57181.44329896907,
            "unit": "ns",
            "range": "± 12406.838923023693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2504.3478260869565,
            "unit": "ns",
            "range": "± 504.684221471026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10664.893617021276,
            "unit": "ns",
            "range": "± 1499.0826906118798"
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
          "id": "24331ea2f37f2d3f6d7352f8dc0f7ddf93fabb5d",
          "message": "Merge pull request #3505 from greymistcube/release/3.7.1\n\n🚀 Release 3.7.1",
          "timestamp": "2023-11-21T12:21:56+09:00",
          "tree_id": "31ff2a4e877d3793bb1a40b66faf88c0752310fb",
          "url": "https://github.com/planetarium/libplanet/commit/24331ea2f37f2d3f6d7352f8dc0f7ddf93fabb5d"
        },
        "date": 1700537636831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989598.4848484849,
            "unit": "ns",
            "range": "± 116617.4107171599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1768697.7777777778,
            "unit": "ns",
            "range": "± 99535.8836291601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1412330.303030303,
            "unit": "ns",
            "range": "± 151472.00216443682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5046601.851851852,
            "unit": "ns",
            "range": "± 210672.11534796242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33934.93975903615,
            "unit": "ns",
            "range": "± 1812.4524373870297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5012464.285714285,
            "unit": "ns",
            "range": "± 42595.857637945126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13365373.076923076,
            "unit": "ns",
            "range": "± 120012.27127427535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32673680,
            "unit": "ns",
            "range": "± 195090.59141112588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63341292.307692304,
            "unit": "ns",
            "range": "± 907518.165531264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129691046.66666667,
            "unit": "ns",
            "range": "± 1886690.0941167034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263867.0572916665,
            "unit": "ns",
            "range": "± 19124.357094476487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1022282.9036458334,
            "unit": "ns",
            "range": "± 3007.032936200585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734689.6484375,
            "unit": "ns",
            "range": "± 1273.776613730487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937147.1400669643,
            "unit": "ns",
            "range": "± 7383.068403671522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624511.9270833334,
            "unit": "ns",
            "range": "± 3768.5015563966454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546898.0859375,
            "unit": "ns",
            "range": "± 1764.0828121637244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2042667.391304348,
            "unit": "ns",
            "range": "± 66112.150688047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272038.4615384615,
            "unit": "ns",
            "range": "± 78428.54480146953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756079.1666666665,
            "unit": "ns",
            "range": "± 103738.0948480115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2545411.3924050634,
            "unit": "ns",
            "range": "± 121785.59868899258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5725646.666666667,
            "unit": "ns",
            "range": "± 214737.4798974955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167667.70833333334,
            "unit": "ns",
            "range": "± 9884.336303802429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156804.41176470587,
            "unit": "ns",
            "range": "± 7514.075028199531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143044.11764705883,
            "unit": "ns",
            "range": "± 3835.7324121026613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2597564.285714286,
            "unit": "ns",
            "range": "± 41291.22848076271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432353.846153846,
            "unit": "ns",
            "range": "± 27981.61942491938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10277.551020408164,
            "unit": "ns",
            "range": "± 1506.31184818019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51710.30927835051,
            "unit": "ns",
            "range": "± 5696.901287397431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43475.757575757576,
            "unit": "ns",
            "range": "± 2044.7351234186117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50777.31958762887,
            "unit": "ns",
            "range": "± 7396.712461664966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2618.9473684210525,
            "unit": "ns",
            "range": "± 340.3048498294863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8995.348837209302,
            "unit": "ns",
            "range": "± 973.7624999417209"
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
          "id": "b991a8aea061d812c13c0f7556792e4115113800",
          "message": "Merge pull request #3510 from greymistcube/prepare/3.7.2\n\n🔧 Prepare 3.7.2",
          "timestamp": "2023-11-21T13:32:55+09:00",
          "tree_id": "a4b48bdf93b217e18d7fc507c9f078ceda65c009",
          "url": "https://github.com/planetarium/libplanet/commit/b991a8aea061d812c13c0f7556792e4115113800"
        },
        "date": 1700541826193,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951187.8787878788,
            "unit": "ns",
            "range": "± 90059.11694800557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1671818.8679245282,
            "unit": "ns",
            "range": "± 65694.41510217468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327054.347826087,
            "unit": "ns",
            "range": "± 110575.10938748156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4759265.625,
            "unit": "ns",
            "range": "± 139964.5268639234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34668.65671641791,
            "unit": "ns",
            "range": "± 1661.0702058780423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5034100,
            "unit": "ns",
            "range": "± 62574.34435476389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13184185.714285715,
            "unit": "ns",
            "range": "± 82002.5220732486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32664757.14285714,
            "unit": "ns",
            "range": "± 314992.3532998263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64653007.692307696,
            "unit": "ns",
            "range": "± 321730.8333103374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133048150,
            "unit": "ns",
            "range": "± 864634.2719501519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3227546.484375,
            "unit": "ns",
            "range": "± 7810.697074116772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053997.6981026786,
            "unit": "ns",
            "range": "± 2292.916134776708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753477.0577566965,
            "unit": "ns",
            "range": "± 1630.4102768013083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1896487.5450721155,
            "unit": "ns",
            "range": "± 4019.619437145244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607196.4908854166,
            "unit": "ns",
            "range": "± 1454.574347108704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549271.1565290178,
            "unit": "ns",
            "range": "± 966.2313091822338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186540,
            "unit": "ns",
            "range": "± 33705.56969658618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317425,
            "unit": "ns",
            "range": "± 110591.27570108788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2786758.3333333335,
            "unit": "ns",
            "range": "± 38511.00098633762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2691200,
            "unit": "ns",
            "range": "± 94712.95054003966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5903163.888888889,
            "unit": "ns",
            "range": "± 109872.47972803428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179318.085106383,
            "unit": "ns",
            "range": "± 6922.0852092973655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162851.28205128206,
            "unit": "ns",
            "range": "± 8308.245686481978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140236,
            "unit": "ns",
            "range": "± 3723.8958094984346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2680538.4615384615,
            "unit": "ns",
            "range": "± 41868.475381475626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2461557.1428571427,
            "unit": "ns",
            "range": "± 37218.806542386075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10068.539325842698,
            "unit": "ns",
            "range": "± 1178.4615843642368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53569.230769230766,
            "unit": "ns",
            "range": "± 5116.849992539731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44575,
            "unit": "ns",
            "range": "± 2124.650980995414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52525,
            "unit": "ns",
            "range": "± 10716.943809472205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2508.4210526315787,
            "unit": "ns",
            "range": "± 446.1807566863211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10030.851063829787,
            "unit": "ns",
            "range": "± 1356.2302747780934"
          }
        ]
      }
    ]
  }
}