import Link from '@/components/Link'

const Footer = () => {
    return (
        <footer>
            <ul className="footer__links">
                <li>
                    <Link href="mailto:hi@coryd.dev">Email</Link>
                </li>
                <li>
                    <Link href="https://coryd.dev/calendar">Calendar</Link>
                </li>
                <li>
                    <Link href="https://github.com/cdransf">GitHub</Link>
                </li>
                <li>
                    <Link href="https://www.last.fm/user/cdme_">Last.fm</Link>
                </li>
                <li>
                    <Link href="https://trakt.tv/users/cdransf">Trakt</Link>
                </li>
                <li>
                    <Link href="https://oku.club/user/cory">Oku</Link>
                </li>
                <li>
                    <Link href="/uses">Uses</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
