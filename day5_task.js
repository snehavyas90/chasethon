
const express = require("express");
const app = express();
const PORT = 3000;


const students = [
  { id: 1, name: "Alice", age: 20, course: "Computer Science" },
  { id: 2, name: "Bob", age: 21, course: "Mechanical" },
  { id: 3, name: "Charlie", age: 22, course: "Electrical" }
];


app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/", (req, res) => {
  res.send("Welcome to Student API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
