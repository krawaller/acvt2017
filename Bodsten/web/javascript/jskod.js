$(function(){

console.log("Hello Simon!");
console.log("JQuery?: ", $);
console.log("Exploartion Quest", adventure);
console.log("First page Exploration Quest", adventure.pages);

var currentPage = "start";
function renderPage(page){
  var page = adventure.pages[currentPage];
  $("#headline").html(page.title);
  $("#start").html(page.description);
  //$("#img").attr("imgage", page.image);
  $("#img").attr({
      src: page.image
    });


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
  renderPage(adventure.pages[currentPage]);
}

$("#options").on("click","li",clickHandler);

renderPage(adventure.pages[currentPage]);
});

/*

var render = function(page) {
  var page = adventure.pages[currentPage];
  //console.log("rendering page", page);
  $("titlepåelement(id)").text(page.title);
  $("#ImageDiv").attr("src", page.imgUrl)
  $("#pageoptions").empty();


  for(var i=0; i<page.options.length; i++)
  {
    var linkText = page.options[i].text:
    var newLink = $("<li>");
    newLink.text(linkText);
    newLink.attr("data-target", linkTarget)
    $("#pageoptions").append(newLink);
    newLink.click(function())
  }

};
render(adventure.pages[currentPage]);
};*/
