const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
    frame-src giscus.app
`

const SECURITY_HEADERS = [
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, ''),
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
    },
]

module.exports = withBundleAnalyzer({
    env: {
        API_KEY_LASTFM: process.env.API_KEY_LASTFM,
    },
    async rewrites() {
        return [
            {
                source: '/script.67532e4133a4t4551aza.js', // plausible script proxy
                destination: 'https://plausible.io/js/script.outbound-links.js',
            },
            {
                source: '/api/58441z2164b5e7880yec', // plausible api proxy
                destination: 'https://plausible.io/api/event',
            },
            {
                source: '/books', // oku cors proxy
                destination: 'https://oku.club/rss/collection/POaRa',
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/projects',
                destination: '/404',
                permanent: false,
            },
            {
                source: '/calendar',
                destination: 'https://savvycal.com/coryd',
                permanent: true,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: SECURITY_HEADERS,
            },
        ]
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/media/[name].[hash].[ext]',
                    },
                },
            ],
        })

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            })
        }

        return config
    },
    siteUrl: process.env.SITE_URL || "https://coryd.dev",
});
