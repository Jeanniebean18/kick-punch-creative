
var logo = document.getElementById("logo");
var logoTwo = document.getElementById("logo-two");


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
  if (window.pageYOffset>75) {
    logo.style.display="none";
    logoTwo.style.display="block";
  }

  if (window.pageYOffset<75) {
    logo.style.display="block";
    logoTwo.style.display="none";
  }
      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 600) {
      
     
        
    if(isInViewport(hammer)){
      hammer.setAttribute("class","animated pulse");
    } 
    if(isInViewport(wrench)){
      wrench.setAttribute("class","animated pulse");
    } 
    if(isInViewport(house)){
      house.setAttribute("class","animated pulse");
    } 
    if(isInViewport(contract)){
      contract.setAttribute("class","animated pulse");
    } 
    if(isInViewport(form)){
      form.setAttribute("class","animated pulse");
    } 
    
    // if(isInViewport(studentTwo)){
   //
   //    studentTwo.style.visibility="visible";
   //    studentTwo.setAttribute("class","animated zoomIn");
   //  }
  }


};
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  