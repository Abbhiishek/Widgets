// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import '../../styles/globals.css'
import Banner from '../../components/banner'

// import Banner from '../../components/banner'
//? title , bio , twitter

// const Banner = () => {
//     return (
//     )
// }

// // get a repo proprty
export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const { title, bio, twitter } = req.query
    const theme = {
        gradient_color1: "#BC6FF1",
        gradient_color2: "#52057B",
        fill: '#F2A6A6',
        text_color: '#fff'
    }

    const banner = await Banner({ title, bio, twitter })

    res.setHeader('Content-Type', 'image/svg+xml')
    res.statusCode = 200;
    return res.send(banner)
}


