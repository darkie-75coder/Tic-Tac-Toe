let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let playerX = true;
let winner = document.querySelector("#winner");


const winpatt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX == true) {
            box.innerText = "X";
            playerX = false;
        }
        else {
            box.innerText = "O";
            playerX = true;
        }
        box.disabled = true;

        checkwin();
    });
});

const checkwin = () => {
    for(let patterns of winpatt) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner.innerText = `Winner is Player${pos1}`;
                winner.classList.remove("hide")
            }
        }
    }
}

resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        winner.classList.add("hide")
    })
})



