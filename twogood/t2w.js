var kl=gsap.timeline()
gsap.from("#nav #nav1 ,#nav2 a ,#nav2 button" ,{
	y:-70,
	stagger:0.3,
	// duration:0.5,
	opacity:0
})
gsap.from("#heading h1",{
	y:100,
	delay:2,
	stagger:0.1,
	opacity:0,
	duration:0.4
})

document.querySelector("#pa1").addEventListener("mouseenter",function(){
	
	
	document.querySelector("#hh #pa2").style.display="initial"


})
document.querySelector("#pa1").addEventListener("mouseleave",function(){
	
	
	document.querySelector("#hh #pa2").style.display="none"


})
document.querySelector("#pa11").addEventListener("mouseenter",function(){
	
	
	document.querySelector("#hh1 #pa2q").style.display="initial"


})
document.querySelector("#pa11").addEventListener("mouseleave",function(){
	
	
	document.querySelector("#hh1 #pa2q").style.display="none"


})
document.querySelector("#pa1w").addEventListener("mouseenter",function(){
	
	
	document.querySelector("#hhw #pa2w").style.display="initial"


})
document.querySelector("#pa1w").addEventListener("mouseleave",function(){
	
	
	document.querySelector("#hhw #pa2w").style.display="none"


})
var t=0;
var a=document.querySelectorAll(".one")
a.forEach(function(elem){
	
	elem.addEventListener("click",function(){
		var b=elem.firstChild
		if(t==0){
			b.style.backgroundColor="black"
			gsap.from("#all h1",{
				y:200,
				stagger:.2,
				opacity:0
				
			})
			gsap.to("#scro",{
				// x:300,
				x:300,
				duration:1,
				// stagger:0.3
		
				// scrollbars:"auto"
		
			})
			t++

		}
		else{b.style.backgroundColor="white"
			t--
			gsap.to("#scro",{
				// x:300,
				x:-500,
				duration:9,
				// stagger:0.3
		
				// scrollbars:"auto"
		
			})
		}
	
		// document.querySelector("#scro").scrollLeft="1000vw"
	})
})

// var t=gsap.timeline({
// 	scrollTrigger:{
// 		trigger:"#main",
// 		scrub:0.3,
// 		pin:true,
		
		
//         snap:true,
//         // end:"200% 0%"
// 	}	
// })
gsap.from("#iq",{
	y:-200,
	opacity:0,
	duration:10,
	stagger:1,
	scrollTrigger:{
		trigger:" #iq",
		scrub:4,
		scroller:"body",
		// pin:true,
		start:"10%",
		// markers:true,
        // snap:true,
        end:"10% 0%"
	}
})
gsap.from("#hh,#hh1,#hhw",{
	y:-200,
	duration:3,
	scrollTrigger:{
		trigger:" #hh",
		scrub:4,
		scroller:"body",
		// pin:true,
		start:"0% 50%",
		// markers:true,
        // snap:true,
        end:"10% -10%"
	}

})
document.querySelector("#nav2 h1").addEventListener("click",function(){
	gsap.to("#icon",{
		y:604
	})
})
document.querySelector("#icon h6").addEventListener("click",function(){
	gsap.to("#icon",{
		y:-604
	})
})
document.querySelector("#nav2 h2").addEventListener("click",function(){
	gsap.to("#icon1",{
		y:604
	})
})
document.querySelector("#icon1 h6").addEventListener("click",function(){
	gsap.to("#icon1",{
		y:-604
	})
})

gsap.to("#jas",{
	y:-30,
	stagger:1,
	opacity:1,
	duration:0.1,
	// y:20,
	display:"initial",
	scrollTrigger:{
		scroller:"body",
		trigger:"#jas",
		// markers:true,
		start:"-65%  10%",
		scrub:true,
		end:"0% 0%"
	}
})


document.querySelector("#pic ,#picq").addEventListener("mousemove",function(dets){
	gsap.to("#cursor",{
        top:`${dets.clientY}px`,
        left:`${dets.clientX}px`
	})
})

document.querySelector("#final").addEventListener("mouseenter",function(){
		document.querySelector("#uud").style.display="none"

})
document.querySelector("#kk").addEventListener("mouseleave",function(){
	document.querySelector("#uud").style.display="initial"

})
// document.querySelector("#final").addEventListener("mousemove",function(){
// 	document.querySelector("#iq1a").style.display="initial"
// 	document.querySelector("#iq2a").style.display="initial"

// })
document.querySelector("#video1").addEventListener("mousemove",function(dets){
	gsap.to("#play",{
        top:dets.y-20+"px",
		left:dets.x-20+"px",
		display:"initial"
	})
})