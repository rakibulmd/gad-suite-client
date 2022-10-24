import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleIcon from "@mui/icons-material/Google";
import { Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Loading from "../Loading/Loading";
import { Box } from "@mui/system";

const Login = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [signInWithGoogle, googleUser, loading, error] =
        useSignInWithGoogle(auth);

    useEffect(() => {
        if (googleUser) {
            const getToken = async () => {
                const response = await axios.get(
                    `http://localhost:5000/api/v1/login/getToken/${googleUser.user.email}`
                );
                if (response.data.success) {
                    console.log(response.data);
                    localStorage.setItem("accessToken", response?.data.data);
                    navigate("/home");
                }
            };
            getToken();
        }
    }, [googleUser, navigate]);
    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user, navigate]);
    // if (loading) {
    //     return <Loading></Loading>;
    // }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={12}>
                <Box>
                    <LoadingButton
                        onClick={() => signInWithGoogle()}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<GoogleIcon />}
                        variant="contained"
                        size="large"
                        sx={{ px: "50px" }}
                    >
                        Log In
                    </LoadingButton>
                </Box>
                {/* <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Login to continue to
                </Typography> */}
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    sx={{
                        mt: "20px",
                        fontFamily: "roboto",
                        fontWeight: 700,
                        letterSpacing: "1rem",
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    GAD SUITE
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Login;
