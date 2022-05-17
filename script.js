const squares = document.querySelectorAll(".square")
const parentSquares = document.querySelector("#parent-squares")

// Finaliza o jogo caso todos os elementos estejam preenchidos
function checkFinalGame() {
	const arrayFromSquares = Array.from(squares)
	const finalGame = arrayFromSquares.every((sqr) => sqr.classList.contains("o") || sqr.classList.contains("x"))
	// console.log(finalGame)

	if (finalGame === true) {
		alert("fim de jogo") // adicionar a tela de vitória*
	}
}

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

function victory() {
	return victorySequences.some((combination) => {
		return combination.every((index) => {
			return squares[index].classList.contains("x");
		});
	});
};


// Verificar se X ou O venceu* // sequencia de vitoris
// resetar o game quando acabar
// adicionar um intervalo do fim do game até a tela aparecer
// Dark mode*


for (const square of squares) {

	function addXorCircle() {
		if (parentSquares.className === "turnX") {
			square.classList.add("x")
			parentSquares.classList.remove("turnX")
			parentSquares.classList.add("turnO")
		} else if (parentSquares.className === "turnO") {
			square.classList.add("o")
			parentSquares.classList.remove("turnO")
			parentSquares.classList.add("turnX")
			parentSquares.classList.add("turnX")

			victory()
			console.log(victory())
		}

		checkFinalGame()
	}

	square.addEventListener("click", addXorCircle)

}

