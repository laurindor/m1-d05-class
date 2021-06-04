/**
 * Code along for the lesson on JS Objects methods
 */

const order1 = {
  customer: "Ironhack",
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,
  callCustomer: function (barista) {
    console.log(`${barista} says: "Hey customer your cappucino is ready!"`);
  },
};

order1.callCustomer("Miki");
/*
// From the losson about objects -> The reason for objects
const customer = "Ironhack";
let beverage = "cappucino";
const price = 10;
const sugar = false;
const extraFoam = true;

beverage = "caffé"; // this is not possible because it will overwrite the first one
*/
