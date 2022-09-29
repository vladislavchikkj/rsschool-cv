$(document).ready(function(){
    // pageup

    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else $('.pageup').fadeOut();
    }); 


    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        console.log(_href)
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

