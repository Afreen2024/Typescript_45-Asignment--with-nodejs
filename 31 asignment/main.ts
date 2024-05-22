let Username=["afreen","neha","tuktuk","nida","pami"]
{
    if (Username.length === 0)
        {
            console.log("your name is empty we need to find some user")
        }
        else  
        {
            Username.forEach(oneUser =>{
                if(oneUser == "nida")
                    {
                console.log(`hello ${oneUser},would you like to see video report`)
                    }
                    else{
                        console.log(`hello ${oneUser},thank you for logging again`)

                    }


            })
        } 
        
        

}