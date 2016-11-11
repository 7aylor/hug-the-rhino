$("#settings-bar").on("click", function(e){
 e.preventDefault();
 var hrefval = $(this).attr("href");
  
 if(hrefval == "#minimized-buttons") {
  var distance = $('#navigator').css('right');
   
  if(distance == "auto" || distance == "0px") {
   $(this).addClass("open");
   openSidepage();
  } else {
   closeSidepage();
  }
 }
}); // end click event handler