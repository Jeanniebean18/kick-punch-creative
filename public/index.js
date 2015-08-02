mini = document.getElementById("mini_web_image");
cool = document.getElementById("part2");
arrow = document.getElementById("arrow");
blades = document.getElementById("blades");
/*isInViewport(elem);*/ // Boolean: returns true/false

window.onscroll=inView;

function inView () {
 if (isInViewport(mini)) {
   mini.style.visibility="visible"
   mini.setAttribute("class","animated bounceInUp");
   };
 if (isInViewport(cool)) {
   
   cool.setAttribute("class","animated pulse");
   };
   if (isInViewport(arrow)) {
   
   arrow.setAttribute("class","animated arrow");
   };
   if (isInViewport(blades)) {
   
   blades.setAttribute("class","blades");
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