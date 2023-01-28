import '../styles/globals.css'


export default function Coffee({ slug }: any) {
    return (
        `<svg width="332" height="415" viewBox="0 0 332 415" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            text {
                font-family: 'Roboto', sans-serif;
                font-size: 24px;
                font-weight: 700;
                text-align: center;
            }
    
            .tagline {
                border-radius: 28px;
            }
    
            .text_center {
                text-anchor: middle;
                dominant-baseline: middle;
                transform: translate(50%, 50%);
            }
    
            .slug {
                /* Sans-Serif; */
                /* fill: #ffffff; */
                animation: fadeInAnimation 0.8s ease-in-out forwards;
                text-align: center;
            }
    
            .bg_gradient {
                fill: linear-gradient(to right, red, yellow);
            }
    
            .header {
                font: 500 10px 'Segoe UI', Ubuntu, Sans-Serif;
                fill: #000000;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
                text-align: center;
            }
    
            .tagline {
                font: 200 50px Cambria, Ubuntu, Sans-Serif;
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
    
            .footertext {
                font: 200 20px Cambria, Ubuntu, Sans-Serif;
                fill: #ffffff;
                font-style: italic;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
                text-align: center;
            }
        </style>
        <script>
            function redirect() {
        window.open("https://buymeacoffee.com/${slug}" , "_blank");
        }
        </script>
    <g onclick="redirect()">
        <rect x="1" y="-2" width="332" height="415" rx="23" fill="#fda700" onclick="redirect()" />
        <g>
        <image href="https://wiidgets.vercel.app/buymeacoffee.png" x="65" y="0" width="200" height="200" />
    </g>
    
        <text textLength="240.8" font-size="24" x="41" y="236.5" fill="#000000">
            Buy Me A Coffee
        </text>
        <g data-testid="card-title" transform="translate(50%,50%)">
            <rect transform="matrix(1.3,0,0,1.1,-48.4,-43.9)" x="66.6" y="287.5" rx="14" width="192" height="33"
                fill="rgb(255, 255, 255)" />
            <g transform="matrix(1.3,0,0,1.1,-33.7,-11.9)" class="text_center">
                <text transform="matrix(1.7,0,0,2.1,-56.7,-99.8)" x="31.8" y="88.1" class="header"
                    data-testid="header">${slug}</text>
            </g>
        </g>
        <g data-testid="card-title" transform="translate(50%,50%)">
            <rect transform="matrix(1.8,0,0,1,-214.2,0)" x="115.6" y="341.4" rx="2" width="192" height="33"
                fill="#000000" />
            <g transform="matrix(2.6,0,0,1.1,-230.1,-15)" class="text_center">
                <text transform="matrix(0.8,0,0,0.9,18.8,30.6)" x="-19.9" y="135.8" fill="rgb(255, 255, 255)"
                    class="footertext" data-testid="">Made with ❤️ by Widgets</text>
            </g>
        </g>
    </g>
    </svg>
        `
    )
}