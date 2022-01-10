import Meta from '../components/meta';
import Footer from '../components/footer';

export async function getStaticProps() {
    return { props: { containerClass: 'home' } };
}

function HomePage() {
    return (
        <main role="main">
            <Meta />
            <section>
                <div className="home__header">
                    <img src="/pic-header.webp" alt="Cory Dransfeldt" height="128" width="79" />
                    <div className="home__header__tagline">
                        <h1>
                            Hi, I'm Cory
                            <span>👋</span>
                        </h1>
                    </div>
                </div>
                <p>I build, maintain and design web applications. I've been coding professionally since 2010 with a focus on front-end technologies.</p>
                <p>My attention to detail, passion for code and development allow me to excel at delivering robust, performant applications.</p>
                <p>I am endlessly fascinated by development, technology and automation.</p>
                <p>Feel free to get in touch using the links below.</p>
                <Footer />
            </section>
        </main>
    )
}

export default HomePage