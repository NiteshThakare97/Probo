
jQuery(document).ready(function($) {
    if(typeof testimonial_settings !== "undefined"){
        var $testimonialspace = 30;
        var $testimonialspace_laptop = 20, $testimonialspace_tablet = 15, $testimonialspace_mobile = 10;
        
        if(typeof testimonial_settings['artelligence_testimonial_space'] !== "undefined"){
            $testimonialspace = testimonial_settings['artelligence_testimonial_space']['size']; 
        }
        if(typeof testimonial_settings['artelligence_testimonial_space_laptop'] !== "undefined"){
            $testimonialspace_laptop = testimonial_settings['artelligence_testimonial_space_laptop']['size'];
        }
        if(typeof testimonial_settings['artelligence_testimonial_space_tablet'] !== "undefined"){
            $testimonialspace_tablet = testimonial_settings['artelligence_testimonial_space_tablet']['size'];
        }
        if(typeof testimonial_settings['artelligence_testimonial_space_mobile'] !== "undefined"){
            $testimonialspace_mobile = testimonial_settings['artelligence_testimonial_space_mobile']['size'];
        }

        if(typeof testimonial_settings !== "undefined"){
        
        $('.artelligence-testimonial-section .owl-carousel').owlCarousel({
            margin:$testimonialspace,
            responsiveClass:true,
            nav:testimonial_settings['artelligence_show_nav'],
            items:testimonial_settings['artelligence_slides_to_show'],
            dots: testimonial_settings['artelligence_show_dots'],
            responsive:{
                0:{
                    items:testimonial_settings['artelligence_slides_to_show_mobile'],
                    nav:testimonial_settings['artelligence_show_nav'],
                    margin:$testimonialspace_mobile,
                    dots:testimonial_settings['artelligence_show_dots_mobile'],
                },
                768:{
                    items:testimonial_settings['artelligence_slides_to_show_tablet'],
                    nav:testimonial_settings['artelligence_show_nav'],
                    margin:$testimonialspace_tablet,
                    dots: testimonial_settings['artelligence_show_dots_tablet'],
                },
                1025:{
                    items:testimonial_settings['artelligence_slides_to_show_laptop'],
                    nav:testimonial_settings['artelligence_show_nav'],
                    margin:$testimonialspace_laptop,
                    dots: testimonial_settings['artelligence_show_dots_laptop'],
                },
                1367:{
                        items:testimonial_settings['artelligence_slides_to_show'],
                        nav:testimonial_settings['artelligence_show_nav'],
                        margin:$testimonialspace,
                        dots: testimonial_settings['artelligence_show_dots'],
                }
            }
        });
        }
}
})



    
