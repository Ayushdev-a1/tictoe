console.log('welcome to tic tac toe game')
let audioTurn = new Audio("music.mp3");
let gameOver = new Audio("tadaa.mp3")
let turn = "X"
let isgameOver = false;

/*function_for_change_turn*/

const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}

/*winner_logic*/

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + "WON"
            isgameOver = true;
            gameOver.play();
        }
    });

}

/*game logic*/
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
           
            if (!isgameOver) {
                document.getElementsByClassName("turn")[0].innerText = "turn for" + turn;
            }
        }
    })
});



