import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Testimonial from '../Testimonial/Testimonial';

const clients = [
    {
        id: 1,
        name: 'John Herry',
        address: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui delectus fugiat? Repellat sequi dignissimos, necessitatibus deleniti autem vitae, harum atque minima qui natus perferendis eligendi beatae magnam voluptates aliquid ut est nesciunt ipsum molestiae. Dolores vitae quis incidunt assumenda.',
        img: people1
    },
    {
        id: 2,
        name: 'Winson Herry',
        address: 'New York',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui delectus fugiat? Repellat sequi dignissimos, necessitatibus deleniti autem vitae, harum atque minima qui natus perferendis eligendi beatae magnam voluptates aliquid ut est nesciunt ipsum molestiae. Dolores vitae quis incidunt assumenda.',
        img: people2
    },
    {
        id: 3,
        name: 'Herry San',
        address: 'London',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui delectus fugiat? Repellat sequi dignissimos, necessitatibus deleniti autem vitae, harum atque minima qui natus perferendis eligendi beatae magnam voluptates aliquid ut est nesciunt ipsum molestiae. Dolores vitae quis incidunt assumenda.',
        img: people3
    }
]

const Testimonials = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Container>
                <Typography variant="h5" sx={{ textAlign: "left", color: "#17D2B8" }}>TESTIMONIAL</Typography>
                <Typography variant="h4" sx={{ textAlign: "left", fontWeight: 600, mt: 2 }}>
                    What's Our Patients Says
                </Typography>
                <Grid container style={{ marginTop: 20 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        clients.map(client => <Testimonial
                            key={client.id}
                            client={client}
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;