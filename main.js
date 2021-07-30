const vue = new Vue({
    el: '#app',
    data() {
        return {
            goods_list: [{
                    id: 1,
                    title: "Jacket",
                    price: 10,
                    imgsrc: "img/product_img_1.png"
                },
                {
                    id: 2,
                    title: "Coat",
                    price: 3,
                    imgsrc: "img/product_img_2.png"
                },
                {
                    id: 3,
                    title: "Jacket",
                    price: 12,
                    imgsrc: "img/product_img_3.png"
                },
                {
                    id: 4,
                    title: "T-shirt",
                    price: 9,
                    imgsrc: "img/product_img_4.png"
                },
                {
                    id: 5,
                    title: "Hoodie",
                    price: 17,
                    imgsrc: "img/product_img_5.png"
                },
                {
                    id: 6,
                    title: "Tunic",
                    price: 20,
                    imgsrc: "img/product_img_6.png"
                },
                {
                    id: 7,
                    title: "Suit",
                    price: 14,
                    imgsrc: "img/product_img_7.png"
                },
                {
                    id: 8,
                    title: "Jacket",
                    price: 13,
                    imgsrc: "img/product_img_8.png"
                },
                {
                    id: 9,
                    title: "T-shirt",
                    price: 10,
                    imgsrc: "img/product_img_9.png"
                }
            ],
            cart: [],         
        }
    },
    methods: {
        addHandler(id) {
            const good = this.goods_list.find(good => good.id === id);
            this.cart.push(good);
            console.log(this.cart)
        },

       
    }
})