$(document).ready(function () {

    
    utils.gotoTop('.top',3000);

    $('.btnNumber').click(function(){
        $('.qty').text($(this).text().replace('位',''));
    });

    // 折疊選單 
    $('.faq > ul > li').click(function(){
        
        $(this).find('.question').toggleClass('active');
        $(this).find('p').slideToggle();
        $(this).siblings().find('p').slideUp();
        $(this).siblings().find('.question').removeClass('active');
    });


});