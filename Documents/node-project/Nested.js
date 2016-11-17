//Q.N 1 create  an array of arrays and print to console.
var array = [
  ['History', 'Sports', 'Geography', 'Science'],
  ['World war', 'FootBall', 'USA', 'Hydrogen'],

];
console.log("array of arrays : ", array);

//Q.N.2an objectwithArray
//****************************************************
var objectWithArray = {
firstName:'suran',
lastName:'Wagle',
age:25,
myCars:['BMW','Mercedes','Honda','Volvo']
};

console.log("MY FAVORITE CAR IS:",objectWithArray.myCars[3]); //Volvo
// //*************************************************************
// //Q.N.3 an object with another object for a property
//
// //***************************************************
var apple = {
color:'Red',
type:'pink Lady',
size:'Medium',

eating:
 {
breakfast:'Donuts',
  lunch: 'Rice',
  dinner:'pizza'
}
};
console.log('MY DAILY FOOD :', apple.eating.dinner);//my daily food Pizza
// //*********************************************************
// //Q.N 4.an array of objects (can be defined in unique variables or on the fly)
var arrayOfObject = [

  {
firstName:'Jhon',
lastName:'Dangue',
eyeColor:'blue',
age:50
},
{

  firstName:'suran',
  lastName:'Wagle',
  eyeColor:'black',
  age:25

},
{
  firstName:'Basanta',
  lastName:'Wagle',
  eyeColor:'Brown',
  age:30
}
];
console.log("THIRD OBJECT : ",arrayOfObject[2].eyeColor);// third object : Brown
