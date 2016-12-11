/**
 * Created by fanem on 30.11.16.
 */
var answer = parseInt(Math.random() * 100);
var count = 1;
var player = 2;
function playGuess() {
    var userAnswer = document.getElementById("numberUser").value;
    userAnswer = parseInt(userAnswer);
    var turn = document.getElementById('player');
    if (answer === null) {
        document.getElementById('numberUser').value = '';
        answer = parseInt(Math.random() * 100);
        var newGame = document.getElementById('submit');
        newGame.innerHTML = 'Answer';
        count = 1;
        turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
        $('#submit').removeAttr('data-toggle');
    } else {
        $('#submit').attr('data-toggle','modal');
        turn.innerHTML = "Enter the number from 1 to 100. " + player + " player's turn.";
        if (userAnswer > answer) {
            var much = document.getElementById("cnt");
            much.innerHTML = 'Too much';
        } else if (userAnswer < answer) {
            var low = document.getElementById("cnt");
            low.innerHTML = 'Too low';
        } else if (userAnswer == answer) {
            var right = document.getElementById('congrats');
            right.innerHTML = 'Congratulations';
            var right1 = document.getElementById("cnt");
            player = player == 2 ? 1 : 2;
            right1.innerHTML = 'You are right. Player ' + player + ' win. \n You guessed using ' + count + ' attempts';
            var right2 = document.getElementById('submit');
            right2.innerHTML = 'Play again';
            answer = null;
        } else {
            var nn = document.getElementById("cnt");
            nn.innerHTML = 'You must enter the number';
        }
        if (player == 1) {
            player = 2;
            count++;
        } else {
            player = 1;
        }
        document.getElementById('numberUser').value = '';
    }
}

function startGame() {
    var visible = document.getElementById('game').hidden,
        vis = document.getElementById('strtGame'),
        game = document.getElementById('game');
    if (visible) {
        game.removeAttribute("hidden");
        vis.innerHTML = 'Stop game';
    } else {
        game.setAttribute("hidden", "hidden");
        vis.innerHTML = 'Start game';
    }
}