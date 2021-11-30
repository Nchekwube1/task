// Task One
function Arithmetic(a, b, c) {
    if (c === "+") {
        return (+a + +b);
    }
    if (c === "-") {
        return (+a - +b);
    }
    if (c === "/") {
        return (+a / +b);
    }
    if (c === "*") {
        return (+a * +b);
    }
}
console.log(Arithmetic("6", "9", "*"));
