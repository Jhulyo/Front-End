function Carregar(){
    var msg = document.getElementById('msg');
    var msg2 = document.getElementById('msg2');
    var foto = document.getElementById('imagem');
    var body = document.getElementById('cor')
    var hora = new Date();
    var horas = hora.getHours();
    var minutos = hora.getMinutes();
    
    if(minutos < 10){
        minutos = '0' + minutos;
    };
    
    msg.innerHTML = `Agora são ${horas}:${minutos}!`;
    
    if(horas <= 11){
        foto.src= 'manhã.png';
        body.style.backgroundColor = 'rgb(192, 192, 40)';
        msg2.innerHTML = `Bom dia!!!`;
    }
    else if(horas <= 18){
        foto.src= 'tarde.png';
        body.style.backgroundColor = 'rgb(248, 187, 73)';
        msg2.innerHTML = `Boa tarde!!!`;
    }
    else{
        foto.src= 'noite.png';
        body.style.backgroundColor= 'rgb(46, 45, 46)';
        msg2.innerHTML = `Boa noite!!!`;
    }
}

function Btmanha(){
    var msg = document.getElementById('msg');
    var msg2 = document.getElementById('msg2');
    var foto = document.getElementById('imagem');
    var body = document.getElementById('cor')
    var hora = new Date();
    var horas = hora.getHours();
    var minutos = hora.getMinutes();

    foto.src= 'manhã.png';
    body.style.backgroundColor = 'rgb(192, 192, 40)';
    msg2.innerHTML = `Bom dia!!!`;
}

function Bttarde(){
    var msg = document.getElementById('msg');
    var msg2 = document.getElementById('msg2');
    var foto = document.getElementById('imagem');
    var body = document.getElementById('cor')
    var hora = new Date();
    var horas = hora.getHours();
    var minutos = hora.getMinutes();
    
    foto.src= 'tarde.png';
    body.style.backgroundColor = 'rgb(248, 187, 73)';
    msg2.innerHTML = `Boa tarde!!!`;
}

function Btnoite(){
    var msg = document.getElementById('msg');
    var msg2 = document.getElementById('msg2');
    var foto = document.getElementById('imagem');
    var body = document.getElementById('cor')
    var hora = new Date();
    var horas = hora.getHours();
    var minutos = hora.getMinutes();
    
    foto.src= 'noite.png';
    body.style.backgroundColor= 'rgb(46, 45, 46)';
    msg2.innerHTML = `Boa noite!!!`;
}
