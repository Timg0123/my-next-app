import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
