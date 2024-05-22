var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making of Array countries and print in original ORDER
var vistCountries = ['Chaina', 'Danmark', 'Brazil', 'America'];
console.log("Original Order", vistCountries);
//Print thr array Alpabatical Order without modify the actual array list
console.log("AlphabaticalOrder", __spreadArray([], vistCountries, true).sort());
//Show the  step in original Order
console.log("Still in Original Order", vistCountries);
// print A array in Reverse order without modifing the actual list
console.log("Reverse order:", __spreadArray([], vistCountries, true).reverse());
//show that the array is still in the original order
console.log("Still inthe original order:", vistCountries);
//we have change the original Array order Now
console.log("Original Array Reversed:", vistCountries.reverse());
//Back to original order
console.log("Back to Original order:", vistCountries.reverse());
//print the array to show has been changed in Alphabatical Order
console.log("Sorted in Alphabetical Order:", vistCountries.sort());
//we have changed reverse order again
console.log("Original Array Reversed:", vistCountries.reverse());
