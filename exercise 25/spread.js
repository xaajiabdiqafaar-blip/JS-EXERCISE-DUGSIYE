



// // exercise 25

// question 1

const numbers=[1,2,3]

const allnumbers =[...numbers,4,5,6];

console.log(allnumbers)


// question 2


function multiply(...numbers){

    return numbers.reduce((total,num)=> total * num,1)

}

console.log(multiply(5,5,5,6))


