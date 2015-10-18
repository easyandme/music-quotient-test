$(function() {

  "use strict";

$('body').bind('touchstart', function() {});
  FastClick.attach(document.body);

var q, k;
var l = 0;
var n = 1;
var qar = [];
var playN = 0;

function first() {
    q = qar; 
    k = 0;
    $('.quiz_text>p').html(q[k].describe).append(q[k].music);
}

function listen() { 
  document.getElementById('song').addEventListener('ended', function(){
    $('.play_btn>img').removeClass('spin begin');
    playN += 1;
    $('.choice').prop('disabled', false);
    if (playN > 1) {
      $('.play_btn>img').attr('src','./images/CDg.png');
      $('.intro').text('已播放2次，请作答');
      $('#song').remove();
    } else {
      $('.intro').text('还剩1次播放机会');
    }
  });
}

$('#start_btn').click(function() {
      $('.prelude').fadeOut(500);
      $('#start').prepend(p);
      $('#progressbar').fadeIn(1000);
      setTimeout(function() {
      $('.quiz').fadeIn(500);
      }, 1000)
      first();
})

$('.choice').click(function() {
      k += 1;
      n += 1;
      l += 50/7; 
      $("#progressbar>div").css("width", l + "%");
      $("#pg").text(k + "/14");
      if ($('.quiz').hasClass('fadeInRight animated')) {$('.quiz').removeClass('fadeInRight animated')};
      if ($('.play_btn>img').hasClass('spin begin')) {$('.play_btn>img').removeClass('spin begin')};
      $('.quiz').addClass('fadeOutLeft animatedFast');
      $('.choice').prop('disabled', true);
      setTimeout(function() {
      $('.quiz_text>p').html(q[k].describe).append(q[k].music);
      document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
      listen(); 
      $('.play_btn>img').addClass('spin begin'); 
      if (q[k].hasOwnProperty('C')) {$('#choiceC').css('display', 'block')} else {$('#choiceC').css('display', 'none')};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').css('display', 'block');$('.choice').css('margin', '-6px auto')} else {$("#choiceD").css('display', 'none');$('.choice').css('margin', '2px auto')};
      $("#choiceA").html(q[k].A.describe);
      $("#choiceB").html(q[k].B.describe);
      if (q[k].hasOwnProperty('C')) {$('#choiceC').html(q[k].C.describe)};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').html(q[k].D.describe)};
      $(".quiz").removeClass('fadeOutLeft animatedFast').addClass('fadeInRight animated');
      $('.intro').text(' ');
      $('.play_btn>img').attr('src','./images/CD.png');
      }, 200);
      playN = 0;
      if (n > 14) {
      document.title = "我的音商高达XXX！我已经不屑和你们比智商情商了...";
      document.getElementById("song").pause();
      $('.quiz').remove();
      $('.result').css('display', 'block').addClass('fadeInUp animatedSlow')
    }
});

$('.play_btn>img').click(function() {
    if (playN < 2) { 
      $(this).addClass('spin begin');
    };
  document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
  listen();
});


/*All the appending stuff*/
var p = "<div hidden id='progressbar'><div><span id='pg'>1/14</span></div></div></div>";
 
$.getJSON("data/data.json", function(e){
        $.extend(qar, e);
});

});