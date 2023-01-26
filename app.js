let buttonsContainer = document.querySelector(".buttonsContainer");


let randomNum = ( length ) => {
	return Math.round( Math.random() * length );
}

let autoPicker = () => {
	let buttonNodes = document.querySelectorAll(".empty");
	let buttons = Array.from( buttonNodes );
	let num = randomNum( buttons.length - 1 );
	if ( buttons.length <= 1 ) {
		return;
	}

	if ( buttons[num].innerHTML === ""  ) {
		buttons[num].innerHTML = "O";
		buttons[num].classList.add("O");
		buttons[num].classList.remove("empty");
	}
}


buttonsContainer.addEventListener( "click"  , ( evn ) => {
	if ( !evn.target.innerHTML ) {
		evn.target.innerHTML = "X";
		evn.target.classList.remove("empty");
		evn.target.classList.add("X");
		autoPicker();
	}
});