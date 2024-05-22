function make_album(artistName:string, Album_title:string, track:number)
{
    let album:{artist:string,title:String,track?:number}={
        artist:artistName,
        title:Album_title,
    };
    if(track !== undefined)
        {
            album.track=track
        }
    return album;
}
let album1 = make_album("Afreen","Album title 1",10);

let album2 = make_album("Neha","Album title 2",20);

let album3 = make_album("Nida","Album title 3",30);


console.log(album1)

console.log(album2)

console.log(album3)



