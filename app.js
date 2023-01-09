let display = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener('click',calculate)
});

function calculate(event){
    let ans = event.target.dataset.num;

    if(ans==="="){
        if(display !== ""){
            display.value = display.value+" = "+eval(display.value);
        }
    }else if(ans === "C"){
        display.value = "";
    }else{
        display.value += ans;
    }
}