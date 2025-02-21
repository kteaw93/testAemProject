var enc = (function (global, $) {

    var instance; // 단일 객체 생성 구분용

    function initiate() {
        return {
            /**
             * 연혁 라인 모션
             */
            historyProgress: function () {
                var $list = $(".history_cont_list");
                if ($list.length == 0) return;
                $(window).on("scroll", function () {
                    var sTop = $(window).scrollTop(),
                        winH = $(window).outerHeight(),
                        this_top = $(".history_cont_list").offset().top;

                    $.each($list, function () {
                        if ($(this).offset().top < (sTop + winH - this_top)) {
                            var nowScr = ((sTop + winH - this_top) - $(this).offset().top + 10 - 30);
                            var nowHei = $(this).outerHeight();
                            var nowPercent = nowScr / nowHei * 100;

                            if (nowPercent <= 100) {
                                $(this).find(".bar").height(nowPercent + "%");
                            } else {
                                $(this).find(".bar").height("100%");
                            }
                        }
                    });
                });
            },
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = initiate();
            }

            return instance;
        }
    };

}(window, jQuery));
var nsc = enc.getInstance();

$(function() {
    $('.full-page').fullpage({
        responsiveWidth: 1025,
        scrollHorizontally: true,
        slidesNavigation: true,
        controlArrows:false,
        slidesNavPosition: 'bottom',
        navigation: true,
        navigationPosition: 'right',
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);
            //after leaving section 2
            if (direction == 'down') {
                $('#header').fadeOut('slow');
                $('.header-layer').removeClass('active');
                $('.header-top').removeClass('active');
                $('.menu-trigger').removeClass('active');
            } else if (direction == 'up' && nextIndex == '1') {
                $('#header').fadeIn('slow');
            }
        },
        afterSlideLoad: function(section, origin, destination, direction) {
            $('.fp-slidesContainer').find('.slide').removeClass('current');
            $('.fp-slidesContainer').find('.slide').eq(destination).addClass('current');
        },
        afterLoad: function(origin, destination, direction) {
            if(destination == 2){
                $('.full-page').find('.section').eq(1).addClass('current');
            } else{
                $('.full-page').find('.section').eq(1).removeClass('current');
            }
        },
    });
    $('.fp-slidesContainer').find('.slide').eq(0).addClass('current');

    $('#moveTop').on('click', function(){
        $('.full-page').fullpage.moveTo(1);
    });
});
