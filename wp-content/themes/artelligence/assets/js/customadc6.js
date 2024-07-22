
// Comparison Table JS

jQuery( "#Comprison_pricingplan ul" ).on( "click", "li", function() {

    var pos = jQuery(this).index()+2;

    jQuery("tr").find('td:not(:eq(0))').hide();

    jQuery('td:nth-child('+pos+')').css('display','table-cell');

    jQuery("tr").find('th:not(:eq(0))').hide();

    jQuery('li').removeClass('active');

    jQuery(this).addClass('active');

});



// Responsive pricing table JS





// Initialize the media query

var mediaQuery = window.matchMedia('(min-width: 768px)');



// Add a listen event

mediaQuery.addListener(doSomething);



// Function to do something with the media query

function doSomething(mediaQuery) {

    if (mediaQuery.matches) {

        jQuery('.sep').attr('colspan',5);

    } else {

        jQuery('.sep').attr('colspan',2);

    }

}



// On load

doSomething(mediaQuery);



jQuery(document).ready(function(){

        jQuery("#loadMore").on("click", function(e) {

            jQuery('.comparison_plan_cont').toggleClass("tbl_height");

        });

    }

)



// Header Scroll



const header = document.getElementsByClassName('navbar');

const scrollUp = "scroll-up";

const scrollDown = "scroll-down";

let lastScroll = 0;







window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset;

if (currentScroll <= 0) {

jQuery(header).removeClass(scrollUp);

return;

}



if (currentScroll > lastScroll && !jQuery(header).hasClass(scrollDown)) {

// down

jQuery(header).removeClass(scrollUp);

jQuery(header).addClass(scrollDown);

} else if (currentScroll < lastScroll && jQuery(header).hasClass(scrollDown)) {

// up

jQuery(header).removeClass(scrollDown);

jQuery(header).addClass(scrollUp);

}

lastScroll = currentScroll;

});





// Replacing with HOME_URL

// jQuery(document).ready(function(){

//     var a = jQuery('.url-link a');

//     jQuery.each(a,function(key,val){

//         var link = jQuery(val).attr('href');

//         if(link){

//             var newlink = link.replace("http://[url_link]", ArtelligenceAjax.HOME_URL);

//             jQuery(val).attr('href',newlink);

//         }

//     });

 

//     var a = jQuery('a');

//     jQuery.each(a,function(key,val){

//         var link = jQuery(val).attr('href');

//         if(link){

//             var newlink = link.replace("[url_link]", ArtelligenceAjax.HOME_URL);

//             jQuery(val).attr('href',newlink);

//         }    

//     });

   

//     var a = jQuery('a');

//     jQuery.each(a,function(key,val){

//         var link = jQuery(val).attr('href');

//         if(link){    

//             var newlink = link.replace("[URL]", ArtelligenceAjax.HOME_URL);

//             jQuery(val).attr('href',newlink);

//         }    

//     });

// });





// Dequeue CSS Files

jQuery(document).ready(function(){

    var link = jQuery('link');

    jQuery.each(link,function(key,val){

        var link = jQuery(val).attr('id');

        if(link == 'style-css') {

            jQuery(val).remove();

        }

    });

});





// Update cart icon counter

jQuery(document).on('click', '.add_to_cart_button', function(){

    setTimeout(function(){

        var data = {

            'action': 'cart_count_retriever'

        };

        jQuery.post(wc_add_to_cart_params.ajax_url, data, function(response) {

            if(response == 1){

                jQuery('.cart-btn a').append('<span class="cart-contents-count">'+response+'</span>');

            }

            else{

                jQuery('.cart-contents-count').text(response);

            }

        });

    },1500);

});

jQuery(document).on('click', '.woocommerce .cart button.button', function(){

    setTimeout(function(){

        var data = {

            'action': 'cart_count_retriever'

        };

        jQuery.post(wc_add_to_cart_params.ajax_url, data, function(response) {

            jQuery('.cart-contents-count').text(response);

            jQuery(document.body).trigger('wc_fragment_refresh');

        });

    },1000);

});

jQuery(document).on('click', '.woocommerce a.remove', function(){

    setTimeout(function(){

        var data = {

            'action': 'cart_count_retriever'

        };

        jQuery.post(wc_add_to_cart_params.ajax_url, data, function(response) {

            jQuery('.cart-contents-count').text(response);

            jQuery(document.body).trigger('wc_fragment_refresh');

        });

    },1000);

});

// Back to top button

jQuery(function(){
    //Scroll event
    jQuery(window).scroll(function(){
      var scrolled = jQuery(window).scrollTop(); 
      if (scrolled > 200) jQuery('#backtotop').fadeIn('slow');
      if (scrolled > 200) jQuery('#backtotop').css('opacity','1');
      if (scrolled < 200) jQuery('#backtotop').fadeOut('slow');
    });
    //Click event
    jQuery('#backtotop').click(function () {
      jQuery("html, body").animate({ scrollTop: "0" },  500);
    });
});

// nav parent link click

jQuery(document).ready(function(){
    jQuery('.dropdown-parent-link > a').each(function() {
        jQuery(this).on('click', function(e){
            e.preventDefault();
            var href = jQuery(this).attr('href');
            window.location.href = href;
        });
    });
});

//shop page

jQuery(document).ready(function($) {
    // Find the maximum height among all <li> elements
    var maxHeight = 0;
    jQuery(".woocommerce-page ul.products li.product").each(function() {
      var height = jQuery(this).height();
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
  
    // Set the same height for all <li> elements
    $(".woocommerce-page ul.products li.product").height(maxHeight);

    let a = $('.elementor-widget-container').find("a:not('.menu-item a, .what_we_do_section .carousel a, .testimonial-section a, .elementor-widget-slider_revolution a')");
	const path = window.location;
	
	$.each(a, function(key, val){
		let href = $(val).attr('href');
		let ahref = href.split('?');
		if(typeof ahref[1] === 'undefined' || ahref[1] == ''){
			$(val).attr('href', href+''+path.search);
		}
	});
  });



