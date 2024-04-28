#! /usr/bin/env node

import inquirer from "inquirer";


const converter :{
    sentence:string
}=await inquirer.prompt({
    name:"sentence",
    type:"input",
    message:"Enter your sentence to count words : "
})

const count = converter.sentence.trim().split(" ")
//Print the array of words to the console
console.log(count);

//Print the words count of the sentence to the console
console.log(`Your sentence words count is ${count.length}`);


