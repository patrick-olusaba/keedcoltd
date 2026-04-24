import { Stat, Testimonial, Industry, Client, Service } from '../types';

export const STATS: Stat[] = [
  { value: '8+',  label: 'years of dedicated service & support' },
  { value: '20+', label: 'dedicated team of IT experts' },
  { value: '60+', label: 'offices served across East Africa' },
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
  { icon: '🖥️', name: 'Managed IT services',  description: '24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running.',            href: 'managed-it' },
  { icon: '🛠️', name: 'IT Support',            description: 'We offer a comprehensive range of managed IT support packages for all sizes of business.',                    href: 'managed-it' },
  { icon: '☁️', name: 'Backup and recovery',   description: 'Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.',        href: 'backup-recovery' },
  { icon: '📊', name: 'IT Consultancy',         description: 'Our IT consulting team will provide you with the highest available technology advice that you need.',           href: 'it-consultancy' },
  { icon: '🔐', name: 'Cyber Security',         description: 'Protect your business from malware, hackers, viruses and the most common security threats.',                   href: 'cybersecurity' },
  { icon: '💻', name: 'Custom Software',        description: 'Explore our range of bespoke software development with a strong end-user focus.',                              href: 'custom-software' },
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
