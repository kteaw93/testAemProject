var formhelper;

$(function(){

    $(window).resize( function(){
        funcThisSize();
    } );
    funcThisSize();
    /*
    //-----Work 정렬
    var $grid = $('.works-wrap').isotope({
        itemSelector : '.item',
        columnWidth : '.item',
        percentPosition : true,
        transitionDuration : '0.8s',
        masonry: {
        columnWidth: 4
        }
    });

    $('.filter a').on('click',function(e){
        $('.filter a').removeClass('on');
        e.preventDefault();
        var sort = $(this).attr('href');
        $grid.isotope({filter:sort});
        $(this).addClass('on');
  });
  //-----Work 정렬 끝
*/

    //-----햄버거메뉴
    var burger = $('.menu-trigger');
    burger.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('html').css('overflow', 'hidden');
        }else{
            $('html').css('overflow', 'auto');
        }
    });
    //-----햄버거메뉴 끝

    //-----헤더 hover
    $(".nav-menu li, .header-layer").on('mouseover', function(e){
        e.preventDefault();
        $(".header-layer").addClass('active');
        $(".header-top").addClass('active');
        $('html').css('overflow', 'hidden');
    });

    $(".header-layer").on('mouseleave, mouseout ', function(e){
        if( !$('.menu-trigger').hasClass('active')){
            e.preventDefault();
            $(".header-layer").removeClass('active');
            $(".header-top").removeClass('active');
            $('html').css('overflow', 'auto');
        }
    })

    $(".menu-trigger").on('click', function(e){
        if( $(this).hasClass('active')){
            e.preventDefault();
            $(".header-layer").addClass('active');
            $(".header-top").addClass('active');
            burger.addClass('active');
        } else {
            e.preventDefault();
            $(".header-layer").removeClass('active');
            $(".header-top").removeClass('active');
            burger.removeClass('active');

            if( $(window).width() < 1240){
                $(".header-layer-wrap p").removeClass('active');
            }
        }
    })
    //-----헤더 hover 끝


    //nav 아코디언 메뉴
    $(".header-layer-wrap p").on('click',function(){
        if( $(window).width() < 1240){
            $(this).toggleClass('active');
        }else{
            $(this).removeClass('active');
        }

    });


    // 탭 메뉴
    $('.tab-ul li').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('.tab-ul li').removeClass('current');
        $('.tabcont').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    })

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

    $( "[data-pop]" ).click(function () {
        $('.'+$("[data-pop]").attr('data-pop')).removeClass('show');
        var target = $(this).attr('data-pop')
        $('.'+target).addClass('show');

        if(target.substring(0,5) =="video"){
            if($('.'+target).find("video").length != 0){
                var vid= $('.'+target).find("video").get(0)
                vid.play();
            }

            // if($(".popup").find("video").length >= 1){
            // 	var vid= $(".popup").find("video").get(0)
            // 	vid.play();
            // }
        }
    }) ;


    //notice 팝업 오늘하루안보기
    $("#layer1 .pop_check_close").click(function () {
        if($("#layer1 .checkbox-wrap input:checkbox[name=chk]").is(":checked") == true) {
            setCookieMobile( "todayCookie", "done" , 1);
        }
        $("#layer1").hide();
    });





    //스크롤 TOP
    var topEle = $('#topBtn');
    topEle.hide(); // 탑 버튼 숨

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { // 스크롤 내릴 표시
            topEle.fadeIn();
            var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
            if(scrollBottom < 292){
                $('#topBtn').addClass('footertop');
            }else{
                $('#topBtn').removeClass('footertop');
            }
            if(scrollBottom < 195){
                $('#topBtn').css("bottom","230px");
                $('#topBtn').css("position","absolute");
            }else{

                $('#topBtn').css("bottom","40px");
                $('#topBtn').css("position","fixed");
            }
            if( $(window).width() < 1025){
                if(scrollBottom < 410){
                    $('#topBtn').addClass('footertop');
                }else{
                    $('#topBtn').removeClass('footertop');
                }
            }
            if( $(window).width() < 769){
                if(scrollBottom < 346){
                    $('#topBtn').addClass('footertop');
                }else{
                    $('#topBtn').removeClass('footertop');
                }
            }

        } else {
            topEle.fadeOut();
        }
    });

    var delay = 500;
    topEle.on('click', function() {
        $('html, body').stop().animate({scrollTop: 0}, delay);
    });
    //스크롤탑 끝
    //work 에서 사용
    $("#workTab").on("click", function() {
        if ($(".logo").length == 0) {
            getWorkList();
        }
    });

    // sus 추가
    if($('.sus-fileupload').length>0){
        formhelper = $('.sus-fileupload').formhelper({
            maxBytes: 9 * 1024 * 1024,
            maxFiles: 3,
            language: {
                selectFile: '+ 파일 찾기',
                selectingFile: 'Selecting files...',
                unselectFile: 'No files selected.',
                limitMsg: 'File size limit ({0}). Upload limit {1} files.',
                acceptMsg: 'File accept format list: {0}',
                fileSizeOverload: 'File size overload! limit size: {1}',
                fileCountOverload: 'File count overload! limit count: {1}',
            },
            onFail: function (e) {
                alert(`[${e.code}] ${e.msg}`);
            },
        });
        var fileup = formhelper.addFilePicker({
            // FilePicker append target, Default into formhelper $el
            container: false,
            maxBytes: 9 * 1024 * 1024,
            maxFiles: 3,
            canRemove: true,
            canModify: true,
            showFileSize: true,
            fileInput: {
                name: 'attach[]',
                // accept:[],
                accept: ['image/*', '.pdf', '.xls', '.xlsx', '.ppt', '.pptx', '.doc', '.docx', '.hwp'],
                multiple: false,
            },
            onChange: function (config) {
                var total = formhelper.getFilePickerInfo();
                var totalText = ['Total', 'count: ' + total.count, 'size: ' + total.sizeHum];
                var demoText = ['Attach', 'count: ' + fileup.getCount(), 'size: ' + fileup.getSize(true)];

                console.log('Total', totalText.join(' | '));
                console.log('Attach', demoText.join(' | '));
            },
            onCreate: function (config) {
                console.log('create event', config);
            },
            onRemove: function (config) {
                console.log('remove event', config);
            },
        });
    }

    $('.sus-form-radio-box .sus-form-radio input').on('click',function () {
        var aim = $(this).attr('data-aim');
        $('.sus-tap-box').removeClass('open');
        $('.sus-tap-box[data-target='+aim+']').addClass('open');
    })
    $('.sus-form-radio.type-small input').on('click',function () {
        var aim = $(this).attr('data-aim');
        $('[data-target="sus03"]').show();
        $('[data-target='+aim+']').hide();
        // $('.sus-tap-box[data-target='+aim+']').addClass('open');
    })
    // sus 끝

})

function funcThisSize() {

    if( $(window).width() < 1025){
        $(".accordion input[type='checkbox']").prop("checked", false);
        $(".accordion input[type='checkbox']").prop("disabled", false);

    }else{
        $(".accordion input[type='checkbox']").prop("checked", true);
        $(".accordion input[type='checkbox']").prop("disabled", true);
    }

}

//S.works list
function getWorkList() {
    var param = {};
    var selectClass = ".works-wrap";
    //works에서만 year검색
    if (location.href.indexOf("/web/works") >= 0) {
        param.year = ComUtils.getValue("year");
        //main cust별
    } else if ($(".biz-work").length > 0 ){
        var selectClass = ".biz-work";
        if (location.href.indexOf("/web/it-consulting/") >= 0 ) {
            param.bizArea = "IT";
        } else if (location.href.indexOf("/web/digital-marketing/") >= 0 ) {
            param.bizArea = "DM";
        } else if (location.href.indexOf("/web/enterprise-data/") >= 0 ) {
            param.bizArea = "ENT_DATA";
        } else if (location.href.indexOf("/web/enterprise-integration/") >= 0 ) {
            param.bizArea = "ENT_INTEG";
        }
    } else {
        return;
    }
    var headNo;
    //works main
    ComUtils.callAjax("/web/getWorkList.do", param, function(resp) {
        if( resp.result == "T") {

            var detailHtml = "";
            if ((selectClass == ".biz-work")) {
                detailHtml += '<div class="inner">';
                detailHtml += '<div>';
            }
            var vo1 ="";
            var vo2 ="";
            var bizArea ="";

            //works list object
            for (var i=0; i<resp.data.length; i++) {
                var vo1 = resp.data[i];
                var headNo = i+1;

                detailHtml += '	<div class=\"item  '+vo1.bizArea.toLowerCase()+'\">';
                detailHtml += '		<div class=\"itembox\">';
                detailHtml += '			<div class=\"cont\">';
                detailHtml += '<span class=\"work-year\">'+vo1.year+'</span>';
                detailHtml += '<p class=\"work-title\">'+vo1.projectNm+'<br></p>';

                if (!ComUtils.isEmpty(vo1.custCi)){
                    detailHtml+= '		<img class="logo" src="/web/data/assets/images/'+vo1.custCi+'" alt="'+vo1.custNm+'">';
                }else{
                    detailHtml+= '		<span class=\"logo\">'+vo1.custNm+'</span>';
                }
                detailHtml += '</div>';
                detailHtml += '<figure><p>'+vo1.projectDesc+'</p></figure>';
                detailHtml += '</div>';
                detailHtml += '</div>';

                if( param.bizArea == vo1.bizArea && param.year ==vo1.year){
                    headNo++;
                }

            }

            if ((selectClass == ".biz-work")) {
                detailHtml += '</div>';
                detailHtml += '</div>';
            }

            $(selectClass).html(detailHtml);

            if ((selectClass == ".biz-work")) return;
//-----Work 정렬 (상단 동일 소스 주석처리 2021.04.20)
            try {
                if ($(selectClass).data('isotope')) {
                    $(selectClass).isotope('reloadItems');
                }
            } catch (e) {
                //$("works-empty").css("display","");

            }

            var $grid = $(selectClass).isotope({
                itemSelector : '.item',
                columnWidth : '.item',
                percentPosition : true,
                transitionDuration : '0.8s',
                masonry: {
                    columnWidth: 40
                }
            });
//-----Work 정렬 끝 (상단 동일 소스 주석처리 2021.04.20)
            //Works cust별 메뉴
            $('.filter a').on('click',function(e){
                $('.filter a').removeClass('on');
                e.preventDefault();
                var sort = $(this).attr('href');
                $grid.isotope({filter:sort});
                $(this).addClass('on');
            });

            if(resp.data.length == 0 || headNo == 0){
                var emptyHtml = "";
                emptyHtml += '<div class="works-empty">';
                emptyHtml += '<p class="empty-text">데이터가 존재하지 않습니다.</p>';
                emptyHtml += '</div>';
                //$(".works-empty").html(emptyHtml);
            }

        }else{
            var emptyHtml = "";
            emptyHtml += '<div class="works-empty">';
            emptyHtml += '<p class="empty-text">데이터가 존재하지 않습니다.</p>';
            emptyHtml += '</div>';
            //$(".works-empty").html(emptyHtml);
        }
    });
}

//F.Works