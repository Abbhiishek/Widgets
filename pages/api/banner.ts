// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import '../../styles/globals.css'
import Banner from '../../components/banner'
import { BannerThemes } from './../../themes/Banner/index'
// import Banner from '../../components/banner'
//? title , bio , twitter


interface BannerTheme {
    gradient_color1: string;
    gradient_color2: string;
    fill: string;
    text_color: string;
}

interface Iprops {
    title: string;
    bio: string;
    twitter: string;
    Theme: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const title = req.query.title as string
    const bio = req.query.bio as string
    const twitter = req.query.twitter as string
    const Themes: any = req.query.theme as string

    // search for the theme in themes
    // const Theme = BannerThemes[theme] as BannerTheme || BannerThemes.default as BannerTheme
    const theme = Themes as keyof typeof BannerThemes;
    const Theme = BannerThemes[theme] as BannerTheme || BannerThemes.default as BannerTheme;

    // const Theme = BannerThemes[Themes] as BannerTheme || BannerThemes.default as BannerTheme


    const banner = await Banner({ title, bio, twitter, Theme })

    res.setHeader('Content-Type', 'image/svg+xml')
    res.statusCode = 200;
    return res.send(banner)
}


