//Gallery
// gallery of pictures which will zoom the picture after click
// everething was taken from the w3school.com  and then modyfied 

var g = document.getElementById('gallery');

String.prototype.endsIn = function(suffixes) { /*just to check the extension*/
  for(i in suffixes) {
    if(this.indexOf(suffixes[i], this.length - suffixes[i].length) !== -1)
      return true;
  }
  return false;
};

g.addEventListener('click', function(e){
  
  var target = e.target, lnk, ext = ['.jpg', '.png'], lightbox, large;  // small image thumb
  if(!target.classList.contains('thumb-img')) return;
  
  else {
    lnk = target.parentNode.href;
  
    if(!lnk.endsIn(ext)) return;
  
    else {
      lightbox = document.getElementById('lightbox');
  
      if(lightbox == null) {
        lightbox = document.createElement('div');
        lightbox.setAttribute('id', 'lightbox');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = "<img src='"+lnk+"' id='large' class='large'>";   // take the large image
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', function(ev) {
          var target = ev.target, next, links = g.querySelectorAll('.thumb'), len = links.length, 
               large = document.getElementById('large');
  
  
               if(target.id == 'lightbox') lightbox.classList.add('hidden');  
  
               else if(target.id == 'large') {
  
  
                for(var i = 0; i < len; i++) {
  
  
                  if(links[i].href == large.src) {
                next = links[(i++)%len].href;
  
                while(!next.endsIn(ext)) next = links[(i++)%len].href;
                large.src = links[i%len].href;
                break;
              }
            }
          }
        }, false);
      }
  
      else {
        lightbox.classList.remove('hidden');
        large = document.getElementById('large');
        large.src = lnk;
      }
      e.preventDefault();
    }
  }
}, false);



