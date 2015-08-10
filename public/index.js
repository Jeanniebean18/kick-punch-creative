mini = document.getElementById("mini_web_image");
cool = document.getElementById("part2");
arrow = document.getElementById("arrow");
heart = document.getElementById("heart");
heartinner = document.getElementById("heartinner");
thumb = document.getElementById("thumbsup");
web = document.getElementById("screen");
what = document.getElementById("what");
form = document.getElementById("form");





/*isInViewport(elem);*/ // Boolean: returns true/false

window.onscroll=inView;

function inView () {

  if (isInViewport(heart)) {
    
    heart.setAttribute("class","animated heart bounce");
    web.setAttribute("class","animated heart bounce");
    thumb.setAttribute("class","animated heart bounce");
  };
  
  if (isInViewport(what)) {
    what.style.visibility="visible"
    what.setAttribute("class","animated flipInX bottom");
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