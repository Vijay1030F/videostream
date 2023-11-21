$(document).ready(function() {
   
    var part1 = "<div class=swiper-pagination></div>";

    $("#swiper-press").append(part1);
  });
  

  $(".swiper-container-videos .swiper-wrapper .swiper-slide iframe").click(function() {
    $(this)
      .closest(".swiper-slide")
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    mySwiper1.slideTo(mySwiper1.clickedIndex);
  });
  
  $(".swiper-container-videos .swiper-slide")
    .first()
    .addClass("selected");

  var mySwiper1 = new Swiper(".swiper-container-videos", {

    loop: false,

    slidesPerView: "auto",
    spaceBetween: 15,
    centeredSlides: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-custom-next",
      prevEl: ".swiper-custom-prev"
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });
  
  
  $(function() {

    $(".vid-container").fitVids();
  });

  $(document).ready(function() {
    $(".vid-item").each(function(index) {
      $(this).on("click", function() {
        var current_index = index + 1;
        $(".vid-item .thumb").removeClass("active");
        $(".vid-item:nth-child(" + current_index + ") .thumb").addClass("active");
      });
    });
  });