let dados = await fetchData();

function app(){
    if (document.body.clientWidth >= 470 ){
        alert('Você está navegando por um dispositivo não mobile. Para uma melhor experiência acesse em seu smartphone');

    };

    document.querySelector('.icon-insta').addEventListener('click',(e)=>{
        e.preventDefault;
        goInsta()})

    let sectionFoods = document.querySelector('.foods');
    let sectionBebidas = document.querySelector('.bebidas');
    let sectionDoces = document.querySelector('.doces');

    dados.foods.map( (item)=>{
        createCard(item.urlIMG, item.title, item.description, item.priceReal, item.priceCent, sectionFoods)
    });
    dados.bebidas.map( (item)=>{
        createCard(item.urlIMG, item.title, item.description, item.priceReal, item.priceCent, sectionBebidas)
    });
    dados.doces.map( (item)=>{
        createCard(item.urlIMG, item.title, item.description, item.priceReal, item.priceCent, sectionDoces)
    });
    
    
}    

document.addEventListener("DOMContentLoaded", app());

document.addEventListener('click',(e)=>{
    let elemento = e.srcElement.classList.value
    if(elemento == 'image-products'){
        createIMGSample(e.srcElement.src)
    }
    if (e.srcElement.id == 'closeIMGSample'){
        const elementIMGSample = document.querySelector('.containerIMGSample')
        elementIMGSample.remove();
        console.log('containerIMGSample')
    }
});

function createCard(urlIMG,title,description,priceReal,priceCent,sectionFood){

    let article = document.createElement('article');
    let image = document.createElement('img');
    image.src = `${urlIMG}`;
    image.classList.add('image-products');
    
    let wrapper = `
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
    `


    // image.addEventListener('click',)

    article.appendChild(image)
    article.innerHTML += wrapper;






sectionFood.appendChild(article);


}

function createIMGSample(urlIMG){
    
    let elementIMGSample = `
    <div class="containerIMGSample">
                <div id="closeIMGSample">X</div>
                <img  class="IMGSample" style="background-image: url('${urlIMG}');">
    </div>`

    let sectionDoces = document.querySelector('.doces')

    sectionDoces.innerHTML += elementIMGSample;

}

async function fetchData (){
    const response  = await fetch('./data/doces.json')
    const data  = await response.json();
    return data
}

function goInsta(){

    window.open('https://www.instagram.com/postoestreladalva_oficial/');
    
}