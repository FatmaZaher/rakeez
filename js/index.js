$(document).ready(function () {

    $('.navbar .menu div').click(function(){
        $('.body-overlay').show();
		$('.mobile').animate({
            left : '0'   
        }, 800)
        $('.body-overlay').animate({
            opacity: '1'
        },800)
    })
    $('.mobile-off > div').click(function(){
		$('.mobile').animate({
            left : '-100%'    
        }, 800)
        
        $('.body-overlay').animate({
            opacity: 0
        })
        $('.body-overlay').hide(800);
    })  

    $('.mobile-menu .services-plus .btn-link').on('click',function(){
        $('.mobile-menu .btn-link i').not('.services-plus .btn-link i').removeClass('fas fa-minus').addClass('fas fa-plus',1000);
        $('.services-plus .btn-link i').toggleClass('fas fa-minus').toggleClass('fas fa-plus',1000);
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })




//     $(".owl-carousel").owlCarousel({
//       loop: true,
//       autoplay: true,
//       items: 1,
//       nav: true,
//       autoplayHoverPause: true,
//       animateOut: 'slideOutUp',
//       animateIn: 'slideInUp'
//     });
//     $('.testimonial .owl-carousel').owlCarousel({
//       loop: true,
//       margin: 15,
//       nav: true,
//       autoplay : true,
//       slideTransition: 'linear',
//       duration: 1500,
//       responsive:{
//           0:{
//               items:1
//           }
//       }
//   })
      AOS.init({
        duration: 1500,
        once: true,
    });
})