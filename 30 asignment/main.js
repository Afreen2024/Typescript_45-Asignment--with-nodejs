var userName = ["neha", "pami", "nida", "batool", "walia"];
//using foreach loop on ARRAY
userName.forEach(function (oneUser) {
    if (oneUser === "walia") {
        console.log("hello ".concat(oneUser, ",would you like to see video report"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thank u logging in again"));
    }
});
