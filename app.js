
// var board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ];

// var player1 = X;
// var player2 = O

// placeMark
//Check for Winner
//check for Draw
//Switch turns
var board = document.getElementsByClassName('board');
var players = ['X', 'O'];
var currentplayer;
// var options = [];


function WinnerBoxes(b1, b2, b3) {
    b1.classList.add('win');
    b2.classList.add('win');
    b3.classList.add('win');
}

function WinnerPlayer() {
    var box1 = document.getElementsById('box1');
    var box2 = document.getElementsById('box2');
    var box3 = document.getElementsById('box3');
    var box4 = document.getElementsById('box4');
    var box5 = document.getElementsById('box5');
    var box6 = document.getElementsById('box6');
    var box7 = document.getElementsById('box7');
    var box8 = document.getElementsById('box8');
    var box9 = document.getElementsById('box9');

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        WinnerBoxes(box1, box2, box3);
    }

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        WinnerBoxes(box4, box5, box6);
    }

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        WinnerBoxes(box7, box8, box9);
    }

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        WinnerBoxes(box1, box4, box7);
    }

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        WinnerBoxes(box2, box5, box8);
    }

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        WinnerBoxes(box3, box6, box9);
    }

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        WinnerBoxes(box1, box5, box9);
    }

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        WinnerBoxes(box3, box5, box7);
    }
    return WinnerBoxes();
}

function nextTurn() {
    next();
}

