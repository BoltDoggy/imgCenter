//(function (w) {
////if
//w.$img$ = w.imgCenter = function (ids) {
//  if (!ids) {
//    
//  } else if (ids.isArray()) {
//    
//  } else if ()
//}
//
//function imgBolt (e) {
//  var eParent = e.parentNode;
//  var eStyle = e.style;
//  
//  var newImg = new Image();
//  newImg.src = e.src;
//  
//  var eBoltStyle = document.createElement('div').style;
//  eBoltStyle.width = eStyle.width? eStyle.width: e.width + 'px';
//  eBoltStyle.height = eStyle.height? eStyle.height
//}
//})(window);


var bimg = document.getElementsByTagName('img')[0];
var fa = bimg.parentNode;
var timg = new Image();
timg.src = bimg.src;
var div_img = document.createElement('div');
div_img.style.width = bimg.style.width? bimg.style.width: bimg.width + 'px';
console.log(bimg.height);
div_img.style.height = (bimg.style.height != "")? bimg.style.height: bimg.height + 'px';
div_img.style.backgroundImage = 'url(' + bimg.src + ')';
div_img.style.backgroundPosition = 'center';
div_img.style.backgroundSize = (timg.width/timg.height > div_img.style.width/div_img.style.height)? "100% auto": "auto 100%";
div_img.style.display = "inline-block";
fa.replaceChild(div_img, bimg);