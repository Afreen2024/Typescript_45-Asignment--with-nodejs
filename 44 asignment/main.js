function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n making a sandwich  with the following item:\n");
    item.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("Chicken", "Cheese", "mayo", "egg", "with braedcramp codinf", "with russain salid");
