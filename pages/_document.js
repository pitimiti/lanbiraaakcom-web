import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import SiteConfig from '../site.config'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang={SiteConfig.lang}>
                <Head>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <link rel="icon" href="/images/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
