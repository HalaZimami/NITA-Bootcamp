let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


let products = [
    {
        id: 1,
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Arabica Coffee Beans',
        image: 'product.png',
        price: 13
    },
    {
        id: 2,
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Robusta Coffee Beans',
        image: 'product.png',
        price: 13
    },
    {
        id: 3,
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Liberica Coffee Beans',
        image: 'product.png',
        price: 13
    },
    {
        id: 4,
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Excelsa Coffee Beans',
        image: 'product.png',
        price: 13
    },
    {
        id: 5,
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Arabica Coffee Beans',
        image: 'product.png',
        price: 13
    },
    {
        id: 6,
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans',
        image: 'product.png',
        price: 13
    },
    {
        id: 7,
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans',
        image: 'product.png',
        price: 13
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="card">
        <div class="product-icons">
            <img src="${value.reviews}">
            <img src="${value.fav}">
            </div>
            <img src="${value.image}" alt="product" style="width:100%">
            <div class="content">
            <p class="product-name title">${value.name}</p>
            <hr>
            <div class="card-footer">
            <div class="price"><span
            style="color: rgba(128, 128, 128, 0.548); text-decoration: line-through;">$20  </span> $${value.price.toLocaleString()}</div>
            <button class="cart-img" onclick="addToCard(${key})">Add To Card</button>
            </div>
            </div>
            </div>`
            ;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}