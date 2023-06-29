$(document).ready(function () {
    function addClassOnResize() {
        if ($(window).width() < 768) {
            $('.company-info-table').addClass('container');
        } else {
            $('.company-info-table').removeClass('container');
        }
    }

    // Call the function on page load
    addClassOnResize();

    // Add event listener for window resize
    $(window).on('resize', function () {
        addClassOnResize();
    });
});