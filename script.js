

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")



document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-150+"px"
    blur.style.top = dets.y-150+"px"
})

var H4 = document.querySelectorAll("#nav h4")
H4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #c5ff27"
        crsr.style.backgroundColor="#c5ff27"
    })
})

gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from("#about-us img,#about-us-in",{
    opacity:0,
    y:50,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    // duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#page4 h1",{
    y:50,
    // duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})