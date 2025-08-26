let student = {
    name: "Harshita",
    subjects: {
        math: 85,
        science: 92,
        english: 78,
        history: 88,
        computer: 95
    }
};

let marksArray = Object.values(student.subjects);

let total = marksArray.reduce((sum, mark) => sum + mark, 0);
let average = total / marksArray.length;
let percentage = (total / (marksArray.length * 100)) * 100;

let weakSubjects = Object.entries(student.subjects)
    .filter(([subject, mark]) => mark < 80)
    .map(([subject]) => subject);

let report = Object.entries(student.subjects).map(([subject, mark]) => {
    return `${subject}: ${mark}`;
});

let grade;
if (percentage >= 90) grade = "A+";
else if (percentage >= 75) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 40) grade = "C";
else grade = "F";
console.log("Student Marks Report");
console.log("Name:", student.name);
console.log("Subjects:", report.join(", "));
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Weak Subjects:", weakSubjects.length > 0 ? weakSubjects.join(", ") : "None");
