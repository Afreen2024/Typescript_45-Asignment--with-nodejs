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
//Inform only two guest can be limited for Dinner
console.log('unfortynately ,The New dinner table found arrive on time, i can invite only two Dinner with me');

while(guesList.length > 2)
    {
let removeGuest = guesList.pop();
console.log(`Sorry,${removeGuest} I cannot invite you to dinner`)
    }
console.log("invitation to the last 2 Guest");

guesList.forEach(lasttwo => console.log(`lucky ${lasttwo}, you are still invited to dinner`))
// Removing last 2 guest from the LIST
guesList.pop();
guesList.pop();
 console.log("empty list",guesList)




