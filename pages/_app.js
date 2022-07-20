import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head >
        <title>Sfj business solution</title>
        <meta name="description" content="Official website for sfj business solution" />
        <link rel="icon" href="/companyicon.png " />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
