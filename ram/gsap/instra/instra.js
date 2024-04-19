// var f=document.querySelector();
var arr=[
	{	dpimage:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",storyimg:"https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"},
{	dpimage:"https://images.unsplash.com/photo-1542848326-0779e6a9ccc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",storyimg:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"},{dpimage:"https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",storyimg:"https://plus.unsplash.com/premium_photo-1669704098776-1408db9ea894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"},

];
var clutter="";
arr.forEach(function(elem,index){
	clutter+=`<div class="card">
	<img id="${index}" src="${elem.dpimage}" alt="">
</div>
`
})
document.querySelector("#stroies").innerHTML=clutter
var grow=0;

document.querySelector("#stroies").addEventListener("click",function(dets){
	// console.log(arr[dets.target.id]).storyimg;
	document.querySelector("#fs img").style.backgroundImage=`url(${arr[dets.target.id].storyimg})`
		
	document.querySelector("#fs").style.display="Initial";
setTimeout(function(){
document.querySelector("#fs").style.display="none"
},3500)
if(grow<=100){
	setInterval(function(){
		document.querySelector("#process").style.width=`${grow++}%`;
	},35)}
	else{
		grow=0;
	}
// arr[dets.target.id].storyimg;
// console.log(dets.target.id)

})