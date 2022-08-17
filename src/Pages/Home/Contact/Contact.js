import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import bg from '../../../images/appointment-bg.png';
import React from 'react';

const Contact = () => {

    const contactBgStyle = {
        background: `url(${bg})`,
        backgroundColor: "rgba(45, 58, 74, 0.9)",
        backgroundBlendMode: "darken, luminosity",
        height: 550
    };

    return (
        <Box sx={{ flexGrow: 1, pt: 8, pb: 2 }} style={contactBgStyle}>
            <Container>
                <Typography variant="h6" sx={{ color: "#17D2B8" }}>CONTACT US</Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, mt: 2, color: "white" }}>
                    Always Connect With us
                </Typography>
                <Box sx={{mt: 7, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField sx={{my: 2, backgroundColor: "white", width: "55%", borderRadius: 1}} fullWidth placeholder="Email Address*" id="fullWidth" />
                    <TextField sx={{my: 2, backgroundColor: "white", width: "55%", borderRadius: 1}} fullWidth placeholder="Subject*" id="fullWidth" />
                    <TextField sx={{my: 2, backgroundColor: "white", width: "55%", borderRadius: 1}} fullWidth multiline rows={4} placeholder="Your Message*" id="fullWidth" />
                    <Button type="submit" style={{backgroundColor: "#17D2B8", padding: "5px 30px"}} variant="contained">Submit</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;