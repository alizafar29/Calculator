
var displayVal = '';
//secp0nd operand
var previousVal = 0;
//this is first operand
var opt = '+';
var result;


function operand(val) {
    displayVal += val;
    document.getElementById("display").value = displayVal;
}

function sqr(){
    displayVal = document.getElementById('display').value;
    result = displayVal * displayVal;
    document.getElementById('display').value = result;
}

function dot(){
    displayVal += ".";
    document.getElementById('display').value = displayVal;
}

function operator(val) {
    console.log(val)
    if (val == 'C') {
        displayVal = '';
        previousVal = "0";
        result = "";
        opt = '+';
        document.getElementById('display').value = "0";
    }
    else {

        switch (opt) {
            case '+':
                document.getElementById('display').value
                result = parseInt(parseInt(previousVal) + parseInt(displayVal));
                document.getElementById("display").value = result;
                break;
            case '-':
                result = parseInt(parseInt(previousVal) - parseInt(displayVal));
                document.getElementById("display").value = result;
                break;
            case '/':
                result = parseInt(parseInt(previousVal) / parseInt(displayVal));
                document.getElementById("display").value = result;
                break;
            case '*':
                result = parseInt(parseInt(previousVal) * parseInt(displayVal));
                document.getElementById("display").value = result;
                break;

            case '%':
                result = parseInt(parseFloat(previousVal) * parseFloat(displayVal) / 100);
                document.getElementById("display").value = result;
                break;

            case 'sqr':
                result = parseInt(parseInt(previousVal) * parseInt(previousVal));
                document.getElementById("display").value = result;
                break;

            case '=':
                result = previousVal;
                document.getElementById("display").value = result;
                break;
            default:
                break;
        }
        displayVal = "";
        previousVal = result;
        opt = val;
    }
}
