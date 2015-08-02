mini = document.getElementById("mini_web_image");
cool = document.getElementById("part2");
arrow = document.getElementById("arrow");
blades = document.getElementById("blades");
info = document.getElementById("infographic");
light = document.getElementById("lightning");
circle = document.getElementById("circle");
/*isInViewport(elem);*/ // Boolean: returns true/false

window.onscroll=inView;

function inView () {
  if (isInViewport(mini)) {
    mini.style.visibility="visible"
    mini.setAttribute("class","animated bounce");
  };
  // if (isInViewport(cool)) {
  //    cool.style.visibility="visible"
  //   cool.setAttribute("class","animated pulse");
  // };
  
  if (isInViewport(arrow)) {
   
    arrow.setAttribute("class","animated arrow");
  };
  if (isInViewport(blades)) {

    blades.setAttribute("class","blades");
  };
  
  if (isInViewport(info)) {
    info.style.visibility="visible"
   
    info.setAttribute("class","animated zoomInRight");
  };
  
  if (isInViewport(light)) {
   
    light.setAttribute("class","lightning animated infinite flash");
  };
  
  if (isInViewport(circle)) {
   
    circle.setAttribute("class","animated bounce");
  };
  
  
};



var isInViewport = function ( elem ) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};