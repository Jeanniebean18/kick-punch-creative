
var logo = document.getElementById("logo");
var logoTwo = document.getElementById("logo-two");
var tell = document.getElementById("tell");
var tellcopy = document.getElementById("tellcopy");
var contact = document.getElementById("contact");
var quoteText = document.getElementById("quote-text");
var quoteOne = document.getElementById("quote1");


// hamburger.onclick = toggle_display1;
// menu.onclick = toggle_display2;
//
// function toggle_display1() {
//
//   if (menu.style.display == "none") {
//     menu.style.display = "block";
//   }
//   else {
//     menu.style.display ="none";
//
//   }
// }
//
// function toggle_display2() {
//
//   menu.style.display = "none"
// }


window.onscroll=inView;
  
  
function inView(){
  // roll out of top star
  if (window.pageYOffset>5) {
    logo.style.display="none";
    logoTwo.style.display="block";
  }

  if (window.pageYOffset<5) {
    logo.style.display="block";
    logoTwo.style.display="none";
  }
      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 600) {
      
     
        
    if(isInViewport(tellcopy)){
      tell.setAttribute("class"," large animated pulse");
    } 
    
    if(isInViewport(contact)){
      quoteOne.style.visibility="visible";
      quoteOne.setAttribute("class", "floatleft cube2 animated slideInLeft")
      quoteText.style.visibility="visible";
      quoteText.setAttribute("class", "quote-text floatleft margin-top-plus animated slideInRight")
      
      
      
    } 

    
    // if(isInViewport(studentTwo)){
   //
   //    studentTwo.style.visibility="visible";
   //    studentTwo.setAttribute("class","animated zoomIn");
   //  }
  }


};
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  