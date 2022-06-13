let screen = document.getElementById("screen");

let sum = [0];  //数字の配列
let calc = [""];    //記号の格納
let count_sum = 0;  //sumの要素番号
let flg_symbol = 1; //記号の表示の判定用フラグ
let flg_point = 0;  //小数点の判定
let count_brackets = 0; //括弧の数を数える

 //どのボタンを押したかの判定
function btn_type(screen_type){
    let bool;
    if(screen_type <= 9 && screen_type >= 0)bool = math(screen_type);
    else bool = btn_click(screen_type);
    if(bool == 1)return;
    else screen_print(screen_type);
}

//押したボタンを画面に表示
function screen_print(screen_type){
    screen.value += screen_type;
}

//計算結果画面表示(計算方法考え中)
function disp(){
    if(flg_symbol == 1)return;
    screen.value = sum[0];
    count_sum = 0;
}

//数字を押したときの動き
function math(num){
    if(screen.value.slice(-1) == ")")return 1;
    if(flg_symbol==1)flg_symbol=0;
    sum[count_sum] = sum[count_sum] * 10 + num;
}

//記号を押したときの動き
function btn_click(type){
    //左括弧の判定
    if(type == "(" && flg_symbol == 0)return 1;
    else if(type == "(")bracketsLeft_click();
    //右括弧の判定
    else if(type == ")" && flg_symbol == 0 && count_brackets > 0 && 
            !(calc[count_sum-1] == "(" || calc[count_sum-1] == "." && calc[count_sum-2] == "("))bracketsRight_click();
    else if(type == ")")return 1;
    //小数点の判定
    else if(type == "." && flg_point == 0) point_click();
    else if(type == "." && flg_point == 1)return 1;
    //その他
    else if(flg_symbol == 0)calc_click(type);
    else return 1;
}

//配列の要素を増やす
function move_index(type){
    calc[count_sum] = type;
    sum.push(0);
    calc.push("");
    count_sum++;
}

//左括弧を押したときの動き
function bracketsLeft_click(){
    move_index("(");
    count_brackets++;
}

//右括弧を押したときの動き
function bracketsRight_click(){
    move_index(")");
    count_brackets--;
}

//演算子を押したときの動き
function calc_click(type){
    flg_symbol = 1;
    flg_point = 0;
    move_index(type);
}

//小数点を押したときの動き
function point_click(){
    flg_point = 1;
    move_index(".");
}

//初期化
function clear(){
    screen.value = "";
    sum = [0];
    calc = [""];
    count_sum = 0;
    flg_symbol = 1;
}

//一文字削除
function delete_calc(){
    if(screen.value == "")return;
   //最後尾の文字の判定
    if(screen.value.slice(-1) <= 9 && screen.value.slice(-1) >= 0)sum[count_sum] = Math.floor(sum[count_sum] /= 10); //数字なら１０でわる
    else del_index();
    screen.value = screen.value.slice(0,-1);
}

//配列の要素の減らす
function del_index(){
    if(screen.value.slice(-1) == "(")count_brackets--;
    else if(screen.value.slice(-1) == ")")count_brackets++;
    else if(screen.value.slice(-1) == ".")flg_point = 0;
    else flg_symbol = 0;
    count_sum--;
    if(calc[count_sum-1] == ".")flg_point = 1;
}

//イベントハンドラの追加　あくまでイベントハンドラを追加しただけなのでfunctionの部分は置き換える
//練習です
document.getElementById("0").addEventListener("click",function(){btn_type(0)});
document.getElementById("1").addEventListener("click",function(){btn_type(1)});
document.getElementById("2").addEventListener("click",function(){btn_type(2)});
document.getElementById("3").addEventListener("click",function(){btn_type(3)});
document.getElementById("4").addEventListener("click",function(){btn_type(4)});
document.getElementById("5").addEventListener("click",function(){btn_type(5)});
document.getElementById("6").addEventListener("click",function(){btn_type(6)});
document.getElementById("7").addEventListener("click",function(){btn_type(7)});
document.getElementById("8").addEventListener("click",function(){btn_type(8)});
document.getElementById("9").addEventListener("click",function(){btn_type(9)});
document.getElementById("left").addEventListener("click",function(){btn_type("(")});
document.getElementById("right").addEventListener("click",function(){btn_type(")")});
document.getElementById("divide").addEventListener("click",function(){btn_type("÷")});
document.getElementById("multi").addEventListener("click",function(){btn_type("×")});
document.getElementById("plus").addEventListener("click",function(){btn_type("+")});
document.getElementById("minus").addEventListener("click",function(){btn_type("-")});
document.getElementById("eq").addEventListener("click",function(){disp()});
document.getElementById("point").addEventListener("click",function(){btn_type(".")});
document.getElementById("ce").addEventListener("click",function(){delete_calc()});
document.getElementById("ac").addEventListener("click",function(){clear()});