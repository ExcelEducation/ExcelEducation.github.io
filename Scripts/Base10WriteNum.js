/* --------------- Functions related to counting worksheets and quizzes  ----------------------- */

/* BEGIN: Worksheet question area */

var quizBase10WriteNumWS1 = [];
	quizBase10WriteNumWS1[0] = new Question("53","5","3");
	quizBase10WriteNumWS1[1] = new Question("12","1","2");
	quizBase10WriteNumWS1[2] = new Question("83","8","3");
	quizBase10WriteNumWS1[3] = new Question("69","6","9");
	quizBase10WriteNumWS1[4] = new Question("26","2","6");
	quizBase10WriteNumWS1[5] = new Question("29","2","9");
	quizBase10WriteNumWS1[6] = new Question("30","3","0");
	quizBase10WriteNumWS1[7] = new Question("58","5","8");
	quizBase10WriteNumWS1[8] = new Question("75","7","5");
	quizBase10WriteNumWS1[9] = new Question("77","7","7");
	quizBase10WriteNumWS1[10] = new Question("36","3","6");
	quizBase10WriteNumWS1[11] = new Question("78","7","8");
	quizBase10WriteNumWS1[12] = new Question("44","4","4");
	quizBase10WriteNumWS1[13] = new Question("82","8","2");
	quizBase10WriteNumWS1[14] = new Question("15","1","5");
	quizBase10WriteNumWS1[15] = new Question("45","4","5");
	quizBase10WriteNumWS1[16] = new Question("67","6","7");
	quizBase10WriteNumWS1[17] = new Question("34","3","4");
	quizBase10WriteNumWS1[18] = new Question("68","6","8");
	quizBase10WriteNumWS1[19] = new Question("90","9","0");
	
/* END: Worksheet question area */

/* BEGIN: WRITE NUMBERS - functions area */

function Question(number,tens,ones) {
	this.number = number;
	this.tens = tens;
	this.ones = ones;
};

function btnProvideQuestions(quiz) 
{
	while (currentQnNumber <= numQuestions) {
	  getQuestion(quiz)
	}
}

function getQuestion(quiz) 
{ 		 
	var qnNumber = qnNumbers[currentQnNumber]-1;
	randomQuestion = quiz[qnNumber]; 

	document.getElementById("lbl"+ (currentQnNumber+1)).innerHTML = randomQuestion.number;	
	
	currentQnNumber++;
}

function getRandQnNumbers()
{
	var arr = [];
	while(arr.length < numQuestions){
		var r = Math.floor(Math.random() * numPoolQuestions) + 1;
		if(arr.indexOf(r) === -1) arr.push(r);
	}
	
	return arr;
}

function retryClicked(quiz) {

	currentQnNumber = 0;
	qnNumbers = getRandQnNumbers();		

	// reset control Style
	for (let index = 1; index <= 10; index++) 
	{
		document.getElementById("txtTens"+index).className = "form-control";	
		document.getElementById("txtTens"+index).value = "";
		document.getElementById("txtOnes"+index).className = "form-control";	
		document.getElementById("txtOnes"+index).value = "";		
	}

	document.getElementById("submit").style.display = "";
	document.getElementById("retry").style.display = "none";	
	document.getElementById("submitMsg").innerHTML = "";
	document.getElementById("submitMsg").style.display = "none";
	
	btnProvideQuestions(quiz);
}

function jsCheckAnswers(quiz)
{
	let itemIndex = 0;
	let currQuestion;
	let correctCount = 0;
	let currQnNum = 0;
	let index = 0;
	
	while (itemIndex < numQuestions) 
	{
		currQnNum = qnNumbers[itemIndex]-1;
		currQuestion = quiz[currQnNum];
		
		if(document.getElementById("txtTens"+ (itemIndex+1)).value == currQuestion.tens && document.getElementById("txtOnes"+ (itemIndex+1)).value == currQuestion.ones)			
		{
			document.getElementById("txtTens"+(itemIndex+1)).className = "form-control";
			document.getElementById("txtOnes"+(itemIndex+1)).className = "form-control";
			correctCount++;
		}			
		else
		{
			document.getElementById("txtTens"+(itemIndex+1)).className = "form-control errorBox";			
			document.getElementById("txtOnes"+(itemIndex+1)).className = "form-control errorBox";			
		}

		itemIndex++;
	}
	
	// Show message to user
	if(correctCount < numQuestions)
	{
		document.getElementById("submitMsg").innerHTML = "Oh no! you didn't fill in everything correctly. Check the numbers in red boxes";			
		document.getElementById("submitMsg").style.display = "";
	}
	else
	{
		document.getElementById("submitMsg").innerHTML = "Well done. you got everything right !";

		document.getElementById("submitMsg").style.display = "";
		document.getElementById("submit").style.display = "none";
		document.getElementById("retry").style.display = "";		
	}
}		
	
/* END: WRITE NUMBERS - functions area */		