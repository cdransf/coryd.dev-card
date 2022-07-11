import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

interface CommonSEOProps {
    title: string
    description: string
    ogType: string
    ogImage:
        | string
        | {
              '@type': string
              url: string
          }[]
    twImage: string
    canonicalUrl?: string
}

const CommonSEO = ({
    title,
    description,
    ogType,
    ogImage,
    twImage,
    canonicalUrl,
}: CommonSEOProps) => {
    const router = useRouter()
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {Array.isArray(ogImage) ? (
                ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
            ) : (
                <meta property="og:image" content={ogImage} key={ogImage} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
            <link
                rel="canonical"
                href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}
            />
            <meta charSet="utf-8" />
            <meta content="text/html; charset=utf-8" httpEquiv="Content-Type"></meta>
            <link rel="icon" type="image/png" sizes="32x32" href={siteMetadata.favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={siteMetadata.favicon16} />
            <link rel="shortcut icon" href={siteMetadata.favicon} />
            <link rel="apple-touch-icon" href={siteMetadata.appleTouch}></link>
        </Head>
    )
}

interface PageSEOProps {
    title: string
    description: string
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
    const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
    const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
    return (
        <CommonSEO
            title={title}
            description={description}
            ogType="website"
            ogImage={ogImageUrl}
            twImage={twImageUrl}
        />
    )
}
