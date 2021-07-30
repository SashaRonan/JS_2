const subscribeTemp = `<section class="subscribe">

<div class="subscribe__container container">
    <!-- Отзывы левая колонка-->
    <figure class="subscribe__left">
        <div class="subscribe__left__ellipse">
            <img class="subscribe__left_img" src="img/subscribe_ellipse.png" alt="elipse">
            <div class="subscribe__left__p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar
                purus condimentum a. Aliquam condimentum mattis neque sed pretium”</div>
        </div>
        <div class="subscribe__left__burhan">
            <h4 class="subscribe__left__burhan__h">Bin Burhan</h4>
            <p class="subscribe__left__burhan__p">Dhaka, Bd</p>
        </div>

        <!-- Переключатель в отзывах -->
        <div class="form_radio_group">
            <div class="form_radio_group-item">
                <input id="radio-1" type="radio" name="radio" value="1" checked>
                <label for="radio-1"></label>
            </div>
            <div class="form_radio_group-item">
                <input id="radio-2" type="radio" name="radio" value="2">
                <label for="radio-2"></label>
            </div>
            <div class="form_radio_group-item">
                <input id="radio-3" type="radio" name="radio" value="3">
                <label for="radio-3"></label>
            </div>
        </div>

    </figure>

    <!-- Отзывы правая колонка-->
    <section class="subscribe__right">
        <p class="subscribe__right__h">SUBSCRIBE</p>
        <p class="subscribe__right__p">FOR OUR NEWLETTER AND PROMOTION</p>
        <div class="subscribe__right__email">
            <input type="email" class="subscribe__right__box" placeholder="Enter Your Email">
            <button class="subscribe__right__button">Subscribe</button>
        </div>
    </section>


</div>
</section>`

Vue.component(`subscribe-comp`, {
    template: subscribeTemp
})