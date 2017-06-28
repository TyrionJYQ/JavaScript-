var time = 200;  //图片闪烁时间间隔
var count = 0;   //变量count用来计数闪烁次数

function screenOnload() {
    setTimeout("blink()",time);
    
}

//blink（）函数用来控制图片是显示还是隐藏
function blink() {
    var screen = document.getElementById("screen");
    screen.style.visibility = 
    (screen.style.visibility == "hidden") ? "visible" : "hidden";
    count += 1;
    if(count <= 20) {
        setTimeout("blink()",time);
    }else {
        alert("我不想在闪烁了！");
        screen.style.visibility = "visible";   //使图片显示                      
    }
    
    
}