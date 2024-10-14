const boxContainer = document.getElementById("box-container");
const boxesPerRow = [3, 1, 3];
const totalBoxes = boxesPerRow.reduce((acc, currVal) => acc + currVal, 0);
let boxIndex = 0;

boxesPerRow.forEach((num) => {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < num; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("data-index", boxIndex);
    row.appendChild(box);
    boxIndex++;
  }
  boxContainer.appendChild(row);
});

const queue = [];
boxContainer.addEventListener("click", function (e) {
  let index = e.target.dataset.index;
  if (
    !queue.includes(index) &&
    queue.length !== totalBoxes &&
    index !== undefined
  ) {
    queue.push(index);
    e.target.style.backgroundColor = "green";
    console.log(queue, "queue");

    if (queue.length === totalBoxes) {
      const intervalId = setInterval(() => {
        let firstIndex = queue.shift();
        console.log(queue, "queue");
        document.querySelector(
          `[data-index="${firstIndex}"]`
        ).style.backgroundColor = "";
        if (queue.length === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }
});

const obj = [
  { key: "sample 1", data: "data 1" },
  { key: "sample 2", data: "data 2" },
  { key: "sample 3", data: "data 3" },
  { key: "sample 4", data: "data 4" },
];


