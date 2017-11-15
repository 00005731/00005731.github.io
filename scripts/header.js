var headerItems = [   //The begining of the header var
  {
    'title': 'TECHNO',
    'url': 'techno.html'
  },
  {
    'title': 'SCIENCE',    //give the title 
    'url': '403.html'      //the link
  },
  {
    'title': 'GAMES',
    'url': '403.html'
  },
  {
    'title': 'ABOUT',
    'url': 'about.html'
  },
];
//Generating navigation bar elements
$(function() {    //navigation bar html code in javascript, you can change only one stroke of code, instead of over 15+ stroke in html
  var headerItemsHtml = '';
  for (var i = 0; i<headerItems.length; i++) {
    headerItemsHtml += '<li class="nav-item">'+
    '<a class="nav-link" href="'+headerItems[i].url+'">'+headerItems[i].title+'</a>'
    +'</li>';
  }
  $('#navbarResponsive').find('ul').html(headerItemsHtml);
  });
