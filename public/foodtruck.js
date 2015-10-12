


var train = document.getElementById("train");
var shaker = document.getElementById("shaker");
var quote = document.getElementById("quote");
var knife = document.getElementById("knife");
var quote2 = document.getElementById("quote2");
var quote4 = document.getElementById("quote3");
var quote3 = document.getElementById("quote4");
var maracas = document.getElementById("maracas");
var partfive = document.getElementById("partfive");
var partsix = document.getElementById("partsix");
var bubble1 = document.getElementById("bubble1");
var bubble2 = document.getElementById("bubble2");
var bubble3 = document.getElementById("bubble3");
var arrow = document.getElementById("arrow");
var wrap = document.getElementById("wrap");
var wrap2 = document.getElementById("wrap2");
var wrap3 = document.getElementById("wrap3");
var wrap4 = document.getElementById("wrap4");
var pineapple = document.getElementById("pineapple");
var taco = document.getElementById("taco");


window.onscroll=inView;
  
  
function inView(){
  // roll out of top star
  

      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 766) {
      
    if(isInViewport(arrow)){
      arrow.setAttribute("class","animated bounce center");
      
      
    }
        
   
    
    if(isInViewport(train)){
      
      shaker.setAttribute("class","animated tada delay4");
      train.style.visibility="visible";
      train.setAttribute("class","icon animated slideInLeft");
      wrap.style.visibility="visible";
      wrap.setAttribute("class","clearfix textwrap animated slideInUp");
      
      
    }
    
    if(isInViewport(quote)){
     
      quote.setAttribute("class","animated pulse quote ");
      
      
    }
    
    if(isInViewport(pineapple)){
      pineapple.style.visibility="visible";
      pineapple.setAttribute("class","icon animated slideInLeft");
      wrap2.style.visibility="visible";
      wrap2.setAttribute("class","clearfix textwrap animated slideInUp");
      knife.setAttribute("class","animated rotate delay4");
      
      
    }
    
    if(isInViewport(quote2)){
      quote2.setAttribute("class","animated pulse quote");
      
      
    }
    
    if(isInViewport(taco)){
      taco.style.visibility="visible";
      taco.setAttribute("class","icon animated slideInLeft");
      wrap3.style.visibility="visible";
      wrap3.setAttribute("class","clearfix textwrap animated slideInUp");
      maracas.setAttribute("class","animated tada delay4");
      
      
    }
    
    if(isInViewport(quote3)){
      quote3.setAttribute("class","animated pulse quote");
      
      
    }
    
    if(isInViewport(partsix)){
      bubble1.setAttribute("class","animated delay2 bounceIn");
      bubble2.setAttribute("class","animated  delay3 bounceIn");
      bubble3.setAttribute("class","animated  bounceIn");
      
      
    }
    
    if(isInViewport(quote4)){
      quote4.setAttribute("class","animated pulse quote");
      
      
    }

    
    




}

}
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  