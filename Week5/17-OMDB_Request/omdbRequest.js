var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "bb8cd24f0e1f4383b4c3fb05ef42785a",
  secret: "9c34c4836d9f43479f659fa48dd554de"
});
 
spotify.search({ type: 'track', query: 'the sign ace of base' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(data);
// console.log(data.tracks.items); 
	// var keys = Object.keys(data)
	// console.log(keys)
	console.log(JSON.stringify(data.tracks.items[0], null, 2))
	// console.log(data.tracks.items[0].album.artists[0].name);  // **artist name
	// console.log(data.tracks);
		// console.log(JSON.stringify(data.tracks.items[0].name, null, 2)) // **name of track
// console.log(data.tracks.items[0].external_urls);
	// console.log(JSON.stringify(data, null, 2))
	// console.log(data.tracks.items[0].external_urls.spotify); // **track url
console.log(data.tracks.items[0].album.artists[0].name);  // **artist name
console.log(data.tracks.items[0].name); // name of track
console.log(data.tracks.items[0].preview_url); // preview url	
console.log(data.tracks.items[0].album.name); // album name


});