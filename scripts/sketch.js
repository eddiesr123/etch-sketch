var base=35;
var sqr=Math.pow(base, 2);
var brk=1;

$(document).ready(function(){

for(i=1; i<=sqr; i++) {
                $('#container').append('<div class="content"></div>');
              
                if(i==(base*brk)) {
                    $('#container').append('<br>');
                brk++;
           };
        };
        
 $('.content').hover(function() {
    $(this).css('background-color','blue')
  });
  
});

$("#newGrid").click(function() {
    $('div').css('background-color','white');
  $('#container').remove();
  $('body').append('<div id="container"></div>');

var base = prompt('Enter a new grid size between 2-40!')
var sqr=Math.pow(base, 2);
var brk=1;
var grid=true;

while(grid) {
  if(base>40){
    var base = prompt('Number must be between 2-40!');
  }
  else {
  grid=false;
  }
};
 for(i=1; i<=sqr; i++) {
                $('#container').append('<div class="content"></div>');
              
                if(i==(base*brk)) {
                    $('#container').append('<br>');
                brk++;
           };
        }; 
        
 $('.content').hover(function() {
    $(this).css('background-color','blue')
  });

});