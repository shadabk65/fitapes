import Layout from '../components/Layout';
import '../styles/style.css'
import '../styles/media.css'
import '../styles/globals.css'
function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
export default App;
