var currentPage = "start";
function renderPage(){
  var page = adventure.pages[currentPage];
  $("#title").html(page.title);
  $("#subTitle").html(page.subTitle);
  $("#imageUrl").attr("src", page.imageUrl);
  $("#description").html(page.description);
  $("#whatYouWannaDo").html(page.whatYouWannaDo);
   $("#options").empty(); 

  for(var l=0; l < page.options.length; l++){
    var option = page.options[l];
    var link = $("<li>");
    link.text(option.text);
    link.attr("data-number", l); // will be 0 or 1 or ...
    $("#options").append(link);
	}
}

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