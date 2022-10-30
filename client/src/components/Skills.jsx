import React from "react";
import Grid from '@mui/material/Grid';

function Skills() {
    return (
        <div id='skill-section'>
            <Grid container spacing={2} columns={{ xs: 12, md: 15, lg: 15 }}>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-html5-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-css3-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-javascript-plain"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-jquery-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-react-original-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-mysql-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-postgresql-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-mongodb-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-nodejs-plain-wordmark"></i>
                </Grid>
                <Grid className='skill-icon' item xs={6} md={3} lg={3}>
                    <i className="devicon-git-plain-wordmark"></i>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills