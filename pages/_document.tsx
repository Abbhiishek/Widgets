import Document, { Head, Html, Main, NextScript } from 'next/document';



class MyDocument extends Document {
    render() {
        return (
            <Html style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    {/* metadata locale */}
                    <meta property="og:locale" content="en_US" />
                    <meta property="twitter:locale" content="en_US" />

                    {/* metadat title */}
                    <meta property="og:title" content="Widgets" />
                    <meta property="twitter:title" content="Widgets" />

                    {/* metadat url */}
                    <meta property="og:url" content="https://wiidgets.vercel.app/" />
                    <meta property="twitter:url" content="https://wiidgets.vercel.app/" />

                    {/* metadat image */}
                    <meta
                        property="og:image"
                        content="https://widgets.abbhiishek.repl.co/api/banner?title=Widgets&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets"
                    ></meta>
                    <meta
                        property="twitter:image"
                        content="https://widgets.abbhiishek.repl.co/api/banner?title=Widgets&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets"
                    ></meta>

                    {/* metadat type */}
                    <meta property="og:type" content="website" />
                    <meta property="twitter:type" content="website" />

                    {/* metadat site name */}
                    <meta property="og:site_name" content="Widgets" />
                    <meta property="twitter:site_name" content="Widgets" />

                    {/* metadat twitter card */}
                    <meta property="twitter:card" content="summary_large_image" />

                    {/* Description meatadata */}
                    <meta
                        name="description"
                        content="Only Api endpoint you need for GitHub widgets"
                    />
                    <meta
                        property="og:description"
                        content="Only Api endpoint you need for GitHub widgets"
                    />
                    <meta
                        property="twitter:description"
                        content="Only Api endpoint you need for GitHub widgets"
                    />

                    {/* metadata twitter */}
                    <meta name="twitter:creator" content="@abbhishekstwt" />
                    <meta name="twitter:site" content="@abbhishekstwt" />
                    <meta property="twitter:site:id" content="@abbhishekstwt"></meta>

                    {/* metadata robots */}
                    <meta name="robots" content="index, follow" />

                    {/* metadata keywords */}
                    <meta
                        property="og:keywords"
                        content="pubarun photography portfolio, pubarun photographer, pubarun photography portfolio, professional photography portfolio, first Indian photographer to be featured on Forbes 30 under 30, Forbes 30 under 30, Forbes 30 under 30 photographer, Forbes 30 under 30 2022, award-winning photography, documentary photography, photojournalism, street photography, portrait photography, lifestyle photography, travel photography, conceptual photography, monochrome photography, people and culture photography, society photography, interconnectedness of man and nature photography, human history photography, traditions and rituals photography, tribal communities photography, coexistence photography, conservation photography, environmental photography, spirituality photography, sustainability photography, mindfulness photography, inclusion photography, leadership photography, education photography, human experience photography, renowned professional photographer, documentary photography portfolio, photojournalism portfolio, street photography portfolio, portrait photography portfolio, lifestyle photography portfolio, travel photography portfolio, conceptual photography portfolio, monochrome photography portfolio, people and culture photography portfolio, society photography portfolio, interconnectedness of man and nature photography portfolio, human history photography portfolio, traditions and rituals photography portfolio, tribal communities photography portfolio, coexistence photography portfolio, conservation photography portfolio, environmental photography portfolio, spirituality photography portfolio, sustainability photography portfolio, mindfulness photography portfolio, inclusion photography portfolio, leadership photography portfolio, education photography portfolio, human experience photography portfolio, "
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;