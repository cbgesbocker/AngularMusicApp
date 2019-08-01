export const commonEnvironment = {
  apiConfig: {
    apiAuthAccountsUrl: "https://accounts.spotify.com/",
    apiUrl: "https://api.spotify.com/",
    endpoints: {
      auth: "authorize",
      myTracks: "v1/me/tracks",
      myPlaylists: "v1/me/playlists",
      playlistTracks: "/v1/users/playlists/"
    },
    client_id: "0fbb7876d007469dad343674a6571a68",
    client_secret: "7048a96599cf49cebbdb6e86147cbd0a",
    scope: "user-library-read",
    response_type: "token"
  }
};
