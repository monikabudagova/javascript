let result = 0

function printNumber() {
    if (true) {
        document.getElementById("result").innerHTML += result + "<br>"
        result++
        setTimeout(printNumber, 10)
    }
}

printNumber()