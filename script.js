const squares = document.querySelectorAll(".square")
const parentSquares = document.querySelector("#parent-squares")
const winMessage = document.querySelector("#win-message")
const winText = document.querySelector("#win-text")


// índice das sequancias de vitórias
const victorySequences = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

//checagem de vitória
function victory(xOrcircle) {
	return victorySequences.some((combination) => {
		return combination.every((index) => {
			return squares[index].classList.contains(xOrcircle)
		});
	});
};


//  Finaliza o jogo caso todos os elementos estejam preenchidos
function checkFinalGame() {
	const arrayFromSquares = Array.from(squares)
	const finalGame = arrayFromSquares.every((sqr) => sqr.classList.contains("o") || sqr.classList.contains("x"))

	if (finalGame && (!victory("x") || victory("o"))) {
		winMessage.classList.add("win")
		winText.innerHTML += `Empate!`
	}
}

for (const square of squares) {

	// adicionar X ou O
	function addXorCircle() {

		if (parentSquares.className === "turnX" && square.classList.length < 2) {
			square.classList.add("x")
			parentSquares.classList.remove("turnX")
			parentSquares.classList.add("turnO")
		} else if (parentSquares.className === "turnO" && square.classList.length < 2) {
			square.classList.add("o")
			parentSquares.classList.remove("turnO")
			parentSquares.classList.add("turnX")
		}

		// mensagem de vitória
		if (victory("x")) {
			winMessage.classList.add("win")
			winText.innerHTML += ` X<br> Venceu!`
		} else if (victory("o")) {
			winMessage.classList.add("win")
			winText.innerHTML += ` O<br> Venceu!`  
		} else {
			checkFinalGame()
		}

	}

	square.addEventListener("click", addXorCircle)

}

// reiniciar  jogo
const refreshBtn = winMessage.querySelector("button").
	addEventListener("click", () => location.reload())
