//Pour la navBar
  const pixelsBeforeBlueNav = screen.height/2;
  const pixelsAfterBlueNav = screen.height/2;
  var rect = document.getElementById("page").getBoundingClientRect();
  if(document.getElementById("canvas1").getBoundingClientRect().top < pixelsBeforeBlueNav && document.getElementById("canvas1").getBoundingClientRect().top >= pixelsAfterBlueNav + document.getElementById("canvas1").clientHeight *-1)
  {
    document.getElementById("about").style.color = "white";
    document.getElementById("home").style.color = "rgb(25, 173, 231)";
  } 
  else if(document.getElementById("aPropos").getBoundingClientRect().top < pixelsBeforeBlueNav && document.getElementById("aPropos").getBoundingClientRect().top >= pixelsAfterBlueNav + document.getElementById("aPropos").clientHeight *-1)
  {
    document.getElementById("home").style.color = "white";
    document.getElementById("projects").style.color = "white";
    document.getElementById("about").style.color = "rgb(25, 173, 231)";
  } 
  else if(document.getElementById("mesProjets").getBoundingClientRect().top < pixelsBeforeBlueNav && document.getElementById("mesProjets").getBoundingClientRect().top >= pixelsAfterBlueNav + document.getElementById("mesProjets").clientHeight *-1)
  {
    document.getElementById("about").style.color = "white";
    document.getElementById("contact").style.color = "white";
    document.getElementById("projects").style.color = "rgb(25, 173, 231)";
  } 
  else if(document.getElementById("contactMe").getBoundingClientRect().top < pixelsBeforeBlueNav && document.getElementById("contactMe").getBoundingClientRect().top >= pixelsAfterBlueNav + document.getElementById("contactMe").clientHeight *-1)
  {
    document.getElementById("projects").style.color = "white";
    document.getElementById("contact").style.color = "rgb(25, 173, 231) ";
  } 
  //Fin de la partie pour la navBar


  function openMenu() {
  var x = document.getElementById("link-wrap");
  if (x.style.display === "block") {
    x.style.display = "none";
    x.classList.remove("visible");
  } else {
    x.style.display = "block";
    x.classList.add("visible");
  }
}

function closeMenu(){
  var x = document.getElementById("link-wrap");
  x.style.display = "none";
  x.classList.remove("visible");
}