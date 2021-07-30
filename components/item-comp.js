const itemTemp = `  <div class="item">
<a class="feature__card__a" href="Single_page.html">
    <div class="sp__item__box">
        <img class="item__pic" :src="good.imgsrc" alt="img__logo">
    </div>
    <div class="feature__txt__box">
        <h4 class="feature__card__h">{{good.title}}</h4>
        <p class="feature__card__p">{{good.price}}</p>
    </div>
</a>
<div class="in__box">
    <a v-on:click="addHandler" class="in">
        <img src="img/cart_add.svg" alt="cart_logo">
        <p class="in__txt">Add to Cart</p>
    </a>
</div>
</div>`

Vue.component(`item-comp`, {
    template: itemTemp,
    props: ['good'],
    methods: {
        addHandler() {
            this.$emit('add', this.good.id)
        }
    }
})