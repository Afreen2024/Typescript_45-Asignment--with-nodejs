function Show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magicians_name = ["zain", "imran", "jani"];
Show_magicians(magicians_name);
var great_magicians = make_great(magicians_name);
console.log(great_magicians);
