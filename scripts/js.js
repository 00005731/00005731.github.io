   
//mAIN PAGE OWL CAROUSEL 

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  autoplay:true,
  autoplayTimeout:3500,
  autoplayHoverPause:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{ items:4
      }
  } 
  });
//owl carousel was taken from https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html//
//owl carousel was taken from https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html//
//owl carousel was taken from https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html//






//ERROR 403 PAGE
  // It is just simple math.random and math.round sample of code, which appears in Error 403 messages
  $(document).ready(function(){
    
    var $randomnbr = $('.nbr');          
    var $timer= 50;               //timer - how long numbers will transforms to the letters
    var $it;
    var $data = 5;
    var index;
    var change;
    var letters = [ " ","e", "r", "r", "o", "r", " ","4", "0", "3",  " "];  //the text, which will appear
    
    $randomnbr.each(function(){
        
      change = Math.round(Math.random()*100);       //change var, 
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);         //any number from 0 to 9  (first idea, which came to my mind, it's to create 0 and 1 floating numbers, bu then I change it)
    };
    
    function select(){
      return Math.round(Math.random()*$randomnbr.length+1);    
    };
    
    function value(){
      $('.nbr:nth-child('+select()+')').html(''+random()+'');
      $('.nbr:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randomnbr.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');   //change the number orderly
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
  });





    //IMAGE CARUSEL IN SOUTH PARK PAGE


    //just one big image, which animate and change the position after a delay
    
    $(document).ready(function() {
      setInterval(rotateImages, 1000);
    });
    
    function rotateImages(){
      //image were located in one row and then just animate
      // Setting variable so we only access the DOM once
      var photoShow = $("#photoShow");
      
      if($(photoShow).css("marginLeft") == "0px"){
        $(photoShow).animate({marginLeft: "-=800px"}, 1000).delay(3000);
      }
      
      if($(photoShow).css("marginLeft") == "-800px"){
        $(photoShow).animate({marginLeft: "-=800px"}, 1000).delay(3000);
      }
      
      if($(photoShow).css("marginLeft") == "-1600px"){
        $(photoShow).animate({marginLeft: "-=800px"}, 1000).delay(3000);
      }
      
      if($(photoShow).css("marginLeft") == "-2400px"){
        $(photoShow).animate({marginLeft: "-=800px"}, 1000).delay(3000);
      }
      
      if($(photoShow).css("marginLeft") == "-3200px"){
        $(photoShow).animate({marginLeft: "-=800px"}, 1000).delay(3000);
        $(photoShow).css("marginLeft", "0px")
      }
    } 
   
   
