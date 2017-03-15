var currentPage = "index";


function renderPage(page) {
	var page = mario.pages[currentPage]
	$("#heading").html(page.heading);
	$("#imgUrl").attr("src", page.imgUrl);
	$("#description").html(page.description);
	//$("#options").html(page.options);
	$("#options").empty(); 
	  for(var l=0; l < page.options.length; l++){
		var option = page.options[l];
		var link = $("<li>");
		link.text(option.text);
		link.attr("data-number", l); // will be 0 or 1 or ...
		$("#options").append(link);
	  }
}

renderPage(mario.pages[currentPage]);

var clickHandler = function(){
  var link = $(this); // the clicked element;
  var linkNumber = link.attr("data-number");
  var page = mario.pages[currentPage];
  var linkObject = page.options[linkNumber];
  currentPage = linkObject.target;
  renderPage();
}

$("#options").on("click","li",clickHandler);