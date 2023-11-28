<!-- Top header for desktop -->
<div class="container small-header">
    <div class="row">
        <div class="col-md-6">
            <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'top-nav',
                            'menu_id'        => 'top-nav-menu',
                            'container'      => 'false'
                        )
                    );
                ?>
        </div>
        <div class="col-md-6">
            <ul class="social-icons">
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
</div>

<!-- Main Header for Desktop -->
<div class="main-header container">
    <div class="row align-items-center">
        <div class="site-branding col-md-4">
            <a href="" id="desktop-mega-toggle" class="mega-menu-toggle">
                <i class="fa fa-bars"></i>
            </a>
            <?php
            if(has_custom_logo()){
                the_custom_logo();
            }else{
                bloginfo( 'name' );
            }
            ?>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
        <div class="col-md-4">
            <div class="list-inline-flex">
            <ul class="action-buttons">
                <li><a href="#"><i class="fa-solid fa-store"></i></a></li>
                <li><a href="#"><i class="fa-regular     fa-heart"></i></a></li>
                <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-shopping-bag"></i></a></li>
            </ul>
            </div>
        </div>

</div>
