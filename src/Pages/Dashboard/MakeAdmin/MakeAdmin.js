import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };
    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { email };
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
    };
    return (
        <div>
            <h2>Make admin component</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "50%" }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin made Successfully.</Alert>}
        </div>
    );
};

export default MakeAdmin;