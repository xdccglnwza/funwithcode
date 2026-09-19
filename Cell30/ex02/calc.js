const form = document.getElementById("calculator");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const left = document.getElementById("left").value;
    const right = document.getElementById("right").value;
    const operator = document.getElementById("operator").value;

    const a = Number(left);
    const b = Number(right);

    // Check positive integers >= 0
    if (
        left === "" ||
        right === "" ||
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        a < 0 ||
        b < 0
    ) {
        alert("Error :(");
        return;
    }

    // Division or modulo by zero
    if ((operator === "/" || operator === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

        case "%":
            result = a % b;
            break;
    }

    alert(result);
    console.log(result);
});

// Alert every 30 seconds
setInterval(function () {
    alert("Please, use me...");
}, 30000);