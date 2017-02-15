
var currentPage = "page2";

function renderPage(page){
  $("#headline").html(page.title);
  $("#image").attr("src", page.image);
  $("#flavortext").html(page.description);

  var page = adventure.pages[currentPage];
  $("#options").empty();
  for(var l=0; l < page.options.length; l++){
    var option = page.options[l];
    var link = $("<li>");
    link.text(option.text);
    link.attr("data-number", l); // will be 0 or 1 or ...
    $("#options").append(link);
  }
};
var clickHandler = function(){
  var link = $(this); // the clicked element;
  var linkNumber = link.attr("data-number");
  var page = adventure.pages[currentPage];
  var linkObject = page.options[linkNumber];
  currentPage = linkObject.target;
  renderPage(adventure.pages[currentPage]);
};

$("#options").on("click","li",clickHandler);

renderPage(adventure.pages[currentPage]);
