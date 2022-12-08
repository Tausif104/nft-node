jQuery(document).ready(function ($) {
  $('.banner-sliders').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  })

  $('.collection-slides').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  })

  $('.category-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  })
})
