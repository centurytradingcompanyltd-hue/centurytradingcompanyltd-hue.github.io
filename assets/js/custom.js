(function($) {
  'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    //Navbar JS
    $(window).on('scroll',function() {
        if ($(this).scrollTop()>150){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    //Video Popup
    $('.popup-youtube').magnificPopup({
      disableOn:320,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    //Banner Slider
    $('.banner-slider').owlCarousel({
      loop:true,
      margin:0,
      dots:false,
      nav:true,
      navText:[
        "<i class='icofont-rounded-double-left'></i>",
        "<i class='icofont-rounded-double-right'></i>"
      ],
      autoplay:true,
      items:1,
      mouseDrag:false,
      autoplayHoverPause:true,
      autoplayTimeout:8000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
    });

    //Testimonial Slider
    $('.feedback-slider').owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      nav:true,
      navText:[
        "<i class='icofont-rounded-double-left'></i>",
        "<i class='icofont-rounded-double-right'></i>"
      ],
      autoplay:true,
      smartSpeed:1500,
      responsive:{
        0:{ items:1 },
        992:{ items:2 }
      }
    });

    //Testimonial Slider Two
    $('.feedback-slider-area').owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      nav:true,
      navText:[
        "<i class='icofont-rounded-double-left'></i>",
        "<i class='icofont-rounded-double-right'></i>"
      ],
      autoplay:true,
      smartSpeed:1500,
      items:1
    });

    //Company Slider
    $('.company-slider').owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      smartSpeed:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        768:{ items:3 },
        1000:{ items:5 }
      }
    });
    
    //Accordion JS
    $(".accordion-title").click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();
        $(this).toggleClass("active-title");
        $("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");
    });

    //Scroll Top Button
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
          $('.top-btn').fadeIn();
      } else {
          $('.top-btn').fadeOut();
      }
    });

    $('.top-btn').on('click',function(){
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
    });

    //WOW JS
    new WOW().init();

    //Back To Top
    $(window).on('load',function(){
      $('.top-btn').fadeOut();
    });

    //Pre Loader
    $(window).on('load',function(){
      $(".loader-content").fadeOut(1000);
    });

})(jQuery);
