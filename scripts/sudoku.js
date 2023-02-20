
class Sudoku extends HTMLElement {
    constructor() {
        super();
        console.log("Hello");
        this.shadow = this.attachShadow({ mode: "open" });
        this.pElem = null;
        this.render();
    }

    get style() {
        return `
        :host {
            font-family: monospace;
        }
        `;
    }




    render() {
        for (let i = 0; i <= 81; i++) {
            const elem = document.createElement("div");
            elem.classList.add("main-grid-cell");
            this.pElem = this.shadow.appendChild(elem);
            this.pElem.innerHTML = `${i}`;
        }
    }
}

customElements.define("sudoku-game", Sudoku);