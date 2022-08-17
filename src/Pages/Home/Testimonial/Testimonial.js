import { Avatar, Box, CardHeader, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Testimonial = ({ client }) => {
    const { name, address, description, img } = client;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, p: 1}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {description}
                    </Typography>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", mt: 6}}>
                        <img style={{width: 60}} src={img} alt="" />
                        <Box sx={{ml: 2}}>
                            <Typography variant="h6" sx={{fontSize: 15, fontWeight: 600, color: "#17D2B8"}}>{name}</Typography>
                            <Typography variant="h6" sx={{fontSize: 15, fontWeight: 600}}>{address}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Testimonial;