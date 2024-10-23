let mathProblem = ""; //variable that holds current problem
let history = [];
let index = 0;
//event listener taht listens for any click on the page

document.getElementById("button-history").addEventListener("click", ()=> {
    let historyDisplay = document.getElementById("equation");
    if(history.length === 0)
        historyDisplay.textContent = "No history available";
    else{
        let historyText = "";
        for(let i = 0; i<history.length; i++){
            historyText += history[i] + "\n";
        }
        historyDisplay.textContent = historyText;
    }
})

document.addEventListener("click", (event) => {
    let itemThatWasClick = event.target
    //checks if item clicked is a button
    if (itemThatWasClick.matches("button")) {
        
        //check to see if button has the data attribute of data-number
        //if data-number is not on this button, it will check for other data-attributes
        if (itemThatWasClick.dataset.number !== undefined) {
            mathProblem += itemThatWasClick.dataset.number
            history[index] = mathProblem
        }
        else {
            if (itemThatWasClick.dataset.operation === "ce") {
                //if the button ce was clicked, clear everything
                //a return will stop execution of this function

                history[index] = mathProblem
                mathProblem = clearEverything();
                return;
            }
            else if (itemThatWasClick.dataset.operation !== "=") {

                mathProblem += itemThatWasClick.dataset.operation;
                history[index] = mathProblem
            }
            else {
                updateAnswer();
            }

        }

        updateCurrentProblem(mathProblem);
        document.button.style.backgroundColor = randomColor();
        index++;
    }
})




function clearEverything(mathProblem) {
    document.getElementById("equation").textContent = "";
    return mathProblem = "";
}

function updateCurrentProblem(mathProblem) {
    document.getElementById("equation").textContent = mathProblem;

    return mathProblem;
}

function updateAnswer() {

    document.getElementById("answer").textContent = eval(mathProblem);
    history = mathProblem;
    mathProblem = clearEverything();
}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}