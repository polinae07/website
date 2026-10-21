document.getElementById("verify").addEventListener("click", function () {
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    const result = document.getElementById("result");

    if (x === "" || y === "") {
        result.value = "Введите X и Y";
        return;
    }

    const a = Number(x);
    const b = Number(y);

    if (a > b) {
        result.value = a * b;
    } else if (a + b > 0) {
        result.value = Math.log(a + b);
    } else {
        result.value = "Ошибка: X + Y должно быть больше 0";
    }
});

document.getElementById("UserEnter").addEventListener("submit", function (event) {
    event.preventDefault();

    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    const result = document.getElementById("result");

    if (x === "" || y === "") {
        result.value = "Введите X и Y";
        return;
    }

    const a = Number(x);
    const b = Number(y);

    if (a > b) {
        result.value = a * b;
    } else if (a + b > 0) {
        result.value = Math.log(a + b);
    } else {
        result.value = "Ошибка: X + Y должно быть больше 0";
        return;
    }

    this.submit();
});
