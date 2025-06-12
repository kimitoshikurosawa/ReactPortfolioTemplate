import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function Home() {
   const location = useLocation();
   const websiteUrl = "https://kimana.dev";
   const currentPageUrl = `${websiteUrl}${location.pathname}`;
   const imageUrl = `${websiteUrl}${info.selfPortrait}`;
   const pageTitle = `${info.firstName} ${info.lastName} - Portfolio Home`;
   const pageDescription = `Welcome to the portfolio of ${info.firstName} ${info.lastName}, ${info.position}.`;

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
         <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
              justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={`Image of ${info.firstName} ${info.lastName}, ${info.position}`} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
      </>
   )
}