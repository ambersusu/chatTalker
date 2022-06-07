// go to top
let utils = new function(){

    return {
        gotoTop: function(ele, speed){
            $(window).scroll(function() {
                if ($(this).scrollTop()) {
                    $(ele).fadeIn();
                } else {
                    $(ele).fadeOut();
                }
            });
            
            $(ele).click(function(){
                $('html, body').animate({scrollTop: 0}, speed);
            });
        }
    }
}
