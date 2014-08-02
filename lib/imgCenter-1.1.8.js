/**
 * version 1.1.8
 */

(function(w) {
  var glassy = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNDQ0QzBCRTBEQTYxMUU0QjEzMkYwMUZFOTk1NDZCOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDQ0QzBCRDBEQTYxMUU0QjEzMkYwMUZFOTk1NDZCOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjZDNTU5N0MyQTUwREU0MTE5QzY3Qzk4RDBDQjY4M0QwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZDNTU5N0MyQTUwREU0MTE5QzY3Qzk4RDBDQjY4M0QwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAAAsAAAAAAEAAQAAAgJEAQA7";

  w.$img$ = w.imgCenter = function(ids) {
    var bimg;
    if (!ids) {
      bimg = document.getElementsByTagName('img');
      for (var j = 0; j < bimg.length; j++) {
        imgBolt(bimg[j]);
      }
    } else if (ids.constructor == window.Array) {
      for (var i in ids) {
        bimg = document.getElementById(ids[i]);

        if (!bimg) {
          console.log(ids[i] + " 不是一个有效 id");
        } else if (bimg.tagName == 'IMG') {
          imgBolt(bimg);
        } else {
          bimg = bimg.getElementsByTagName('img');
          for (var j = 0; j < bimg.length; j++) {
            imgBolt(bimg[j]);
          }
        }
      }
    } else {

    }

  }
  var imgBolt = w.$img$.imgBolt = function (e, s, d) {
    if(!s) s = 'cover';
    if(!d) d = 'exception';
    if (!e.dataset || e.dataset.imgcenter != d) {
      var eStyle = e.style;
      var lock = {};
      
      eStyle.backgroundSize = s;
      eStyle.backgroundPosition = 'center';
      eStyle.backgroundImage = 'url(' + e.src + ')';
      eStyle.backgroundRepeat = 'no-repeat';
      
      e.src = e.src;
      
      e.onload = function () {
        e.width = e.width;
        e.height = e.height;
        if (!lock.src){
          e.src = glassy;
          lock.src = true;
        }
      };
      
      e.setAttribute('data-imgCenter', d);
    }
  }

})(window);
