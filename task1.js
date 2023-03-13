var englishmarks = 80;
var urdUmarks = 75;
var averagE = (englishmarks + urdUmarks) / 200 * 100;
if (averagE >= 80) {
    console.log("Grade A");
}
else if (averagE >= 70) {
    console.log("Grade B");
}
else if (averagE >= 60) {
    console.log("Grade C");
}
else {
    "Failed";
}
console.log("Your percentage is ".concat(averagE));
