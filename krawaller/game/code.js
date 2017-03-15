
var pageTempl = Handlebars.compile( pageTemplDef );

var currentPage = "start";

function updateTemplateWithPage(page){
  $("main").html( pageTempl(page) );
};

updateTemplateWithPage( adventure.pages[currentPage] );

$("main").on("click", "#pageoptions > li", function(){
  var pageObj = adventure.pages[currentPage];
  var linkNumber = $(this).attr("data-option");
  var option = pageObj.options[linkNumber];
  currentPage = option.target;
  updateTemplateWithPage( adventure.pages[currentPage] );
});
