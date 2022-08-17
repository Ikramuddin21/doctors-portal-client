import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {isLoading ? <CircularProgress /> :
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Retype Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard"
                            />
                            <Button sx={{ width: "75%", m: 4 }} variant="contained" type="submit">Register</Button>
                            <Link style={{ textDecoration: "none" }} to="/login">
                                <Button variant="text">Already Registerd? Please Login</Button>
                            </Link>
                        </form>}
                    {user.email && <Alert severity="success">User Created Successfully.</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;