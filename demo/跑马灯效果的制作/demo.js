var msg = "白日依山尽,黄河入海流";
var interval = 100;

function letterMove() {             //控制文字移动
    var seq = 0;
    // document.nextForm.lenText.value = msg(seq,msg.length) + "    " + msg;
    var input  = document.getElementById("input");
    input.value =  msg.substring(seq, msg.length) + "      " + msg;
    seq++;
    if ( seq > msg.length ) {
        seq = 0;                    //重置seq
    }
    window.setTimeout("letterMove()",interval);
        

}
    

