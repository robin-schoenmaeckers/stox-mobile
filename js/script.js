
// Toggle van het hamburger menu
function myFunction(btn) {
  btn.classList.toggle("active");

  // toggle van het hamburgermenu
  var x = document.getElementById("topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
  }

  // accordion
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"});
  } );

}

