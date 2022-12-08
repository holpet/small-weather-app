import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../../public/css/global.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
