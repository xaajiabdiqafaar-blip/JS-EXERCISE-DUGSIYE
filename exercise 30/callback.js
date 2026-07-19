

// exercise 30

function operate(a,b,Callback){

    return Callback(a,b)

}

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b

}


function multi(a,b){
    return a*b
}

function div(a,b){
    return a/b
}

console.log('addition ', operate(4,4,add));
console.log('subtraction ', operate(4,4,sub));
console.log('multiply ', operate(4,4,multi));
console.log('division ', operate(4,4,div));
