import { Wifi, Network, Phone, Cloud, Radio } from 'lucide-react';
import type { ServiceType } from '../store/serviceTypeStore';

export const solutions = {
  residential: [
    {
      icon: Wifi,
      title: 'Residential Broadband',
      path: '/solutions/residential',
      description: 'High-speed internet for your home with unlimited data and reliable connection.',
      features: [
        'Speeds up to 1Gbps',
        'Unlimited data usage',
        'Free installation',
        'Wi-Fi router included'
      ]
    },
    {
      icon: Phone,
      title: 'VoIP Solutions',
      path: '/solutions/voip',
      description: 'Modern phone systems for clear communication and enhanced features.',
      features: [
        'HD voice quality',
        'Mobile integration',
        'Video conferencing',
        'Call analytics'
      ]
    }
  ],
  business: [
    {
      icon: Network,
      title: 'Business Broadband',
      path: '/solutions/business',
      description: 'Enterprise-grade connectivity solutions for businesses of all sizes.',
      features: [
        'Dedicated bandwidth',
        'Symmetrical speeds',
        'Premium SLA support',
        'Static IP addresses'
      ]
    },
    {
      icon: Radio,
      title: 'LoRaWAN IoT Solutions',
      path: '/solutions/lorawan',
      description: 'Enterprise-grade IoT connectivity solutions for smart cities, industry, and agriculture.',
      features: [
        'End-to-end IoT solutions',
        'Nationwide coverage',
        'Secure & scalable network',
        'Complete project management'
      ]
    },
    {
      icon: Phone,
      title: 'Business VoIP',
      path: '/solutions/voip',
      description: 'Enterprise phone systems with advanced features for business communication.',
      features: [
        'HD voice quality',
        'Team collaboration',
        'Video conferencing',
        'Advanced analytics'
      ]
    },
    {
      icon: Cloud,
      title: 'Managed Services',
      path: '/solutions/managed-services',
      description: 'Comprehensive IT solutions to keep your business running smoothly.',
      features: [
        'Network monitoring',
        'Security services',
        'Cloud solutions',
        '24/7 support'
      ]
    }
  ]
};