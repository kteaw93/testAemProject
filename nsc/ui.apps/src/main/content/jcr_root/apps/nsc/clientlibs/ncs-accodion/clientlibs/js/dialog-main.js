$(document).ready(function(){
        $(document).on("click",".accordion-count",function(){
            /*console.log("this : " + $(this).find('[class="coral-Form-field accordion-count coral3-Multifield"]') );*/
            let nowAccIndex =  $(this).children().filter("coral-multifield-item").length;
            let max = $(this).data('maxItems') ;
            let min = $(this).data('minItems') ;
            if(nowAccIndex < min){
                $(".cq-dialog-submit").attr("disabled", "disabled");
            }else{
                $(".cq-dialog-submit").removeAttr("disabled");
                if(nowAccIndex > max){
                    alert("최대값을 넘었습니다.");
                    $(".cq-dialog-submit").removeAttr("disabled");
                    $(this).children().filter("coral-multifield-item").last().remove();
                }
            }
        })

    $(".accordion-main-title").each(function(index,value){
        console.log(value.children()); // 각자 스텝마다 올라갈 값
    })

    });