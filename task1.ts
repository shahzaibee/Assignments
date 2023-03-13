 let englishmarks:number = 80;
 let urdUmarks:number =75;

 let averagE = (englishmarks + urdUmarks)/200*100;

 if (averagE >= 80) {
 console.log("Grade A");

    
}
else if (averagE>= 70) {
    console.log("Grade B");

}
else if (averagE >=60 ) {
    console.log("Grade C");
}
else{
    "Failed"
}

console.log(`Your percentage is ${averagE}`);
