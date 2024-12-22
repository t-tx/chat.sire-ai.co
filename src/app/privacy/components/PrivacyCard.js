"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import CardContent from '@mui/material/CardContent';
import { red,blue, green, yellow } from '@mui/material/colors';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
export default function PrivacyCard() {

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
            <Stack direction="row" spacing={3}
                  useFlexGap
                  sx={{ flexWrap: 'wrap' }}
            >
                <Card sx={{ maxWidth: 350, margin: 'auto', mt: 5, backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <CardContent>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                            <LockClockOutlinedIcon fontSize="large" sx={{ color: green[500] }} />
                        </Box>
                        <Typography variant="h5" align="center" gutterBottom>
                            We only know what's necessary
                        </Typography>
                        <Typography variant="body2" align="center" color="text.secondary">
                            We don't collect a dossier on you. The extent of our knowledge is your email and name—just enough to recognize you across devices and sync your settings. Beyond that, your personal life remains just that: personal.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 350, margin: 'auto', mt: 5, backgroundColor: 'transparent', boxShadow: 'none' }}>                    <CardContent>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                        <VisibilityOffOutlinedIcon fontSize="large" sx={{ color: red[400] }} />
                    </Box>
                    <Typography variant="h5" align="center" gutterBottom>
                        We Don't See Your Browsing/Chatting Data
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                        Your browsing and chatting habits are your own. The SireAI Chrome extension operates without intruding into your personal activities online. We collect no information on the sites you visit or the content you engage with. Our focus is solely on improving your experience without compromising your privacy.                        </Typography>
                </CardContent>
                </Card>
                <Card sx={{ maxWidth: 350, margin: 'auto', mt: 5, backgroundColor: 'transparent', boxShadow: 'none' }}>                    <CardContent>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                        <MoneyOffOutlinedIcon fontSize="large" sx={{ color: yellow[400] }} />
                    </Box>
                    <Typography variant="h5" align="center" gutterBottom>
                        We Don't Monetize Your Trust
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                        We believe in earning and keeping your trust, not selling it. Your data isn't a commodity to us. Therefore, we don't sell any information to third parties. Our business model revolves around providing a superior product, not leveraging user data for profit.
                    </Typography>
                </CardContent>
                </Card>
                <Card sx={{ maxWidth: 350, margin: 'auto', mt: 5, backgroundColor: 'transparent', boxShadow: 'none' }}>                    <CardContent>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                        <PrivacyTipOutlinedIcon fontSize="large" sx={{ color: blue[400] }} />
                    </Box>
                    <Typography variant="h5" align="center" gutterBottom>
                        We Respects You and Your Digital Boundaries
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                    We're in the business of innovation, not information selling. Your digital journey should be yours to control, and with SireAI, we ensure it stays that way.
                    </Typography>
                </CardContent>
                </Card>
               
            </Stack>
        </Container>
    )
}

