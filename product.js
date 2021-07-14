class GoodsItem {
    constructor(title, price, imgsrc, quantity) {
      this.title = title;
      this.price = price;
      this.imgsrc = imgsrc;
      this.quantity = quantity;
    }
    render() {
      return `<div class="item">
      <a class="feature__cart__a" href="Single_page.html">
      <div class="sp__item__box">
      <img class="item__pic" src="${this.imgsrc}" alt="img__logo"></img>
      </div>
      <div class="feature__txt__box">
      <h4 class="feature__cart__h">${this.title}</h4>
      <p class="feature__cart__p">${this.price}</p>
      </div>
      </a>
      <div class="in__box">
      <a href="Shopping Cart.html" class="in">
      <img src="img/cart_add.svg" alt="cart_logo">
      <p class="in__txt">Add to Cart</p>
      </a>
      </div>
      </div>`;
    }
   
    renderForCart () {
        return `    <div class="cart__drop">
        <div class="cart__drop__product">
            <a href="#" class="cart__drop__a">
                <img src="${this.imgsrc}" alt="cart__logo" class="cart__drop__img">
            </a>
            <div class="cart__drop__prouduct__info">
                <a class="dec__none" href="Shopping Cart.html">
                    <p class="cart__drop__h">${this.title}</p>
                    <p> <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                        <span class="far fa-star"></span>
                    </p>
                    <p class="cart__drop__p">${this.quantity} x ${this.price}</p>
                </a>
            </div>
            <div>
                <a class="dec__none" href="Product.html">
                    <p class="fas fa-times-circle"></p>
                </a>
            </div>
        </div>`
    }
  }
  
  class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [{
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
    }

    fetchGoodsForCart () {
        this.goods = [{
            title: 'Rebox Zane',
            price: '$250',
            imgsrc: 'img/cart__img__1.png',
            quantity: '1'
        },
        {
            title: 'Rebox Zane',
            price: '$250',
            imgsrc: 'img/cart__img__2.png',
            quantity: '1'
        },
    ]
    }

    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price, good.imgsrc);
        listHtml += goodItem.render();
      });
      document.querySelector('.feature__cart').innerHTML = listHtml;
    }

    renderForCart() {
    let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price, good.imgsrc);
        listHtml += goodItem.renderForCart();
      });
      document.querySelector('.cart__drop').innerHTML = listHtml;
    }
    }

    // costOfGoods () {
        
    // }
  

  const list = new GoodsList();
list.fetchGoods();
list.render();


const listCart = new GoodsList();
listCart.fetchGoodsForCart();
listCart.renderForCart();

// const goods = [{
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_1.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_2.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_3.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_4.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_5.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_6.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_7.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_8.png'
//     },
//     {
//         title: 'Mango People T-shirt',
//         price: '$52.00',
//         imgsrc: 'img/product_img_9.png'
//     },

// ];

// const $goodsList = document.querySelector('.feature__cart');

// const renderGoodsItem = ({
//     title,
//     price,
//     imgsrc
// }) => {
//     return `<div class="item">
//     <a class="feature__cart__a" href="Single_page.html">
//     <div class="sp__item__box">
//     <img class="item__pic" src="${imgsrc}" alt="img__logo"></img>
//     </div>
//     <div class="feature__txt__box">
//     <h4 class="feature__cart__h">${title}</h4>
//     <p class="feature__cart__p">${price}</p>
//     </div>
//     </a>
//     <div class="in__box">
//     <a href="Shopping Cart.html" class="in">
//     <img src="img/cart_add.svg" alt="cart_logo">
//     <p class="in__txt">Add to Cart</p>
//     </a>
//     </div>
//     </div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         item => renderGoodsItem(item)
//     ).join('');

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }

// renderGoodsList();