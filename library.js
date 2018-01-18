var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
// for (var p in library.playlists) {
//        console.log(p + ": " + library.playlists[p].name + " - " + library.playlists[p].tracks.length + " tracks");
//      }
//  }

// printPlaylists();



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//      for (var t in library.tracks) {
//        console.log(t + ": " + library.tracks[t].name + " by " + library.tracks[t].artist + " (" + library.tracks[t].album + ")" );
//       }
//      }

// printTracks()


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printTrack = function(trackId) {

// }


// var printPlaylist = function (playlistId) {
//        console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");

//       //for (var t in library.tracks) {
// //        console.log(t + ": " + library.tracks[t].name + " by " + library.tracks[t].artist + " (" + library.tracks[t].album + ")" );
// //       }
// //      }

//       for (var t of library.playlists[playlistId].tracks) {
//         console.log(t + ": " + library.tracks[t].name + " by " + library.tracks[t].artist + " (" + library.tracks[t].album + ")" );

//       }

//  //      console.log(library.playlists[playlistId].tracks

// //  var playlist = library.playlists[playlistId];
// //  console.log(playlist.id);
// }
//   printPlaylist("p01");
//}












// var library = {
//   tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },
//             t02: { id: "t02",
//                    name: "Model View Controller",
//                    artist: "James Dempsey",
//                    album: "WWDC 2003"},
//             t03: { id: "t03",
//                    name: "Four Thirty-Three",
//                    artist: "John Cage",
//                    album: "Woodstock 1952"}
//           },
//   playlists: { p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },
//                p02: { id: "p02",
//                       name: "Other Playlist",
//                       tracks: ["t03"]
//                     }
//              }
// }
//}





// adds an existing track to an existing playlist. add track 2 to playlist2

var addTrackToPlaylist = function (trackId, playlistId) {
    var playlist = library.playlists[playlistId];
    //console.log(playlist.tracks);
        //playlistId.tracks. add trackId
    playlist.tracks.push(trackId)
    //`this is the same - library["playlists"][playlistId]["tracks"]
    console.log(playlist.tracks);
}

addTrackToPlaylist("t03", "p01");


// var obj = {
//     key1: value1,
//     key2: value2
// };
// Using dot notation:
// obj.key3 = "value3";


// var obj = {key1: value1, key2: value2};
// How can I add {key3: value3} to object obj ?

// Answer
// There are two ways to add a new property to an object:

// Use dot notation
// If you know the key name of the property, the key3 in this example

// obj.key3 = "value3";




















// generates a unique id
// (use this for addTrack and addPlaylist)

//var uid = function() {
//  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//}


// adds a track to the library

//var addTrack = function (name, artist, album) {

//}


// adds a playlist to the library

//var addPlaylist = function (name) {

//}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//var printSearchResults = function(query) {

//}
