import React from 'react';
import { Helmet } from 'react-helmet-async';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Helmet>
                <title>Kimana Misago's Projects | Developer Portfolio</title>
                <meta name="description" content="Explore a selection of projects by Kimana Misago, showcasing skills in web development, application design, and problem-solving. See examples of work in React, Node.js, and other technologies." />
                <meta name="keywords" content="Kimana Misago projects, Kimana Misago portfolio, web development projects, software projects, React projects, Node.js projects, full-stack projects" />
            </Helmet>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};