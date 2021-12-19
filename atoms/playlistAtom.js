// import the helper
import { atom } from "recoil";


export const playlistState = atom({
    key: "playlistState",
    default: null,

})

export const playlistIdState = atom ({
    // this key must be uniqie and only has one
    key: "playlistIdState",
    default: '0pGdGpMm84h2Jl6Q1KmTMn'

})