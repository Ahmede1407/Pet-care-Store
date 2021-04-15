$(document).ready(function () {
  // toggle search box
  $("#search").click(function () {
    $(this).toggleClass("fa-times");
    $("#search-box").toggleClass("active");
  });

  //    toggle navbar menu
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#search").removeClass("fa-times");
    $("#search-box").removeClass("active");

    $("#menu").removeClass("fa-times");
    $(".nav").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
