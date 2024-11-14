
// question 8

//first we created a constructor function called as animal
function Animal(){
    this.type = 'animal';
  }
  // adding a method to animal prototype
  Animal.prototype.sound=function(){
  console.log(`Animal sound `);
  }
  
  // making the dog constructor function and ensuring that it inherits the property of animal
  function Dog(){
      Animal.call();
  }
  
  // here we are inheriting the properties of animal .prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // in here we are updating the sound function 
  Dog.prototype.sound=function(){
      console.log("Bark");
  
  };
  // here we are creating the instance of the dog function
  let Dog1 = new Dog();
  // here we are calling the sound method of dog 
  Dog1.sound();