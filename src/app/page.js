"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from '@/app/privacy/components/AppAppBar';
import Hero from '@/app/privacy/components/Hero';
import FAQ from '@/app/privacy/components/FAQ';
import Footer from '@/app/privacy/components/Footer';
import AppTheme from '@/app/shared-theme/AppTheme';
import Privacy from '@/app/privacy/components/Privacy';
import PrivacyCard from '@/app/privacy/components/PrivacyCard';
export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        {/* <LogoCollection /> */}
        <Divider />
        {/* <Privacy/>         */}
        <Divider />
        {/* <Divider />       
        // <Highlights />

        
        <Divider />
        <Testimonials /> */}
        {/* <Divider />
        <Pricing /> */}
        <Divider />
        {/* <PrivacyCard /> */}
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
