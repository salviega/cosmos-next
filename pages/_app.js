import '../styles/globals.scss'
import { Layout } from '../components/Layout'
import { CosmosProvider } from 'hook/context'
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <CosmosProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CosmosProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}