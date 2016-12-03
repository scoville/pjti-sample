$(function(){

  // http://xn----feusb1a9dc4l1gze3075aex0ahubic707bov6d844fresa.com/ サンプル
  if (window.location.pathname.indexOf("rockup") > -1) {
    $('.mainImage').attr("src", "./assets/images/rockup_main.jpg");
    $('body').css("background", "url(./assets/images/rockup_bg.jpg) center top repeat");
    $('body').css("color", "#fff");
    $('.subMenu span').css("color", "#fff");
    $('.about .box .description').css("color", "#888");
  }

  // http://kyoumachi-shinjuku.com/ サンプル
  if (window.location.pathname.indexOf("kyoumachi") > -1) {
    $('.mainImage').attr("src", "./assets/images/kyoumachi_main.png");
    $('body').css("background", "url(./assets/images/kyoumachi_bg.png) center top repeat");
    $('body').css("color", "#000");
    $('.subMenu span').css("color", "#000");
    $('.about .box .description').css("color", "#666");
  }

  // http://xn--cckd0bxbb1b7bxb8byj1eoe9e8970e95ius2a.com/ サンプル
  if (window.location.pathname.indexOf("mysterious") > -1) {
    $('.mainImage').attr("src", "./assets/images/mysterious_main.jpg");
    $('body').css("background-color", "#061929");
    $('body').css("color", "#fff");
    $('.subMenu span').css("color", "#fff");
    $('.about .box .description').css("color", "#888");
  }
})
