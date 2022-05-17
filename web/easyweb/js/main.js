$(window).ready(function () {
    var swiper = new Swiper(".section3--swiper", {
        scrollable:false,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize:212,
        },
        breakpoints:{
            767:{
                centeredSlides: false,
            }
        }
      });
    const bgContainer = $("#bgContainer")
    const s1slideLeftBtn = $("#s1slideLeftBtn")
    const s1slideRightBtn = $("#s1slideRightBtn")
    const s2circleText = $("#s2circleText")
    const s1textBox = $("#s1textBox")
    const s1slideBox = $("#s1slideBox")
    const section2 = $("#section2")
    const section3 = $("#section3")
    const s2textBox = $("#s2textBox")
    var s2textBoxTop = s2textBox.offset().top
    const s2circleBox = $("#s2circleBox")
    var s2circleBoxTop = s2circleBox.offset().top
    var s1slideLength = $(".section1--slide-thumb-list").length - 1;
    var s1slideNum = 0;
    var s3top = $("#section3").offset().top
    var winH = $(window).height();
    var headerH = $("#header").innerHeight();
    var scrollTop;
    $(window).resize(function () {
        s2textBoxTop = s2textBox.offset().top
        winH = $(window).height();
        headerH = $("#header").innerHeight();
        s3top = $("#section3").offset().top
        scrollTop = $(window).scrollTop();
    })
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop > s2textBoxTop - winH / 2) {
            s2textBox.addClass("on-view")
        }
        if (scrollTop > s2circleBoxTop - winH / 2) {
            s2circleBox.addClass("on-view")
        }

        if(scrollTop>s3top-headerH){
            $(".header--wrap").removeClass("white")
            $(".header--wrap").addClass("black")
        }else{
            $(".header--wrap").removeClass("black")
            $(".header--wrap").addClass("white")
        }
    })
    function s1slideNumReturn() {
        if (s1slideNum > s1slideLength) {
            s1slideNum = 0;
        } else if (s1slideNum <= 0) {
            s1slideNum = s1slideLength;
        }
    }
    /*
    section1 with fix background image slide change function
    */
    s1slideRightBtn.click(function () {
        s1slideNum = s1slideNum + 1;
        s1slideNumReturn();
        $(".section1--slide-thumb-list").removeClass("active")
        $(".section1--slide-thumb-list").eq(s1slideNum).addClass("active")

        $(".bg-container--list").removeClass("active")
        $(".bg-container--list").eq(s1slideNum).addClass("active")
    })
    s1slideLeftBtn.click(function () {
        s1slideNum = s1slideNum - 1;
        s1slideNumReturn();
        $(".section1--slide-thumb-list").removeClass("active")
        $(".section1--slide-thumb-list").eq(s1slideNum).addClass("active")

        $(".bg-container--list").removeClass("active")
        $(".bg-container--list").eq(s1slideNum).addClass("active")
    })
    /*
    section1~2 gsap animation
    */
    gsap.to(s1slideBox, {
        y: "-50%",
        scrollTrigger: {
            trigger: section2,
            scrub: 1,
        }
    })
    gsap.to(s1textBox, {
        y: "-100%",
        scrollTrigger: {
            trigger: section2,
            scrub: 0.8,
        }
    })
    gsap.set(s2textBox,{
        y:"40%"
    })
    gsap.to(s2textBox, {
        y: "0%",
        scrollTrigger: {
            trigger: section2,
            scrub: 0.8,
        }
    })
    gsap.to(s2circleText, 20, {
        rotate: "-360",
        ease: "none",
        repeat: -1,
    })
    // gsap.set(bgContainer,{
    //     opacity:1
    // })
    // gsap.to(bgContainer,{
    //     opacity:0,
    //     scrollTrigger:{
    //         trigger:section2,
    //         start:"50% top",
    //         end:"70% top",
    //         scrub:0.3
    //     }
    // })
})