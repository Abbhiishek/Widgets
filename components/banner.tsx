import '../styles/globals.css'

export default function Banner({ title, bio, twitter }: any) {
    return (
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="1980" height="1080" fill="none" role="img" aria-labelledby="descId">
    <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="15%" stop-color="rgba(0, 242, 246, 0.78)" />
            <stop offset="85%" stop-color="rgba(238, 0, 238, 0.81)" />
        </linearGradient>
    </defs>
    <title id="titleId">Anurag Hazra's GitHub Stats, Rank: S</title>
    <desc id="descId">Total Stars Earned: 54210, Total Commits in 2023 : 54210, Total PRs: 585, Total Issues: 134,
        Contributed to (last year): 7</desc>
    <style>
        .bg_gradient {
            fill: linear-gradient(to right, red, yellow);
        }

        .header {
            font: 500 115px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #ffffff;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            text-align: center;
        }

        .tagline {
            font: 200 80px Cambria, Ubuntu, Sans-Serif;
            fill: #ffffff;
            font-style: italic;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            text-align: center;
        }

        .twitter {
            font: 200 40px Cambria, Ubuntu, Sans-Serif;
            fill: #ffffff;
            font-style: italic;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            text-align: center;
        }

        .text_center {
            text-anchor: middle;
            dominant-baseline: middle;
            transform: translate(50%, 50%);
        }
    </style>

    <rect x="-5" y="0" width="1980" height="1080" fill="url(#myGradient)" class="bg_gradient" />
    <g data-testid="card-title" transform="translate(50%,50%)">
        <g transform="translate(0)" class="text_center">
            <text class="header" data-testid="header">${title}</text>
        </g>
    </g>
    <g data-testid="card-tag" transform="translate(25,35)">
        <g transform="translate(0)" class="text_center">
            <text x="-27.5" y="65" class="tagline" data-testid="tagline">${bio}</text>
        </g>
    </g>
    <g data-testid="card-twitter" transform="translate(50%,50%)" class="text_center">
        <g transform="translate(0)">
            <text x="-25" y="172.5" class="twitter" data-testid="twitter">@${twitter}</text>
        </g>
    </g>
</svg>
        `
    )
}