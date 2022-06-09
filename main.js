let screen = document.getElementById("screen");



//イベントハンドラの追加　あくまでイベントハンドラを追加しただけなのでfunctionの部分は置き換える

document.getElementById("0").addEventListener("click",function(){screen.value += 0});
document.getElementById("1").addEventListener("click",function(){screen.value += 1});
document.getElementById("2").addEventListener("click",function(){screen.value += 2});
document.getElementById("3").addEventListener("click",function(){screen.value += 3});
document.getElementById("4").addEventListener("click",function(){screen.value += 4});
document.getElementById("5").addEventListener("click",function(){screen.value += 5});
document.getElementById("6").addEventListener("click",function(){screen.value += 6});
document.getElementById("7").addEventListener("click",function(){screen.value += 7});
document.getElementById("8").addEventListener("click",function(){screen.value += 8});
document.getElementById("9").addEventListener("click",function(){screen.value += 9});
document.getElementById("left").addEventListener("click",function(){screen.value += "("});
document.getElementById("right").addEventListener("click",function(){screen.value += ")"});
document.getElementById("divide").addEventListener("click",function(){screen.value += "÷"});
document.getElementById("multi").addEventListener("click",function(){screen.value += "×"});
document.getElementById("plus").addEventListener("click",function(){screen.value += "+"});
document.getElementById("minus").addEventListener("click",function(){screen.value += "-"});
document.getElementById("eq").addEventListener("click",function(){screen.value += "="});
document.getElementById("point").addEventListener("click",function(){screen.value += "."});
document.getElementById("ce").addEventListener("click",function(){screen.value = screen.value.slice(0,-1)});
document.getElementById("ac").addEventListener("click",function(){screen.value = ""});