let dados = await fetchData();

function app(){
    if (document.body.clientWidth >= 470 ){
        alert('Você está navegando por um dispositivo não mobile. Para uma melhor experiência acesse em seu smartphone');

    };

    document.querySelector('.icon-insta').addEventListener('click',(e)=>{
        e.preventDefault;
        goInsta()})

    dados.map( (item)=>{
        createCard(item.urlIMG, item.title, item.description, item.priceReal, item.priceCent)
    })
    
    
}    

document.addEventListener("DOMContentLoaded", app());


function createCard(urlIMG,title,description,priceReal,priceCent){
    let Elemento = `<article>
    <img src="${urlIMG}" alt="" class="image-products">

    <div class="wrapper">

        <div class="information">

            <h3 class="title-third">${title}</h3>
            <p class="description">${description}</p>

        </div>
        <div class="information-secund">

            <img src="../public/like.svg" alt="" class="like">
            <div class="price">R$<span>${priceReal}</span>${priceCent}</div>

        </div>
    </div>
    
</article>`

let sectionDoces = document.querySelector('.doces')

sectionDoces.innerHTML += Elemento;


}

async function fetchData (){
    const response  = await fetch('./data/doces.json')
    const data  = await response.json();
    return data.doces
}

function goInsta(){

    window.open('https://www.instagram.com/postoestreladalva_oficial/');
    
}