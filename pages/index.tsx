import { PageSEO } from '@/components/SEO'
import Footer from '@/components/footer'
import Reading from '@/components/media/reading'
import Listening from '@/components/media/listening'
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
                    <img src="/static/images/avatar.webp" alt="Cory Dransfeldt" height="164" />
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
                    <a
                        href="https://www.last.fm/user/cdme_"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        music
                    </a>
                    ,{' '}
                    <a href="https://oku.club/user/cory" target="_blank" rel="noopener noreferrer">
                        reading
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://trakt.tv/users/cdransf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        tv and movies
                    </a>
                    .
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
