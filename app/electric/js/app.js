function myFunction(x) {
	var el = document.getElementById(x);
	var coord = el.getBoundingClientRect();
	var winWidth = document.documentElement.clientWidth;
	var winHeight = document.documentElement.clientHeight;
	if (coord.bottom > winHeight && coord.right > winWidth){
		el.style.right = "0px";
		el.style.left = "auto";
		el.style.bottom = "44px";
	}
	else if (coord.left < 0){
		el.style.left = "0px";
	}
	else if (coord.bottom > winHeight){
		el.style.bottom = "44px";
	}
	else if (coord.right > winWidth){
		el.style.right = "0px";
	}
}
document.getElementById("top-btn-left").onclick = function(event) {
	console.log(event.target());
};
var divs = document.getElementsByClassName("nav-btn_js");
var menus = document.getElementsByClassName("drop-menu");
var last = 0;
var dropMenu = document.getElementsByClassName("drop-menu");
var handler = function() {
	var index = Array.prototype.indexOf.call(divs, this);
	if (last != index){
		for( var i = 0; i<dropMenu.length; i++){
			dropMenu[i].classList.remove("show");
		}
	}
	menus[index].classList.toggle("show");
	myFunction(menus[index].id);
	last = index;
};
for (var i = 0; i < divs.length; i++) {
	divs[i].onclick = handler;
}

