import {Helmet} from "react-helmet";
import React from "react";

export const Seo = () => {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>rasovica</title>
            <link rel="canonical" href="https://rasovica.com"/>
            <meta property="og:title" content="Rasovica | Raslav Milutinovic | fullstack developer"/>
            <meta property="og:description" content="I am a fullstack jack of all trades developer with many years of expirience with programing"/>
            <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>
            <meta property="og:url" content="https://rasovica.com"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:site_name" content="Rasovica | Raslav Milutinovic | fullstack developer"/>
            <meta name="twitter:image:alt" content="Rasovica | Raslav Milutinovic | fullstack developer"/>
            <meta property="fb:app_id" content="your_app_id"/>
            <meta name="twitter:site" content="@rasovica"/>
        </Helmet>
    )
};