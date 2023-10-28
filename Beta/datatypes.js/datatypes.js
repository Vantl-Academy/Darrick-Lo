// Binary is expressed as power of 2's. 
// The placement of the 1 or 0 determines the power of 2. For example, 1 (2^4) + 1 (2^3) + 0 (2^2) + 0 (2^1) + 0 (2^0)
// would be described in binary as 11100, so it kinda has to be read left to right and right to left. 

// Similarly, for strings, there is also a numeric conversion that includes capitalization: a=1, b=2, etc. In total
// there would be 127 characters (including tildes, commas, capitalizations), and these are enumerated on a standardized
// table called ASCII. 

//Each character is then represented by eight digits, since 11111111 would be equal to the 128th character, and 00000001
//would be a.

// A collection is a way to organize data, and data is organized like a graph. 
// Furthermore, the organization can be related through "relational types", such as cat and catherine;
// where cat is related to catherine via c -> a -> t -> (stop), instead of continuing on to "herine"

//
function add(list) { // adds an element to the function
    var sum = 0 // adding an element to nothing, to establish a baseline of what the sum of nothing is, since 
                // the list is currently nothing, its sum needs to be established.
    for (var i = 0; i < list.length; i++) {
        sum = sum + retrieve(list, i)
    }
}

//here is a more succinct version of the above, but computationally more efficient. 

function summation(list) {
    var sum = 0
    return list.reduce((sum, element) => sum + element) //the function does two things here, take the sum of the
                                                        //list, and then 
}
// the "." like list.reduce is calling a function to perform its operation on the prefix. 

console.log(add([24, 31, 28, 28]))

function retrieve(list, index) {
    let test = ["a", "b", "c"]
    return list[index]
    }


// Write function with two parameters: 
// First parameter: alpha
// second parameter, list of elements
// return alpha - [list]

let list = [10, 5, 3, 10, 5]
subt(list, 500)

function subt(elements, alpha) {
    let var sum = 0
    let elements = []
    //let var elements = [10, 5, 3, 7, 23]
    elements = elements.reduce((sum, elements) => sum + elements)
    return elements - alpha
}
// you can also use "summation" command. Like so:

function subtractor(alpha, list) {
    let sum = summation(list)
    return alpha - sum
}


console.log(subtractor(50, [1, 5, 9]))



