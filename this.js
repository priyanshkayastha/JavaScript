// 1. In a method (inside an object):
'use strict'

const user={
    name:'Aman',
     inner(){
        console.log(this.name);
        
    }
}
user.inner()

//In regular function
function show(){
    console.log(this);
    
}
show()

//in arrow function
// this in arrow functions does not refer to the calling object.
// It uses this from its lexical (outer) scope.
const person={
    name:'Avinash',
    greet:()=>{
        console.log(this.name);
        
    }
}
person.greet()
// output:-undefined