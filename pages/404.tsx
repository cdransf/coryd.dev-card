import Meta from '../components/meta';

export async function getStaticProps() {
    return { props: { containerClass: 'error' } };
}

export default function Custom404() {
    return (
        <main>
            <Meta title="404 | Cory Dransfeldt" />
            <section>
                <p>It looks like you got lost.</p>
                <p><a href="/">Why not head home?</a></p>
            </section>
        </main>
    )
}