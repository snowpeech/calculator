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
				console.log("+")
				answer = Number(inArray[0]) + Number(inArray[2]);
				inArray = resetDisplay(answer);
				return inArray;
			break;

			case '-':
				console.log("-")
				answer = Number(inArray[0]) - Number(inArray[2]);
				inArray = resetDisplay(answer);
				return inArray;
			break;

			case '*':
				console.log("*")
				answer = Number(inArray[0]) * Number(inArray[2]);
				inArray = resetDisplay(answer);
				return inArray;
			break;

			case '/':
				console.log("/")
				answer = Number(inArray[0]) / Number(inArray[2]);
				inArray = resetDisplay(answer);
				return inArray;
			break;

			default:
				console.log("default")
				resetDisplay(answer);
				console.log(inArray)
				return inArray;
		}
		
		function resetDisplay(answer){
			display.value = answer;
			inArray = [];
			inArray[0]=answer;
			console.log("reset display " + answer)
			console.log(inArray)
			return inArray;
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
					arrCalcVals[1] = btnValue;
					break;
				case 1:
					console.log("array length is: 1")
					arrCalcVals[1] = btnValue;

					break;

				
				default: //should be length = 1 or 2 
					arrCalcVals[1] = btnValue; //need to verify
					console.log("calc array lengt is: "+arrCalcVals.length)
					console.log(arrCalcVals)
					break;
			};
			break;
		
		case 'clear': 
			console.log("clear")
			clearDisplay();
			arrCalcVals = [];
			break;
		
		case 'equal': 
			console.log("equals")
			arrCalcVals = compute(arrCalcVals); //should calculate and display value
			break;

	}

	
} //end receive btn function

function coordinator(action) {
	if(action == 'add') {
		operator = `+`
	}
}

// function calculate(fnum, operator, snum) {
// 	return fnum operator snum;
// }