// var xIn = document.querySelector("#xIn").value;
// console.log(xIn);

// function add(x,y){

// }

// Display numbers as clicked
// user clicks button, it shows up on display
	//saves number as X
	//appears on display

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
var arrCalcVals = []; //firstnumber, operator, secondnumber as strings. parseInt when processing?

function recieve(btn){
	var btnID = btn.id;
	var btnValue = btn.value;
	var dVal = display.value;

	function displayVal(){
		display.value += btn.value; 
	}
	
	switch(btnID) {
		case 'number': 
			console.log("is number")
			
			switch(arrCalcVals.length){ 
				case 0:  //first value is empty
					displayVal();
					break;
				case 1:
					display.value = btn.value; // need to verify
					arrCalcVals = [];
					break;
				default: //should be length = 2 or 3 
					displayVal();
					arrCalcVals[2] = dVal; //need to verify
					break;


			};
			break;
				



		
		case 'operator': 
			console.log("is operator")
			break;
		
		case 'clear': 
			console.log("clear")
			document.querySelector("#display").value ="";
			arrCalcVals = [];
			break;

	}


	// if(btnID == 'number' && arrCalcVals[0]=='') {
	// 	display.value += btn.value;

	// } else if ( btnID == 'operator') {
	// 	switch(btnValue){
	// 		case '+': coordinator('add');
	// 		break;
	// 		case '-':  subtract();
	// 		break;
	// 		case '/': divide();
	// 		break;
	// 		case '*': multiply();
	// 		break;
	// 		case '=': calculate(firstNum, secondNum);
	// 	}
	// }
} //end receive btn function

function coordinator(action) {
	if(action == 'add') {
		operator = `+`
	}
}

// function calculate(fnum, operator, snum) {
// 	return fnum operator snum;
// }