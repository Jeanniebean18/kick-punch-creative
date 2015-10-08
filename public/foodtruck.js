


var train = document.getElementById("train");
var shaker = document.getElementById("shaker");
var quote = document.getElementById("quote");
var pineapple = document.getElementById("pineapple");
var knife = document.getElementById("knife");
var quote2 = document.getElementById("quote2");
var maracas = document.getElementById("maracas");
var partfive = document.getElementById("partfive");
window.onscroll=inView;
  
  
function inView(){
  // roll out of top star
  

      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 856) {
      
     
        
   
    
    if(isInViewport(train)){
      
      shaker.setAttribute("class","animated tada ");
      
    }
    
    if(isInViewport(quote)){
      quote.setAttribute("class","animated pulse quote");
      
      
    }
    
    if(isInViewport(pineapple)){
     
      knife.setAttribute("class","animated delay2 rotate");
      
      
    }
    
    if(isInViewport(quote2)){
      quote2.setAttribute("class","animated pulse quote");
      
      
    }
    
    if(isInViewport(partfive)){
      maracas.setAttribute("class","animated shake");
      
      
    }




}

}
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  