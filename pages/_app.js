import '../styles/globals.scss'
import { Layout } from '../components/Layout'
import { CosmosProvider } from 'hook/context'
import { WagmiConfig } from 'wagmi'

export default function MyApp({ Component, pageProps }) {
  return (
      <CosmosProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CosmosProvider>
  )
}