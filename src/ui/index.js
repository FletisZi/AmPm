function app(){
    if (document.body.clientWidth >= 470 ){
        alert('Você está navegando por um dispositivo não mobile. Para uma melhor experiência acesse em seu smartphone');

    };
}    

document.addEventListener("DOMContentLoaded", app());