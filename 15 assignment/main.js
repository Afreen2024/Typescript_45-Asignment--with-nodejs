var guesList = ['Afreen', 'Neha', 'Walia', "Aoun"];
var dontCome = guesList[0];
console.log(dontCome, "Nahi AAa sakhti");
guesList.splice(0, 1, "Batool");
guesList.forEach(function (guest) { return console.log("Assalm O Alikm".concat(guest, "Would you like to come invitation")); });
