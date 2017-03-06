console.log("Hello from the code file!");
console.log("Here is jQuery, hopefully: ", $);
console.log("Here's the adventure", adventure);
console.log("here's the first page data", adventure.pages);
var currentPage = "start";

function renderPage(){
	var page = adventure.pages[currentPage];
  $("#rubrik").html(page.title);
  $("#image").attr("src", page.image);
  $("#text").text(page.description);
  console.log("FAAAAN",page.options);
  $("#lista").empty();
  
  for(var i =0; i<page.options.length;i++){
  	var option = page.options[i];
  	console.log("KNARKBAJS",page.options);
  	var link = $("<li>");
  	link.text(option.text);
  	link.attr("data-number", i);
  	$("#lista").append(link);
}
}
var clickHandler = function(){
  var link = $(this); // the clicked element;
  var linkNumber = link.attr("data-number");
  var page = adventure.pages[currentPage];
  var linkObject = page.options[linkNumber];
  currentPage = linkObject.target;
  renderPage();}
$("#lista").on("click","li",clickHandler);
renderPage(adventure.pages[currentPage]);


