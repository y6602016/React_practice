import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Rain on me", duration: "4:05" },
    { title: "Midnight Sky", duration: "5:15" },
    { title: "Hello", duration: "3:55" },
    { title: "Tizzy Bac", duration: "5:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
