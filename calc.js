const result = document.querySelector(".result");  
    function calculate() {
        result.value = new Function("return " + result.value)();
        console.log(result.value)
    }

    console.log = function(log) {
        document.getElementById('console_log').innerHTML += log + "<br>";
    }