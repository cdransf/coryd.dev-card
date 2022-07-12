import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Uses() {
    return (
        <main className="uses">
            <PageSEO
                title={`Uses - ${siteMetadata.author}`}
                description={siteMetadata.description}
            />
            <section>
                <Link className="text--small" href="/">
                    &#x2190; Back home
                </Link>
                <h1>Uses</h1>
                <p>Things and software that I use regularly.</p>
                <h3>Hardware</h3>
                <ul className="list-inside list-disc pl-10">
                    <li>Mac Mini (2018 - Intel)</li>
                    <li>Dell Monitor (5ish years old and going strong)</li>
                    <li>Apple Magic Keyboard</li>
                    <li>Apple Magic Trackpad</li>
                    <li>Homepod Mini for audio</li>
                    <li>Raspberry Pi for Homebridge</li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li>
                        <Link href="https://sublimetext.com">Sublime Text</Link> +{' '}
                        <Link href="https://draculatheme.com/pro">Dracula Pro</Link> - Lightweight,
                        powerful and fast, I still enjoy using Sublime Text (along with a wide range
                        of plugins). Dracula Pro has become my go-to syntax theme everywhere it's
                        available.
                    </li>
                    <li>
                        <Link href="https://iterm2.com">iTerm2</Link> - my preferred macoS terminal
                        emulator.
                    </li>
                    <li>
                        <Link href="https://alfredapp.com">Alfred</Link> - My favorite Spotlight
                        replacement. The flexibility, speed and wide array of workflows make it
                        incredibly useful.
                    </li>
                    <li>
                        <Link href="https://todoist.com">Todoist</Link> - My go to task manager —
                        power flexible and reliable. It also makes entering tasks a breeze.
                    </li>
                    <li>
                        <Link href="https://1password.com">1Password</Link> - The best password
                        manager around. I've been using it for {new Date().getFullYear() - 2011}{' '}
                        years and counting.
                    </li>
                    <li>
                        <Link href="https://notion.so">Notion</Link> - A powerful and incredibly
                        flexible documentation/note taking platform. I use it for everything from
                        quick notes to web clipping pages to reference later to writing posts for
                        this site.
                    </li>
                    <li>
                        <Link href="https://www.reederapp.com">Reeder</Link> - to browse my feeds
                        synced via Feedbin.
                    </li>
                    <li>
                        <Link href="https://www.neptunesmac.app">NepTunes</Link> - to control iTunes
                        and scrobble plays to Last.fm.
                    </li>
                    <li>
                        <Link href="https://apps.apple.com/app/marvis-pro/id1447768809">
                            Marvis Pro
                        </Link>{' '}
                        - the best music player with scrobbling support on iOS.
                    </li>
                </ul>
                <h3>Services</h3>
                <ul className="list-inside list-disc pl-10">
                    <li>
                        <Link href="https://hey.com">HEY</Link> - my choice for an email provider.
                        I've found its features and approach to be the best at managing my "imbox".
                    </li>
                    <li>
                        <Link href="https://savvycal.com/?r=coryd">SavvyCal</Link> - my favorite
                        scheduling tool. Powerful, flexible and works with iCloud's calendar
                        calendar seamlessly.
                    </li>
                    <li>
                        <Link href="https://whereby.com">Whereby</Link> - a robust, easy to use and
                        private video conferencing service.
                    </li>
                    <li>
                        <Link href="https://feedbin.com">Feedbin</Link> - far and away my favorite
                        RSS sync service. I use{' '}
                        <Link href="https://feedbin.com/blog/2013/11/06/actions-workflows-for-your-rss-feeds/">
                            actions
                        </Link>{' '}
                        to filter out a wide range of posts from the feeds I subscribe to.
                    </li>
                    <li>
                        <Link href="https://nextdns.io/?from=m56mt3z6">NextDNS</Link> - a
                        privacy-focused DNS provider with myriad blocking, caching and security
                        options. I have a baseline profile configured on my home network and a more
                        aggressive one installed via a profile on my devices directly.
                    </li>
                    <li>
                        <Link href="https://music.apple.com">Apple Music</Link> - primarily as a way
                        to sync music. I import my library and allow Apple to store it rather than
                        leveraging their cataologue.
                    </li>
                    <li>
                        <Link href="http://slack.com">Slack</Link> - my family has a Slack channel
                        that we use instead of group message threads and I participate in a number
                        of other groups.
                    </li>
                    <li>
                        <Link href="https://plausible.io">Plausible</Link> - privacy respecting
                        analytics for this site. Feel free to opt out{' '}
                        <Link href="https://coryd.dev/static/analytics.html">here</Link>.
                    </li>
                    <li>
                        <Link href="https://last.fm">Last.fm</Link> - to track what music I'm
                        listening to and discover new bands (I also use their API for the "I'm
                        listening to display..." on the home page).
                    </li>
                    <li>
                        <Link href="https://trakt.tv">Trakt</Link> - to keep track of what shows and
                        movies I'm watching.
                    </li>
                    <li>
                        <a href="https://oku.club" target="_blank" rel="noopener noreferrer me">
                            Oku
                        </a>{' '}
                        - to track the books I'm reading and discover new ones (the "I'm reading..."
                        display on the home page is sourced from an RSS feed they provide).
                    </li>
                </ul>
                <p>
                    Check out <Link href="https://uses.tech">uses.tech</Link> for more lists like
                    this one.
                </p>
            </section>
        </main>
    )
}
