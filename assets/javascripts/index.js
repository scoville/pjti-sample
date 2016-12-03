$(function(){
  // http://kyoumachi-shinjuku.com/ サンプル
  if (window.location.pathname.indexOf("kyoumachi") > -1) {
    $('.mainImage').attr("src", "./assets/images/kyoumachi_main.png");
    $('body').css("background", "url(./assets/images/kyoumachi_bg.jpg) center top repeat");
    $('body').css("color", "#000");
    $('.subMenu span').css("color", "#000");
  }
})
