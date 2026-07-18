



// function userData(){
//     alert('fetching user data');

//     return{id:1,name:'sooyaal'};
// }

// console.log('starting fetching user data');

// const user= userData();
// console.log('userData',user);
// console.log('this message is blocked')



function nonBlockingFunction() {
  console.log("Non-blocking function started...");

  setTimeout(() => {
    console.log("Non-blocking function finished after 2 seconds.");
  }, 2000);
}

console.log("Start");
nonBlockingFunction();
console.log("End");
