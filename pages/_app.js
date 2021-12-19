// import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  return (
    // session provider will persist our login state through the app
  <SessionProvider session={session}>
    <RecoilRoot>
        <Component {...pageProps} />
    </RecoilRoot>
    
  
  </SessionProvider> )
  
}

export default MyApp
