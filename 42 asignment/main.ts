function Show_magicians(magicians:string[])
{
    magicians.forEach(name => console.log(name));
}
function make_great(magicians:string[]){
   return magicians.map(name => `The great ${name}`);
}

let magicians_name=["zain","imran","jani"]

Show_magicians(magicians_name)

let great_magicians= make_great(magicians_name);

console.log(great_magicians);