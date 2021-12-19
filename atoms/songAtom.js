import { atom } from "recoil";

// set the current track state to findout the current track ID we've been selected
export const currentTrackIdState = atom({
    key: "currentTrackIdState", // Unique ID with respect to other atoms/selector)
    default: null, // default value (aka initial value)
});

// set the playing state, which mean, play it playing true, otherwise false
export const isplayingState = atom({
    key: "isPlayingState",
    default: false,
})