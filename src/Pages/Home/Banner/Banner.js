import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, fontWeight: 300, color: "gray" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum beatae debitis cum veniam natus doloremque, itaque numquam reprehenderit maiores at.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#17D2B8" }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: "400px" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;