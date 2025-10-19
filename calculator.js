let box = document.querySelectorAll(".box");
let boxes = document.querySelector(".boxes");
let box1 = document.querySelector(".box-1");
let container = document.querySelector(".container");
let btn =document.querySelector(".btn");

let isFirstColor = true; // Pehle click ka flag

btn.addEventListener("click", () => {
    if (isFirstColor) {
        document.body.style.backgroundColor = "#646D7E" ;
        btn.style.backgroundColor="#646D7E";
      
    } else {
        document.body.style.backgroundColor = "black"; // second color
          btn.style.backgroundColor="black";
      
    }
    isFirstColor = !isFirstColor; // state toggle
});



const values = ["C",
    "1", "2", "3", "+",
    "4", "5", "6", "-",
    "7", "8", "9", "*",
    "0", ".", "=", "/"
];


box.forEach((box, index) => {
    box.innerHTML = values[index];

    box.addEventListener("click", () => {
        let value = box.innerHTML;

        if (value === "=") {
            Perform();  // If = is pressed, calculate
        } else if (value === "C") {
            box1.innerText = "";
        }
        else {
            box1.innerText += value;  // Add value to display
        }
    });
});

// Function to calculate result
const Perform = () => {
    try {
        let result = eval(box1.innerText);  // Calculate string expression
        box1.innerText = result;            // Show result
    } catch (error) {
        box1.innerText = "Error";           // If invalid expression
    }
};
