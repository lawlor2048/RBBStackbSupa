import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Support from './pages/Support';
import ConnectivitySolutions from './pages/ConnectivitySolutions';
import WhyUs from './pages/WhyUs';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import GetConnected from './pages/GetConnected';
import ResidentialBroadband from './pages/solutions/ResidentialBroadband';
import BusinessBroadband from './pages/solutions/BusinessBroadband';
import VoIPSolutions from './pages/solutions/VoIPSolutions';
import ManagedServices from './pages/solutions/ManagedServices';
import LoRaWANSolutions from './pages/solutions/LoRaWANSolutions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="connectivity-solutions" element={<ConnectivitySolutions />} />
          <Route path="solutions">
            <Route path="residential" element={<ResidentialBroadband />} />
            <Route path="business" element={<BusinessBroadband />} />
            <Route path="voip" element={<VoIPSolutions />} />
            <Route path="managed-services" element={<ManagedServices />} />
            <Route path="lorawan" element={<LoRaWANSolutions />} />
          </Route>
          <Route path="why-us" element={<WhyUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="blog" element={<Blog />} />
          <Route path="get-connected" element={<GetConnected />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
    </Router>
  );
}