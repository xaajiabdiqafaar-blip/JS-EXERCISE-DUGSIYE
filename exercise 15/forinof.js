



// FOR IN AND FOR OF EXERCISE


const people = [
  { name: "sooyaal", age: 25, city: "lascanod" },
  { name: "gabbac", age: 30, city: "guriceel" },
  { name: "Cabdi", age: 28, city: "kenya" }
];

// for...of loop iterates through the array
for (const person of people) {
  console.log("Person:");

  // for...in loop iterates through the object's properties
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  console.log("----------------");
}

