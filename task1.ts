•	Declare two variables for the exam scores, e.g., englishMarks and urduMarks, and assign them values.
•	Calculate the average of the two exams using the formula: (englishMarks + urduMarks) / 2
•	Use if-else conditionals to determine the student's grade based on the average score.
•	For example, if the average score is greater than or equal to 80, assign grade "A", if it is greater than or equal to 70 and less than 80, assign grade "B", and so on until grade "F" for a score below 60.
•	Display the grade to the user as output.

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
