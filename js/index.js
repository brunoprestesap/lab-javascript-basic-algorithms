// Iteration 1: Names and Input

let hacker1 = "Bruno Alexandre Soares Prestes"
let hacker2 = "Pamela Prestes"

let message1 = `The driver's name is ${hacker1}`
let message2= `The navigator's name is ${hacker2}`

console.log(message1)
console.log(message2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the o navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
