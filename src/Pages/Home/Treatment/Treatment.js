import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Treatment = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 10 }}>
            <Grid container spacing={2} sx={{textAlign: "left"}}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "80%" }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{width: "80%"}}>
                        <Typography variant="h4" sx={{fontWeight: 600}}>
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: 400, color: "gray", my: 5 }}>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus provident sapiente illo autem maiores labore et incidunt quas sint accusantium, cupiditate, deserunt tempore. Eveniet quos nemo dolor at tempora, placeat, iusto laboriosam aliquam vero hic ex explicabo velit maxime fuga assumenda pariatur quam voluptate nobis. Vitae dolor placeat exercitationem officiis id ut reiciendis, blanditiis, optio natus numquam, distinctio incidunt.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#17D2B8" }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;