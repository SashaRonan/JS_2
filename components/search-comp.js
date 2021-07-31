const searchTemp = ` <form action="#" class="file-upload">

<details>
    <summary class="browse_summary"><span class="browse_text">Browse </span></summary>
    <div class="browse__drop">

        <p class="browse__drop__h">Woman</p>
        <hr>
        <ul class="browse__drop__ul">

            <a class="browse__drop__a" href="Product.html">
                <li>Dresses</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Tops</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Sweaters/Knits
                <li></li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Jackets/Coats</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Blazers</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Denim</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Leggings/Pants</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Skirts/Shorts</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Accessories </li>
            </a>
        </ul>
        <p class="browse__drop__h">Man</p>
        <hr>
        <ul class="browse__drop__ul">
            <a class="browse__drop__a" href="Product.html">
                <li>Tees/Tank tops</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Shirts/Polos</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Sweaters</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Sweatshirts/Hoodies</li>
                <li>Blazers</li>
            </a>
            <a class="browse__drop__a" href="Product.html">
                <li>Jackets/vests</li>
            </a>
        </ul>
    </div>
</details>

<!-- СТРОКА ПОИСКА -->

<input v-model="searchLine" class="header__search" placeholder="Search for Item.." type="text" >

<!-- КНОПКА ОЧИСТКИ ПОИСКА -->
                    <button v-on:click="clearSearch" class="close__button" >
                        <img src="https://openclipart.org/download/171382/1343828574.svg" alt="close" class="close__img">
                    </button>
                    

                    <!-- КНОПКА ПОИСКА -->
                    <button @click= "filterGoods" class="header_button" >SEARCH</button>

</form>`

Vue.component(`search-comp`, {
    template: searchTemp,
    data() {
        return {
            searchLine: '',
        }
    },
    methods: {
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.$emit('filter', regexp)
        },

        clearSearch() {
            this.searchLine = ''
            this.filterGoods()
        }
    }

})