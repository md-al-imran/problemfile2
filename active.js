$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    nav:true,
    animateOut: 'lightSpeedOut',
    animateIn: 'lightSpeedIut',
    autoplay:true,
    autoplayTimeout:10000,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
            
        }
    }
});
    
    $(".owl-carousel").on('translate.owl.carousel',function(){
        $('.slider_text h3').removeClass('bounceInDown animated').hide();
        $('.slider_text h1').removeClass('rollIn animated').hide();
        $('.slider_text p').removeClass('rollIn animated').hide();
        $('.slider_text .slider_btn').removeClass('slideInRight animated').hide();
   });
    
    $(".owl-carousel").on('translated.owl.carousel',function(){
        $('.owl-item.active .slider_text h3').addClass('bounceInDown animated').show();
        $('.owl-item.active .slider_text h1').addClass('rollIn animated').show();
        $('.owl-item.active .slider_text p').addClass('rollIn animated').show();
        $('.owl-item.active .slider_text .slider_btn').addClass('slideInRight animated').show();
    });
    
    
    
});

