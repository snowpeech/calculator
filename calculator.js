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

	function clearDisplay(){
		document.querySelector("#display").value ="";
		console.log("clear function called")
	}
	
	switch(btnID) {
		case 'number': 
			console.log("is number")
			
			switch(arrCalcVals.length){ 
				case 0:  //first value is empty
					displayVal();
					console.log("calc array has 0 value")
					console.log(arrCalcVals)
					break;
				case 1:
					display.value = btnValue; // need to verify
					arrCalcVals = [];
					console.log("calc array has 1 value")
					console.log("dval = "+dVal)
					console.log(arrCalcVals)
					break;
				case 2: //DEBUG HERE - operator is stored
					clearDisplay(); //DEBUG HERE ESPECIALLY
					displayVal();
					arrCalcVals[2] = btnValue;
					console.log("dval = "+dVal)
					console.log(arrCalcVals)
					break;
				
				case 3:
					console.log("case number, 3")
					break;

				default: //should be length =  3 //DEBUG HERE
					displayVal();
					arrCalcVals[2] = dVal; //need to verify
					console.log(document.getElementById("display").value)
					console.log("calc array length 3")
					console.log("dval = "+dVal)
					console.log(arrCalcVals)
					break;


			};
			break;
				

		case 'operator': 
			console.log("is operator")
			switch(arrCalcVals.length){ 
				case 0:  //first value is empty
					arrCalcVals[0] = dVal;
					arrCalcVals[1] = btnValue;
					console.log(arrCalcVals)
					break;
				case 3:
					// will call calculate function
					console.log("calc array has 3 values!")
					console.log(arrCalcVals)
					break;
				default: //should be length = 1 or 2 
					arrCalcVals[1] = btnValue; //need to verify
					console.log("calc array has 1-2 values!")
					console.log(arrCalcVals)
					break;


			};
			break;
		
		case 'clear': 
			console.log("clear")
			clearDisplay();
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