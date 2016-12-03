$(function(){

  // http://xn----feusb1a9dc4l1gze3075aex0ahubic707bov6d844fresa.com/ サンプル
  if (window.location.pathname.indexOf("rockup") > -1) {
    $('.mainImage').attr("src", "./assets/images/rockup_main.png");
    $('body').css("background", "url(./assets/images/rockup_bg.png) center top repeat");
    $('body').css("color", "#fff");
    $('.subMenu span').css("color", "#fff");
    $('.about .box .description').css("color", "#888");
  }

  // http://kyoumachi-shinjuku.com/ サンプル
  if (window.location.pathname.indexOf("kyoumachi") > -1) {
    $('.mainImage').attr("src", "./assets/images/kyoumachi_main.png");
    $('body').css("background", "url(./assets/images/kyoumachi_bg.jpg) center top repeat");
    $('body').css("color", "#000");
    $('.subMenu span').css("color", "#000");
    $('.about .box .description').css("color", "#666");
  }
})
