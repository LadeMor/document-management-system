import { Box, Button, Paper, TextField, Typography, Link } from "@mui/material";
import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';

const Login = () => {
    return(
        <>
            <Box
                sx={{
                    height: '100vh',
                    background: 'linear-gradient(113deg, rgba(105,241,170,1) 0%, rgba(11,201,185,1) 35%, rgba(0,212,255,1) 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow:"hidden"
                }}
                >
                <Paper elevation={3} sx={{p:"15px", zIndex:1, borderRadius:"15px"}}>

                    <Box sx={{
                        width: "600px",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center"
                }}>
                        <DescriptionIcon fontSize="large"/>
                        <Typography variant="h5" gutterBottom>
                            Enter your account
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"20px"
                    }}>
                        <TextField fullWidth={true} type="email" required id="outlined-basic" label="Email" variant="outlined"/>
                        <TextField fullWidth={true} type="password" required id="outlined-basic" label="Password" variant="outlined"/>
                        <Button variant="contained" size="large">Login</Button>
                       
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default Login;