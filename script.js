function toggle_burger(){
	let b = document.getElementById("burger");
	if(b.innerHTML == "<i class=\"fa fa-bars\"></i>"){
		b.innerHTML = "<i class=\"fa fa-times\"></i>";
		document.getElementById("mobile-menu").style.display="flex";
	}else{
		b.innerHTML = "<i class=\"fa fa-bars\"></i>";
		document.getElementById("mobile-menu").style.display="none";
	}
}