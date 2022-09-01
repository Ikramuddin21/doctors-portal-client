import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Treatment />
            <AppointmentBanner />
            <Testimonials />
            <Doctors />
            <Contact />
        </div>
    );
};

export default Home;