let guesList=['Afreen','Neha','Walia',"Aoun"]
let dontCome=guesList[0]
console.log(dontCome,"Nahi AAa sakhti")
guesList.splice(0,1,"Batool")
guesList.forEach(guest =>console.log(`Assalm O Alikm${guest}Would you like to come invitation`))