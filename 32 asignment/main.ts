//Array of current user
let current_user=["afreen","Misbah","walia", "auon"]

//Array of new user
let new_user=["nida","abbas","wahid", "batool","afreen","walia"]

//loop through new user check for usernames avaibility

new_user.forEach(new_one_user =>{

    let our_condition= (current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()) )
    if(our_condition )
        {
console.log(`sorry ${new_one_user} is already taken!`)
        }
        else
        {
            console.log(`This user ${new_one_user} is avaliable`)

        }
})

