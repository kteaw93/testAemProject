$(document).ready(function() {
    var oneDepsHtml = "";  //oneDepsNav id
    var subOneDepsHtml = "";  //subOneDeps id
    var twoDepsHtml = "";  //twoDepsNav id
    fetch('/content/nsc/kr/ko.children.json')
        .then(response => response.json())
        .then(data => {
            $("#oneDepsNav").empty();
            $("#subOneDeps").empty();
            $.each(data, function (index, value) {
                if( index != 0) {
                    oneDepsHtml += "<li>"
                        + "<a href='" + value.uri + ".html'"
                        + "x-cq-linkchecker='skip'>"
                        + value.id
                        + "</a>"
                        + "</li>";


                    subOneDepsHtml += "<li data-value='' className='option' onClick='checkDeps("+value.id+")'value='"+value.id+"'>"
                        + value.id
                        + "</li>";

                    fetch(value.uri + '.children.json')
                        .then(response => response.json())
                        .then(data => {
                            const pages = [];
                            $("#twoDepsNav").empty();
                            twoDepsHtml += "<ul>";
                            $.each(data, function (index, value) {
                                if (index != 0) {
                                    twoDepsHtml += "<li>"
                                        + "<a href='" + value.uri + ".html'"
                                        + "x-cq-linkchecker='skip'>"
                                        + value.id
                                        + "</a>"
                                        + "</li>";
                                }
                            });
                            twoDepsHtml += "</ul>";
                            $('#twoDepsNav').append(twoDepsHtml);
                        });
                }
            });
            $('#oneDepsNav').append(oneDepsHtml);
            $('#subOneDeps').append(subOneDepsHtml);
        });
})