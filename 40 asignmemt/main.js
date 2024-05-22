function make_album(artistName, Album_title, track) {
    var album = {
        artist: artistName,
        title: Album_title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("Afreen", "Album title 1", 10);
var album2 = make_album("Neha", "Album title 2", 20);
var album3 = make_album("Nida", "Album title 3", 30);
console.log(album1);
console.log(album2);
console.log(album3);
