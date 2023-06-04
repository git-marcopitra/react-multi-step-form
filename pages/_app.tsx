import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default App;
