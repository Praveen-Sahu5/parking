document.addEventListener("DOMContentLoaded", function() {
    const rowsInput = document.getElementById("rows");
    const colsInput = document.getElementById("cols");
    const gridContainer = document.getElementById("gridContainer");

    function generateGrid(rows, cols) {
        gridContainer.innerHTML = "";
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // String containing alphabets A-Z
        for (let i = 0; i < rows; i++) {
            const row = document.createElement("div");
            row.classList.add("grid-row");
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement("div");
                cell.classList.add("grid-item");
                const input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.setAttribute("id", `spot-${i}-${j}`);
                input.setAttribute("name", `spot-${i}-${j}`);
                const label = document.createElement("label");
                const columnLabel = alphabet[j]; // Get column label
                label.setAttribute("for", `spot-${i}-${j}`);
                label.innerHTML = `${columnLabel}${i + 1} &#128663;`; // Label format: A1 🚗, A2 🚗, ...
                label.appendChild(input);
                cell.appendChild(label);
                row.appendChild(cell);
            }
            gridContainer.appendChild(row);
        }
    }

    function clearGrid() {
        gridContainer.innerHTML = "";
    }

    rowsInput.addEventListener("change", updateGrid);
    colsInput.addEventListener("change", updateGrid);

    function updateGrid() {
        const rows = parseInt(rowsInput.value);
        const cols = parseInt(colsInput.value);
        clearGrid();
        generateGrid(rows, cols);
    }

    generateGrid(1, 1); // Default grid size
});
