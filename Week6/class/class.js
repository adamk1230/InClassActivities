f// requiring our Dud constructor function we exported from dud.js
var Student = require("./student.js");

// constructor function for creating partyBus objects
var Class = function(professorName, roomNumber) {
  // this.duds will hold all of our dud objects
  this.studentArray = [];
  this.numStudents = 0;
  this.professorName = professorName;
  this.roomNumber = roomNumber;
  
  // a method that creates a dud object from the constructor function we required
  // on line 1 and then pushes the new dud object to the this.duds array
  this.addStudent = function(n, f, g) {
    this.studentArray.push(new Student(n, f, g));
    this.numStudents++;
  };

  this.printRoster = function(){
    console.log(this.studentArray);
  }

};

// exporting the Class constructor which we will use in main.js
module.exports = Class;

