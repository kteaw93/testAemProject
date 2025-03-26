function checkDeps(id) {
    alert(id)
    let check2Deps = id;
    $(".select-wrap.secnd>>").each(function () {
        let secDepsId = $(this).attr("id");
        if (check2Deps == secDepsId) {
            $(this).attr("style", "display: show");
        } else {
            $(this).attr("style", "display: none");
        }
    });
    $("#test123").css("display", "block");
}
/*

$(document).on("click", ".myButton", function() {
    let clickedId = $(this).data("target-id"); // 클릭된 요소의 data-target-id 속성에서 id 값을 가져옴
    alert(clickedId);
    let check2Deps = clickedId;
    $(".select-wrap .secnd").each(function () {
        let secDepsId = $(this).attr("id");
        if (check2Deps == secDepsId) {
            $(this).css("display", "block"); // attr("style", "display: show") -> css("display", "block")
        } else {
            $(this).css("display", "none");
        }
    });
    $("#test123").css("display", "block");
});*/
