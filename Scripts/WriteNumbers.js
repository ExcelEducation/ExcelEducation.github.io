/* --------------- Functions related to counting worksheets and quizzes  ----------------------- */

/* BEGIN: Worksheet question area */

var quizWirteNumsWS1 = [];
	quizWirteNumsWS1[0] = new Question("Eighteen", "18");
	quizWirteNumsWS1[1] = new Question("Thirty five", "35");
	quizWirteNumsWS1[2] = new Question("Fifty two", "52");
	quizWirteNumsWS1[3] = new Question("Sixteen", "16");
	quizWirteNumsWS1[4] = new Question("Seventy nine", "79");
	quizWirteNumsWS1[5] = new Question("Eleven", "11");
	quizWirteNumsWS1[6] = new Question("Ninety nine", "99");
	quizWirteNumsWS1[7] = new Question("Eighty three", "83");
	quizWirteNumsWS1[8] = new Question("Forty five", "45");
	quizWirteNumsWS1[9] = new Question("Twenty eight", "28");
	quizWirteNumsWS1[10] = new Question("Sixty six", "66");
	quizWirteNumsWS1[11] = new Question("Ninety one", "91");
	quizWirteNumsWS1[12] = new Question("Twenty two", "22");
	quizWirteNumsWS1[13] = new Question("Thrity six", "36");
	quizWirteNumsWS1[14] = new Question("Sixty five", "65");
	quizWirteNumsWS1[15] = new Question("Five", "5");
	quizWirteNumsWS1[16] = new Question("Forty four", "44");
	quizWirteNumsWS1[17] = new Question("Fifty seven", "57");
	quizWirteNumsWS1[18] = new Question("Eighty three", "83");
	quizWirteNumsWS1[19] = new Question("Seventy", "70");
	
var quizWirteNumsWS2 = [];
	quizWirteNumsWS2[0] = new Question("18", "දහඅට");
	quizWirteNumsWS2[1] = new Question("35", "තිස් පහ");
	quizWirteNumsWS2[2] = new Question("52", "පනස් දෙක");
	quizWirteNumsWS2[3] = new Question("16", "දහසය|දාසය");
	quizWirteNumsWS2[4] = new Question("79", "හැත්ත නවය|හැත්තෑ නවය|හැත්තෑ නමය|හැත්ත නමය");
	quizWirteNumsWS2[5] = new Question("11", "එකොළහ");
	quizWirteNumsWS2[6] = new Question("99", "අනූ නවය|අනූ නමය");
	quizWirteNumsWS2[7] = new Question("83", "අසු තුන");
	quizWirteNumsWS2[8] = new Question("45", "හතලිස් පහ");
	quizWirteNumsWS2[9] = new Question("28", "විසි අට");
	quizWirteNumsWS2[10] = new Question("66", "හැට හය");
	quizWirteNumsWS2[11] = new Question("91", "අනූ එක");
	quizWirteNumsWS2[12] = new Question("22", "විසි දෙක");
	quizWirteNumsWS2[13] = new Question("36", "තිස් හය");
	quizWirteNumsWS2[14] = new Question("65", "හැට පහ");
	quizWirteNumsWS2[15] = new Question("5", "පහ");
	quizWirteNumsWS2[16] = new Question("44", "හතලිස් හතර");
	quizWirteNumsWS2[17] = new Question("57", "පනස් හත");
	quizWirteNumsWS2[18] = new Question("83", "අසු තුන");
	quizWirteNumsWS2[19] = new Question("70", "හැත්තෑව");
	
/* END: Worksheet question area */

/* BEGIN: WRITE NUMBERS - functions area */

function Question(question,answer) {
	this.question = question;
	this.answer = answer;
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
	randomQuestion = quiz[qnNumber]; //getQuestion

	document.getElementById("lbl"+ (currentQnNumber+1)).innerHTML = randomQuestion.question;	
	
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
	qnNumbers = getRandQnNumbers(s);		

	// reset control Style
	for (let index = 1; index <= numQuestions; index++) 
	{
		document.getElementById("txt"+index).className = "form-control";	
		document.getElementById("txt"+index).value = "";
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
		
		if(document.getElementById("txt"+ (itemIndex+1)).value == currQuestion.answer)			
		{
			document.getElementById("txt"+(itemIndex+1)).className = "form-control";
			correctCount++;
		}			
		else
		{
			document.getElementById("txt"+(itemIndex+1)).className = "form-control errorBox";			
		}

		itemIndex++;
	}
	
	// Show message to user
	if(correctCount < numQuestions)
	{
		document.getElementById("submitMsg").innerHTML = "Oh no! you didn't fill in everything correctly. Check the numbers in red boxes";			
	}
	else
	{
		document.getElementById("submitMsg").innerHTML = "Well done. you got everything right !";

		document.getElementById("submitMsg").style.display = "";
		document.getElementById("submit").style.display = "none";
		document.getElementById("retry").style.display = "";		
	}
}		

function jsCheckTextAnswers()
{
	let itemIndex = 0;
	let correctCount = 0;
	let index = 0;
	let numQuestions = 10;

	while (itemIndex < numQuestions) 
	{		
		let correctAnswers = document.getElementById("hid"+ (itemIndex+1)).value.split("|");
	
		for (index = 0; index < correctAnswers.length; index++) 
		{
			if(document.getElementById("txt"+ (itemIndex+1)).value.trim() == correctAnswers[index])			
			{
				document.getElementById("txt"+(itemIndex+1)).className = "form-control";
				correctCount++;
			}			
			else
			{
				document.getElementById("txt"+(itemIndex+1)).className = "form-control errorBox";			
			}	
		}
		
		itemIndex++;
	}
		
	// Show message to user
	document.getElementById("submitMsg").style.display = "";
	if(correctCount < numQuestions)
		document.getElementById("submitMsg").innerHTML = "Oh no! you didn't fill in everything correctly. Check the numbers in red boxes";			
	else
		document.getElementById("submitMsg").innerHTML = "Well done. you got everything right !";
}
	
/* END: WRITE NUMBERS - functions area */		