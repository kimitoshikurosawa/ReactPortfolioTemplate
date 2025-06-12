import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    const location = useLocation();
    const websiteUrl = "https://kimana.dev";
    const currentPageUrl = `${websiteUrl}${location.pathname}`;
    const imageUrl = `${websiteUrl}${info.selfPortrait}`;
    const pageTitle = `${info.firstName} ${info.lastName} - Projects Portfolio`;
    const pageDescription = `Explore the project portfolio of ${info.firstName} ${info.lastName}, showcasing work in various technologies.`;

    const twitterSocial = info.socials.find(s => s.label === 'twitter');
    let twitterUsername = null;
    if (twitterSocial) {
       const parts = twitterSocial.link.split('/');
       twitterUsername = `@${parts[parts.length - 1]}`;
    }

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

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
            <Box>
                <Grid container display={'flex'} justifyContent={'center'}>
                    {info.portfolio.map((project, index) => ( // Added imageAlt to pass to PortfolioBlock
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} imageAlt={project.imageAlt} />
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};