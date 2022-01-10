const SECURITY_HEADERS = [
    {
        key: "X-DNS-Prefetch-Control",
        value: "on"
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block"
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN"
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff"
    },
    {
        key: "Referrer-Policy",
        value: "no-referrer"
    }
]

module.exports = ({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    headers() {
        return [{
                source: "/(.*)",
                headers: SECURITY_HEADERS,
        }]
    },
    siteUrl: process.env.SITE_URL || "https://coryd.dev",
});