import Head from 'next/head';

const Meta = ({
    title = 'Cory Dransfeldt',
    description = 'Husband, dad, developer, music nerd.',
    url = 'https://ced.sh',
    image = '/pic-social.webp'}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta name="description" content={description} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <meta content='text/html; charset=utf-8' httpEquiv='Content-Type'></meta>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <link rel='apple-touch-icon' href={image}></link>

            {/* fb open graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* preload fonts */}
            <link rel="preload" href="/fonts/firasans/bold.woff" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/firasans/bold.woff2" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/firasans/regular.woff" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/firasans/regular.woff2" as="font" crossOrigin="" />
        </Head>
    )
}

export default Meta;