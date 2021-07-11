const goods = [{
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_1.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_2.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_3.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_4.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_5.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_6.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_7.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_8.png'
    },
    {
        title: 'Mango People T-shirt',
        price: '$52.00',
        imgsrc: 'img/product_img_9.png'
    },

];

const $goodsList = document.querySelector('.feature__card');

const renderGoodsItem = ({
    title,
    price,
    imgsrc
}) => {
    return `<div class="item">
    <a class="feature__card__a" href="Single_page.html">
    <div class="sp__item__box">
    <img class="item__pic" src="${imgsrc}" alt="img__logo"></img>
    </div>
    <div class="feature__txt__box">
    <h4 class="feature__card__h">${title}</h4>
    <p class="feature__card__p">${price}</p>
    </div>
    </a>
    <div class="in__box">
    <a href="Shopping Cart.html" class="in">
    <img src="img/cart_add.svg" alt="cart_logo">
    <p class="in__txt">Add to Cart</p>
    </a>
    </div>
    </div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();