$(document).ready(()=>{
    $(".close-icon").click(()=>{
        $(".navbar-collapse").animate({"right":"-100%"},500);
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").click(()=>{
        $(".navbar-collapse").animate({"right":"0%"}, 500);
    })
    $(".navbar-nav .nav-item .nav-link").click(function(){
        $(this).next().toggleClass("active").parent().siblings().find(".drop-down-menu.active").removeClass("active");
    })
    // $(window).scroll(()=>{
    //    const top= $(this).scrollTop(); 
    //    console.log(top);
    //    if(top>50)
    //    {
    //     $(".navbar").toggleClass("scrolled");
    //    } 
    // })
    $(window).scroll(function(){
        $(".navbar").toggleClass("scrolled" ,$(this).scrollTop() > 50)
      });

    
    $('.project .owl-carousel').owlCarousel({
        
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
               
            }
        }
    });
    $('.team .owl-carousel').owlCarousel({
        
        loop:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
               
            }
        }
    });
    $('.tastimonials .owl-carousel').owlCarousel({
        
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

    $('.blog .owl-carousel').owlCarousel({
        
        loop:false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
    $('.brand .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
})