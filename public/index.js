mini = document.getElementById("mini_web_image");
cool = document.getElementById("part2");
arrow = document.getElementById("arrow");
heart = document.getElementById("heart");
heartinner = document.getElementById("heartinner");
thumb = document.getElementById("thumbsup");
web = document.getElementById("screen");


/*isInViewport(elem);*/ // Boolean: returns true/false

window.onscroll=inView;

function inView () {

  if (isInViewport(heart)) {
   
    heart.setAttribute("class","animated pulse heart");
    web.setAttribute("class","animated pulse heart");
    thumb.setAttribute("class","animated pulse heart");
  };
  
  if (isInViewport(arrow)) {
   
    arrow.setAttribute("class","animated arrow");
  };
  
  
  if (isInViewport(form)) {
   
    form.setAttribute("class","animated bounce");
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