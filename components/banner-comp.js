const bannerTemp = `<article class="product_banner">
<div class="product_banner__container container">

    <div class="product_banner__box">
        <img class="product_banner__img" src="img/car.svg" alt="product_banner">
        <p class="product_banner__h">Free Delivery</p>
        <p class="product_banner__p">Worldwide delivery on all. Authorit tively morph next-generation innovation
            with extensive models.</p>

    </div>

    <div class="product_banner__box">
        <img class="product_banner__img" src="img/percent.svg" alt="product_banner">
        <p class="product_banner__h">Sales & discounts</p>
        <p class="product_banner__p">Worldwide delivery on all. Authorit tively morph next-generation innovation
            with extensive models.</p>

    </div>

    <div class="product_banner__box">
        <img class="product_banner__img" src="img/corona.svg" alt="product_banner">
        <p class="product_banner__h">Quality assurance</p>
        <p class="product_banner__p">Worldwide delivery on all. Authorit tively morph
            next-generation innovan with extensive models.</p>

    </div>

</div>
</article>`

Vue.component(`banner-comp`, {
    template: bannerTemp
})