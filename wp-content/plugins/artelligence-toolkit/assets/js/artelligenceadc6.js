
jQuery(document).ready(function($) {
    if(typeof testimonial_settings !== "undefined"){
        
        var $testimonialspace = 30;
        var $testimonialspace_laptop = 20, $testimonialspace_tablet = 15, $testimonialspace_mobile = 10;
        
        
        if(typeof testimonial_settings['artelligence_testimonial_space'] !== "undefined" || testimonial_settings['artelligence_testimonial_space'] != ""){
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
            let dots = testimonial_settings['artelligence_show_dots'];
            let nav = testimonial_settings['artelligence_show_nav'];
        jQuery('#immersive').owlCarousel({
            margin:$testimonialspace,
            responsiveClass:true,
            loop: true,
            nav:(nav=='true')?true:false,
            items:testimonial_settings['artelligence_slides_to_show'],
            dots: (dots=='true')?true:false,
            responsive:{
                0:{
                    items:testimonial_settings['artelligence_slides_to_show_mobile'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace_mobile,
                    dots: (dots=='true')?true:false,
                },
                768:{
                    items:testimonial_settings['artelligence_slides_to_show_tablet'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace_tablet,
                    dots: (dots=='true')?true:false,
                },
                1025:{
                    items:testimonial_settings['artelligence_slides_to_show_laptop'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace_laptop,
                    dots: (dots=='true')?true:false,
                },
                1367:{
                    items:testimonial_settings['artelligence_slides_to_show'],
                    nav: (nav=='true')?true:false,
                    margin:$testimonialspace,
                    dots: (dots=='true')?true:false,
                }
            }
            
        });
        }
    }  
    jQuery('#search i').click(function(){
        jQuery('#search').submit();
    });
})



