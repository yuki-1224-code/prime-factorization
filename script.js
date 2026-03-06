function calculate() {
    // 1. 入力値を取得
    let inputVal = document.getElementById('numberInput').value;
    let n = parseInt(inputVal);
    
    // 2. 表示エリアを一旦空にする（前回の結果を消す）
    let resultList = document.getElementById('resultList');
    resultList.innerHTML = "";

    // エラーチェック
    if (isNaN(n) || n == 1) {
        resultList.innerHTML = "1は素数でも合成数でもないため、素因数分解できません。";
        return;
    }

    if (isNaN(n) || n < 2) {
        resultList.innerHTML = "2以上の自然数を入力してください。";
        return;
    }

    // --- ここで「〇〇の素因数は」という文章を追加 ---
    let title = document.createElement('p');
    title.innerText = n + " の素因数";
    title.style.fontSize = "20px"; // 文字の大きさを調整
    title.style.marginBottom = "10px";
    title.style.marginLeft = "30px";
    resultList.appendChild(title);


    //素因数分解のプログラム
    let num_e = n;
    let num_d = 2;

    while (num_e !== 1) {
        if (num_e % num_d !== 0) {
            if (num_d === 2) {
                num_d = 3;
            } else {
                num_d = num_d + 2;
            }
        } else {
            // --- ここで結果を画面に1行ずつ追加する ---
            // 新しい行（div）を作って、中に数字を入れて、画面に追加
            let line = document.createElement('div');
            line.innerText = num_d;
            resultList.appendChild(line);

            num_e = num_e / num_d;
        }
    }

}