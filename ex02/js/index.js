document.getElementById("p1").addEventListener("click",function(e) {
	this.style.color="red";
});

document.getElementsByTagName("li")[1].addEventListener("click",function(e) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	if (month < 10) {
   		month = "0" + month;
	}
	if (day < 10) {
    	day = "0" + day;
	}
	var element=document.getElementsByTagName("h1")[0];
	element.innerHTML=year+"-"+month+"-"+day;

});


document.getElementsByTagName("li")[2].addEventListener("click",function(e) {
	var x=document.getElementById("d");
	var y=x.getElementsByTagName("li");
	var i,len;
	for(i=0;i<y.length;++i){
		y[i].classList.add("fn-active");
	}
});


document.getElementsByTagName("li")[3].addEventListener("click",function(e){
	document.getElementsByTagName("li")[7].remove();
});


document.getElementsByTagName("li")[4].addEventListener("click",function(e){
	window.open("http://www.taobao.com");
});


document.getElementsByTagName("li")[5].addEventListener("click",function(e){
	var element = document.getElementsByTagName("ul")[0];
	var para = document.createElement("li");
	var node = document.createTextNode("p9");
	para.appendChild(node);
	element.appendChild(para);
});

document.getElementsByTagName("li")[6].addEventListener("click",function(e){
	document.getElementsByClassName("m-box")[0].style.width = document.body.clientWidth.toString() + "px";
});

