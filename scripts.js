$(document).ready(function(e) {
  setTimeout(function(){
    var newBottom = $(window).height() - $('.clock-img').offset().top - $('.clock-img').height();
    $('.clock-hand').css('bottom', newBottom+'px');
    var position = 0;
    $.getJSON("https://crossorigin.me/https://spreadsheets.google.com/feeds/list/1DhhtN-_VLQFE9MxaUyrMfHAiL4WrDEMTc17KGN9tAPQ/od6/public/values?alt=json", function(data) {
      //first row "title" column
      console.log(data);
      var lastEntry = data.feed.entry.length - 1;
      var place = data.feed.entry[lastEntry]['gsx$place']['$t'];
      switch(place){
        case "Home":
          position = 0;
          break;
        case "Work":
          position = 23.5;//5.5
          break;
        case "In the city":
          position = 19.5;//1.5
          break;
        case "Ruus":
          position = 22.5;//4.5
          break;
        case "Patenaude":
          position = 20.5;//2.5
          break;
        case "Mortal peril":
          position = 21.5;//3.5
      }
      console.log(data.feed.entry[lastEntry]['gsx$name']['$t']);
      console.log(data.feed.entry[lastEntry]['gsx$place']['$t']);
      console.log(data.feed.entry[lastEntry]['gsx$time']['$t']);
      console.log('position: '+position);
      var numofpieces = 6;
      var degreechange = 360/numofpieces;
      var currentrotation = (position) * degreechange - (degreechange / 2);
      $('.clock-hand').css({
        WebkitTransform: 'rotate(-' + currentrotation + 'deg)',
        '-moz-transform': 'rotate(-' + currentrotation + 'deg)',
        'transform': 'rotate(-' + currentrotation + 'deg)'
      });
    });
  }, 200);
});
