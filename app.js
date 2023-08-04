const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// function to calculate based on button clicked.
const calculate = (btnValue) => {
    display.focus();
    
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    //If output has '%', replace with '/100' before evaluating.
    }else if (btnValue === "AC"){
        output = "";
    //If AC button is clicked it will remove all the character.
    }else if (btnValue === "DEL"){
        output = output.toString().slice(0,1);
    //if DEL button is clicked it will remove certain character.
    }else{
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
}
display.value = output;
};

//Add event listener to button, call calculate() on click.
buttons.forEach((button) => {
    //button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})


