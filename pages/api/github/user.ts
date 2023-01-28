import Image from 'next/image';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import UserProfile from '../../../components/userProfile'
import themes from '../../../themes';


interface REPOTHEME {
    title_color: string;
    icon_color: string;
    text_color: string;
    bg_color: string;
}
// get a repo proprty 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // get the repo name from the request
    const User = req.query.user as string
    const Themes = req.query.theme as string

    // get the Theme for themes
    const theme = Themes as keyof typeof themes;
    const Theme = themes[theme] as REPOTHEME || themes.default as REPOTHEME;


    // get the repo data from github
    const data = await fetch(`https://api.github.com/users/${User}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            "Authorization": "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"
        }
    })
    const Org = await fetch(`https://api.github.com/users/${User}/orgs`)
    const org = await Org.json()
    // get the length of org
    const orgLength = org.length
    const repoData = await data.json()
    const {
        login,
        avatar_url,
        name,
        bio,
        location,
        blog,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        email,
        html_url

    } = repoData
    // get the hmtl code 
    const html = await UserProfile({
        login,
        avatar_url,
        name,
        bio,
        location,
        blog,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        email,
        orgLength,
        html_url,
        Theme
    })

    res.setHeader('Content-Type', 'image/svg+xml')
    res.statusCode = 200;
    return res.send(html)
}


// example endpoint ?
// http://localhost:3000/api/github/user?user=Abbhiishek&theme=dracula