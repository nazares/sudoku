import { CONSTANT } from "./modules/constants.js";
class Sudoku extends HTMLElement {
    constructor() {
        super();
        this.divElement = null;
        this.shadow = this.attachShadow({ mode: "open" });
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="assets/styles/css/sudoku.css">
        <!-- main -->
        <div class="main">
            <div class="screen">
                <!-- start screen -->
                <div class="start-screen active" id="start-screen">
                    <input type="text" placeholder="Your name" maxlength="11" class="input-name" id="input-name">
                    <div class="btn" id="btn-level">
                        Easy
                    </div>
                    <div class="btn" id="btn-continue">Continue</div>
                    <div class="btn btn-blue" id="btn-play">New game</div>
                </div>
                <!-- end start screen -->

                <!-- game screen -->
                <div class="main-game" id="game-screen">
                    <div class="main-sudoku-grid">
                    </div>
                </div>
                <!-- end game screen -->

                <!-- pause screen -->
                <div class="pause-screen" id="pause-screen">
                    <div class="btn btn-blue" id="btn-resume">Resume</div>
                    <div class="btn" id="btn-new-game">New game</div>
                </div>
                <!-- end pause screen -->

                <!-- result screen -->
                <div class="result-screen" id="result-screen">
                    <div class="congrate">Competed</div>
                    <div class="info">Time</div>
                    <div id="result-time"></div>
                    <div class="btn" id="btn-new-game-2">New game</div>
                </div>
                <!-- end result screen -->
            </div>
        </div>`;
        for (let i = 0; i <= 80; ++i) {
            this.divElement = document.createElement("div");
            this.divElement.classList.add("main-grid-cell");
            this.divElement.innerHTML = i;
            const main = this.shadow.querySelector('.main-sudoku-grid');
            main.appendChild(this.divElement);
        }

    }
}

customElements.define('sudoku-board', Sudoku);