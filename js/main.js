$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").addClass("menu__list--active");
  });

  $(".menu__list-link").on("click", function () {
    $(".menu__list").removeClass("menu__list--active");
  });

  var mixer = mixitup(".gallery__content");
});
