$(function() {

  "use strict";

$('body').bind('touchstart', function() {});
  FastClick.attach(document.body);

var q, k, m;
var l = 0;
var s = 0;
var n = 1;
var t = 15;
var qar = [];
var playN = 0;
var rhythm = 0, sense = 0, memo = 0, deci = 0, know = 0;
var r, w, x, y, z, o; 
var isPlaying = false;


function first() {
    q = qar; 
    k = 0;
    $('.quiz_text>p').html(q[k].describe).append(q[k].music);
}

/* add overlay mask using pure js */
function addOverlay() { 
        var myOverlay = document.createElement('div');
        myOverlay.id = 'overlay';
        document.body.appendChild(myOverlay); 
        myOverlay.style.position = 'absolute';
        myOverlay.style.top = 0;  
        myOverlay.style.opacity = 0.8;  
        myOverlay.style.width = window.innerWidth + 'px';
        myOverlay.style.height = window.innerHeight + 'px';
        myOverlay.style.top = window.pageYOffset + 'px';
        myOverlay.style.left = window.pageXOffset + 'px';
        myOverlay.style.zIndex = 999;
        myOverlay.style.backgroundColor = '#000'; 
}

function listen() { 
  if (n !== 8 && n !== 9 && n !== 10) {
  document.getElementById('song').onplaying = function() {
    setTimeout(function() {
      $('.choice').prop('disabled', false);
    }, 2000);
  }
}
  document.getElementById('song').addEventListener('ended', function(){
    $('.play_btn>img').removeClass('spin begin');
    playN += 1;
    isPlaying = false;
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
      $('.prelude, .slogan').fadeOut(500);
      $('#start').prepend(p);
      $('#progressbar').fadeIn(1000);
      setTimeout(function() {
      $('.quiz').fadeIn(500);
      }, 1000)
      first();
      $('#start_audio, .prelude').remove();
})

$('.choice').click(function() {
      n += 1;
      l += 50/7; 
      $("#progressbar>div").css("width", l + "%");
      var u = $(this).attr("data-choice");
      o = q[k]; 
      if (k < 14) {
      m = o[u].bonus || 0;
      s += m; 
      r = o[u].r_score || 0;
      rhythm += r;
      w = o[u].sense_score || 0;
      sense += w;
      x = o[u].memo_score || 0;
      memo += x;
      y = o[u].decision_score || 0;
      deci += y;
      z = o[u].knowledge_score || 0;
      know += z;  
      $("#pg").text(k + 1 + "/14");
      if ($('.quiz').hasClass('fadeInRight animated')) {$('.quiz').removeClass('fadeInRight animated')};
      if ($('.play_btn>img').hasClass('spin begin')) {$('.play_btn>img').removeClass('spin begin')};
      $('.quiz').addClass('fadeOutLeft animatedFast');
      $('.choice').prop('disabled', true);
      setTimeout(function() {
      k += 1;
      $('.quiz_text>p').html(q[k].describe).append(q[k].music);
      document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
      isPlaying = true;
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
    }
      if (n > 14) {
      document.getElementById("song").pause();
        $('.quiz, #progressbar').remove();
        $('.result, .slogan').css('display', 'block').addClass('fadeInUp animatedSlow');
      var pretext = ''; 
      var perc, quotient, final_txt, middle;
      if (s >= 130) {
        perc = 99;
        middle = '竟有';
        pretext = "莫扎特转世！！！";
        final_txt = "！惊呆了天王老子...";
      } else if ( s > 120 && s < 130) { 
        perc = Math.floor(Math.random()*5) + 94;
        middle = '高达';
        final_txt = "，已经不屑和你们比智商情商了...你也来测测吧"
      } else if ( s > 110 && s <= 120) { 
        perc = Math.floor(Math.random()*5) + 89;
        middle = '高达';
        final_txt = "，已经不屑和你们比智商情商了...你也来测测吧"
      } else if ( s > 90 && s <= 110) { 
        perc = Math.floor(Math.random()*10) + 89;
        middle = '高达';
        final_txt = "，只是没时间去参加我是歌手而已！...你也来测测吧"
      } else if ( s > 70 && s <= 90) { 
        perc = Math.floor(Math.random()*10) + 69;
        middle = '是';
        final_txt = "，也许拍片神马的更符合我的气质...你也来测测吧"
      } else if ( s > 60 && s <= 80) { 
        perc = Math.floor(Math.random()*30) + 49;
        middle = '只有';
        final_txt = "？抱歉多年来折磨你们耳朵了...你也来测测吧"
      } else { 
        perc = Math.floor(Math.random()*30) + 9;
        middle = '尼玛才';
        final_txt = "？谁再让我学乐器我跟谁急..."
      }
        quotient = s + t;
        $('.percent').fadeIn(500);
        $('#final_perc').text(perc + '%');
        $('.final').text(quotient).prop('counter', 0).animate({
         counter: $('.final').text()
      }, {
        duration: 2000,
        easing: "swing",
        step: function(now) {
            $(this).text(Math.ceil(now));
          }
      }); 
      document.title = pretext + '我的音商' + middle + quotient + final_txt;
      if (rhythm == 2) {
        $('.a3').addClass('highlighted');
      } else if (rhythm == 1) {
        $('.a2').addClass('highlighted');  
      } else {
        $('.a1').addClass('highlighted');  
      }
      if (sense == 2) {
        $('.b3').addClass('highlighted');
      } else if (sense == 1) {
        $('.b2').addClass('highlighted');  
      } else {
        $('.b1').addClass('highlighted');  
      }
      if (memo >= 3) {
        $('.c3').addClass('highlighted');
      } else if (memo > 1 && memo < 3) {
        $('.c2').addClass('highlighted');  
      } else {
        $('.c1').addClass('highlighted');  
      }
      if (deci == 2) {
        $('.d3').addClass('highlighted');
      } else if (deci == 1) {
        $('.d2').addClass('highlighted');  
      } else {
        $('.d1').addClass('highlighted');  
      } 
      if (know >= 3) {
        $('.e3').addClass('highlighted');
      } else if (know > 1) {
        $('.e2').addClass('highlighted');  
      } else {
        $('.e1').addClass('highlighted');  
      }
    }
});

$('.play_btn>img').click(function() {
    if (!isPlaying) {
        t = t - 1;
        if (playN < 2) { 
          $(this).addClass('spin begin');
        };
      document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
      isPlaying = true;
      listen();
    }
});
setInterval(function(){
  $("#start_btn").toggleClass("shake animatedDelayed3");
  $(".pointer").toggleClass("bounce animated"); 
}, 2500);

/*All the appending stuff*/
var p = "<div hidden id='progressbar'><div><span id='pg'>1/14</span></div></div></div>";
 
$.getJSON("data/data.json", function(e){
        $.extend(qar, e);
});

$('.share').click(function() {
        addOverlay(); 
        $('body').css('-webkit-user-select', 'text');
        $('img[alt="guitar"], .share_txt, #copy').show();
        $('#overlay').click(function() {
            $(this).remove(); 
            $('img[alt="guitar"], .share_txt, #copy').hide();
            $('body').css('-webkit-user-select', 'none');
        });

});

$('.follow').click(function() { 
        addOverlay(); 
        $('img[alt="QR"], img[alt="des"]').show();
        $('#overlay').click(function() {
            $(this).remove(); 
            $('img[alt="QR"], img[alt="des"], .share_txt').hide();
        });
});
});