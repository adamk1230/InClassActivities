var Student = function(name, favsub, gpa) {
  this.name = name;
  this.favsub = favsub;
  this.gpa = gpa;
  // prints out a different message depending on whether dud is male or female
  
};

// exporting our Dud constructor.We will require it in partyBus.js
module.exports = Student;