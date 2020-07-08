$(function(){
  
  let search = document.querySelector('.header__search');
  let form = document.querySelector('.header__form');

  var toggleMenu = function toggleMenu() {
    form.classList.toggle('header__form-active');
  };

  search.addEventListener('click', function (e) {
    e.stopPropagation();

    toggleMenu();
  });

  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_form = target == form || form.contains(target);
    var its_search = target == search;
    var form_is_active = form.classList.contains('header__form-active');

    if (!its_form && !its_search && form_is_active) {
      toggleMenu();
    }
  });

});
$(function(){

  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    nextArrow: '<button type="button" class="slick-btn slick-next icon-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev icon-chevron-left"></button>',
  });

});

$(function(){
  $('.lunch__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="slick-btn slick-next icon-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev icon-chevron-left"></button>',
  });
});

$(function(){
  $('input[type="file"], select').styler({
    locale: 'en',
    locales: {
      'en': {
        filePlaceholder: 'No File Choosen',
        fileBrowse: 'Choose File',
        fileNumber: 'Selected files: %s',
        selectPlaceholder: 'Select...',
        selectSearchNotFound: 'No matches found',
        selectSearchPlaceholder: 'Search...'
      }
    },
  });
});

function initMap() {

  var pos = { lat: 40.726157, lng: -73.986900 };
  var opt = {
    center: pos,
    zoom: 14,
    styles: [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#dbdbdb"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ]
  }
  
  var myMap = new google.maps.Map(document.getElementById('map'), opt);

  var marker = new google.maps.Marker({
    position: pos, 
    map: myMap,
    icon: '../images/marker-map.svg'
  });
}

$('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom',
  closeOnContentClick: true,
  zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out',
    opener: function (openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});

$(function () {
  var btn = $('#topBtn');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('topBtn-show');
    } else {
      btn.removeClass('topBtn-show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '500');
  });
});


$(function () {

  let hamburger = document.querySelector('.menu-btn');
  let menu = document.querySelector('.header__nav');
  let link = document.querySelector('.header__nav-link');

  const toggleMenu = () => {
    menu.classList.toggle('header__nav-active');
    hamburger.classList.toggle('menu-btn_active');
    link.classList.toggle('link_active');
  }

  hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
  });

  link.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let its_link = target == hamburger;
    let menu_is_active = menu.classList.contains('header__nav-active');

    if (!its_menu && !its_hamburger && !its_link && menu_is_active) {
      toggleMenu();
    }
  })

});
$(function(){
  jQuery.datetimepicker.setLocale('en');

  jQuery('#datetimepicker').datetimepicker({
    i18n: {
      en: {
        months: [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December',
        ],
        dayOfWeek: [
          "Su.", "Mo", "Tu", "We",
          "Tu", "Fr", "Sa.",
        ]
      }
    },
    timepicker: false,
    format: 'd.m.Y',
  });

  jQuery('#datetimepicker2').datetimepicker({
    datepicker: false,
    format: 'H:i',
    minTime: '09:30',
    maxTime: '21:30',
    allowTimes: [
      '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:30', '20:00', '20:30', '21:00'
    ]
  });

});

$(function(){

  //E-mail Ajax Send
  $("#form-reservation").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});


new WOW().init();

$(function () {
  var mixer = mixitup('.menu-list__box, .blog-content__inner, .portfolio-list__box');
});