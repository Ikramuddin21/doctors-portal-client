import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();

        loginUser(loginData.email, loginData.password, location, navigate);
    };

    // handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {isLoading ? <CircularProgress /> : <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard"
                        />
                        <Button sx={{ width: "75%", m: 4 }} variant="contained" type="submit">Login</Button>
                        <Link style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </Link>
                    </form>}
                    <p>-----------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Signin</Button>
                    {user.email && <Alert severity="success">User Login Successfully.</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;