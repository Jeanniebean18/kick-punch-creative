
var logo = document.getElementById("logo");
var logoTwo = document.getElementById("logo-two");
var getquote= document.getElementById("contactquote");
var work = document.getElementById("work");
var quoteOne = document.getElementById("quotation");
var topp = document.getElementById("top");
var bottomm = document.getElementById("bottom");
var hamburger = document.getElementById("hamburger");
var mobilenav = document.getElementById("mobilenav");
var square = document.getElementById("square");
var form = document.getElementById("show-work");
// var jeannie = document.getElementById("jeannie");

hamburger.onclick = toggle_display1;


function toggle_display1() {
  
  
  


  if (hamburger.style.backgroundColor == "") {
    topp.setAttribute("class","rotate1");
    bottomm.setAttribute("class","rotate2");
    hamburger.style.backgroundColor = "white";
    mobilenav.style.display="block";
  } 
  
  else {
    
    topp.setAttribute("class","rotate3");
    bottomm.setAttribute("class","rotate4");
    hamburger.style.backgroundColor = "";
    mobilenav.style.display="none";
   

  }
};




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
  
  if (window.pageYOffset>400) {
    square.style.visibility="visible";
  } else {
    square.style.visibility="hidden";
    
  }
  

      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 856) {
      
     
        
    if(isInViewport(tellcopy)){
      tell.setAttribute("class"," large animated pulse");
    } 
    
    if(isInViewport(quotation)){
      quoteOne.style.visibility="visible";
      quoteOne.setAttribute("class", " margin-top-plus center animated pulse")
    } 
    
    if(isInViewport(work)){
      getquote.setAttribute("class", "animated tada")
    }
    
    // if(isInViewport(form)){
    //   jeannie.style.display="block";
    //   jeannie.setAttribute("class","slideInUp animated");
    // } else {
    //   jeannie.setAttribute("class","slideOutDown animated");
    //
    // }

    
    // if(isInViewport(studentTwo)){
   //
   //    studentTwo.style.visibility="visible";
   //    studentTwo.setAttribute("class","animated zoomIn");
   //  }
  }


};
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  