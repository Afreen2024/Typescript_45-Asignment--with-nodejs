//Making of Array countries and print in original ORDER
let vistCountries:string[]=['Chaina', 'Danmark','Brazil','America']
console.log("Original Order", vistCountries)

//Print thr array Alpabatical Order without modify the actual array list
console.log("AlphabaticalOrder", [...vistCountries].sort())
//Show the  step in original Order
console.log("Still in Original Order",vistCountries)
// print A array in Reverse order without modifing the actual list
console.log("Reverse order:",[...vistCountries].reverse())
//show that the array is still in the original order
console.log("Still inthe original order:",vistCountries)
//we have change the original Array order Now
console.log("Original Array Reversed:",vistCountries.reverse())
//Back to original order
console.log("Back to Original order:",vistCountries.reverse())
//print the array to show has been changed in Alphabatical Order
console.log("Sorted in Alphabetical Order:",vistCountries.sort())
//we have changed reverse order again
console.log("Original Array Reversed:",vistCountries.reverse())




