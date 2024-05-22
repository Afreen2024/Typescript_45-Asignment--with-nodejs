let personName="Afreen jahangeer";

console.log(personName.toLowerCase())

console.log(personName.toUpperCase())

//title case
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()))