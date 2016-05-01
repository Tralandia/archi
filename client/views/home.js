Template.home.onRendered(function() {
    $(window).scrollTop(0);
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );
    
    new WOW().init();
});
