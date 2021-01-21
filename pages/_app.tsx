import { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }
`

const App = ({ Component, pageProps }: AppProps) =>
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>

export default App
