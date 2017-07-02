function addEvent(el,name,fn) { //绑定事件
    if(el.addEventListener) return el.addEventListener(name,fn,false);
    return el.attachEvent('on' + name,fn);
}

//寻找下一个兄弟节点并删除空的文本节点
function nextNode(node) {
    if(!node) return ;
    if(node.nodeType == 1) {
        return node ;
    }
    if(node.nextSibling) {
        return nextNode(node.nextSibling);
    }
}
//寻找上一个兄弟节点并删除空的文本节点
function prevNode(node) {
     if(!node) return ;
    if(node.nodeType == 1) {
        return node ;
    }
    if(node.previousSibling) {
        return nextNode(node.previousSibling);
    }
}
//递归寻找父亲元素，并找到input元素进行操作
function parCheck(self,checked) {
    var par = prevNode(self.parentNode.parentNode.parentNode.previousSibling);
    if(par && par.getElementsByTagName('input')[0]) {
        par.getElementsByTagName('input')[0].checked = checked;
        parCheck(par.getElementsByTagName('input')[0],
        sibCheck(par.getElementsByTagName('input')[0]));
    }
}

//判断兄弟节点是否已经全部选中
function sibCheck(self) {
    var sbi = self.parentNode.parentNode.parentNode.childNodes,n = 0;
    for( var i = 0; i < sbi.length; i++) {
        if(sbi[i].nodeType != 1) {
            n ++ ;
        } else if(sbi[i].getElementsByTagName('input')[0].checked) {
            n ++ ;
        } 
        return n == sbi.length ? true : false;
        
    }
}
//绑定事件
// var menu = document.getElementById('menu_zzjs_net');
addEvent(document.getElementById('menu_zzjs_net'),'click',function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    var tp = nextNode(target.parentNode.nextSibling);
    switch(target.NodeName) {
        case 'A': //点击A标签展开和收缩树形目录，并改变其样式会选中checkbox
            if(tp && tp.NodeName == 'UL') {
                if(tp.style.display != 'block') {
                    tp.style.display = 'block';
                    prevNode(target.parentNode.previousSibling).className = 'ren';
                } else {
                    tp.style.display = 'none';
                    prevNode(target.parentNode.previousSibling).className = 'add';
                }
            }
        break;
        case 'SPAN': //点击图标只展开或者收缩
            var ap = nextNode(nextNode(target.nextSibling).nextSibling);
            if(ap.style.display != 'block') {
                ap.style.display = 'block';
                target.className = 'ren';
            } else {
                 ap.style.display = 'none';
                 target.className = 'add';
            }
        break;
        case 'INPUT': //点击checkbox,父元素选中，则子节点中的checkbox也同时选中，子节点取消则父元素也随之取消
            if(target.checked) {
                if( tp ) {
                    var checkbox = tp.getElementsByTagName( 'input' );
                    for( var i = 0; i <checkbox.length; i++ ) {
                        checkbox[i].checked = true;

                    }
                }
            }else {
                    if(tp) {
                        var checkbox = tp.getElementsByTagName( 'input' );
                        for( var i = 0; i <checkbox.length; i++ ) {
                            checkbox[i].checked = false;

                        }
                    }
            }
            parentCheck(target,sibcheck(target));

        
    }
});
//页面加载时给有子节点的元素动态添加图标
window.onload = function() {
    var labels = document.getElementById('menu_zzjs_net').
    getElementsByTagName('label');
    for(var i = 0; i < labels.length;i++) {
        var span = document.createElement('span');
        span.style.cssText = 'display:inline-box;height:18px;vertical-align:middle;width:19px;cursor:pointer';
        span.innerHTML = ' ';
        span.className = 'add';
        if(nextNode(labels[i].nextSibling) && nextNode(labels[i].nextSibling).nodeName == 'UL') {
            labels[i].parentNode.insertBefore(span,labels[i]);
        }else {
            labels[i].className = 'rem';
        }
    }
};