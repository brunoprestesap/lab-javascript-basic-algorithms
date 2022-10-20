// Iteration 1: Names and Input

let hacker1 = "Bruno Alexandre Soares Prestes"
let hacker2 = "Pamela"

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

// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let name_separated = ""

for (let i = 0; i < hacker1.length; i++) {

    name_separated += `${hacker1[i].toUpperCase()} `

}

console.log(name_separated)

// Print all the characters of the navigator's name, in reverse order

let reverse = ""

for (let i = hacker2.length -1; i >= 0; i--) {

    reverse += hacker2[i]

}

console.log(reverse)

/* 3.3 Depending ont he lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! Do */

let list = [hacker1, hacker2]

list.sort()

for (let i = 0; i < list.length; i++) {
    if (list[i] === hacker1) {
        console.log("The driver's name goes first")
        break
    } else if (list[i] === hacker2) {
        console.log("Yo, the navigator goes first definitely")
        break
    }
}