import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  asLink?: boolean;
}

export default function Logo({ className = '', asLink = true }: LogoProps) {
  const LogoContent = (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Regional Broadband" 
        className="h-12"
        style={{ 
          width: 'auto',
          height: '48px',
          maxWidth: 'none',
          objectFit: 'contain',
          aspectRatio: '499.2/192'
        }}
      />
    </div>
  );

  if (asLink) {
    return <Link to="/" className="inline-block">{LogoContent}</Link>;
  }

  return LogoContent;
}