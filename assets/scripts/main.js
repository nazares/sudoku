import { CONSTANT } from "/assets/scripts/modules/constant.js";
class Sudoku extends HTMLElement {
    constructor() {
        super();
        this.divElement = null;
        this.shadow = this.attachShadow({ mode: "open" });
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="assets/styles/style.css">`;
        for (let i = 0; i <= 80; ++i) {
            this.divElement = document.createElement("div");
            this.divElement.classList.add("main-grid-cell");
            this.divElement.innerHTML = i;
            this.shadow.appendChild(this.divElement);
        }

    }
}

// console.log(CONSTANT);

customElements.define('sudoku-board', Sudoku);