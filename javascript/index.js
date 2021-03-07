// 抽選 メソッド
const doLottery = (ids, size) => {
    return getRandom(ids, size);
}

// 抽選 ランダム
const getRandom = (ids, size) => {
    min = Math.ceil(0);
    max = Math.floor(ids.length);

    const indexes = [];
    const results = [];
    for (i = 0; i <= size - 1; i++) {
        while (true) {
            const index = Math.floor(Math.random() * (max));
            if (!indexes.includes(index)) {
                indexes.push(index);
                results.push(ids[index]);
                break;
            }
        }
    }
    return results;
}

const ids = [
    "111", "222", "333", "444", "555"
];
// 抽選結果取得
console.log(doLottery(ids, 3));
