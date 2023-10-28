
function print(value) {
    console.log(value)
}
//This function is needed for the print function to work

function x(argument_1, argument_2) {
    return argument_1 + argument_2
}
let sum = x(1, 2)
let sum2 = x(sum, sum)

print(sum + ", " + sum2)
// preface your variable definment with 'let'. If you don't, 
// it will still work but it is implied invisibly.
//

