
$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function () {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    // Mostramos y ocultamos submenus
    $('.submenu').click(function () {
        $(this).children('.children').slideToggle();
    });
}
// llamado de logo
 $(function () {
     $(window).scroll(function () {
         if ($(window).scrollTop() > 80) {
             $("header").addClass('header')
            $('.logotipo').html('<a href="index.html"><img src="img/logo2.png" class="responsive-img logo"/></a>');
         } else {
             $("header").removeClass('header')
             $('.logotipo').html('<a href="index.html"><img src="img/logo.png" class="responsive-img logo"/></a>');

         }
     });
 });