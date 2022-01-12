import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Dreamer</title>
      <meta name="description" content="Dreamer landing page" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <title>Welcome to Dreamer!</title>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </>
)

export default App
