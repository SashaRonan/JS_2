const vue = new Vue({
    el: '#app',

    data() {
        return {
            goods_list: [],
            cart: [],
            filteredGoods: [],
            searchLine: '',
        }
    },
    methods: {
        addHandler(id) {
            const good = this.goods_list.find(good => good.id === id);
            this.cart.push(good);
            console.log(this.cart)
        },

        filterGoods(regexp) {
            this.filteredGoods = this.goods_list.filter((good) => regexp.test(good.title));
        },

    },

    mounted() {

        fetch('https://raw.githubusercontent.com/SashaRonan/Data/For-Homework3/product.json')
            .then((response) => response.json())
            .then((data) => setTimeout(() => {
                this.goods_list = data
            }, 0))
    }

})