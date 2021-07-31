const headerTemp = `

<header class="header container">

<div class="header__left">

    <!-- Логотип -->
    <a class="logo__a" href="index.html">
        <div class="header__brand">
            <img src="img/logo.svg" alt="logo">
            <p class="logo__text">Bran<span class="letter">d</span></p>
        </div>
    </a>

    <!-- ПОИСК -->
     <search-comp @filter ="filterGoods"></search-comp>
    

</div>

<!-- КОРЗИНА -->
<cart-comp v-bind:cart="cart" ></cart-comp>



</header>`

Vue.component(`header-comp`, {
    template: headerTemp,
    props: ['cart'],
    methods: {
        filterGoods(regexp) {
            this.$emit('filter_goods', regexp)
        },

    }
})