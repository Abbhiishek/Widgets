// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import '../../styles/globals.css'
import Coffee from '../../components/buymeacoffee'

// import Banner from '../../components/banner'
//? title , bio , twitter

// const Banner = () => {
//     return (
//     )
// }

// // get a repo proprty
export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const { slug } = req.query
    const banner = await Coffee({ slug })
    res.setHeader('Content-Type', 'image/svg+xml')
    res.statusCode = 200;
    return res.send(banner)
}

// endpoint
// https://nextjs-portfolio-eta.vercel.app/api/buymeacoffee?slug=shahzaibkhalid
