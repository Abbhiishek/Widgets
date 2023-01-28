import Image from 'next/image';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getRepo from '../../../components/repocard'
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
  const repo = req.query.repo as string
  const Owner = req.query.owner as string
  const Themes = req.query.theme as string

  // get the Theme for themes
  const theme = Themes as keyof typeof themes;
  const Theme = themes[theme] as REPOTHEME || themes.default as REPOTHEME;


  // get the repo data from github
  const data = await fetch(`https://api.github.com/repos/${Owner}/${repo}`)
  const repoData = await data.json()
  const { name, owner, description, created_at, language, stargazers_count, forks_count, homepage, watchers_count, open_issues } = repoData
  // get the hmtl code 
  const html = await getRepo({ name, owner, description, homepage, created_at, language, stargazers_count, forks_count, watchers_count, open_issues, Theme })

  res.setHeader('Content-Type', 'image/svg+xml')
  res.statusCode = 200;
  return res.send(html)
}


// example endpoint ?
// http://localhost:3000/api/github/repocard?owner=Abbhiishek&repo=Widgets&theme=dracula