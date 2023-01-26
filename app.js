const buttonsContainer = document.querySelector(".buttonsContainer");
let buttons = document.querySelectorAll(".button");
let winCount = 0;

// 										FUNCTIONS FOR BREVITY
let randomNum = ( length ) => {
	return Math.round( Math.random() * length );
}

let buttonsCheck = () => {
	if ( 
		buttons[0].innerHTML && buttons[1].innerHTML && buttons[2].innerHTML &&
		buttons[3].innerHTML && buttons[4].innerHTML && buttons[5].innerHTML &&
		buttons[6].innerHTML && buttons[7].innerHTML && buttons[8].innerHTML
		) {
		return true;
	}
}

let winCheck = ( char ) => {
	if ( 
		buttons[0].innerHTML === char && buttons[4].innerHTML === char && buttons[8].innerHTML === char  
		||
		buttons[2].innerHTML === char && buttons[4].innerHTML === char && buttons[6].innerHTML === char  		
		||
		buttons[0].innerHTML === char && buttons[1].innerHTML === char && buttons[2].innerHTML === char  
		||
	    buttons[3].innerHTML === char && buttons[4].innerHTML === char && buttons[5].innerHTML === char  
	    ||
	    buttons[6].innerHTML === char && buttons[7].innerHTML === char && buttons[8].innerHTML === char
	    ||
	    buttons[0].innerHTML === char && buttons[3].innerHTML === char && buttons[6].innerHTML === char  
	    ||  
	    buttons[1].innerHTML === char && buttons[4].innerHTML === char && buttons[7].innerHTML === char  
	    ||
	    buttons[2].innerHTML === char && buttons[5].innerHTML === char && buttons[8].innerHTML === char  
		) {
		winCount++
		if ( winCount === 1 ) {
			console.log(`${char} =>  wins `);	
			buttonsContainer.removeEventListener( "click" , handler )
		}
	} else if ( buttonsCheck() ) { 
		console.log("nichya");
	}
}



let autoPicker = () => {
	let buttonNodes = document.querySelectorAll(".empty");
	let buttonsArr = Array.from( buttonNodes );
	let num = randomNum( buttonsArr.length - 1 );
	if ( buttonsArr.length <= 1 ) {
		return;
	}

	if ( buttonsArr[num].innerHTML === ""  ) {
		buttonsArr[num].innerHTML = "O";
		buttonsArr[num].classList.add("O");
		buttonsArr[num].classList.remove("empty");
		winCheck( "O" );
	}
}

//										ADDING EVENT 
function handler ( evn ) {
	if ( !evn.target.innerHTML ) {
		evn.target.innerHTML = "X";
		evn.target.classList.remove("empty");
		evn.target.classList.add("X");
		winCheck( "X" );
		autoPicker();
	}
}

buttonsContainer.addEventListener( "click"  , handler );

