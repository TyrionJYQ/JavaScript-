var index = 9;
link = new  Array(1);
link[0] = 'time1.html';
link[1] = 'time2.html';
link[2] = 'time3.html';
link[3] = 'time4.html';
link[4] = 'time5.html';
link[5] = 'time6.html';
link[6] = 'time7.html';
link[7] = 'time8.html';
link[8] = 'time9.html';
text = new Array(1);
text[0] = "1";
text[1] = "2";
text[2] = "3";
text[3] = "4";
text[4] = "5";
text[5] = "6";
text[6] = "7";
text[7] = "8";
text[8] = "9";

document.write ("<marquee scrollamount='1' scrolldealy='100' direction='up' width='150' height='150'");
for( var i = 0; i< index; i++) {
    debugger;
    document.write (" <a href="+link[i]+" target='_blank'>");
    
    document.write (text[i] + "</a><br/>")
}
document.write("</marquee>");


// 问题:1没有显示为链接，这是为什么？