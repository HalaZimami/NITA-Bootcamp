export const nav = `
<img class="logo" src="images/Logo.png" alt="logo" width="300px" width="318" height="83">
<nav class="menu">
    <ul class="navbat">
        <ul>
            <a href="home.html">
                <li class="navbar-h">Home</li>
            </a>
            <a href="products.html">
                <li class="navbar-h">Shop</li>
            </a>
            <li class="navbar-h">Services</li>
        </ul>
</nav>
<div class="icons">

    <div class="search">
        <input type="search" placeholder="  search">
        <img src="images/search.png" alt="search" class="searchimg">
    </div>

    <div class="icons2">
            <div class="cart shopping">
                <img class="cartimg" src="images/cart.png" alt="cart" width="33" height="33">
                <p class="pheader">Cart(<span class="quantity">0</span>)
                </p>
            </div>
        <div class="profile" width="113" height="20px">
            <img src="images/profile.png" alt="cart" width="38" height="38">
            <p class="pheader">Profile</p>
        </div>
    </div>
</div>
`
document.getElementById('header').innerHTML = nav;

export const footer = `
<div class="footer-set">
<img class="footer-logo" src="images/footer-logo.png" alt="logo" height="100">
<nav class="footer-m">
    <ul class="navbar">
        <li class="navbar-f">About Us</li>
        <li class="navbar-f">Contact Us</li>
        <li class="navbar-f">Policy & Privacy</li>
    </ul>
</nav>

<div class="icons-footer">
    <img class="media" src="images/instagram.png" alt="">
    <img class="media" src="images/facebook.png" alt="">
    <img class="media" src="images/twitter.png" alt="">
    <img class="media" src="images/pintrest.png" alt="">
</div>
</div>
`
document.getElementById('footer').innerHTML = footer;
