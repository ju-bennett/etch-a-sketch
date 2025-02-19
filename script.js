const container = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");

// Function to create the grid
function createGrid(squaresPerSide) {
    container.innerHTML = ""; // Clear previous grid

    let containerSize = container.clientWidth; // Ensure container is square
    let squareSize = Math.floor(containerSize / squaresPerSide); // Perfect fit
    
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.darkness = "0"; // Track darkening level

        square.addEventListener("mouseover", () => changeColor(square));

        container.appendChild(square);
    }
}

// Function to randomize colors and progressively darken squares
function changeColor(square) {
    let darkness = parseInt(square.dataset.darkness);

    if (darkness < 10) {
        // Generate a random RGB color
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        // Apply darkening effect
        let factor = (10 - darkness) / 10;
        square.style.backgroundColor = `rgb(${r * factor}, ${g * factor}, ${b * factor})`;

        // Increment darkness
        square.dataset.darkness = darkness + 1;
    }
}

// Function to reset grid with user input
resetBtn.addEventListener("click", () => {
    let newSize = prompt("Enter grid size (max: 100):", "16");
    newSize = Math.min(Math.max(parseInt(newSize), 1), 100); // Restrict between 1 and 100
    createGrid(newSize);
});

// Initialize 16x16 grid
createGrid(16);

