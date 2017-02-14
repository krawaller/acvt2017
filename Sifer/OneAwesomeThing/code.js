var currentPage = "start";
$("#options").on("click", "li", clickHandler);
function renderPage(){
  var page = adventure.pages[currentPage];
  $("#title").html(page.title);
  $("#image").attr("src", page.image);
  $("#description").html(page.description);
  $("#options").empty();
  for(var i=0;i<page.options.length;i++){
    $("#options").append("<li target=\""+i+"\">"+page.options[i].text+"</li>");
  }
}
renderPage();
function clickHandler(){
  currentPage = adventure.pages[currentPage].options[$(this).attr("target")].target;
  console.log(currentPage);
  renderPage();
}
