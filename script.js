const squares = document.querySelectorAll(".square")
const parentSquares = document.querySelector("#parent-squares")

// Finaliza o jogo caso todos os elementos estejam preenchidos
function checkFinalGame() {
	const arrayFromSquares = Array.from(squares)
	const finalGame = arrayFromSquares.every((sqr) => sqr.classList.contains("o") || sqr.classList.contains("x"))
	console.log(finalGame)

	if (finalGame === true) {
		alert("fim de jogo") // adicionar a tela de vitória*
	}
}

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
		}

		checkFinalGame()
	}

	square.addEventListener("click", addXorCircle)

}

