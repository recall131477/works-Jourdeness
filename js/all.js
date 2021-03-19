$(document).ready(function () {

  // loading
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loading').addClass('is-loaded');
    }, 1200);
  });

  // AOS
  if ($(".home__main").length) {
    setTimeout(function () {
      AOS.init({
        once: true
      });
    }, 1000);
  } else {
    AOS.init({
      once: true
    });
  }

  // cursor
  if ($(".js-cursor").length) {
    let prev = document.querySelector(".hero__btnPrev");
    let next = document.querySelector(".hero__btnNext");
    let cursor = document.querySelector(".cursor");

    let moveCursor = function (e) {
      let { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    prev.addEventListener("mousemove", function () {
      cursor.classList.add("is-hover");
      cursor.classList.add("is-prev");
    });

    prev.addEventListener("mouseleave", function () {
      cursor.classList.remove("is-hover");
      cursor.classList.remove("is-prev");
    });

    next.addEventListener("mousemove", function () {
      cursor.classList.add("is-hover");
      cursor.classList.add("is-next");
    });

    next.addEventListener("mouseleave", function () {
      cursor.classList.remove("is-hover");
      cursor.classList.remove("is-next");
    });

    window.addEventListener("mousemove", moveCursor);
  }

  // 點擊漢堡選單顯示nav
  $(".header__main .header__burger").click(function () {
    $(".nav").toggleClass('is-active');
    $(".header__main .header__burger").toggleClass('is-active');
  });

  // nav 下拉選單
  $(".js-dropdown .nav__link").on("click", function (e) {
    let windowWidth = window.innerWidth;
    if (windowWidth < 992) {
      e.preventDefault();
      $(this).siblings().slideToggle();
      $(this).parent().toggleClass('is-active');
    }
  });

  // 更改表單內容文字位置
  if ($(".js-form").length) {
    $(".js-form .form__control").on("focus", function () {
      $(this)
        .siblings("label")
        .addClass("is-focus");
    });
    $(".js-form .form__control").on("blur", function () {
      if (
        $(this)
          .val()
          .trim().length == 0
      ) {
        $(this).val("");
        $(this)
          .siblings("label")
          .removeClass("is-focus");
      }
    });
  }

  // header滾輪效果顯示list
  if ($(".js-header").length) {
    let windowWidth = window.innerWidth;
    $(window).on("scroll", function () {
      if (windowWidth >= 768) {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
          $(".js-header__info").addClass("is-active");
        } else {

          $(".js-header__info").removeClass("is-active");
        }
      }
    });
  }

  // 顯示info的list
  if ($(".js-infoes").length) {
    $(".infoes__btn").on("click", function () {
      $(".infoes__list").toggleClass("is-active");
    });
  }

  // scroll section
  if ($(".js-hero__scroll").length) {
    $(".js-hero__scroll").on("click", function (e) {
      e.preventDefault();
      let targetOffset = $(".intro").offset().top;
      $("html, body").animate(
        {
          scrollTop: targetOffset
        },
        750
      );
    });
  }

  // change galley
  if ($(".js-gallery").length) {
    $(".btn")
      .eq(0)
      .addClass("is-active");
    $(".gallery__item")
      .eq(0)
      .addClass("is-active");
    let galleryTab = $(".gallery__tab a");
    let galleryFigure = $(".gallery__item");
    galleryTab.on("click", function (e) {
      e.preventDefault();
      $(".btn").removeClass("is-active");
      $(this).addClass("is-active");

      let tabIndex = $(this).index();
      galleryFigure.removeClass("is-active");
      galleryFigure.eq(tabIndex).addClass("is-active");
    });
  }

  // index-hero swiper
  if ($(".js-hero").length) {
    let heroSlider = new Swiper(
      ".js-hero .hero__slider .swiper-container",
      {
        effect: "slide",
        slidesPerView: 1,
        speed: 750,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 4000
        // },
        paginationClickable: true,
        parallax: true,
        loop: true,
        pagination: {
          el: ".js-hero .hero__slider .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".js-hero .hero__btnNext",
          prevEl: ".js-hero .hero__btnPrev"
        },
        breakpoints: {
          768: {
            parallax: false
          }
        }
      }
    );
    // $(".js-hero").on("mouseenter", function() {
    //   heroSlider.autoplay.stop();
    // });
    // $(".js-hero").on("mouseleave", function() {
    //   heroSlider.autoplay.start();
    // });

    $(window).on("resize", function () {
      $(".hero__media").removeAttr("style");
    });

    let heroNewSlider = new Swiper(
      ".js-hero .hero__news .swiper-container",
      {
        effect: "slide",
        slidesPerView: 1,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 4000
        // },
        loop: true,
        navigation: {
          nextEl: ".js-hero .hero__newsBtnNext",
          prevEl: ".js-hero .hero__newsBtnPrev"
        }
      }
    );
  }

  // index-series swiper
  if ($(".js-series__slider").length) {
    $(".series__sliderContent").removeClass("is-active");
    $(".series__sliderContent")
      .eq(0)
      .addClass("is-active");

    function nowSeries(index) {
      $(".series__sliderContent").removeClass("is-active");
      $(".series__sliderContent")
        .eq(index)
        .addClass("is-active");
    }

    let seriesGallerySlider = new Swiper(
      ".js-series__sliderGallery .swiper-container",
      {
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 1000,
        loop: true,
        followFinger: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".js-series__sliderGallery .btn__arrowNext",
          prevEl: ".js-series__sliderGallery .btn__arrowPrev"
        }
      }
    );

    seriesGallerySlider.on("slideChangeTransitionEnd", function () {
      let index = seriesGallerySlider.realIndex;
      nowSeries(index);
    });
  }

  // coreLaboratory swiper
  if ($(".js-laboratory-slider").length) {
    let laboratorySlider = new Swiper(
      ".js-laboratory-slider .swiper-container",
      {
        spaceBetween: 30,
        slidesPerView: "auto",
        speed: 500,
        loop: true,
        navigation: {
          nextEl: ".js-laboratory-slider .btn__arrowNext",
          prevEl: ".js-laboratory-slider .btn__arrowPrev"
        },
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return (
              "<span class='current__num'>" +
              ("0" + current).slice(-2) +
              "</span>" +
              "<span>" +
              " / " +
              "</span>" +
              "<span class='total__num'>" +
              ("0" + total).slice(-2) +
              "</span>"
            );
          }
        }
      }
    );
  }

  // coreFactory swiper
  if ($(".js-gallery").length) {
    $(".gallery__item").each(function (index) {
      let newIndex = index + 1;
      $(this).addClass("gallery__item-" + newIndex);
      let galleryThumbSlider = new Swiper(
        ".gallery__item-" + newIndex + " .gallery__container-bottom",
        {
          spaceBetween: 20,
          slidesPerView: 2,
          speed: 500,
          loop: true,
          loopedSlides: 5,
          observer: true,
          observeParents: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          breakpoints: {
            576: {
              spaceBetween: 15,
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4
            }
          }
        }
      );

      let galleryTopSlider = new Swiper(
        ".gallery__item-" + newIndex + " .gallery__container-top",
        {
          slidesPerView: 1,
          speed: 500,
          loop: true,
          loopedSlides: 5,
          navigation: {
            nextEl: ".gallery__item-" + newIndex + " .btn__arrowNext",
            prevEl: ".gallery__item-" + newIndex + " .btn__arrowPrev"
          },
          observer: true,
          observeParents: true,
          thumbs: {
            swiper: galleryThumbSlider
          }
        }
      );
    });
  }

  // productSeries swiper
  if ($(".js-maintenance-slider").length) {
    let researchSlider = new Swiper(
      ".js-maintenance-slider .swiper-container",
      {
        slidesPerView: 1,
        speed: 500,
        autoHeight: true,
        loop: true,
        navigation: {
          nextEl: ".js-maintenance-slider .btn__arrowNext",
          prevEl: ".js-maintenance-slider .btn__arrowPrev"
        },
        pagination: {
          el: ".js-maintenance-slider .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              "<span>" +
              (index + 1) +
              "</span>" +
              "</div>"
            );
          }
        }
      }
    );
  }

  // video
  if ($(".video__iframe").length) {
    let tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    let videoList = document.querySelector(".video__iframe");
    let videoMedia = document.querySelector(".video__overlay");

    window.onYouTubeIframeAPIReady = function () {
      let videoId = videoList.getAttribute("id");
      let videoCode = videoList.getAttribute("data-code");

      player = new YT.Player(videoId, {
        height: "100%",
        width: "100%",
        videoId: videoCode,
        playerVars: {
          rel: 0,
          showinfo: 0,
          autoplay: 0,
          loop: 1,
          modestbranding: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };

    function onPlayerReady(event) {
      // event.target.playVideo();
      videoMedia.addEventListener("click", function () {
        this.classList.add("is-hide");
        player.playVideo();
      });
    }

    let done = false;

    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
  }

});

