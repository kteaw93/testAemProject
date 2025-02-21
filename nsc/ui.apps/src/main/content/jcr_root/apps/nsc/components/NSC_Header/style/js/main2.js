$(document).ready(function() {
    function checkDeps(id) {
        let check2Deps = id;
        $('#test123').text("선택");
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
})