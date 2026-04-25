import { Stat, Testimonial, Industry, Client, Service } from '../types';

export const STATS: Stat[] = [
  { value: '10+', label: 'years delivering engineering solutions across Kenya' },
  { value: '3',   label: 'core disciplines: Electrical, ICT & Security' },
  { value: '100+', label: 'projects completed for businesses & institutions' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Being back with Keedco just gives me peace of mind knowing that my technology is functioning seamlessly behind the scenes without it interfering with and disrupting our day-to-day operations.',
    author: 'Jeffrey',
    role: 'Director, Nairobi',
  },
  {
    quote: 'Very late in the day, I received a request from our director to obtain a quote for laptops. We needed them by noon the next day. But Keedco team was able to get those to us first thing in the morning.',
    author: 'Richard',
    role: 'Procurement Officer',
  },
];

export const INDUSTRIES: Industry[] = [
  { icon: '🏨', name: 'Hospitality',          description: 'Resorts, hotels, inns, and motels use managed IT services to provide better services to their customers.' },
  { icon: '🏥', name: 'Healthcare',            description: 'Hospitals and doctor offices of every type take advantage of managed IT services for their HIPAA privacy* needs.' },
  { icon: '🏭', name: 'Manufacturing',         description: 'Factories, manufacturers, distributors and other warehouse facilities enjoy managed IT services to improve production.' },
  { icon: '🏛️', name: 'Govt & public sector',  description: 'Departments, parastatals, and other various government affiliates use managed IT services to enhance their security policies.' },
  { icon: '🛒', name: 'Retail & wholesale',    description: 'Retail outlets and franchises enjoy managed IT services to optimize their day-to-day operations.' },
  { icon: '🏦', name: 'Banking & finance',     description: 'Bank branches and financial advisors enjoy managed IT services for their end-to-end security and PCI compliance*' },
  { icon: '🎓', name: 'Education',             description: 'Public and private schools, campus departments, and other various education offices use managed IT services to improve upon inter-communication.' },
  { icon: '🔬', name: 'Science & tech',        description: 'Laboratories, tech firms, and researchers enjoy managed IT services to improve collaboration between teams.' },
];

export const SERVICES: Service[] = [
  { icon: '⚡', name: 'Electrical Infrastructure',  description: 'Professional electrical installation, power distribution, modern lighting, and backup power integration (UPS & generators) for commercial and residential projects.', href: 'electrical-cctv' },
  { icon: '🌐', name: 'ICT Network Infrastructure', description: 'Structured cabling (Cat6/Fiber), enterprise WiFi, server rack installation, router & switch configuration, and fiber optic splicing for reliable connectivity.',       href: 'managed-it' },
  { icon: '🔒', name: 'Security Systems',            description: 'CCTV surveillance, access control systems, and remote monitoring solutions to protect your facilities and give you peace of mind.',                                        href: 'electrical-cctv' },
  { icon: '📡', name: 'Connectivity Solutions',      description: 'Long-range wireless bridge networks, internet distribution for estates and apartments, and farm/rural connectivity solutions for wide-area coverage.',                    href: 'managed-it' },
  { icon: '🛠️', name: 'Installation & Commissioning', description: 'End-to-end project delivery: site assessment, system design, professional installation, testing & commissioning, and ongoing support & maintenance.',                  href: 'managed-it' },
  { icon: '🏢', name: 'Corporate & Industrial',      description: 'Tailored infrastructure for offices, warehouses, residential developments, farms, and large properties — built to national NCA, EPRA, and CA standards.',               href: 'electrical-cctv' },
];

export const CLIENTS: Client[] = [
  { name: 'Grant Thornton',     logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/grant_thornton_logo_2020.webp' },
  { name: 'Kerry Group',        logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/Kerry-Logo-1.png' },
  { name: 'Karel Foods',        logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/Karel_CMYK_200x200-e1673877171989.png' },
  { name: 'Chariot Group',      logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/chariot-group-logo.png' },
  { name: 'Mega Consolidated',  logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/logomega.png' },
  { name: 'Pacific Investments', logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/394-167.png' },
  { name: 'Client',             logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/download.png' },
  { name: 'Client',             logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/download.jpeg' },
  { name: 'Client',             logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/logo-02.png' },
  { name: 'Client',             logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/M-LOGO.png' },
  { name: 'Client',             logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/transp-logo-2-e1684315113640.png' },
  { name: 'Client',             logo: 'https://keedcoltd.com/wp-content/uploads/2023/06/YCYkU4ZrtzEwQiKQi34Gi5nFHcW1638869916541_200x200.png' },
];
