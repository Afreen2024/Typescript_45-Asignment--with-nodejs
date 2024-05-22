function Show_magicians(magicians:string[])
{
    magicians.forEach(name => console.log(name));
}
function make_great(magicians:string[]){
   return magicians.map(name => `The great ${name}`);
}

let magicians_name=["zain","imran","jani"]

//Making a copy of original array throu slice() function

let copy_magisians_names=magicians_name.slice()

let  copy_great_magician= make_great(copy_magisians_names);

console.log("original Array\n")

Show_magicians(magicians_name)
console.log("\n copied Array")

Show_magicians(copy_great_magician)