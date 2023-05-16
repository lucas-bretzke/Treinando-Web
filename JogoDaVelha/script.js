let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function placeMark(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;

        if (verificarVitoria()) {
            alert(`O jogador ${currentPlayer} venceu!`)
            resetBoard()
        } else if (!board.includes("")) {
            alert('O jogo terminou em empate!')
            resetBoard()
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"
        }
    }
}

function verificarVitoria() {
    for (combination of winningCombinations) {
        const [a, b, c] = combination
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c])
            return true
    }
    return false
}

function resetBoard() {
    currentPlayer = "X"
    board = ["", "", "", "", "", "", "", "", ""];
    const cell = document.getElementsByClassName('cell')
    for (i = 0; i < cell.length; i++) {
        cell[i].innerText = ""
    }
}

