

var smoke = document.getElementById("smoke");
var train = document.getElementById("train");

window.onscroll=inView;
  
  
function inView(){
  // roll out of top star
  

      
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 856) {
      
     
        
   
    
    if(isInViewport(train)){
      smoke.setAttribute("class","animated down");
    }




}

}
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  