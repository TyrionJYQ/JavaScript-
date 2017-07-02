function photoBox(img) {
    //创建相框oDiv
    var oDiv = document.createElement('div');
    document.body.appendChild(oDiv);
    if(oDiv){
        //设置相框属性
        oDiv.style.cssText = 'border:1px solid #000;background:#FFF;position:absolute; padding:3px;'
        oDiv.innerHTML = img || '图片不存在！';
        //close
        var close = oDiv.appendChild(document.createElement('span'));
         close.innerHTML = 'X';
        close.style.cssText = 'position:absolute;right:1px;cursor:pointer';
        //点击close关闭相框
        close.onclick = function () {
           
            document.onmousemove = null;
            this.parentNode.style.left = '-1000000000000px';
        }

    }else {
        alert('相框不存在，请检查！');
    }
    //相片随鼠标移动
    document.onmousemove = function (e) {
        e = e || window.event;
        var x = e.clientX;
        var y = e.clientY;
        setTimeout(function () {
            if(oDiv.hover)return;
            oDiv.style.left = x + 5 +'px';
            oDiv.style.top = y + 5 +'px';
        }, 120);
    }
    //框内图片不随鼠标移动
    oDiv.onmouseover = function () {
        this.hover = true;
    }
    //在相框外取消相框内的move事件
    oDiv.onmouseout = function () {
        this.hover = false;
    }
}
photoBox('<img src ="tree.jpg">');


