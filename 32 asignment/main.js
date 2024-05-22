//Array of current user
var current_user = ["afreen", "Misbah", "walia", "auon"];
//Array of new user
var new_user = ["nida", "abbas", "wahid", "batool", "afreen", "walia"];
//loop through new user check for usernames avaibility
new_user.forEach(function (new_one_user) {
    var our_condition = (current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This user ".concat(new_one_user, " is avaliable"));
    }
});
