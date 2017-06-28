var done = 0;
var step = 4;
function anim(yp,yk) {
    if(document.layers){
        document.layers["napis"].top = yp;
    } else{
        document.all["napis"].style.top = yp;
    }
    if(yp > yk) step = -4;
    if(yp < 60) step = 4;
    setTimeout( 'anim('+ (yp+step) + ',' + yk +')', 35);
}

function start() {
    if(done) return done = 1;
    
    if(navigator.appName=="Netscape"){
        var nap = document.getElementById("napis");
        nap.left = innerWidth/2 - 145;
        anim(60,innerHeight - 60);
     }else {
        napis.style.left = 11;
        anim(60,document.body.offsetHeight - 60);
     }
   
}
setTimeout('start()',20);
