// Parent School class
class School {
constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
}
// Getters 
get name() {
    return this._name;
}
get level() {
    return this._level;
}
get numberOfStudents() {
    return this._numberOfStudents;
}
// Setters
set numberOfStudents(newNumberOfStudents) {
    // Check if input is a number
    if (typeof newNumberOfStudents === 'number') {
    this._numberOfStudents = newNumberOfStudents;
    } else {
    console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
}
// Methods
quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
}
// Static method to pick a random substitute teacher
static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randInt];
}
}

// Primary School class
class PrimarySchool extends School {
constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy; // Unique to PrimarySchool
}

// Only getter for pickupPolicy, others are inherited from School class
get pickupPolicy() {
    return this._pickupPolicy;
}
}

// High School class
class HighSchool extends School {
constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams; // Unique to HighSchool
}

// Only getter for sportsTeams, others are inherited from School class
get sportsTeams() {
    return this._sportsTeams;
}
}

// Create a PrimarySchool instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts(); // Output: Lorraine Hansbury educates 514 students at the primary school level.

// Create a HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams); // Output: [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]

// Pick a random substitute teacher

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])); // Output: One of the items in the array

// Create a middle school instance
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

const middleSchool = new MiddleSchool('Middle School', 500);
console.log(middleSchool.name); // Output: Middle School
console.log(middleSchool.level); // Output: middle
console.log(middleSchool.numberOfStudents); // Output: 500
middleSchool.quickFacts(); // Output: Middle School educates 500 students at the middle school level.
middleSchool.numberOfStudents = 600;
console.log(middleSchool.numberOfStudents); // Output: 600
middleSchool.numberOfStudents = '600';
console.log(middleSchool.numberOfStudents); // Output: Invalid input: numberOfStudents must be set to a Number.

// Create a class that holds a collecton of schools
class SchoolCatalog {
    constructor() {
        this._schools = [];
    }
    get schools() {
        return this._schools;
    }
    addSchool(school) {
        this._schools.push(school);
    }
}

// Create a new SchoolCatalog instance
const schoolCatalog = new SchoolCatalog();

// Add schools to the catalog
schoolCatalog.addSchool(lorraineHansbury);
schoolCatalog.addSchool(alSmith);
schoolCatalog.addSchool(middleSchool);

console.log(schoolCatalog.schools); // Output: [ PrimarySchool { _name: 'Lorraine Hansbury', _level: 'primary', _numberOfStudents: 514, _pickupPolicy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' }, HighSchool { _name: 'Al E. Smith', _level: 'high', _numberOfStudents: 415, _sportsTeams: [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ] }, MiddleSchool { _name: 'Middle School', _level: 'middle', _numberOfStudents: 600 } ]

