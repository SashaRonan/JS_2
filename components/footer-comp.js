const footerTemp = `<footer>

<!-- Информация футер -->
<div class="footer container">

    <div class="footer__brand">

        <a class="logo__a" href="index.html">
            <div class="header__brand">
                <img src="img/logo.svg" alt="logo">
                <p class="logo__text">Bran<span class="letter">d</span></p>
            </div>
        </a>

        <div class="footer__brand__p">
            <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally
                syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an
                expanded
                array of processes and cross-unit partnerships.</p>

            <p style="margin-top: 2em;">Efficiently plagiarize 24/365 action items and focused infomediaries.
                Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
        </div>
    </div>

    <div class="footer__column__box">
        <div class="footer__column">
            <h4 class="footer__column__h">COMPANY</h4>
            <ul class="footer__ul">
                <a class="footer__li__a" href="index.html">
                    <li>Home</li>
                </a>
                <a class="footer__li__a" href="Product.html">
                    <li>Shop</li>
                </a>
                <a class="footer__li__a" href="Checkout.html">
                    <li>About</li>
                </a>
                <a class="footer__li__a" href="Checkout.html">
                    <li>How It Works</li>
                </a>
                <a class="footer__li__a" href="Checkout.html">
                    <li>Contact</li>
                </a>
            </ul>
        </div>

        <div class="footer__column">
            <h4 class="footer__column__h">INFORMATION</h4>
            <ul class="footer__ul">
                <a class="footer__li__a" href="#">
                    <li>Tearms & Condition</li>
                </a>
                <a class="footer__li__a" href="#">
                    <li>Privacy Policy</li>
                </a>
                <a class="footer__li__a" href="#">
                    <li>How to Buy</li>
                </a>
                <a class="footer__li__a" href="#">
                    <li>How to Sell</li>
                </a>
                <a class="footer__li__a" href="#">
                    <li>Promotion</li>
                </a>
            </ul>
        </div>

        <div class="footer__column">
            <h4 class="footer__column__h">SHOP CATEGORY</h4>
            <ul class="footer__ul">
                <a class="footer__li__a" href="Product.html">
                    <li>Men</li>
                </a>
                <a class="footer__li__a" href="Product.html">
                    <li>Women</li>
                </a>
                <a class="footer__li__a" href="Product.html">
                    <li>Child</li>
                </a>
                <a class="footer__li__a" href="Product.html">
                    <li>Apparel</li>
                </a>
                <a class="footer__li__a" href="Product.html">
                    <li>Brows All</li>
                </a>
            </ul>
        </div>

    </div>

</div>

<!-- Копирайт -->
<div class="footer__rights">
    <div class="footer__rights__block container">

        <div class="footer__rights__p">© 2017 Brand All Rights Reserved.</div>

        <nav class="footer__social">

            <a href="https://www.facebook.com/">
                <div class="footer__rights__social">
                    <p class="fab fa-facebook-f"></p>
                </div>
            </a>
            <a href="https://twitter.com/">
                <div class="footer__rights__social">
                    <p class="fab fa-twitter"></p>
                </div>
            </a>
            <a href="https://linkedin.com">
                <div class="footer__rights__social">
                    <p class="fab fa-linkedin-in"></p>
                </div>
            </a>
            <a href="https://www.pinterest.ru/">
                <div class="footer__rights__social">
                    <p class="fab fa-pinterest-p"></p>
                </div>
            </a>
            <a href="https://plus.google.com/">
                <div class="footer__rights__social">
                    <p class="fab fa-google"></p>
                </div>
            </a>
        </nav>
    </div>
</div>
</footer>`

Vue.component(`footer-comp`, {
    template: footerTemp
})