/* --------------- Functions related to counting worksheets and quizzes  ----------------------- */

/* BEGIN: Worksheet question area */

	var quizB10FillWS1 = [];
	quizB10FillWS1[0] = new Question("Resources/placeholder.png", "2", "5", "25");
	quizB10FillWS1[1] = new Question("Resources/placeholder.png", "3", "3", "33");
	quizB10FillWS1[2] = new Question("Resources/placeholder.png", "4", "5", "45");
	quizB10FillWS1[3] = new Question("Resources/placeholder.png", "1", "2", "12");
	quizB10FillWS1[4] = new Question("Resources/placeholder.png", "7", "9", "79");
	quizB10FillWS1[5] = new Question("Resources/placeholder.png", "6", "3", "63");
	quizB10FillWS1[6] = new Question("Resources/placeholder.png", "3", "6", "36");
	quizB10FillWS1[7] = new Question("Resources/placeholder.png", "2", "8", "28");
	quizB10FillWS1[8] = new Question("Resources/placeholder.png", "1", "9", "19");
	quizB10FillWS1[9] = new Question("Resources/placeholder.png", "8", "5", "85");
	quizB10FillWS1[10] = new Question("Resources/placeholder.png", "9", "4", "94");
	quizB10FillWS1[11] = new Question("Resources/placeholder.png", "4", "7", "47");
	quizB10FillWS1[12] = new Question("Resources/placeholder.png", "5", "5", "55");
	quizB10FillWS1[13] = new Question("Resources/placeholder.png", "1", "1", "11");
	quizB10FillWS1[14] = new Question("Resources/placeholder.png", "5", "9", "59");
	quizB10FillWS1[15] = new Question("Resources/placeholder.png", "6", "7", "67");
	quizB10FillWS1[16] = new Question("Resources/placeholder.png", "7", "4", "74");
	quizB10FillWS1[17] = new Question("Resources/placeholder.png", "9", "1", "91");
	quizB10FillWS1[18] = new Question("Resources/placeholder.png", "5", "6", "56");
	quizB10FillWS1[19] = new Question("Resources/placeholder.png", "8", "3", "83");
	
		

/* END: Worksheet question area */


/* BEGIN: COUNTING - functions area */

function Question(qnimage,tens,ones,number) {
	this.qnimage = qnimage;
	this.tens = tens;
	this.ones = ones;
	this.number = number;
};

function btnProvideQuestion(quiz) 
{ 		 
	if(currentQnNumber < numQuestions)
	{
		var qnNumber = qnNumbers[currentQnNumber]-1;
		randomQuestion = quiz[qnNumber]; //getQuestion

		document.getElementById("qnimage").src = randomQuestion.qnimage; 
		alert(randomQuestion.number);
;	}	
	
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

function nextClicked(quiz) {
	if(currentQnNumber <= numQuestions)
	{
		let correctAnswer = true;
		
		if(randomQuestion.tens != document.getElementById("tens").value)
			correctAnswer = false;
		else if(randomQuestion.ones != document.getElementById("ones").value)
			correctAnswer = false;
		else if(randomQuestion.number != document.getElementById("number").value)
			correctAnswer = false;
		
		checkAnswer(quiz, correctAnswer);		
	}
}

function checkAnswer(quiz, correctAnswer) 
{  
	if (correctAnswer) 
		adjustScore(true);		
	else 
		adjustScore(false);

	btnProvideQuestion(quiz);
	
	document.getElementById("tens").value = "";
	document.getElementById("ones").value = "";
	document.getElementById("number").value = "";
	
	// finish quiz if final question
	if(currentQnNumber > numQuestions)
	{
		document.getElementById("qnimage").style.display = "none"; 	
		document.getElementById("next").style.display = "none";
		document.getElementById("tens").style.display = "none";
		document.getElementById("ones").style.display = "none";
		document.getElementById("number").style.display = "none";
		document.getElementById("hdrRow1").style.display = "none";
		document.getElementById("hdrRow2").style.display = "none";		
		document.getElementById("retry").style.display = "";	
		
		document.getElementById("submitmsg").style.display = "";
		document.getElementById("submitmsg").innerHTML = "Your score is " + document.getElementById("score").innerHTML + "\\" + numQuestions;
	}			
}

function adjustScore(isCorrect) {
	if(currentQnNumber <= numQuestions)
	{
		debugger;
		if (isCorrect) {
			currentScore++;
		} else {
			if (currentScore > 0) {
				currentScore--;
			}
		}
		document.getElementById("score").innerHTML = currentScore;			
	}
}

function retryClicked(quiz) {

	currentScore = 0;
	currentQnNumber = 0;
	qnNumbers = getRandQnNumbers();		

	document.getElementById("qnimage").style.display = ""; 
	document.getElementById("next").style.display = "";
	document.getElementById("tens").style.display = "";
	document.getElementById("ones").style.display = "";
	document.getElementById("number").style.display = "";
	document.getElementById("score").innerHTML = "0";
	document.getElementById("tens").value = "";
	document.getElementById("ones").value = "";
	document.getElementById("number").value = "";
	document.getElementById("hdrRow1").style.display = "";
	document.getElementById("hdrRow2").style.display = "";
	document.getElementById("retry").style.display = "none";

	document.getElementById("submitmsg").innerHTML = "none";
	document.getElementById("submitmsg").innerHTML = "";
	
	btnProvideQuestion(quiz);
}

/* END: COUNTING - functions area */

