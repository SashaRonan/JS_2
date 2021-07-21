function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

class GoodsItem {
  constructor(title, price, imgsrc, quantity) {
    this.title = title;
    this.price = price;
    this.imgsrc = imgsrc;
    this.quantity = quantity;
  }

  // метод для сборки карточки товара
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

  // Метод для сборки карточки товара в  корзину 
  renderForCart() {
    return `    
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

const API_URL = 'https://raw.githubusercontent.com/SashaRonan/Data/For-Homework3';

class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }


  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/product.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      cb();
    })
  }


  fetchGoodsForCart(cb) {
    makeGETRequest(`${API_URL}/cart.json`, (goods) => {
      this.goods = JSON.parse(goods);
      cb();
    })
  }

  // Метод для сборки списка товаров
  render() {
    let listHtml = '';
    this.filteredGoods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price, good.imgsrc);
      listHtml += goodItem.render();
    });
    document.querySelector('.feature__cart').innerHTML = listHtml;
  }

  renderForCart() {
    let listHtml = '';
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price, good.imgsrc, good.quantity);
      listHtml += goodItem.renderForCart();
    });
    document.querySelector('.cart__drop').innerHTML = listHtml;
  }

  // Метод для сборки списка товаров в корзину
  filterGoods(queryString) {
    console.log(queryString);
    const regexp = new RegExp(queryString, 'i');
    this.filteredGoods = this.goods.filter((good) => regexp.test(good.title));
    this.render();
  }
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});


const listCart = new GoodsList();
list.fetchGoodsForCart(() => {
  list.renderForCart();
});


const searchInput = document.querySelector(".header__search");
const searchButton = document.querySelector(".header_button");


searchButton.addEventListener('click', () => {
  const value = searchInput.value;
  list.filterGoods(value);
  console.log(value);
});