let screen = document.getElementById("screen");

let sum = [0];  //数字の配列
let calc = [""];  //記号の格納
let count = 0;  //sumの要素番号
let flg_symbol = 1; //記号の表示の判定用フラグ

 //どのボタンを押したかの判定
function screen_print(screen_type){
    if(screen_type <= 9 && screen_type >= 0)math(screen_type);
    else if(flg_symbol == 1)return;
    else calc_click(screen_type);
    screen.value += screen_type;    //画面に表示
}

//計算結果画面表示(計算方法考え中)
function disp(){
    if(flg_symbol == 1)return;
    screen.value = sum[0];
}

//数字を押したときの動き
function math(num){
    if(flg_symbol==1)flg_symbol=0;
    sum[count] = sum[count] * 10 + num;
}

//記号を押したときの動き
function calc_click(type){
    flg_symbol = 1;
    calc[count] = type;
    sum.push(0);
    calc.push("");
    count++;
}

//初期化
function clear(){
    screen.value = "";
    sum = [0];
    calc = [""];
    count = 0;
    flg_symbol = 1;
}

//一文字削除
function delete_calc(){
    if(screen.value == "")return;
    //最後尾の文字の判定
    if(screen.value.slice(-1) <= 9 && screen.value.slice(-1) >= 0)sum[count] = Math.floor(sum[count] /= 10); //数字なら１０でわる
    else count--; //記号ならひとつ前の要素に戻る
    screen.value = screen.value.slice(0,-1);
}

//イベントハンドラの追加　あくまでイベントハンドラを追加しただけなのでfunctionの部分は置き換える
//練習です
document.getElementById("0").addEventListener("click",function(){screen_print(0)});
document.getElementById("1").addEventListener("click",function(){screen_print(1)});
document.getElementById("2").addEventListener("click",function(){screen_print(2)});
document.getElementById("3").addEventListener("click",function(){screen_print(3)});
document.getElementById("4").addEventListener("click",function(){screen_print(4)});
document.getElementById("5").addEventListener("click",function(){screen_print(5)});
document.getElementById("6").addEventListener("click",function(){screen_print(6)});
document.getElementById("7").addEventListener("click",function(){screen_print(7)});
document.getElementById("8").addEventListener("click",function(){screen_print(8)});
document.getElementById("9").addEventListener("click",function(){screen_print(9)});
document.getElementById("left").addEventListener("click",function(){screen_print("(")});
document.getElementById("right").addEventListener("click",function(){screen_print(")")});
document.getElementById("divide").addEventListener("click",function(){screen_print("÷")});
document.getElementById("multi").addEventListener("click",function(){screen_print("×")});
document.getElementById("plus").addEventListener("click",function(){screen_print("+")});
document.getElementById("minus").addEventListener("click",function(){screen_print("-")});
document.getElementById("eq").addEventListener("click",function(){disp()});
document.getElementById("point").addEventListener("click",function(){screen_print(".")});
document.getElementById("ce").addEventListener("click",function(){delete_calc()});
document.getElementById("ac").addEventListener("click",function(){clear()});