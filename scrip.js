function sidebar(){
    document.getElementById('sidebar').style.marginLeft = '-100%';
    document.getElementById('content').style.marginLeft = '0';
    document.getElementById('topbar').style.height = '60px';
    sound.play()
}
function topbar(){
    document.getElementById('sidebar').style.marginLeft = '0';
    document.getElementById('content').style.marginLeft = '240px';
    document.getElementById('topbar').style.height = '0';
    sound.play()
}
var contenedores = document.getElementsByClassName('cont');
var sound = document.getElementById('audio')
function cont1(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont1').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
function cont2(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont2').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
document.getElementById('title').style.height = '0'
function cont3(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont3').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
function cont4(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont4').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
function cont5(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont5').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
function cont6(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont6').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
function cont7(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont7').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
function cont8(){
    for(var i = 0; i < contenedores.length; i++){
        contenedores[i].style.height = 0;
    }
    document.getElementById('cont8').style.height = '500px';
    document.getElementById('title').style.height = '0'
    sound.play()
}
