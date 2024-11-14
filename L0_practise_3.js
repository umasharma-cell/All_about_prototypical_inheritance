// question 10

function car(make,model,year,isAvailable = true){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable=isAvailable;
}

function customer(name , rentedCars=[]){
    this.name=name;
  this.rentedCars=rentedCars
}

customer.prototype.rentCar = function(car){
    if(car.isAvailable){
        car.isAvailable=false;                 
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.model}`)
      }else{
        console.log(`this ${car.model} already rented `);
      }
}

customer.prototype.returnCar=function(car){
  setTimeout(()=>{
    //finding car in rentedCars array
    let carIndex=this.rentedCars.indexOf(car);
    if(carIndex>-1){
      this.rentedCars.splice(carIndex,1);
      car.isAvailable=true;
      console.log(`${this.name} return ${car.model}`)
    }
    else{
      console.log(`${this.name} does not rent car`)
    } 
  },2000)
}

function PremiumCustomer(name,rentedCars=[],discountRate=0.1){
   customer.call(this,name,rentedCars);
   this.discountRate=discountRate;
  // discountRate = ;
}

PremiumCustomer.prototype=Object.create(customer.prototype);

PremiumCustomer.prototype.constructor=PremiumCustomer;

//override rent car to apply discount
PremiumCustomer.prototype.rentCar=function(car){
  if(car.isAvailable){
    car.isAvailable=false;
    this.rentedCars.push(car);
    console.log(`${this.name} rented a ${car.model}`)
  }else{
    console.log(`this ${car.model} already rented `);
  }
}

function calculateRentalPrice(car,days,carType){
  let basePrice=50;
  let carTypeRates={
    SUV:1.2,Sedan:1.1
  }
  let price=basePrice*days;
  price*=carTypeRates[carType] || 1;
  
  return price;
}

function Maintanence(car,delay){
  setTimeout(()=>{
    car.isAvailable=true;
    console.log(`this car has been serviced`)
  },delay)
}

let car1=new car("Toyota","fortuner",2021);
let car2=new car("Tata","Safari",2020);
let car3=new car("Maruti","jiminy",2019);

let customer1= new customer("Lokey");
let premimumCustomer1= new PremiumCustomer("aamir",[],0.15);



