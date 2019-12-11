$(document).ready(() => {

    const questions = [
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        }
    ];

let correctCount = 0;
let wrongCount = 0;
let unanswerCount = 0;
let timer = 30;
let intervalId;
let playerGuess ="";
let running = false;
let questionCount = options.length;
let choose;
let index;
let newArray = [];
let holder = [];


$("#reset").hide();
//click start button to start game
$("#start").on("click", function () {
		$("#start").hide();
		displayQuestion();
		runTimer();
		for(let i = 0; i < options.length; i++) {
	holder.push(options[i]);
}
	})
//This is where the timer starts
runTimer = () => {
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}
//timer countdown
decrement = () => {
	$("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	//stop timer if reach 0
	if (timer === 0) {
		unanswerCount++;
		stop();
		$("#answerblock").html("<p>Time is up! The correct answer is: " + choose.choice[choose.answer] + "</p>");
	}	
}

//timer stop
stop = () => {
	running = false;
	clearInterval(intervalId);
}
//randomly choose question in array if not already shown
//display question and loop though and display possible answers
displayQuestion = () => {
	//generate random index in array
	index = Math.floor(Math.random()*options.length);
	choose = options[index];

//	if (choose.shown) {
//		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
//		displayQuestion();
//	} else {
//		console.log(choose.question);
		//iterate through answer array and display
		$("#questionblock").html("<h2>" + choose.question + "</h2>");
		for(let i = 0; i < choose.choice.length; i++) {
			let userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.html(choose.choice[i]);
			//assign array position to it so can check answer
			userChoice.attr("data-guessvalue", i);
			$("#answerblock").append(userChoice);
//		}
}



//click function to select answer and outcomes
$(".answerchoice").on("click", function () {
	//grab array position from playerGuess
	playerGuess = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (playerGuess === choose.answer) {
		stop();
		correctCount++;
		playerGuess="";
		$("#answerblock").html("<p>Correct!</p>");

	} else {
		stop();
		wrongCount++;
		playerGuess="";
		$("#answerblock").html("<p>That is incorrect! You should have picked: " + choose.choice[choose.answer] + "</p>");
	}
})
}


function hidepicture () {
	$("#answerblock").append("<img src=" + choose.photo + ">");
	newArray.push(choose);
	options.splice(index,1);

	let hidpic = setTimeout(function() {
		$("#answerblock").empty();
		timer= 20;

	//run the score screen if all questions answered
	if ((wrongCount + correctCount + unanswerCount) === questionCount) {
		$("#questionblock").empty();
		$("#questionblock").html("<h3>The End!  Let's see how you did: </h3>");
		$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
		$("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
		$("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
		$("#reset").show();
		correctCount = 0;
		wrongCount = 0;
		unanswerCount = 0;

	} else {
		runTimer();
		displayQuestion();

	}
	}, 5000);


}

$("#reset").on("click", () => {
	$("#reset").hide();
	$("#answerblock").empty();
	$("#questionblock").empty();
	for(let i = 0; i < holder.length; i++) {
		options.push(holder[i]);
	}
	runTimer();
	displayQuestion();

})

});