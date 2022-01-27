$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    $('.menubtn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menubtn i').toggleClass("active");
    });
});    