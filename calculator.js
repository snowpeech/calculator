var display = document.getElementById("display")
var firstNum;
var secondNum;
var operator;
var answer;
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
	}

	function compute(inArray){
		console.log("compute function")
		console.log(inArray)
		switch(inArray[1]){
			case '+':
				answer = parseInt(inArray[0]) + parseInt(inArray[2]);
				resetDisplay(answer);
				return inArray;
			break;

			case '-':
				answer = parseInt(inArray[0]) - parseInt(inArray[2]);
				resetDisplay(answer);
				return inArray;
			break;

			case '*':
				answer = parseInt(inArray[0]) * parseInt(inArray[2]);
				resetDisplay(answer);
				return inArray;
			break;

			case '/':
				answer = parseInt(inArray[0]) / parseInt(inArray[2]);
				resetDisplay(answer);
				return inArray;
			break;
		}
		console.log("return inArray");
		console.log(inArray);
		
		function resetDisplay(answer){
			display.value = answer;
			inArray = [];
			inArray[0]=answer;
		}

	}
	
	switch(btnID) {
		case 'number': 
			console.log("is number")
			
			switch(arrCalcVals.length){ 
				case 0:  //first value is empty
					displayVal();
					break;
				case 1:
					display.value = btnValue; 
					arrCalcVals = [];
					break;
				case 2: 
					clearDisplay(); 
					displayVal();
					arrCalcVals[2] = btnValue;
					console.log(arrCalcVals)
					break;
				
				case 3:
					console.log("case number, 3")
					displayVal();
					arrCalcVals[2] = document.getElementById("display").value;
					console.log(arrCalcVals)
					break;

				default: //not sure how the user would get here..
					console.log("how did you get here?")
					break;
			};
			break;

		case 'operator': 
			console.log("is operator")
			switch(arrCalcVals.length){ 
				case 0:  //first value is empty
					arrCalcVals[0] = dVal; // shifty. not sure where this is right now
					arrCalcVals[1] = btnValue;	
					console.log(arrCalcVals)
					console.log("do nothing for now")//will update when calculate funtion is working
					break;
				case 3:
					//compute(arrCalcVals); // will call calculate function
					console.log("calc array has 3 values!")
					console.log(arrCalcVals)
					console.log("hope this works")
					arrCalcVals = compute(arrCalcVals)
					break;
				default: //should be length = 1 or 2 
					arrCalcVals[1] = btnValue; //need to verify
					console.log("calc array has 1-2 values!")
					console.log(arrCalcVals)
					console.log(arrCalcVals.length)
					break;
			};
			break;
		
		case 'clear': 
			console.log("clear")
			clearDisplay();
			arrCalcVals = [];
			break;
		
			case 'equal': 
			compute(arrCalcVals); //should calculate and display value
			arrCalcVals = [];
			arrCalcVals[0] = display.value; //not sure if this is working either
			console.log(arrCalcVals);
			
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