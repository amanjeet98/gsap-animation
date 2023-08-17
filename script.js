let tl= gsap.timeline()
    
tl.from("#nav img,#nav-part2,#nav-part3",{
    y:-100,
    duration:1.5,
    stagger:0.3,
})

tl.from("#main h1",{
y:100,
opacity:0,
stagger:0.3,

})
tl.from("#main>img",{
scale:0, 
opacity:0,
duration:0.5,
stagger:0.2,
})

tl.from("h5",{
scale:0,
opacity:0,

})
tl.to("h5",{
y:30,
repeat:-1,
yoyo:true,
})