import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const location = useLocation();
    const firstName = info.firstName.toLowerCase();
    const pageTitle = `About ${info.firstName} ${info.lastName} - Portfolio`;
    const pageDescription = info.bio.split('. ').slice(0, 2).join('. ') + '.'; // Already defined as metaDescription

    const websiteUrl = "https://kimana.dev"; // From CNAME
    const currentPageUrl = `${websiteUrl}${location.pathname}`;
    const imageUrl = `${websiteUrl}${info.selfPortrait}`;

    const twitterSocial = info.socials.find(s => s.label === 'twitter');
    let twitterUsername = null;
    if (twitterSocial) {
       const parts = twitterSocial.link.split('/');
       twitterUsername = `@${parts[parts.length - 1]}`;
    }

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    // const websiteUrl = "https://kimana.dev"; // Already defined above
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": `${info.firstName} ${info.lastName}`,
        "url": `${websiteUrl}/about`,
        // Assuming selfPortrait is '/img/self.png' and will be served from root
        // Adjust if build process places it elsewhere (e.g. /static/media/self.png)
        "image": `${websiteUrl}${info.selfPortrait}`,
        "jobTitle": info.position,
        "email": info.miniBio.find(bio => bio.emoji === '📧')?.text,
        "address": {
            "@type": "PostalAddress",
            // Extracting from miniBio, this is a simplification.
            // Ideally, address components would be separate fields in Info.js
            "addressLocality": info.miniBio.find(bio => bio.emoji === '🌍')?.text.replace('based in ', ''),
        },
        "sameAs": info.socials.map(social => social.link)
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <script type="application/ld+json">
                    {JSON.stringify(personSchema)}
                </script>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentPageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:site_name" content={`${info.firstName} ${info.lastName} Portfolio`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentPageUrl} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                {twitterUsername && <meta name="twitter:site" content={twitterUsername} />}
                {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            </Helmet>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
                <Terminal text={aboutMeText()}/>
                <Terminal text={skillsText()}/>
                <Terminal text={miscText()}/>
            </Box>
        </>
    )
}