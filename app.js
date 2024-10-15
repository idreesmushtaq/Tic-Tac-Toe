let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-button');
let newGameBtn = document.querySelector('#play-again-button');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')


let turnO = true;

const  winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], //rows
    [0,3,6], [1,4,7], [2,5,8], //columns
    [0,4,8], [2,4,6] //diagonals
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        const box1 = boxes[pattern[0]];
        const box2 = boxes[pattern[1]];
        const box3 = boxes[pattern[2]];

        if (box1.innerText && box1.innerText === box2.innerText && box1.innerText === box3.innerText) {
            console.log('Winner');
            box1.style.backgroundColor = 'green';
            box2.style.backgroundColor = 'green';
            box3.style.backgroundColor = 'green';
            boxes.forEach((box) => {
                box.disabled = true;
                box2.innerText = 'End';
            });
            resetbtn.innerText = 'Play Again'
        }
    });
}

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.style.backgroundColor = ''; // Reset the background color
        box.disabled = false; // Re-enable the boxes
    });
    resetbtn.innerText = 'Reset Game';
}

newGameBtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click', resetGame);