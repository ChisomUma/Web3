import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"

function MyApp({Component, pageProps}) {
  return(
  
    <MoralisProvider 
    appId='6lBD71Mo22ez4lirpwGrJCUsiIo3mnICTRRzTumY' 
    serverUrl='https://jp1q6eia3n4c.usemoralis.com:2053/server'>
      {
        <Component {...pageProps} />
      }
    </MoralisProvider>
    );
  }
  




export default MyApp
