const pics_src = ["Top1.png","Top2.png","Top3.png","Top4.png","Top5.png"];
let num = -1;
function slideshow_timer(){
  num = Math.floor(Math.random()*pics_src.length);
  document.getElementById("mypic").src = pics_src[num];
}
setInterval(slideshow_timer,1000); 
