const pics_src = ["image/Top1.png","image/Top2.png","image/Top3.png","image/Top4.png","image/Top5.png"];
let num = -1;
function slideshow_timer(){
  num = Math.floor(Math.random()*pics_src.length);
  document.getElementById("mypic").src = pics_src[num];
}
setInterval(slideshow_timer,1000); 
