
/*Reference from codepen.io*/
window.onload=function(){

var container = document.querySelectorAll(".image-wrapper");
var containerArray = Array.from(container);

/* On mouse over of any section of the site map, it will expand the selected part
and text will show up there which is link of pages in website */
containerArray.forEach(item => {
  var text = item.childNodes[1]

  item.addEventListener("mouseover", function() {
    containerArray.filter(others => {
      if (others !== item) {
        others.classList.remove("expand");
      }
    });
    this.classList.add("expand");
    text.classList.add('active')
  });

  item.addEventListener("mouseout", function() {
    this.classList.remove("expand");
    text.classList.remove('active')
  });
});
}