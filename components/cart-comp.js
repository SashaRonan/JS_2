const cartTemp = `<!-- Правая часть шапки -->
<div class="header__cart">

  <div class="cart">
    <a><img src="img/cart.png" alt="logo"></a>

    <!-- СЧЕТЧИК ТОВАРОВ В КОРЗИНЕ -->
    <span class="cart_count" v-bind:cart="cart">{{ cart.length }}</span>


    <template v-if="cart.length > 0">
        <div class="cart__hide">

            <div class="cart__drop">

                <!-- ДОБАВЛЕНИЕ КАРТОЧЕК ТОВАРОВ В КОРЗИНУ -->
                <itemcart-comp v-for="good of cart" v-bind:good="good" :key="good.id"></itemcart-comp>
            
            <div class="cart__drop__total">
                <p class="cart__drop__h">Total</p>
                <p class="cart__drop__h">5000$</p>
            </div>

            <div class="cart__drop__button">
                <a href="Product.html" class="cart__drop__a">CHECKOUT</a>    
            </div>

            <div class="cart__drop__button">   
                <a href="Shopping Cart.html" class="cart__drop__a">GO TO CART</a>
            </div>
        
            </div>
        </div>
    </template>
    
  </div>
  <div class="account__text">My Account</div>
</div>`


Vue.component(`cart-comp`, {
    template: cartTemp,
    props: ['cart'],


})