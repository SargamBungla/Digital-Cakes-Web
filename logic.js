let bagItems = [];
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayCakes();
    displayBagIcon();
    displayPastrey();
    modifiedCake();
    displayDecoration();
    displayCookies();
}

function addToBag(cakeid, cakename) {
    bagItems.push(cakeid);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
    alert(`✅ Added "${cakename}" to cart!`);
    console.log(`🛒 Cake ${cakeid} added to bag`);
    console.log('Current bag:', bagItems);
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItemCountElement) {
        if (bagItems.length > 0) {
            bagItemCountElement.style.visibility = 'visible';
            bagItemCountElement.innerText = bagItems.length;
        } else {
            bagItemCountElement.style.visibility = 'hidden';
        }
    }
}



function displayCakes() {
    const container = document.querySelector('.container');
    
    if (!container) {
        return;
    }

    let htmlContent = '';

    cakes.forEach(cake => {
        htmlContent += `<div class="item-container">
                <img class="cake-img" src="${cake.image}" alt="cake img">
                <div class="rating">
                    ${cake.rating}
                </div>
                <div class="name">${cake.name}</div>
                <div class="ingredient">${cake.ingredient}</div>
                <div>
                    <span class="price">₹${cake.price}</span>
                    <span class="mrp">₹${cake.mrp}</span>
                    <span class="offer">${cake.offer}</span>
                </div>
                <button class="btn" onclick="addToBag(${cake.id},'${cake.name}')">Add To Cake Box</button>
            </div>`;
    });

    container.innerHTML = htmlContent;
    console.log('Products Displayed');
}

function displayPastrey(){
    const box = document.querySelector('.box');

    if(!box){
        return;
    }

    let htmlContent = '';

    pastryes.forEach(pastrey =>{
        htmlContent +=`<div class="item-container">
                <img class="cake-img" src="${pastrey.image}" alt="cake img">
                <div class="rating">
                    ${pastrey.rating}
                </div>
                <div class="name">${pastrey.name}</div>
                <div class="ingredient">${pastrey.ingredient}</div>
                <div>
                    <span class="price">₹${pastrey.price}</span>
                    <span class="mrp">₹${pastrey.mrp}</span>
                    <span class="offer">${pastrey.offer}</span>
                </div>
                <button class="btn" onclick="addToBag(${pastrey.id},'${pastrey.name}')">Add To Cake Box</button>
            </div>`;
    });

    box.innerHTML = htmlContent;
}


function modifiedCake(){
    const vari = document.querySelector('.dog');

    if(!vari){
        return;
    }

    let htmlContent= '';

    modified.forEach(special =>{
        htmlContent += `<div class="item-container">
                <img class="cake-img" src="${special.image}" alt="cake img">
                <div class="rating">
                    ${special.rating}
                </div>
                <div class="name">${special.name}</div>
                <div class="ingredient">${special.ingredient}</div>
                <div>
                    <span class="price">₹${special.price}</span>
                    <span class="mrp">₹${special.mrp}</span>
                    <span class="offer">${special.offer}</span>
                </div>
                <button class="btn" onclick="addToBag(${special.id},'${special.name}')">Add To Cake Box</button>
            </div>`;
    });

    vari.innerHTML = htmlContent;

}



function displayDecoration(){
    const gift = document.querySelector('.cat');

    if(!gift){
        return;
    }

    let htmlContent='';

    decoration.forEach(party =>{
        htmlContent += `<div class="item-container">
                <img class="cake-img" src="${party.image}" alt="cake img">
                <div class="rating">
                    ${party.rating}
                </div>
                <div class="name">${party.name}</div>
                <div class="ingredient">${party.ingredient}</div>
                <div>
                    <span class="price">₹${party.price}</span>
                    <span class="mrp">₹${party.mrp}</span>
                    <span class="offer">${party.offer}</span>
                </div>
                <button class="btn" onclick="addToBag(${party.id},'${party.name}')">Add To Cake Box</button>
            </div>`;
    });

    gift.innerHTML = htmlContent;


}


function displayCookies(){
    const bucket = document.querySelector('.fish');

    if(!bucket){
        return;
    }

    let htmlContent = '';

    cookies.forEach(cook =>{
        htmlContent += `<div class="item-container">
                <img class="cake-img" src="${cook.image}" alt="cake img">
                <div class="rating">
                    ${cook.rating}
                </div>
                <div class="name">${cook.name}</div>
                <div class="ingredient">${cook.ingredient}</div>
                <div>
                    <span class="price">${cook.price}</span>
                    <span class="mrp">${cook.mrp}</span>
                    <span class="offer">${cook.offer}</span>
                </div>
                <button class="btn" onclick="addToBag(${cook.id},'${cook.name}')">Add To Cake Box</button>
            </div>`;
    });

    bucket.innerHTML = htmlContent;
}


