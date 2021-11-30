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
// console.log(Arithmetic("6","9","*"))
// Task two
function ScoreKeeper(a, b) {
    if (a.length !== b.length)
        return;
    var scoreA = 0;
    var scoreB = 0;
    for (var i = 0; i < a.length; i++) {
        // let j=0
        // console.log(a[i], b[j])
        // console.log(a, b)
        // if (a[i] !== b[i])  { scoreA= scoreA scoreB= scoreB} 
        a[i] > b[i] ? scoreA++ : a[i] < b[i] ? scoreB++ : null;
    }
    return [scoreA, scoreB];
}
console.log(ScoreKeeper([0, 0, 1], [0, 0, 0]));
