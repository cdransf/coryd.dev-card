import '../styles/all.scss'
import PlausibleScript from '@/components/analytics/Plausible'

export default function MyCard({ Component }) {
    return (
        <>
            <PlausibleScript />
            <Component />
        </>
    )
}
