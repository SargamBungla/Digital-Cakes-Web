const convinient = 99;
let bagItems = [];
let bagItemObjects = [];
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayCakeItems();
  displayBagIcon();
  displayBagSummary();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItemCountElement) {
    if (bagItemObjects.length > 0) {
      bagItemCountElement.style.visibility = 'visible';
      bagItemCountElement.innerText = bagItemObjects.length;
    } else {
      bagItemCountElement.style.visibility = 'hidden';
    }
  }
}


function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.bag-summary');

  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;


  bagItemObjects.forEach(bagItems => {
    totalMRP += bagItems.mrp;
    totalDiscount += bagItems.mrp -  bagItems.price;
  });


  let finalPayment = totalMRP - totalDiscount + 99;

  bagSummaryElement.innerHTML = `
  <div class="price-header">PRICE DETAILS( ${totalItem} Items)</div>
            <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">₹${totalMRP}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span> 
            </div>
            <div class="price-item">
                <span class="price-item-tag">Convenience Fee</span>
                <span class="price-item-value">₹99</span>
            </div>
            <hr>
            <div class="price-footer">
                <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">₹${finalPayment}</span>
            </div>
            <button class="btn-place-order">
                <div class="css-xjhrni" onclick="placeOrder()">PLACE ORDER</div>
            </button>
        </div>
  `;


}

function placeOrder(){
  if (bagItemObjects.length === 0) {
    alert('🛒 Your cake box is empty!');
    return;
  }

  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(item => {
    totalMRP += item.mrp;
    totalDiscount += item.mrp - item.price;
  });

  let finalAmount = totalMRP - totalDiscount + convinient;

  let confirmOrder = confirm(
    `🎂 Order Summary\n
Items: ${bagItemObjects.length}
Total Amount: ₹${finalAmount}

Do you want to place the order?`
  );

  if (confirmOrder) {
    alert('🎉 Order Placed Successfully!\nThank you for shopping with us 💖');

    // Clear cart
    localStorage.removeItem('bagItems');
    bagItems = [];
    bagItemObjects = [];

    // Update UI
    displayBagIcon();
    displayCakeItems();
    displayBagSummary();
  }
}



function loadBagItemObjects() {
  console.log('Loading bag items from localStorage...');

  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  console.log('Bag Item IDs:', bagItems);

  bagItemObjects = bagItems.map(itemId => {

    for (let i = 0; i < cakes.length; i++) {
      if (itemId == cakes[i].id) {
        return cakes[i];
      }
    }

    for (let i = 0; i < pastryes.length; i++){
      if(itemId == pastryes[i].id){
        return pastryes[i];
      }
    }

    for (let i =0 ; i < decoration.length; i++){
      if(itemId == decoration[i].id){
        return decoration[i];
      }
    }

    for(let i=0; i < modified.length; i++){
      if(itemId == modified[i].id){
        return modified[i];
      }
    }

    for(let i=0;i<cookies.length;i++){
      if(itemId == cookies[i].id){
        return cookies[i];
      }
    }

  });

  console.log('Bag Item Objects:', bagItemObjects);
}



function displayCakeItems() {
  let containerElement = document.querySelector('.bag-items-container');

  if (!containerElement) {
    return;
  }

  if (!bagItemObjects || bagItemObjects.length === 0) {
    containerElement.innerHTML = `<div style="text-align: center; padding: 50px; font-size: 18px; color: #666;">
            🛒 Your bag is empty<br>
            <a href="index.html" style="color: rgb(255, 63, 108); text-decoration: none; font-weight: 600;">Start shopping!</a>
        </div>`;
    return;
  }


  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });

  containerElement.innerHTML = innerHTML;
}

function removeFromBag(cakeId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != cakeId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayCakeItems();
  displayBagSummary();
}

function generateItemHTML(cake) {
  return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="${cake.image}" alt="${cake.name}">
        </div>
        <div class="item-right-part">
            <div class="company">${cake.name}</div>
            <div class="item-name">${cake.ingredient}</div>
            <div class="price-container">
                <span class="current-price">₹${cake.price}</span>
                <span class="original-price">₹${cake.mrp}</span>
                <span class="discount-percentage">${cake.offer}</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">10 Days</span> return available
            </div>
            <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">20 Jan 2026</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick ="removeFromBag(${cake.id})">✕</div>
    </div>`;
}