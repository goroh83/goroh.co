$(document).ready(function () {
    $('.scroll').delay(2000).fadeIn(500);
});

var w = window.innerWidth;

if (w < 890) {
    $('.scroll').hide();
}

$(function () {
    $('#menu-icon').on('click', function () {
        $("#menu").slideToggle("slow");
        $(this).toggleClass("rotated-menu");
    });
});

$(function () {
    $('#menu ul li').on('click', function () {
        $("#menu").slideToggle("slow");
    });

});

// menu dissapears on click
$('#menu').on('click', function () {
    $(this).fadeOut("slow");
    $('#menu-icon').toggleClass("rotated-menu");
});

// accordion
$(document).ready(function () {
    $("#accordion section h3").click(function (e) {
        $(this).parents().siblings("section").addClass("ac_hidden");
        $(this).parents("section").removeClass("ac_hidden");

        e.preventDefault();
    });
});

/* contact-error button function */
function goBack() {
    window.history.back();
}

/* scroll down button */
$(".scroll__down").click(function () {
    $('html, body').animate({
        scrollTop: $(".scroll-down").offset().top
    }, 750);
});


/*  scroll to top */
$('.scroll__top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).on('scroll', function () {
    checkScroll()
});

function checkScroll() {
    if ($(window).scrollTop() > 900) {
        $('.scroll__top').fadeIn(1000);
    } else {
        $('.scroll__top').fadeOut(700);
    }
}

function initMap() {
    var gorohStudio = {
        lat: 39.206475,
        lng: -76.823735
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: gorohStudio,
        styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#A4B2D6"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#BED2D3"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#D3E9EA"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#D3E9EA"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#D3E9EA"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#2F3C5B"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#D3E9EA"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#D3E9EA"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#D3E9EA"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
    });
    var marker = new google.maps.Marker({
        position: gorohStudio,
        map: map,
        title: 'Goroh studio',
        icon: '../img/pin3.png'
    });

}
