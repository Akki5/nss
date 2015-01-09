var folder=null;
var img_no=1;
var max_images=5;
function bdc()
{
 folder="bdc";
 img_no=1;
 max_images=10;
  var name_img="img (1).jpg";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co; 
}

function survey()
{
 folder="survey";
 img_no=1; 
 max_images=10;
   var name_img="img (1).jpg";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function orientation()
{
 folder="orientation";
  img_no=1;
  max_images=15;
    var name_img="img (1).JPG";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function rural()
{
 folder="rural";
  img_no=1;
  max_images=14;
    var name_img="img (1).jpg";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function cloth()
{
 folder="cloth";
  img_no=1;
  max_images=10;
    var name_img="img (1).JPG";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function deaf()
{
 folder="deaf";
  img_no=1;
  max_images=22;
    var name_img="img (1).jpg";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function paniit()
{
 folder="paniit";
  img_no=1;
  max_images=9;
    var name_img="img (1).JPG";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function next()
{
  if(img_no<max_images) img_no++;
  else img_no=1;
  var name_img="img ("+img_no+").jpg";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
function prev()
{
  if(img_no>1) img_no--;
  else img_no=max_images;
  var name_img="img ("+img_no+").jpg";
  var addr="slideshow\\"+folder+"\\"+name_img;
  var html_co="<img src=\""+addr+"\">";
  document.getElementById("img_location").innerHTML=html_co;
}
var viewer1 = new PhotoViewer();
var photo_add=""
for(i=1;i<=23;i++)
{
photo_add="slideshow/deaf/img ("+i+").jpg"
viewer1.add(photo_add);
}

var viewer2 = new PhotoViewer();
for(i=1;i<=10;i++)
{
photo_add="slideshow/cloth/img ("+i+").JPG"
viewer2.add(photo_add);
}
var viewer3 = new PhotoViewer();
for(i=1;i<=9;i++)
{
photo_add="slideshow/paniit/img ("+i+").JPG"
viewer3.add(photo_add);
}
var viewer4 = new PhotoViewer();
for(i=1;i<=10;i++)
{
photo_add="slideshow/bdc/img ("+i+").JPG"
viewer4.add(photo_add);
}
var viewer5 = new PhotoViewer();
for(i=1;i<=15;i++)
{
photo_add="slideshow/orientation/img ("+i+").jpg"
viewer5.add(photo_add);
}
var viewer6 = new PhotoViewer();
for(i=1;i<=25;i++)
{
photo_add="slideshow/rural/img ("+i+").jpg"
viewer6.add(photo_add);
}
var viewer7 = new PhotoViewer();
for(i=1;i<=10;i++)
{
photo_add="slideshow/survey/img ("+i+").jpg"
viewer7.add(photo_add);
}
