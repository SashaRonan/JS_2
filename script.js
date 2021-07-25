const vue = new Vue({
  el: '#app',

  data: {
    isModified: false,
    goods: [],
    filteredGoods: [],
    searchLine: '',
    cart: [],
    isLoaded: false,
    isVisibleCart: false
  },

  methods: {

    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.goods.filter((good) => regexp.test(good.title));
    },

    add() {
      this.cart.push({
        title: this.goods[index].title,
        price: this.goods[index].price
      });
    },

    clearSearch() {
      this.searchLine = ''
      this.filterGoods()
    }
  },

  mounted() {

    fetch('/product.json')
      .then((response) => response.json())
      .then((data) => setTimeout(() => {
        this.goods = data
        this.filteredGoods = data
        this.cart = data
        this.isLoaded = true
        this.isVisibleCart = true
      }, 0))
  }
})