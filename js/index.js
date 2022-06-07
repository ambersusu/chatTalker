$(document).ready(function () {


    utils.gotoTop('.top',3000);


    $('#dot1').click(function(e){
        $('#dot1').addClass('dot-avtive');
        $('#dot2').removeClass('dot-avtive');
        $('#dot3').removeClass('dot-avtive');
        $('#feedbackItem1').addClass('feedbackItem-avtive');
        $('#feedbackItem2').removeClass('feedbackItem-avtive');
        $('#feedbackItem3').removeClass('feedbackItem-avtive');
    });

    $('#dot2').click(function(e){

        $('#dot2').addClass('dot-avtive');
        $('#dot3').removeClass('dot-avtive');
        $('#dot1').removeClass('dot-avtive');
        $('#feedbackItem2').addClass('feedbackItem-avtive');
        $('#feedbackItem1').removeClass('feedbackItem-avtive');
        $('#feedbackItem3').removeClass('feedbackItem-avtive');
    });

    $('#dot3').click(function(e){
        $('#dot3').addClass('dot-avtive');
        $('#dot1').removeClass('dot-avtive');
        $('#dot2').removeClass('dot-avtive');
        $('#feedbackItem3').addClass('feedbackItem-avtive');
        $('#feedbackItem1').removeClass('feedbackItem-avtive');
        $('#feedbackItem2').removeClass('feedbackItem-avtive');
    });

    $('.btnPlan').click(function(){
       
        window.open('plan.html', '_blank');
    });

    $('.faq li').click(function(){
        $(this).toggleClass('active');
    });

});
