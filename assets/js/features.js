// --- Sign In Modal ---
const signInModalbtn = document.querySelectorAll('#sign-modal');
const signModal = document.querySelector('.sign-modal');

// --- Sign Up Modal ---
const signUpModalbtn = document.querySelectorAll('#signup-modal');
const signUpModal = document.querySelector('.signup-modal');

// --- Cart Modal ---
const cartOverlay = document.querySelector('.cart-overlay');
const cartInnerlay = document.querySelector('.cart-innerlay');
const cartBtn = document.querySelectorAll('#cart-btn');

// LogIn Modal
signInModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signModal.classList.toggle('show'); 
        return signIn_UI
    });
});
// Registration Modal
signUpModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signUpModal.classList.toggle('show');
        return signUp_UI
    });
});

// Cart Button
cartBtn.forEach(element => {
    element.addEventListener('click', () => {
        cartOverlay.classList.add('show');
        cartInnerlay.classList.add('showCart');
    });
})

// When the user clicks anywhere outside of the modal, closes it
window.onclick = function(event) {
    if (event.target == signModal || event.target == signUpModal) {
        signModal.classList.remove('show');
        signUpModal.classList.remove('show');
    }
    if (event.target == cartOverlay ) {
        cartOverlay.classList.remove('show');
        cartInnerlay.classList.remove('showCart');
    }
}

const signUp_UI = signUpModal.innerHTML = `
    <div class="modal-container">
        <!-- Written Stuff -->
        <div class="modal-content">
            <div class="md">Welcome to <br><span class="clr-red md">Mit</span> <span class="clr-green md">Canteen</span></div>
            <div><i onclick="signUpModal.classList.remove('show');" class="fas fa-times"></i></div>
        </div>
        <!-- Other way of LogIn's -->
        <ul class="modal-icons flex">
                <li><button><i class="fab fa-google" id="google-signUpIn"></i></button></li>
                <li><button><i class="fab fa-github" id="github-signUpIn"></i></button></li>
                <li><button><i class="fab fa-facebook" id="facebook-signUpIn"></i></button></li>
        </ul>
        <!-- Sign Up Input's -->
        <form class="modal-form grid py-1 text-center" id="main-form">
            <input type="text" placeholder="Full Name" id="sign-up-full-name">
            <input type="text" placeholder="email id" id="sign-up-email">
            <input type="text" placeholder="Password" id="sign-up-password">
            <input type="text" placeholder="Re - Enter Password" id="sign-up-repassword">
            <input type="text" placeholder="Mobile Number" id="sign-up-number">

            <button type="submit" class="btn">Register</button>
        </form>
        <!-- Remember Me CheckBox -->
        <label class="text-center">
            <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <!-- Written Stuff -->
        <div class="modal-content m-content-2 py-1">
            Click “Register” to agree to Terms of Service and acknowledge 
            that Privacy Policy applies to you. Have account? 
            <a id="sign-modal" 
            onclick="signUpModal.classList.remove('show');
                    signModal.classList.add('show');" 
            style="cursor: pointer;">
                <span class="clr-green">Log In</span>
            </a>
        </div>
    </div>
`;

const signIn_UI = signModal.innerHTML = `
    <!-- Main Card -->
    <div class="modal-container">
        <!-- Written Stuff -->
        <div class="modal-content">
            <div class="md">Welcome back!</div>
            <div><i onclick="signModal.classList.remove('show');" class="fas fa-times"></i></div>
        </div>
        <!-- Other way of LogIn's -->
        <ul class="modal-icons flex">
            <li><button><i class="fab fa-google" id="google-signUpIn"></i></button></li>
            <li><button><i class="fab fa-github" id="github-signUpIn"></i></button></li>
            <li><button><i class="fab fa-facebook" id="facebook-signUpIn"></i></button></li>
        </ul>
        <!-- Sign In Input's -->
        <form class="modal-form grid py-1 text-center" id="signIn-form">
            <input type="text" placeholder="Email Id" id="sign-in-email">
            <input type="text" placeholder="Password" id="sign-in-password">

            <button type="submit" class="btn">Login</button>
        </form>
        <!-- Remember Me CheckBox -->
        <label class="text-center">
            <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <!-- Written Stuff -->
        <div class="modal-content m-content-2 py-1">
            Click “Sign In” to agree to Terms of Service and acknowledge 
            that Privacy Policy applies to you. No account? 
            <a id="signup-modal" 
                onclick="signModal.classList.remove('show');
                         signUpModal.classList.add('show');" 
                style="cursor: pointer;">
                <span class="clr-green">Create one</span>
            </a>
        </div>
    </div>
`;

function customerFooterUI() {
    const customerFooter = document.querySelector('.customer-footer');
    customerFooter.innerHTML = `
        <section class="container-min">
        <!-- Upper Footer -->
            <main class="grid grid-3">
                <!-- About College -->
                <article class="about">
                    <h1 class="sm">about</h1>
                    <p>Malwa Institute of Technology is governed by Indus 
                    Global Educational & Welfare Society which was founded 
                    in 2003 by a group of industrialists and educationalists
                    who shared a vision of establishing centers of scientific
                    learning around the country.</p>
                    <ul class="py-1">
                        <li><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/malwainstitute/" target="_blank"> Facebook</a></li>
                        <li><i class="fab fa-instagram"></i><a href="https://www.instagram.com/malwa_institute_of_technology/" target="_blank">Instagram</a></li>
                    </ul>
                </article>
                <!-- Navigation Links -->
                <article class="quick-links">
                    <ul>
                        <h1 class="sm">Quick Links</h1>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="menu.html">Order Online</a></li>
                        <li><a href="our-vision.html">Our Vision</a></li>
                        <li><a href="testimonials.html">About Us</a></li>
                    </ul>
                </article>
                <!-- Contact Details -->
                <article class="contact">
                    <ul>
                        <h1 class="sm">Contact Information</h1>
                        <li> <i class="fas fa-phone-alt"></i> <p>+91-731-2810001-08</p></li>
                        <li> <i class="fas fa-envelope"></i> <p>admission@mitindore.co.in</p></li>
                        <li> <i class="fas fa-map-marker-alt"></i> <p>Indore-Dewas Bypass Road, Indore (MP)-452016</p></li>
                        <li> <i class="fas fa-globe-asia"></i> <p>For Professional Courses, Visit: www.altius.ac.in</p></li>
                    </ul>
                </article>
            </main>
            <!-- Deep Devs Info -->
            <main class="deep-devs flex">
                <div>© Copyright 2020 - 2021. All Rights Reserved</div>
                <div class="">Designed & Developed with <i class="fas fa-heart clr-red"></i> By <a href="#">Deep Devs</a></div>
            </main>
        </section>
    `
}
customerFooterUI()


