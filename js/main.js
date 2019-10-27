function insert(num) {
    document.getElementById("output").value = document.getElementById("output").value + num
}
function ergebnis() {
    var equal = document.getElementById("output").value;
    if(equal){
        document.getElementById("output").value = eval(equal);
    }
}
function clean(){
    document.getElementById("output").value = '';
}
function back(){
    var equal = document.getElementById("output").value;

    document.getElementById("output").value = equal.substring(0,equal.length - 1);
}

