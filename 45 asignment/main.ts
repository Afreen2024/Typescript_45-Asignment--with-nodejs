function create_car(manfacturer, model, ...option ){
    let car={
        manfacturer:manfacturer,
        model: model,
    };


option.forEach(options =>  {
    let [key,value]= options.split(":");
    car[key.trim()]=value.trim();
});


return car;
}
let  my_car= create_car("toyota","corolla","color:Black","sunroof:true")
console.log(my_car)
