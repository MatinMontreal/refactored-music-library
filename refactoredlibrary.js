var library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three',
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003',
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952',
    },
  },
  playlists: {
    p01: {
      id: 'p01',
      name: 'Coding Music',
      tracks: ['t01', 't02'],
    },
    p02: {
      id: 'p02',
      name: 'Other Playlist',
      tracks: ['t03'],
    },
  },

  printPlaylists: function() {
    for (var p in this.playlists) {
      console.log(
        p +
          ': ' +
          this.playlists[p].name +
          ' - ' +
          this.playlists[p].tracks.length +
          ' tracks'
      );
    }
  },

  printTracks: function() {
    for (var t in this.tracks) {
      console.log(
        t +
          ': ' +
          this.tracks[t].name +
          ' by ' +
          this.tracks[t].artist +
          ' (' +
          this.tracks[t].album +
          ')'
      );
    }
  },

  printPlaylist: function(playlistId) {
    console.log(
      playlistId +
        ': ' +
        this.playlists[playlistId].name +
        ' - ' +
        this.playlists[playlistId].tracks.length +
        ' tracks'
    );

    // for (var t in this.tracks) {
    //   console.log(t + ": " + this.tracks[t].name + " by " + this.tracks[t].artist + " (" + this.tracks[t].album + ")");
    //  }

    for (var t of this.playlists[playlistId].tracks) {
      console.log(
        t +
          ': ' +
          this.tracks[t].name +
          ' by ' +
          this.tracks[t].artist +
          ' (' +
          this.tracks[t].album +
          ')'
      );
    }
    console.log(this.playlists[playlistId].tracks);

    var playlist = this.playlists[playlistId];
    console.log(playlist.id);
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    var playlist = this.playlists[playlistId];
    console.log(playlist.tracks);
    //playlistId.tracks. add trackId
    playlist.tracks.push(trackId);
    //`this is the same - library["playlists"][playlistId]["tracks"]
    console.log(playlist.tracks);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    var generatedID = this.uid();
    library.tracks[generatedID] = {};
    library.tracks[generatedID].id = generatedID;
    library.tracks[generatedID].name = name;
    library.tracks[generatedID].artist = artist;
    library.tracks[generatedID].album = album;
  },

  addPlaylist: function(name) {
    var genID = this.uid();
    library.playlists[genID] = {};
    library.playlists[genID].id = genID;
    library.playlists[genID].name = name;
    library.playlists[genID].track = [];
  },
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
// for (var p in library.playlists) {
//        console.log(p + ": " + library.playlists[p].name + " - " + library.playlists[p].tracks.length + " tracks");
//      }
//  }

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printTrack = function(trackId) {

// }

library.printPlaylist('p01');
//}

// adds an existing track to an existing playlist. add track 2 to playlist2

library.addTrackToPlaylist('t03', 'p01');

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

// adds a track to the library

library.addTrack('Get in the Groove', 'Madonna', 'Borderline');

console.log(library);

// adds a playlist to the library

library.addPlaylist('Playlist for Coding');

console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//var printSearchResults = function(query) {

//}
