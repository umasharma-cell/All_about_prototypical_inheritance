// question 9

function Person(){
    this.name ='Raman';
    this.age = 44;
}

Person.prototype.introduce = function(){
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
}

function employee(){
    Person.call(this);
   jobtitle = 'Marketing'
}

employee.prototype = Object.create(Person.prototype);// here we are inheriting the properties of person in employee

employee.prototype.work = function(){
    console.log(`${this.name} is working as ${jobtitle}`)
}
// creating instances here:

let P1 = new Person();

let E1 = new employee();

P1.introduce();
E1.introduce();

E1.work();