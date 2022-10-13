import React from 'react';
import VolunteeringBlock from "./VolunteeringBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Volunteering() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.volunteering.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <VolunteeringBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};