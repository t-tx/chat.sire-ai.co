"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AppTheme from '../shared-theme/AppTheme';
import Privacy from './components/Privacy';
import PrivacyCard from './components/PrivacyCard';
export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        {/* <LogoCollection /> */}
        <Divider />
        <Privacy/>

        
        <Divider />
        {/* <Divider />       
        <Highlights />

        
        <Divider />
        <Testimonials /> */}
        {/* <Divider />
        <Pricing /> */}
        <Divider />
        <PrivacyCard />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
