import '../styles/globals.css'


export default function Banner({ title, bio, twitter, theme }: any) {
    return (
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500" fill="#000000" role="img" aria-labelledby="descId">
    <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="${theme?.gradient_color1 || "#2A1157"}" />
            <stop offset="95%" stop-color="${theme?.gradient_color2 || "#862263"}" />
        </linearGradient>
    </defs>
    <title id="titleId">${title}</title>
    <desc id="descId">${title + bio + twitter}</desc>
    <style>
        .bg_gradient {
            fill: linear-gradient(to right, red, yellow);
        }

        .header {
            font: 500 105px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: ${theme?.text_color || "#ffffff"};
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            text-align: center;
        }

        .tagline {
            font: 200 50px Cambria, Ubuntu, Sans-Serif;
            fill: ${theme?.text_color || "#ffffff"};
            font-style: italic;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
            text-align: center;
        }

        .twitter {
            font: 200 40px Cambria, Ubuntu, Sans-Serif;
            fill: ${theme?.text_color || "#ffffff"};
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

    <rect x="-5" y="0" width="1500" height="500" fill="url(#myGradient)" class="bg_gradient" />
    <g data-testid="card-title" transform="translate(50%,50%)">
        <g transform="translate(0)" class="text_center">
            <text x="-5" y="-40" class="header" data-testid="header">${title}</text>
        </g>
    </g>
    <g data-testid="card-tag" transform="translate(25,35)">
        <g transform="translate(0)" class="text_center">
            <text x="-37.5" y="11.7" class="tagline" data-testid="tagline">${bio}</text>
        </g>
    </g>
    <g data-testid="card-twitter" transform="translate(50%,50%)" class="text_center">
        <g transform="translate(0)">
            <text transform="matrix(0.9,0,0,0.9,10.1,11.4)" x="-39.1" y="103.9" class="twitter"
                data-testid="twitter">@${twitter}</text>
        </g>
    </g>
</svg>
        `
    )
}