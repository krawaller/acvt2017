
var currentPage = "start";

function updateTemplateWithPage(page){
  $("#pagetitle").text(page.title);
  $("#pageimg").attr("src", page.imgUrl);
  $("#pagebabbel").text(page.babbel);
  $("#pageoptions").empty();
  for(var i=0; i<page.options.length; i++){
    var linkObj = page.options[i];
    var linkText = linkObj.text;
    var linkTarget = linkObj.target;
    var newLink = $("<li></li>");
    newLink.text(linkText);
    newLink.attr("data-option", i);
    $("#pageoptions").append(newLink);
  }
};

updateTemplateWithPage( adventure.pages[currentPage] );

$("#pageoptions").on("click", "li", function(){
  var pageObj = adventure.pages[currentPage];
  var linkNumber = $(this).attr("data-option");
  var option = pageObj.options[linkNumber];
  currentPage = option.target;
  updateTemplateWithPage( adventure.pages[currentPage] );
});

