var guesList = ['Afreen', 'Neha', 'Walia', "Aoun"];
var dontCome = guesList[0];
console.log(dontCome, "Nahi AAa sakhti");
guesList.splice(0, 1, "Batool");
console.log("Good new! we have found a Bigger tbable for a dinner.");
guesList.unshift("Abbas");
guesList.push("Pami");
var middleIndex = Math.floor(guesList.length / 2);
guesList.splice(middleIndex, 0, "zain");
console.log("update list of your guest");
guesList.forEach(function (oneguest) { return console.log("Asslm O Alikum ".concat(oneguest, ",would you like dinner with me")); });
// guesList.forEach(guest =>console.log(`Assalm O Alikm${guest}Would you like to come invitation`))
