"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function Privacy() {

    return (
        <Container
        id="pricing"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box component="section" sx={{ p: 2 }}>
            <Stack direction="row" spacing={2}>
                {/* <Box sx={
                    {
                        position: 'sticky',
                        top: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        width: '20%',
                    }
                }>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        border="0px solid black"
                        aria-label="text alignment"
                        orientation="vertical"
                    >
                        <ToggleButton value="p1" aria-label="left aligned">
                            <Typography variant="subtitle1" component="h2">
                                Privacy Policy
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p2" aria-label="centered">
                            <Typography variant="subtitle1" component="h2">
                                Information We Do Not Collect
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p3" aria-label="right aligned">
                            <Typography variant="subtitle1" component="h2">
                                Information We Collect
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p4" aria-label="justified" >
                            <Typography variant="subtitle1" component="h2">
                                How we use your information
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p5" aria-label="justified" >
                            <Typography variant="subtitle1" component="h2">
                                Information Security
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p6" aria-label="justified" >
                            <Typography variant="subtitle1" component="h2">
                                Data retention
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p7" aria-label="justified" >
                            <Typography variant="subtitle1" component="h2">
                                Marketing and advertising
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p8" aria-label="justified" >
                            <Typography variant="subtitle1" component="h2">
                                Changes to the Privacy Policy
                            </Typography>
                        </ToggleButton>
                        <ToggleButton value="p9" aria-label="justified">
                            <Typography variant="subtitle1" component="h2">
                                Contact Us
                            </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box> */}
                <Box>
                    {/* <Typography variant="h1" gutterBottom>
                        Privacy Policy
                    </Typography> */}
                    <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                        Last Updated: June 29, 2023
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Welcome to the Privacy Policy for the chat.sire-ai.co Chrome extension (hereinafter referred to as "SireAI", "chat.sire-ai.co", "we", "us", or "our"). We understand the importance of your privacy, and we are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your data.

                        By using the SireAI Chrome extension, you acknowledge and agree to the terms and conditions of this Privacy Policy. If you do not agree with any part of this Privacy Policy, please do not use or install the SireAI Chrome extension.
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Information We Do Not Collect
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Personal Information

                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        We take your privacy seriously and only collect your email and name to identify you when you log in, helping to sync your settings across different browsers and devices. Other than that, we do not collect any other personal information. The SireAI Chrome extension operates without requiring any additional personal data from you, and we do not store such information.
                    </Typography>
                 
                 
                </Box>
            </Stack>
        </Box>
    </Container>
    )
}