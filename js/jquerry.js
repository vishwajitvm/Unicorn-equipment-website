var originalContent = '';

$(window).resize(function() {
if (window.innerWidth < 480) {

    originalContent = $('.LatestNews').innerHTML;

    $('.call-login-button').replaceWith('<a href="http://unicorneequipment.blubrandzglobal.com/"><img src="./"></a>');

} else if (window.innerWidth > 480) {

    // Change back to original .LatestNews
    $('.LatestNews').innerHTML = originalContent;
}
}).resize();