var currentPage = "start";

function renderPage() {
  var page = adventure.pages[currentPage];

  $("#title").text(page.title);
  $("#bottomimg").attr("src",page.image);
  $("#text").text(page.text);
  $("#options").empty();
  for (var i =0; i<page.options.length; i++){
    var option = page.options[i];
    var link = $("<li>");
    link.text(option.text);
    link.attr("data-number", i);
    $("#options").append(link);

  }
}
  var clickHandler = function() {
    var link = $(this); // the clicked element
    var linkNumber = link.attr("data-number");
    var page = adventure.pages[currentPage];
    var linkObject = page.options[linkNumber];
    currentPage = linkObject.target;
    renderPage();
  }
  $("#options").on("click", "li", clickHandler);

renderPage();
