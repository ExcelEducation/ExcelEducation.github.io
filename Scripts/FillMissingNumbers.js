/* --------------- Functions related to counting worksheets and quizzes  ----------------------- */

/* BEGIN: Worksheet question area */

var itemsGrid1 = [
  2, 3, 4, 5, 6, 8, 9,
  12, 13, 14, 15, 17, 18, 19,
  21, 22, 24, 25, 26, 27, 29, 30,
  31, 32, 33, 34, 36, 38, 39, 40,
  41, 43, 44, 45, 46, 47, 48, 50,
  51, 52, 53, 55, 56, 57, 58, 59, 60,
  61, 63, 64, 65, 67, 68, 69,
  72, 73, 74, 75, 76, 78, 79, 80,
  81, 82, 83, 85, 86, 87, 88, 89,
  91, 92, 94, 95, 96, 97, 98, 99
];

var itemsGrid2 = [
  2, 3, 4, 5, 7, 8, 10,
  11, 12, 14, 15, 16, 18, 19, 20,
  21, 23, 24, 25, 26, 27, 29, 30,
  32, 33, 34, 36, 37, 38, 39, 40,
  41, 42, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55, 57, 58, 59, 60,
  61, 62, 63, 65, 66, 67, 68, 70,
  72, 73, 74, 75, 76, 78, 79, 80,
  81, 82, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 96, 97, 98, 99, 100
];
	
	
var itemsGrid3 = [
  2, 3, 4, 6, 7, 8, 10,
  11, 12, 14, 15, 16, 18, 19, 20,
  21, 23, 24, 25, 27, 28, 30,
  31, 32, 33, 35, 36, 37, 39, 40,
  41, 42, 43, 44, 46, 47, 48, 50,
  52, 53, 54, 55, 56, 58, 59, 60,
  61, 62, 64, 65, 66, 67, 68, 69,
  71, 73, 74, 75, 77, 78, 79, 80,
  82, 83, 84, 85, 86, 87, 89, 90,
  91, 92, 94, 95, 96, 98, 99, 100
];	
/* END: Worksheet question area */

/* BEGIN: NUMBERS GRID - functions area */

function jsCheckFillMissingNum(items)
{
	var inputIndex = 0;
	var itemIndex = 0;
	var errorCount = 0;
	for (let row = 0; row < 10; row++) 
	{
		for (let col = 1; col <= 10; col++)
		{
			inputIndex = (10*row) + col;
			if(document.getElementById("txt"+inputIndex) != null && document.getElementById("txt"+inputIndex) != 'undefined')
			{
				if(document.getElementById("txt"+inputIndex).value == items[itemIndex])
					document.getElementById("txt"+inputIndex).className = "form-control";
				else
				{
					document.getElementById("txt"+inputIndex).className = "form-control errorBox";
					errorCount++;
				}							
				
				itemIndex++;
			}
		}
	} 
	
	// Show message to user
	if(errorCount > 0)
		document.getElementById("submitMsg").innerHTML = "Oh no! you didn't fill in everything correctly. Check the numbers in red boxes";			
	else
		document.getElementById("submitMsg").innerHTML = "Well done. you got everything right !";
}
		
/* END: NUMBERS GRID - functions area */		