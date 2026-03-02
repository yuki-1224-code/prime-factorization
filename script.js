// 「calculate」という名前の命令（関数）を作ります
function calculate() {
    
    // 入力欄から数字を「取得」して、変数「n」に保存します
    let n = document.getElementById('numberInput').value;

    // 変数「n」の中身を画面に表示させます
    alert("入力された数字は " + n + " です！");
}