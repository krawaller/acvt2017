// kodfil

var currentPage = "startsida"; // börjar på sidan start.

function renderPage(){
	var page = adventure.pages[currentPage];
  $("#headline").html(page.title);
  $("#image").attr("src",page.imgUrl);
  $("#babbel").html(page.babbel);
  $("#options").empty();
	for (var i=0; i < page.options.length; i++){
		var option = page.options [i];
		var link = $("<li>");
		link.text(option.text);
		link.attr("data-number", i);
		$("#options").append(link);
	}
};

renderPage(adventure.pages[currentPage]);

var clickHandler = function(){
  var link = $(this); // the clicked element;
  var linkNumber = link.attr("data-number");
  var page = adventure.pages[currentPage];
  var linkObject = page.options[linkNumber];
  currentPage = linkObject.target;
  renderPage();
}
$("#options").on("click","li",clickHandler);
renderPage(adventure.pages[currentPage]);
