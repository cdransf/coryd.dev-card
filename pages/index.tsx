import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Footer from '@/components/Footer'
import Reading from '@/components/media/Reading'
import Listening from '@/components/media/Listening'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticProps() {
    return { props: { containerClass: 'home' } }
}

function HomePage() {
    return (
        <main role="main">
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <section>
                <div className="home__header">
                    <Image
                        alt={siteMetadata.title}
                        src="/static/images/avatar.webp"
                        height={164}
                        width={101}
                    />
                    <div className="home__header__tagline">
                        <h1>
                            Hi, I'm Cory
                            <span>👋</span>
                        </h1>
                    </div>
                </div>
                <p>
                    I'm a software developer in Camarillo, California. I enjoy hanging out with my
                    beautiful family and 4 rescue dogs, technology, automation,{' '}
                    <Link href="https://www.last.fm/user/cdme_">music</Link>,{' '}
                    <Link href="https://oku.club/user/cory">reading</Link> and{' '}
                    <Link href="https://trakt.tv/users/cdransf">tv and movies</Link>.
                </p>
                <p>
                    I build, maintain and design web applications. I've been coding professionally
                    since 2010 with a focus on frontend technologies.
                </p>
                <Reading />
                <Listening />
                <p>Feel free to get in touch using the links below.</p>
                <Footer />
            </section>
        </main>
    )
}

export default HomePage
