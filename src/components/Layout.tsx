import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ServiceTypeSwitch from './ServiceTypeSwitch';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ServiceTypeSwitch />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}