// const accounts01 = [['admin01 , 123'], ['admin02 , 234'],['admin03 , 345']]
// const accounts02 = {admin01 : "123" , admin02 :"234", admin03 :"345"}
// 1 key = many values
// let users = { // key

//     users01:{ // key

//     name:"ahmad", //key : value
//     age:"30" , 
//     state:"beirut"
//     },

//     users02:{
        
//     name:"ali", 
//     age:"67" 
       
//     },

//     users02:{
        
//     name:"mohamed", 
//     age:"89" 
        
//     },

//     users04:{
        
//     name:"mouad", 
//     age:"12"
        
//     }

// }



// console.log(accounts01)
// for (var i of Object.values(users)){
// console.log(Object.keys(users)[i])
// }
// console.log(accounts02.keys)
// console.log(accounts02.accounts03)

// let admin = prompt("enter username")
// function main (){
//     if (admin in accounts02){
    
//         console.log(`welcome ${admin} you pass is :${accounts02[admin]}`)
//     }else{
//         console.log('you are not registered')
//     }

// }
// main()
// function getAge(){
//     let name = prompt("enter your name")
//     if(users.name == name){
//         console.log(`${users.name} is ${users.age} years old`)
//     }else{
//         console.log(`wrong name checkout these name ${users.name} `)
//     }
// }

        //   [0,1,2,3,4] INDEX
// let number = [1,2,3,4,5]
// console.log(number.length-1)
// let sliced = number.slice(0,4) //(index, take abel ekhir index ) = slice
// console.log(number.length-1)
// console.log(sliced)
// console.log(number)
// number.splice(1,3,20,30,40,50)  // (interval index , replacement)
// console.log(number)

let person = {
    name : "ahmad" ,
    "middlename" : "saad" ,
    "lastname": "yassine",
    
    age : "33",
    state : "beirut" ,
    greet : function(){
        console.log(`hello my name is ${person.name}`) // bi aleb l parenthese : parameter , barra bi sammouwon argument
        // let v = value
    }

}
console.log(`my name is ${person.name}  ${person['middlename']} ${person ['lastname']} `)
// console.log (`${person.name} and I am ${person.age} years old, living in ${person.state}   ` )
// console.log(person.greet())


