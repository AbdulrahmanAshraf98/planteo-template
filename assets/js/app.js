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
      })
})