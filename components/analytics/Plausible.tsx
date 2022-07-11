import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const PlausibleScript = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                data-domain={siteMetadata.analytics.plausibleDataDomain}
                data-api={siteMetadata.analytics.plausibleApiUrl}
                src={siteMetadata.analytics.plausibleSrcUrl}
            />
            <Script strategy="lazyOnload" id="plausible-script">
                {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
        </>
    )
}

export default PlausibleScript

export const logEvent = (eventName, ...rest) => {
    return (window as Window & typeof globalThis & { plausible: any }).plausible?.(
        eventName,
        ...rest
    )
}
