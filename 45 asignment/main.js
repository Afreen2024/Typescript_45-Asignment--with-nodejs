function create_car(manfacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = {
        manfacturer: manfacturer,
        model: model,
    };
    option.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("toyota", "corolla", "color:Black", "sunroof:true");
console.log(my_car);
