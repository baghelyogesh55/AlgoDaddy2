$(document).ready(function() {
    $(".navbar-toggler").on("click", function() {
        $(".mobileMenu").toggleClass("open");
    })
});

$(document).ready(function() {
    $('.dropdown-submenu a.test').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});