import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticProps() {
    return { props: { containerClass: 'error' } }
}

export default function Custom404() {
    return (
        <main>
            <PageSEO title={`404 | ${siteMetadata.title}`} description={siteMetadata.description} />
            <section>
                <p>It looks like you got lost.</p>
                <p>
                    <a href="/">Why not head home?</a>
                </p>
            </section>
        </main>
    )
}
