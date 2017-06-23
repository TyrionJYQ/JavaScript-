
//每条微博停留的时间
var NewsTime = 2000;
//微博文字出现的等待时间
var TextTime = 100;
var newsi = 0;
var txti = 0;
var txtTimer;
var newsTimer;
//微博链接
var newsHref = ["#","#","#","#"];
//微博标题
var newsTitle = new Array();   
newsTitle[0] = "自学前端成才";
newsTitle[1] = "程序员必备的技能";
newsTitle[2] = "前端菜鸟进阶之路";
newsTitle[3] = "程序员如何缓解压力";


function showNew() {
    var endstr = "_";
    //微博标题
    title = newsTitle[newsi];
    newsLink = newsHref[newsi];
    //微博标题末尾
    if(txti == (title.length-1)) {
        endstr = "!";
    }


    if(txti >= title.length) {
        clearInterval(txtTimer);
        clearInterval(newsTimer);
        newsi++;

        //重置循环显示微博标题
        if(newsi>=newsTitle.length) {
            newsi = 0;
        }
        //newsTimer输出文字内容
        newsTimer = setInterval("showNew()",NewsTime);
        txti =  0;
        return;
    }
    clearInterval(txtTimer);
    var HotNews = document.getElementById("HotNews");
    HotNews.href = newsLink;
    HotNews.innerHTML = title.substring(0,txti + 1) + endstr;
    txti++;
    txtTimer = setInterval("showNew()",TextTime);
}
showNew();
