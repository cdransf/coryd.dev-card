export default async function handler(req, res) {
    const data = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cdme_&api_key=${process.env.API_KEY_LASTFM}&format=json`
    ).then((response) => response.json())

    res.json(data)
}
