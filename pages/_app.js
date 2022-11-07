import "../styles/globals.scss";
import { Layout } from "../components/Layout";
import { CosmosProvider } from "hook/context";

export default function MyApp({ Component, pageProps }) {
  return (
    <CosmosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CosmosProvider>
  );
}
