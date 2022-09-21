function Hasil() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value
    var result = number1*number2
    document.getElementById("result").innerHTML = result

    if (result > 100) {
        alert(result)
        document.getElementById("result").style.color = "red"
    }
    else {
        alert(result)
        document.getElementById("result").style.color = "blue"
    }




}


function Vurma(start, end) {
var sum=1

for(var x = start; x <= end; x++){
    var sum = sum*x
    var sum2 = sum
    console.log(sum2)
}

}
Vurma(5,8)

function Task5() {
    var text = document.getElementById("text").value

    var slicedtext = text.slice(0,-1)

    document.getElementById("text").value = slicedtext
    console.log(slicedtext)

}


function Task6() {
    var text1 = document.getElementById("text1").value
    var upper = text1.charAt(0).toUpperCase() + text1.slice(1)
    document.getElementById("text1").value = upper

}

