var currentPage = "start";
var render = function () {
    var page = adventure.pages[currentPage];
    $("#title").text(page.title);
    $("#pageimg").attr("src", page.imgURL);
    $("#pagebabbel").text(page.babbel);
    $("#pageoptions").empty();
    for (var i = 0; i < page.options.length; i++) {
        var linkText = page.options[i].text;
        var newLink = $("<li>");
        newLink.text(linkText);
        newLink.attr("data-target", i)
        $("#pageoptions").append(newLink);
    }
};
render();
$("#pageoptions").on("click", "li", clickHandler);

function clickHandler() {
    currentPage = adventure.pages[currentPage].options[$(this).attr("data-target")].target;
    console.log(currentPage);
    if (currentPage == "start") {
        $("#noimgbox").attr('id', 'imgbox');
        $(".imgimg").addClass("stugimg");
        $(".imgimg").removeClass("imgimg");
        $(".paranopadd").addClass("para");
        $(".paranopadd").removeClass("paranopadd");
    }
    else {
        $("#imgbox").attr('id', 'noimgbox');
        $(".stugimg").addClass("imgimg");
        $(".stugimg").removeClass("stugimg")
        $(".para").addClass("paranopadd");
        $(".para").removeClass("para")
    }
    render();
};