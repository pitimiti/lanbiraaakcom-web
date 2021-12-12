module.exports = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL
    },
    async rewrites() {
        return [
            {
                source: '/hakkimizda',
                destination: '/about-us'
            },
            {
                source: '/arama',
                destination: '/search'
            }
        ]
    }
}
