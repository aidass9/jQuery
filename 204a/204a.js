$(function() {
    // $("body>ul ul").css("display", "none");
    $("body>ul ul").hide();

    $("body>ul>li").mouseenter(function() {
        $(this).find("ul").slideDown();
    })

    $("body>ul>li").mouseleave(function() {
        $(this).find("ul").slideUp();
    })
})
0
