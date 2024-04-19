var arr=[{name:"Abshike",pic:("https://plus.unsplash.com/premium_photo-1664868840007-c0644c70796b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"),status:"Stranger"},
{name:"Shan",pic:"https://images.unsplash.com/photo-1684880868860-5acfa16e44bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",status:"Stranger"},

{name:"vicky dhote",pic:"https://images.unsplash.com/photo-1674704740402-72b777b9aea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",status:"Stranger"}
];

function print(){
	var clutter="";

arr.forEach(function(elem,index){
	clutter+=`<div class="box">
	<div class="pic">
	<img src="${elem.pic}"alt="">
	</div>
	<h4>${elem.name}</h4>
	<p>Lorem ipsum dolor sit amet consec<br>tetur. Lorem ipsum dolor sit.</p>
	<h1 class="${elem.status.split(" ").join("")}" class id="${elem.FriendRequestSend}">${elem.status}</h1>
	<button id="${index}"class="${elem.status === 
	"Friends"?"blue":"red"}">${elem.status === "Friends"?"remove friend":"add friend"}</button>
</div>`

})


document.querySelector("#main").innerHTML=clutter;

}
// var clutter="";
// arr.forEach(function(elem){
// 	clutter+=`<div class="box">
// 	<div class="${elem.pic}"></div>
// 	<h4>${elem.name}</h4>
// 	<p>Lorem ipsum dolor sit amet consec<br>tetur. Lorem ipsum dolor sit.</p>

// 	<h1>${elem.status}</h1>
// 	<button>ADD Friend</button>
// </div>`

// })


// document.querySelector("#main").innerHTML=clutter;
print();
document.querySelector("#main").addEventListener("click",function(deat){
arr[deat.target.id].status="FriendRequestsend";

setTimeout(function(){
	arr[deat.target.id].status="Friends";
	print();

},2000)
print();
})
