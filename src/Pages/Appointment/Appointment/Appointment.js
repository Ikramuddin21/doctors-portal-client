import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointmen from '../AvailableAppointmen/AvailableAppointmen';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation />
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointmen date={date} />
        </div>
    );
};

export default Appointment;