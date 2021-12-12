import Head from 'next/head'
import SiteConfig from '../../site.config'
import Footer from '../include/footer'
import Header from '../include/header'

function DefaultLayout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={SiteConfig.description} />
                <title>{SiteConfig.title}</title>
            </Head>

            <Header></Header>

            <main>{children}</main>

            <Footer></Footer>
        </>
    )
}

export default DefaultLayout
