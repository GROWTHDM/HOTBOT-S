let boardElement = document.getElementById('boxMines');
let btn = document.getElementById('btn');



let countdown = 40;
let countdownTimer = null;


const atualizarBotao = () => {
    --countdown;
    btn.innerText = `${countdown}s`;
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.innerText = 'GENERATE';
    btn.disabled = false;
    countdown = 40;
}


function generateMinesBoard(diamond_positions) {
    const grid = Array.from({ length: 25 }, (_, i) =>
        diamond_positions.includes(i) ? "ðŸ’Ž" : "ðŸ’£"
    );
    return Array.from({ length: 5 }, (_, i) => grid.slice(i * 5, i * 5 + 5));
}

function renderBoard(board) {
    boardElement.innerHTML = board
        .map((row) =>
            row
                .map(
                    (cell) =>
                        `<div><img src="${cell === "ðŸ’Ž"
                            ? "imagens/hot-shots-mines-symbol.png"
                            : "imagens/blockbrown.png"
                        }" alt="${cell}"></div>`
                )
                .join("")
        )
        .join("");
}

function handleClickGenerateOpportunity() {
    btn.disabled = true;
    const diamond_positions = randomDiamondPositions();
    const board = generateMinesBoard(diamond_positions);
    renderBoard(board);
}

function randomDiamondPositions() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 25));
}

btn.addEventListener('click', () => {
    handleClickGenerateOpportunity();
    countdownTimer = setInterval(atualizarBotao, 1000);
})

function move() {

    let elem = document.getElementById("greenBar");
    const firstWait = document.getElementById('waitContainer');
    let stepValue = 0;
    let id = setInterval(frame, 100);
    firstWait.style.display ='block';
    handleClickGenerateOpportunity();
    setTimeout(() => {
        firstWait.style.display = 'none';
        // secondWait.style.display = 'block';
    }, 12000)

    function frame() {

        if (stepValue >= 100) {
            clearInterval(id);

        } else {
            elem.style.width = (stepValue + 1) + "%";
            elem.innerHTML = (stepValue + 1) + "%...";
            stepValue=(stepValue + 1);

        }
        btn.disabled = true;
    }

}