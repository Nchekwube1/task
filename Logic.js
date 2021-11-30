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
        a[i] > b[i] ? scoreA++ : a[i] < b[i] ? scoreB++ : null;
    }
    return [scoreA, scoreB];
}
// console.log(ScoreKeeper([0,0,1],[0,0,0]))
// Task 3
function positionCheck(p1, p2, d1, d2) {
    // due to the fact that its possible to get an infinite loop from the question given i'll give a constraint for the checking
    var constraint = 20;
    var res = "NO";
    for (var i = 0; i < constraint; i++) {
        console.log(p1, p2, d1, d2);
        p1 === p2 ? res = "YES" : p1 = p1 * d1, p2 = p2 * d2;
    }
    return res;
}
// console.log(positionCheck(1,2,3,9))
