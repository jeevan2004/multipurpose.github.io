$("document").ready(function ($) {

    $(".hero-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        // // responsive: [{
        // //         breakpoint: 992,
        // //         settings: {
        // //             slidesToShow: 2,
        // //             slidesToScroll: 2,
        // //             infinite: true,
        // //             dots: true
        // //         }
        // //     },
        // //     {
        // //         breakpoint: 576,
        // //         settings: {
        // //             slidesToShow: 1,
        // //             slidesToScroll: 1,
        // //             infinite: true,
        // //             dots: false
        // //         }
        // //     }


        // ]
    });
});

$("document").ready(function ($) {
    if ($('#trustgallery').length) {
        $("#trustgallery").lightGallery();
    }

    AOS.init({
        disable: 'mobile'
    });
});

$(".testimonial").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // // responsive: [{
    // //         breakpoint: 992,
    // //         settings: {
    // //             slidesToShow: 2,
    // //             slidesToScroll: 2,
    // //             infinite: true,
    // //             dots: true
    // //         }
    // //     },
    // //     {
    // //         breakpoint: 576,
    // //         settings: {
    // //             slidesToShow: 1,
    // //             slidesToScroll: 1,
    // //             infinite: true,
    // //             dots: false
    // //         }
    // //     }


    // ]
});

$(".clints-slide").slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    loop: true,
    autoplay: {
        delay: 2500
    },
    speed: 1200,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }


    ]
});