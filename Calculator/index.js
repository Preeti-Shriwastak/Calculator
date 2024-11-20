function clearDisplay() {
    document.getElementById("display").value = " ";
}

function appendValue(value) {
    document.getElementById("display").value += value; 
}

function appendValueDel(value) {
    document.getElementById("display").value = display.value.toString().slice(0, -1);
}

function calculateResult(){
    try{
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch(error) {
        document.getElementById("display").value = "Error";
    }
}


















// function calculateResult() {
//     try {
//         const result = eval(document.getElementById("display").value);
//         document.getElementById("display").value = result;
//     } catch (error) {
//         document.getElementById("display").value = "Error";
//     }
// }

























// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) =>{
//     button.addEventListener('click', (e) => {
//         console.log(e.target)
//         string = string + e.target.innerHtml;
//         document.querySelectorAll('input').value = string;
//     })
// })