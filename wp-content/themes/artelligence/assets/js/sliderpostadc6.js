

// jQuery(document).ready(function($) {
//     var owl = jQuery('.immersive-test');
//     owl.owlCarousel({
//         margin: 0,
//         nav: false,
//         loop: true,
//         dots: true,
//         autoplay: false,
//         autoplayTimeout: 4500,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             576: {
//                 items: 1
//             },
//             992: {
//                 items: 2
//             }
//         }
//     })
// })

jQuery(document).ready(function($) {
    var owl = jQuery('.portfolio_section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})
 jQuery("#elementor-control-default-c3939").change(function ($) {
    var end = this.value;
    console.log("tegdgtdfhgsjhdf");
})
 ;