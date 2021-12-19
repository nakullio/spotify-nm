import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,

});

function useSpotify() {
    // set the session information
    const { data: session, status } = useSession();

    useEffect(() => {
        if (session) {
            // if the session error, then push them into manual signIn, or in another words,
            // if refresh access token attempt fails, direct user to login ...
            if (session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken); 
        }

    }, [session]);

    // return the spotifyApi
    return spotifyApi;
}

export default useSpotify
