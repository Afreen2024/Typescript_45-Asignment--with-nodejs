let guesList=['Afreen','Neha','Walia',"Aoun"]
let dontCome=guesList[0]
console.log(dontCome,"Nahi AAa sakhti")
guesList.splice(0,1,"Batool")
console.log("Good new! we have found a Bigger tbable for a dinner.")
guesList.unshift("Abbas"); 
guesList.push("Pami")
let middleIndex:number=Math.floor(guesList.length / 2)
guesList.splice(middleIndex,0,"zain")
console.log("update list of your guest")
guesList.forEach(oneguest => console.log(`Asslm O Alikum ${oneguest},would you like dinner with me`))






// guesList.forEach(guest =>console.log(`Assalm O Alikm${guest}Would you like to come invitation`))