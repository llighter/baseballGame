var guessArray = [];
var answerArray = [];

function getYourGuess() {
    var guessStr = document.getElementById("guess").value;
    var guessArray = [];
    console.log("Your String is : " + guessStr + ', Your String Length is : ' + guessStr.length );
    for(var i = 0; i < guessStr.length; i++) {
        guessArray.push(parseInt(guessStr[i]));
    }

    console.log(guessArray);

    return guessArray;
}


// @param number : the number of integer what you want to make
// @return answer : array, length(number)
// number range : 0 ~ 9
function generateRandomNumber(number) {
    var answer = [];
    var grant;

    while(answer.length < number) {
        var temp = Math.floor(Math.random() * 10);
        // console.log("generate temp number: "+temp);
        if(answer.length == 0) { 
            answer.push(temp);
            // console.log(answer);
        } else {
            var grant = true;
            for(var k = 0; k < answer.length; k++) {
                if(temp == answer[k]) {
                    grant = false;
                    break;
                }
                // grant = (temp == answer[k]) ? false : true;
            }
            grant ? answer.push(temp) : console.log("duplicate number: "+temp);

            // console.log(answer);
        }
        
    }
    console.log(answer);
    return answer;
}

function checkBall(yourAnswer, realAnswer) {
    var ball = 0;
    for(var i = 0; i < yourAnswer.length; i++) {
        for(var j = 0; j < realAnswer.length; j++) {
            if(yourAnswer[i] == realAnswer[j]) {
                ball++;
                break;
            }
        }
    }

    return ball;
}

function checkStrike(yourAnswer, realAnswer) {
    var strike = 0;
    for(var i = 0; i < yourAnswer.length; i++) {
        (yourAnswer[i] == realAnswer[i]) ? strike++ : strike;
    }

    return strike;
}

function checkOut(yourAnswer, realAnswer) {
    return ( checkBall(yourAnswer, realAnswer) == 0 && (checkStrike(yourAnswer, realAnswer) == 0) ) ? true : false;
}

// running game
function start(obj) {
    answerArray = generateRandomNumber(4);
    obj.value = "STARTED";
    obj.disabled = true;
}

function running() {
    guessArray = getYourGuess();

    console.log("Ball Count is: " + checkBall(guessArray, answerArray));
    console.log("Strike Count is: " + checkStrike(guessArray, answerArray));
    console.log("Out is: " + checkOut(guessArray, answerArray));

    document.getElementById("statusBoard").innerHTML +=
        "Ball Count is: " + checkBall(guessArray, answerArray) + "<br>"
        + "Strike Count is: " + checkStrike(guessArray, answerArray) + "<br>"
        + "Out is: " + checkOut(guessArray, answerArray) + "<br>"
        + "-----------------------------------------------------<br>";
    if( checkStrike(guessArray, answerArray) == answerArray.length ) {
        document.getElementById("statusBoard").innerHTML +=
            "<h1>You Win</h1>";
    }
}