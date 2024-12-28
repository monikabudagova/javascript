
let a = parseFloat(prompt("Введите первое число:")); // Получаем первое число
let b = parseFloat(prompt("Введите второе число:")); // Получаем второе число


let operation = prompt("Введите операцию (+, -, *, /):");


let c;


if (operation === "+") {
    c = a + b;
} else if (operation === "-") {
    c = a - b;
} else if (operation === "*") {
    c = a * b;
} else if (operation === "/") {
    if (b !== 0) {
        c = a / b;
    } else {
        console.log("Деление на ноль невозможно!");
        c = null; 
    }
} else {
    console.log("Некорректная операция!");
    c = null; 
}

if (c !== null) {
    console.log(`Результат: ${c}`);
}