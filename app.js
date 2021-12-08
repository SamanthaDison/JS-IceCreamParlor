// const iceCream = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },
// { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },
// { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]


const products = [{
    id: '1f',
    name: 'Vanilla',
    price: 2.00,
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/10/vanilla-ice-cream-scoop.jpg?fit=700,800'
},
{
    id: '2f',
    name: 'Chocolate',
    price: 2.00,
    image: 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2015/07/Brownie-Fudge-Swirl-Ice-Cream.jpg'
},
{
    id: '3f',
    name: 'Strawberry',
    price: 2.00,
    image: 'https://i0.wp.com/www.alattefood.com/wp-content/uploads/2015/05/Homemade-Strawberry-Ice-Cream-Recipe-12-up-close.jpg?resize=800%2C1360&ssl=1'
},
{
    id: '4f',
    name: 'Cookie Dough',
    price: 3.00,
    image: 'https://www.chiselandfork.com/wp-content/uploads/2021/06/chocolate-chip-cookie-dough-ice-cream-2.jpg'
},
{
    id: '1v',
    name: 'Waffle Cone',
    price: 2.00,
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg'
},
{
    id: '2v',
    name: 'Waffle Bowl',
    price: 4.00,
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg'
},
{
    id: '1t',
    name: 'Sprinkles',
    price: 1.00,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg'
},
{
    id: '2t',
    name: 'Chocolate Chips',
    price: 2.00,
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360'
}]

let cart = []

function drawMenu() {
    let template = ''
    products.forEach(prod => {
        template += `
        <div class="col-6 p-2">
            <div class="bg-white p-3 shadow ">
                <img class="product-img"
                    src="${prod.image}"
                    alt="${prod.name}">
                <div class="d-flex justify-content-between">
                    <p>${prod.name}</p>
                    <p>${prod.price}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById('menu').innerHTML = template
}

function drawCart() {
    let template = ''
    let total = 0
    cart.forEach(prod => {
        template += `
        <div>
        <p>${prod.name}</p>
        <p>${prod.price.toFixed(2)}</p>
        </div>
        `
    });
    document.getElementById('cart').innerHTML = template
}

function addToCart() {

}

drawMenu()