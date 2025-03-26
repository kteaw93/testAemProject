$(document).ready(function () {
    let oneDepsHtml = "";
    let subOneDepsHtml = "";
    let isAjaxCalled = false;

    if (!isAjaxCalled) {
        isAjaxCalled = true;

        $.ajax({
            url: "/content/nsc/kr/ko.children.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                for (let i = 1; i < data.length; i++) {
                    $.ajax({
                        url: data[i].uri + "/jcr:content.json",
                        type: "GET",
                        dataType: "json",
                        success: function (subData) {
                            oneDepsHtml += `<li>
                                               <a href="${data[i].uri}.html" x-cq-linkchecker="skip">
                                                    ${subData["jcr:title"]}
                                               </a>
                                           </li>`;

                            subOneDepsHtml +=`<li data-value="" class="option myButton" onClick="checkDeps('${data[i].uri}')" value="${data[i].uri}">
                                                ${subData["jcr:title"]}
                                              </li>`;

                            $("#oneDepsNav").html(oneDepsHtml);
                            $("#subOneDeps").html(subOneDepsHtml);
                        },
                        error: function (error) {
                            alert("통신중오류발생");
                        }
                    });

                    // 2Depth 데이터 가져오기
                    (function (currentParentUri) {
                        $.ajax({
                            url: currentParentUri + ".children.json",
                            type: "GET",
                            dataType: "json",
                            success: function (childData) {
                               /* console.log(" 2Depth 데이터:", childData);*/
                                let tempTwoDepsHtml = "<ul>";

                                let totalRequests = childData.length - 1;
                                let completedRequests = 0;

                                for (let j = 1; j < childData.length; j++) {
                                    let childUri = childData[j].uri;

                                    (function (currentChildUri) {
                                        $.ajax({
                                            url: currentChildUri + "/jcr:content.json",
                                            type: "GET",
                                            dataType: "json",
                                            success: function (subData1) {
                                               /* console.log(" 2Depth 상세:", subData1);*/

                                                tempTwoDepsHtml += `<li>
                                                                        <a href="${currentChildUri}.html" x-cq-linkchecker="skip">
                                                                            ${subData1["jcr:title"]}
                                                                        </a>
                                                                    </li>`;

                                                completedRequests++;

                                                // 모든 요청이 끝난 후에 한 번만 업데이트
                                                if (completedRequests === totalRequests) {
                                                    tempTwoDepsHtml += "</ul>";
                                                    $("#twoDepsNav").append(tempTwoDepsHtml);
                                                }
                                            },
                                            error: function (error) {
                                                alert("통신중오류발생");
                                            }
                                        });
                                    })(childUri);
                                }
                            },
                            error: function (error) {
                                alert("통신중오류발생");
                            }
                        });
                    })(data[i].uri);
                }
            },
            error: function (error) {
                alert("통신중오류발생");
            }
        });

    }
});
