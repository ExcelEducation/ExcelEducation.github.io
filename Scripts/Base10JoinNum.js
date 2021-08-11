/* --------------- Functions related to counting worksheets and quizzes  ----------------------- */
//https://coursesweb.net/javascript/draw-arrow-clicks-html-element
/* BEGIN: Worksheet question area */

var quizBase10JoinNumWS1 = [];
	quizBase10JoinNumWS1[0] = new Question("53","5","3");
	quizBase10JoinNumWS1[1] = new Question("12","1","2");
	quizBase10JoinNumWS1[2] = new Question("83","8","3");
	quizBase10JoinNumWS1[3] = new Question("69","6","9");
	quizBase10JoinNumWS1[4] = new Question("26","2","6");
	quizBase10JoinNumWS1[5] = new Question("29","2","9");
	quizBase10JoinNumWS1[6] = new Question("30","3","0");
	quizBase10JoinNumWS1[7] = new Question("58","5","8");
	quizBase10JoinNumWS1[8] = new Question("75","7","5");
	quizBase10JoinNumWS1[9] = new Question("77","7","7");
	quizBase10JoinNumWS1[10] = new Question("36","3","6");
	quizBase10JoinNumWS1[11] = new Question("78","7","8");
	quizBase10JoinNumWS1[12] = new Question("44","4","4");
	quizBase10JoinNumWS1[13] = new Question("82","8","2");
	quizBase10JoinNumWS1[14] = new Question("15","1","5");
	quizBase10JoinNumWS1[15] = new Question("45","4","5");
	quizBase10JoinNumWS1[16] = new Question("67","6","7");
	quizBase10JoinNumWS1[17] = new Question("34","3","4");
	quizBase10JoinNumWS1[18] = new Question("68","6","8");
	quizBase10JoinNumWS1[19] = new Question("90","9","0");
	
/* END: Worksheet question area */

/* BEGIN: WRITE NUMBERS - functions area */

function Question(number,tens,ones) {
	this.number = number;
	this.tens = tens;
	this.ones = ones;
};

function Answer(tens,ones) {
	this.tens = tens;
	this.ones = ones;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
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
	var randomAnswer = answers[currentQnNumber]

	document.getElementById("lbl"+ (currentQnNumber+1)).innerHTML = randomQuestion.number;	
	document.getElementById("lblTens"+ (currentQnNumber+1)).innerHTML = randomAnswer.tens;	
	document.getElementById("lblOnes"+ (currentQnNumber+1)).innerHTML = randomAnswer.ones;	
	
	currentQnNumber++;
}

function getRandQnNumbers(quiz)
{
	var arr = [];
	var arrAnswers = [];
	while(arr.length < numQuestions){
		var r = Math.floor(Math.random() * numPoolQuestions) + 1;
		if(arr.indexOf(r) === -1) 
		{
			arr.push(r);
			
			var qn = quiz[r-1];
			arrAnswers.push(new Answer(qn.tens,qn.ones))
		}			
	}

	// set answers array and shuffle answers to misalign with number
	answers = arrAnswers;
	shuffle(answers);
	
	return arr;
}

function retryClicked(quiz) {

	currentQnNumber = 0;
	qnNumbers = getRandQnNumbers(quiz);		

	// reset control values
	for (let index = 1; index <= numQuestions; index++) 
	{
		document.getElementById("lbl"+index).innerHTML = "";	
		document.getElementById("lblTens"+index).innerHTML = "";
		document.getElementById("lblOnes"+index).innerHTML = "";
	}
	
	clearArrows();
	btnProvideQuestions(quiz);
}

/* END: WRITE NUMBERS - functions area */		
// Enable drawing action
function init() 
{
	drawAr.draw *=-1;
	e.target.style.background = (drawAr.draw ==1) ? '#f00' :'#dadafb';
	e.target.innerHTML = (drawAr.draw ==1) ? 'Disable Drawing' :'Enable Drawing';
}

//function to delete arrows
function clearArrows()
{
	var arrsvg = document.querySelectorAll('.arrsvg');
	for(var i=0; i<arrsvg.length; i++) arrsvg[i].outerHTML ='';
}

//Draw arrows with SVG in the $parent element between the click coords
function drawArrowSVG(parent)
{
	//From: https://coursesweb.net/javascript/
	var me = this;
	var x, y = 0;  //contain the coordinates
	var drawarrow =0;  //if 2, draw the arrow
	var c_e1 ={};  // x,y coords for base line
	var c_e2 ={};  // x,y coords for arrow
	var container = parent;
	me.draw =-1;  //if 1 allow to draw the arrow

	// Get X and Y position of the elm (from: vishalsays.wordpress.com)
	function getXYpos(elm) 
	{
		x = elm.offsetLeft;        // set x to elm’s offsetLeft
		y = elm.offsetTop;         // set y to elm’s offsetTop

		elm = elm.offsetParent;    // set elm to its offsetParent

		//use while loop to check if elm is null
		// if not then add current elm’s offsetLeft to x
		//offsetTop to y and set elm to its offsetParent
		while(elm != null) 
		{
			x = parseInt(x) + parseInt(elm.offsetLeft);
			y = parseInt(y) + parseInt(elm.offsetTop);
			elm = elm.offsetParent;
		}

		// returns an object with "xp" (Left), "=yp" (Top) position
		return {'xp':x, 'yp':y};
	}

	// Get X, Y coords
	function getCoords(e)
	{
		//if $draw is 1, get the coords and draw arrow
		if(me.draw ==1)
		{
			var xy_pos = getXYpos(this);

			// if IE
			if(navigator.appVersion.indexOf("MSIE") != -1) 
			{
				// in IE scrolling page affects mouse coordinates into an element
				// This gets the page element that will be used to add scrolling value to correct mouse coords
				var standardBody = (document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;

				x = event.clientX + standardBody.scrollLeft;
				y = event.clientY + standardBody.scrollTop;
			}
			else 
			{
				x = e.pageX;
				y = e.pageY;
			}

			x = x - xy_pos['xp'];
			y = y - xy_pos['yp'];

			//set coords in c_e2 and c_e1; if drawarrow is 2 draw the arrow
			drawarrow++;
			if(drawarrow ==2)
			{
				c_e2 = {x:x, y:y};
				drawarrow =0;
				drawArrow(c_e1, c_e2);
			}
			else 
				c_e1 = {x:x, y:y};
		}
	}

	//append in #container SVG arrow with base in $c_e1 and the arrow in $c_e2 coords
	function drawArrow(c_e1, c_e2)
	{
		var arrsvg = '<svg class="arrsvg" style="position:absolute; top:0; left:0; margin:0; width:99.8%; height:99.9%;"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refx="3" refy="4" orient="auto"><path d="M1,1 L1,7 L7,4 L1,1" style="fill:red;" /></marker></defs><path d="M'+ c_e1.x +','+ c_e1.y +' L'+ c_e2.x +','+ c_e2.y +'" style="stroke:red; stroke-width: 2.3px; fill: none; marker-end: url('+ location.href.replace(/[#]*$/ig, '') +'#arrow);"/></svg>';
		container.insertAdjacentHTML('beforeend', arrsvg);  //add the arrow to the end in #container
	}

	//register click on $container to get the coords
	container.addEventListener('click', getCoords);
}


