
function tableshowhide(a,b,c){

	x = all.querySelectorAll("div")
	for(i=0;i<x.length;i++)
		x[i].setAttribute("class","f")

	menu = document.getElementById(a);
	all = document.getElementById(b);
	len = menu.childElementCount;	

	closeall();

	for(i=0;i<menu.childElementCount;i++){

		menu.children[i].onclick=function(){
			closeall();
			all.children[this.id].style.display='block';
		}
	}

	//closeall
	function closeall(){
		for(i=0;i<all.childElementCount;i++){
			all.children[i].style.display='none';
		}
	}

	menu.children[c].click()

}

tableshowhide("menu","all",0);