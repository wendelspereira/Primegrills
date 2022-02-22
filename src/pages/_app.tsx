import { Layout } from "../components/Layout/index";
import Router from "next/router"
import "../styles/global.css";
import { ProductProvider } from "../contexts/ProductContext";
import { FinishProvider } from "../contexts/FinishContext";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start()
})
Router.events.on("routeChangeComplete", () => {
  NProgress.done()
})
Router.events.on("routeChangeError", () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FinishProvider>
        <ProductProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductProvider>
      </FinishProvider>
    </>
  )
}
export default MyApp
