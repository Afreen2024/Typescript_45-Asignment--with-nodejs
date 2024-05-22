var Username = ["afreen", "neha", "tuktuk", "nida", "pami"];
{
    if (Username.length === 0) {
        console.log("your name is empty we need to find some user");
    }
    else {
        Username.forEach(function (oneUser) {
            if (oneUser == "nida") {
                console.log("hello ".concat(oneUser, ",would you like to see video report"));
            }
            else {
                console.log("hello ".concat(oneUser, ",thank you for logging again"));
            }
        });
    }
}
