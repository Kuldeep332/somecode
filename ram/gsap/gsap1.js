var t=gsap.timeline()
t.from("#nav h1",{
	y:-50,
	opacity:0,
	duration:1,
	delay:0.3,
	stagger:0.2
})
t.from("#nav2 h1",{
	y:50,
	duration:0.3,
	delay:-1.2,
	opacity:0,
	stagger:0.2
})
t.from("#main>h1",{
	y:-20,
	opacity:0,
	duration:1,
	delay:0.2,
	stagger:0.3

})
t.from("img",{
	x:20,
	opacity:0,
	stagger:0.4,
	rotate:49


})