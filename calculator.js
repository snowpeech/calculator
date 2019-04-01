// var xIn = document.querySelector("#xIn").value;
// console.log(xIn);

// function add(x,y){

// }

// Display numbers as clicked
// user clicks button, it shows up on display
	//saves number as X
	//prints it to display

// if user clicks another number, then it shows up next to prev. value
	//concatenates it to X X = X+ newNum
	//prints to display


// Functions
// will take number in display (concatenated & parseInt) and wait for next number
// will perform function once next non-number is clicked
// if there are no numbers, do nothing.

var display = document.getElementById("display")
var firstNum;
var secondNum;
var operator;

function recieve(btn){
	var buttonId = btn.id;
	var btnValue = btn.value;
	var dVal = display.value;

	if(buttonId == 'number') {
		display.value += btn.value;

	} else if ( buttonId == 'operator') {
		switch(btnValue){
			case '+': coordinator('add');
			break;
			case '-':  subtract();
			break;
			case '/': divide();
			break;
			case '*': multiply();
			break;
			case '=': calculate(firstNum, secondNum);
		}
	}
}

function coordinator(action) {
	if(action == 'add') {
		operator = `+`
	}
}

function calculate(fnum, operator, snum) {
	return fnum operator snum;
}