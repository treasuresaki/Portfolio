$(document).ready(function() {
  $(function(){
      $('a[href^="#"]').click(function(){
        //スクロールのスピード
        var speed = 500;
        //リンク元を取得
        var href= $(this).attr("href");
        //リンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //リンク先までの距離を取得
        var position = target.offset().top;
        //スムーススクロール
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    });
//ページトップへ戻る
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
});




//PC限定で一番最後に実行
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  document.addEventListener("DOMContentLoaded", function() {
  //準備
  let cursorR = 4;  //カーソルの半径
  const cursor = document.getElementById('cursor');  //カーソル用のdivを取得
  
  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
  
  //aタグとbuttonタグにclass付与
  const linkElem = document.querySelectorAll('a,button,label,.acc-btn');
  for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', function (e) {
          cursor.classList.add('hover');
      });
      linkElem[i].addEventListener('mouseout', function (e) {
          cursor.classList.remove('hover');      
      });
  }
  });
  }