import { AppProps } from 'next/app'
import Head from 'next/head'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to Dreamer!</title>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </>
)

export default App
