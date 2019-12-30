let cells = document.querySelectorAll('td');
let startBtn = document.querySelector('button');
let score = document.getElementById('scores');
let round = document.getElementById("round");
cells[4].style.backgroundImage = "url('vlad.jpg')";
cells[4].style.backgroundSize = "180px 180px";
console.log(cells);
let num = 1;
let currentCell = 0;
let scores = 0;
let roundNum = 1;
let timeForClick = 1000;
let isClicked = true;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function check() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function (e) {
            let cell =  cells[i];
            if (i == currentCell) {
                cell.style.borderColor = 'green';
                scores++;
                score.textContent = scores.toString();
                isClicked = true;
            }
            else {
                gameOver();
            }
        }
    }
}

function clearCells() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].childNodes[0].textContent = "";
        cells[i].style.borderColor = "black";
    }
}

function start() {
    round.textContent = "Раунд: " + roundNum.toString();
    startBtn.style.display = 'none';
    check();

    let pastCellIndex = -1;
    let rndNum = 0;
    setInterval(function () {
        if (!isClicked) {
            gameOver()
        }

        do {
            rndNum = getRandomInt(0, 9);
        } while (pastCellIndex == rndNum)

        cells[rndNum].childNodes[0].textContent = num.toString();
        cells[rndNum].style.borderColor = 'red';
        isClicked = false;
        pastCellIndex = rndNum;

        //cells[rndNum].style.borderColor = "black";
        num++;

        if (num == 11) {
            clearCells();
            num = 1;
            roundNum++;
            round.textContent = "Раунд: " + roundNum.toString();
            isClicked = true;
            timeForClick -= 250;
            console.log("speed " + timeForClick);
        }
        currentCell = rndNum;
    }, timeForClick);

}


function gameOver() {
    location.reload()
    alert("Ты проиграл, дружок пирожок\nТвое количество ОЧКОВ: " + scores.toString());
}

startBtn.addEventListener("click", start)




