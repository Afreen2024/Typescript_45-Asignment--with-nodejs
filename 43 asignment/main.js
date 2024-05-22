function Show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magicians_name = ["zain", "imran", "jani"];
//Making a copy of original array throu slice() function
var copy_magisians_names = magicians_name.slice();
var copy_great_magician = make_great(copy_magisians_names);
console.log("original Array\n");
Show_magicians(magicians_name);
console.log("\n copied Array");
Show_magicians(copy_great_magician);
