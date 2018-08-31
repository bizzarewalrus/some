window.onload= function(){
	for (var i=0; i<9; i++) {
		document.getElementById('game').innerHTML+='<div class="block"></div>';
	} 
		var res = document.getElementById('game-1');
		var box = document.getElementsByClassName('block');
		var step = 0; 

	document.getElementById('game').onclick = function(e){
		console.log(e);
		if (e.target.className == 'block'){
			if (step%2==0) {
				e.target.innerText = 'X';
			} else {
				e.target.innerText = 'O';
			}
			step++;
			win();
		}
	}
	function win(){

		var btn = document.getElementById('btn');
		btn.onclick = function(){
			for(var i = 0; i<10; i++){
				box[i].innerText = "";
				res.innerHTML = "";
			}
		};

		if ((box[0].innerText == 'X' && box[1].innerText == 'X' && box[2].innerText == 'X') || 
	    (box[3].innerText == 'X' && box[4].innerText == 'X' && box[5].innerText == 'X') || 
		(box[6].innerText == 'X' && box[7].innerText == 'X' && box[8].innerText == 'X') || 
		(box[0].innerText == 'X' && box[3].innerText == 'X' && box[6].innerText == 'X') || 
		(box[1].innerText == 'X' && box[4].innerText == 'X' && box[7].innerText == 'X') || 
		(box[2].innerText == 'X' && box[5].innerText == 'X' && box[8].innerText == 'X') || 
		(box[0].innerText == 'X' && box[4].innerText == 'X' && box[8].innerText == 'X') || 
		(box[2].innerText == 'X' && box[4].innerText == 'X' && box[6].innerText == 'X')) { 
			res.innerHTML="X";
		} else if ((box[0].innerText == 'O' && box[1].innerText == 'O' && box[2].innerText == 'O') ||
		(box[3].innerText == 'O' && box[4].innerText == 'O' && box[5].innerText == 'O') ||
		(box[6].innerText == 'O' && box[7].innerText == 'O' && box[8].innerText == 'O') ||
		(box[0].innerText == 'O' && box[3].innerText == 'O' && box[6].innerText == 'O') || 
		(box[1].innerText == 'O' && box[4].innerText == 'O' && box[7].innerText == 'O') ||
		(box[2].innerText == 'O' && box[5].innerText == 'O' && box[8].innerText == 'O') ||
		(box[0].innerText == 'O' && box[4].innerText == 'O' && box[8].innerText == 'O') ||
		(box[2].innerText == 'O' && box[4].innerText == 'O' && box[6].innerText == 'O')) {
			res.innerHTML = "O";
		} else {
				for(var i = 0; i<10;i++){
					if(box[i].innerText){
					res.innerText = "Ничья";
					} else{
					res.innerText = "Ожидаем";
				}
			}
			
		}
	}
	
	
}