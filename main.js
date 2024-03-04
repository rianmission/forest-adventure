 $(document).ready(function(){
   
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $('..navbar').click(function(){
    $(this).toggleClass('nav.toggle');
    $('.fa-bars').removeClass('fa-times');
  });
  
  $('.dot1').click(function(){
    $('.vid1').show();
    $('.vid2').hide();
    $('.vid3').hide();
  });
  
$('.dot2').click(function() {
    $('.vid1').hide();
    $('.vid2').show();
    $('.vid3').hide();
  });
  
$('.dot3').click(function() {
    $('.vid1').hide();
    $('.vid2').hide();
    $('.vid3').show();
  });
  
  
});