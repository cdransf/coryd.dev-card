import { writeFileSync } from 'fs'
import globby from 'globby'
import { resolveConfig, format } from 'prettier'
import { siteUrl } from '../data/siteMetadata'
;(async () => {
    const prettierConfig = await resolveConfig('./.prettierrc.js')
    const pages = await globby([
        'pages/*.js',
        'pages/*.tsx',
        '!pages/_*.js',
        '!pages/_*.tsx',
        '!pages/api',
    ])

    const sitemap = `
                <?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                        ${pages
                            .map((page) => {
                                const path = page
                                    .replace('pages/', '/')
                                    .replace('public/', '/')
                                    .replace('.js', '')
                                    .replace('.tsx', '')
                                    .replace('.mdx', '')
                                    .replace('.md', '')
                                const route = path === '/index' ? '' : path
                                if (page.search('pages/404.') > -1) {
                                    return
                                }
                                return `
                                                <url>
                                                        <loc>${siteUrl}${route}</loc>
                                                </url>
                                        `
                            })
                            .join('')}
                </urlset>
        `

    const formatted = format(sitemap, {
        ...prettierConfig,
        parser: 'html',
    })

    // eslint-disable-next-line no-sync
    writeFileSync('public/sitemap.xml', formatted)
})()
