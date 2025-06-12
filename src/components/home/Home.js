import React from 'react';
import { Helmet } from 'react-helmet-async';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Helmet>
            <title>Kimana Misago | Full-Stack Developer Portfolio</title>
            <meta name="description" content="Welcome to the portfolio of Kimana Misago, a passionate full-stack developer specializing in React, Node.js, and modern web technologies. Explore my projects and skills." />
            <meta name="keywords" content="Kimana Misago, portfolio, full-stack developer, react developer, node.js developer, web developer, javascript developer, software engineer" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "Kimana Misago",
                "url": "https://kimana.dev", // Placeholder
                "jobTitle": "Full-Stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Kimana Misago Portfolio"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/kimana-misago/", // Placeholder
                  "https://github.com/KimanaMisago" // Placeholder
                ],
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://kimana.dev" // Placeholder
                }
              })}
            </script>
         </Helmet>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
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
   )
}