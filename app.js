var decimal;
function readValue(){
    var d = document.getElementById("d").value;
    var answer = document.getElementById("answer");
    answer.innerText = decimalToBinary(d);
}

function decimalToBinary(decimal){
    if(decimal === 0){
        return 0;
    }
    let binary = "";
    while(decimal > 0){
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);

    }
    return binary;
}