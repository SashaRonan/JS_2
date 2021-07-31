const cartItemTemp = `
<div class="cart__drop__product">
    <a href="#" class="cart__drop__a">
      <img :src="good.imgsrccart" alt="cart__logo" class="cart__drop__img">
    </a>
    <div class="cart__drop__prouduct__info">
      <a class="dec__none" href="Shopping Cart.html">
        <p class="cart__drop__h">{{good.title}}</p>
        <p> <span class="fas fa-star"></span>
          <span class="fas fa-star"></span>
          <span class="fas fa-star"></span>
          <span class="fas fa-star"></span>
          <span class="far fa-star"></span>
        </p>
        <p class="cart__drop__p">1 x $250</p>
      </a>
    </div>
    <div>
      <a class="dec__none" href="Product.html">
        <p class="fas fa-times-circle"></p>
      </a>
    </div>
    <hr>
</div>`


Vue.component(`itemcart-comp`, {
    template: cartItemTemp,
    props: ['good'],

})