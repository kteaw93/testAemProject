document.addEventListener('DOMContentLoaded', function() {
$( "[data-pop]" ).click(function () {
    $('.'+$("[data-pop]").attr('data-pop')).removeClass('show');
    var target = $(this).attr('data-pop')
    $('.'+target).addClass('show');

    if(target.substring(0,5) =="video"){
        if($('.'+target).find("video").length != 0){
            var vid= $('.'+target).find("video").get(0)
            vid.play();
        }

    }
}) ;


//popup
$( ".pop-close" ).click(function () {
    $(this).parents('.popup').removeClass('show');
    if($(this).parents('.popup').hasClass('video-pop')){
        var vid= $(".popup").find("video").get(0)
        vid.pause();
        vid.currentTime = 0;
        if($(this).hasClass("youtubeplayer")){
            stopVideo();
        }
    }
})


// 탭 메뉴
$('.tab-ul li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('.tab-ul li').removeClass('current');
    $('.tabcont').removeClass('current');
    $(this).addClass('current');
    $('#' + activeTab).addClass('current');
})

});
