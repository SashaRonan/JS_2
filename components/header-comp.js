const headerTemp = `<header class="header container">

<div class="header__left">

    <!-- Логотип -->
    <a class="logo__a" href="index.html">
        <div class="header__brand">
            <img src="img/logo.svg" alt="logo">
            <p class="logo__text">Bran<span class="letter">d</span></p>
        </div>
    </a>

    <!-- Левая часть шапки -->
   
    <search-comp></search-comp>

</div>

<!-- Правая часть шапки -->
<div class="header__card">

    <div class="card">
        <a><img src="img/cart.png" alt="logo"><span>{{ cart.length }}</span></a>
    </div>

    <details>
        <summary class="account__text">My Account</summary>

        <div class="card__drop">
            <div class="card__drop__product">
                <a href="#" class="card__drop__a">
                    <img src="img/card__img__1.png" alt="card__logo" class="card__drop__img">
                </a>
                <div class="card__drop__prouduct__info">
                    <a class="dec__none" href="Shopping Cart.html">
                        <p class="card__drop__h">Rebox Zane</p>
                        <p> <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                            <span class="far fa-star"></span>
                        </p>
                        <p class="card__drop__p">1 x $250</p>
                    </a>
                </div>
                <div>
                    <a class="dec__none" href="Product.html">
                        <p class="fas fa-times-circle"></p>
                    </a>
                </div>
            </div>
            <hr>

            <div class="card__drop__product">
                <a href="Shopping Cart.html" class="card__drop__a"><img src="img/card__img__2.png" alt=""
                        class="card__drop__img"></a>
                <div class="card__drop__prouduct__info">
                    <a class="dec__none" href="Shopping Cart.html">
                        <p class="card__drop__h">Rebox Zane</p>
                        <p> <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                            <span class="far fa-star"></span>
                        </p>
                        <p class="card__drop__p">1 x $250</p>
                    </a>
                </div>
                <div>
                    <a class="dec__none" href="Product.html">
                        <p class="fas fa-times-circle"></p>
                    </a>
                </div>
            </div>
            <hr>

            <div class="card__drop__total">
                <p class="card__drop__h">Total</p>
                <p class="card__drop__h">5000$</p>
            </div>
            <div class="card__drop__button"><a href="Product.html" class="card__drop__a">CHECKOUT</a></div>
            <div class="card__drop__button"><a href="Shopping Cart.html" class="card__drop__a">GO TO CART</a></div>

        </div>
        </details>
</div>

</header>`

Vue.component(`header-comp`, {
    template: headerTemp,
    props: ['cart'],
    
})