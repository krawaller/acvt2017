var currentPage = "start";

var clickHandler = function(){
  	var link = $(this);
  	var linkNumber = link.attr("data-number");
  	var page = adventure.pages[currentPage];
  	var linkObject = page.options[linkNumber];
  	currentPage = linkObject.target;
  	render(adventure.pages[currentPage]);
  	console.log("clickHandler", linkNumber, linkObject);
}

function render(page) {
	$("header #title").text(adventure.title);
	$("main #title").text(page.title);
	$("#paragarph").text(page.description);
	$("#image").attr("src", page.image);

	$("#options").empty(); 
	for(var i = 0; i < page.options.length; i++) {
    	var option = page.options[i];
    	var link = $("<li></li>");
    	link.text(option.text);
    	link.attr("data-number", i);
    	$("#options").append(link);
  	}
}


$("#options").on("click", "li", clickHandler);

render(adventure.pages[currentPage]);

