
const grid = document.querySelector("#grid");
const resizeButton = document.querySelector("#resize-button");

function createGrid(size) {
    grid.innerHTML = "";

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");

        cell.addEventListener("mouseover", () => {
            cell.classList.add("drawn");
        });

        grid.appendChild(cell);
    }
}

createGrid(4);

resizeButton.addEventListener("click", () => {
    const input = prompt("Enter the number of squares per side (1–100):");

    if (input === null) return;

    const size = Number(input);

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
});
