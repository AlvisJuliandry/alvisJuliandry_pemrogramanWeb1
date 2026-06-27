class GuessGame {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 10) + 1;
    }

    check() {
        const userGuess = parseInt(
            document.getElementById("guess").value
        );

        const result = document.getElementById("result");

        if (userGuess === this.randomNumber) {
            result.textContent = "🎉 Benar! Kamu menang.";

            this.randomNumber =
                Math.floor(Math.random() * 10) + 1;
        } else {
            result.textContent = "❌ Salah, coba lagi.";
        }
    }
}

const game = new GuessGame();