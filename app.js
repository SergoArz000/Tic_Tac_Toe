const buttonsContainer = document.querySelector(".buttonsContainer");
let buttons = document.querySelectorAll(".button");
let playerStat = document.querySelector(".player"); 
let tieStat = document.querySelector(".tie") ;
let computerStat = document.querySelector(".computer"); 
let wonStatus = false;
let xWins = 1;
let oWins = 1;
let tieCount = 1;
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
			if ( char === "X" ) {
				playerStat.innerHTML = xWins;
				xWins++;
				wonStatus = true;
			} else if( char === "O" ) {
				computerStat.innerHTML = oWins;
				oWins++;
				wonStatus = true;
			}
			buttonsContainer.removeEventListener( "click" , handler );
			buttonsContainer.addEventListener( "click" , startAgain );
	} else if ( buttonsCheck() ) { 
		tieStat.innerHTML = tieCount;
		tieCount++;
		wonStatus = true;
		buttonsContainer.removeEventListener( "click" , handler );
		buttonsContainer.addEventListener( "click" , startAgain );
	}
}

let autoPicker = () => {
	let buttonNodes = document.querySelectorAll(".empty");
	let buttonsArr = Array.from( buttonNodes );
	let num = randomNum( buttonsArr.length - 1 );
	if ( buttonsArr.length <= 1 ) {
		return;
	}

	if ( buttonsArr[num].innerHTML === "" && !wonStatus ) {
			buttonsArr[num].innerHTML = "O";
			buttonsArr[num].classList.add("O");
			buttonsArr[num].classList.remove("empty");
			winCheck( "O" );
	}
}

function startAgain() {
		wonStatus = false;
	for ( let btn of buttons ) {
		btn.classList.remove( "X" );
		btn.classList.remove( "O" );
		btn.classList.add( "empty" );
		btn.innerHTML = "";
		buttonsContainer.addEventListener( "click"  , handler );
		buttonsContainer.removeEventListener( "click"  , startAgain );
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

