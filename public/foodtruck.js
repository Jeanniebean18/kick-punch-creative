

var smoke = document.getElementById("smoke");
var train = document.getElementById("train");
var shaker = document.getElementById("shaker");
var quote = document.getElementById("quote");
var pineapple = document.getElementById("pineapple");
var knife = document.getElementById("knife");


window.onscroll=inView;
  
  
function inView(){
  // roll out of top star
  

      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 856) {
      
     
        
   
    
    if(isInViewport(train)){
      smoke.setAttribute("class","animated rubberBand");
      shaker.setAttribute("class","animated tada delay2");
      
    }
    
    if(isInViewport(quote)){
      quote.setAttribute("class","animated pulse");
      
      
    }
    
    if(isInViewport(pineapple)){
     
      knife.setAttribute("class","animated delay2 rotate");
      
      
    }




}

}
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  