$(document).ready(function() {
  $('.container3').waypoint(function() {$('.ps .skill_line').addClass('move1');}, {offset: '50%'});
  $('.container3').waypoint(function() {$('.ai .skill_line').addClass('move2');}, {offset: '50%'});
  $('.container3').waypoint(function() {$('.ht .skill_line').addClass('move3');}, {offset: '50%'});
  $('.container3').waypoint(function() {$('.ja .skill_line').addClass('move4');}, {offset: '50%'});
  $('.container3').waypoint(function() {$('.af .skill_line').addClass('move5');}, {offset: '50%'});
  $('.container3').waypoint(function() {$('.pm .skill_line').addClass('move6');}, {offset: '50%'});
    
    
    
  $('.thinking').css('opacity', 0);
  $('.time1').css('opacity', 0);
  $('.time2').css('opacity', 0);
  $('.time3').css('opacity', 0);
  $('.time4').css('opacity', 0);
  $('.time5').css('opacity', 0);
  $('.time6').css('opacity', 0);
    
  $('.container5').waypoint(function() {$('.thinking').addClass('fadeIn');}, {offset: '100%'});
  $('.container5').waypoint(function() {$('.timeline_line').addClass('fadeInDown');}, {offset: '80%'});
  $('.time1').waypoint(function() {$('.time1').addClass('fadeInLeft');}, {offset: '80%'});
  $('.time2').waypoint(function() {$('.time2').addClass('fadeInLeft');}, {offset: '80%'});
  $('.time3').waypoint(function() {$('.time3').addClass('fadeInLeft');}, {offset: '80%'});
  $('.time4').waypoint(function() {$('.time4').addClass('fadeInLeft');}, {offset: '80%'});
  $('.time5').waypoint(function() {$('.time5').addClass('fadeInLeft');}, {offset: '80%'});
  $('.time5').waypoint(function() {$('.time6').addClass('fadeInLeft');}, {offset: '80%'});
});