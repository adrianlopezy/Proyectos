function plus() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1) + parseInt(input2);
    document.getElementById("result").innerHTML = result; 
}

function minus() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1) - parseInt(input2);
    document.getElementById("result").innerHTML = result;
}

function times() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1) * parseInt(input2);
    document.getElementById("result").innerHTML = result;
}

function divide() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result = parseInt(input1) / parseInt(input2);
    document.getElementById("result").innerHTML = result;
}

function reset() {
    document.getElementById("result").innerHTML = "";
}

function resetInput() {
    var input1 = document.getElementById("input1").value = null;
    var input2 = document.getElementById("input2").value = null;
    document.getElementById("reset-input").innerHTML = ""
}
