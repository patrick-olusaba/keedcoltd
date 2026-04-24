export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  outcome: string; // measurable result
}

export const CATEGORIES = ['All', 'Managed IT', 'Cybersecurity', 'Custom Software', 'CCTV & Electrical', 'IT Consultancy'];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Full IT Infrastructure Overhaul',
    client: 'Kerry Group Kenya',
    category: 'Managed IT',
    description: 'Migrated 80+ workstations to a centralised managed IT environment with 24/7 monitoring, reducing downtime by 70%.',
    image: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=800&q=80',
    tags: ['Network', 'Monitoring', 'Migration'],
    outcome: '70% less downtime',
  },
  {
    id: 2,
    title: 'Enterprise CCTV Deployment',
    client: 'Mega Consolidated',
    category: 'CCTV & Electrical',
    description: 'Designed and installed a 64-camera IP CCTV system across a 3-floor office complex with remote viewing capability.',
    image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&q=80',
    tags: ['CCTV', 'IP Cameras', 'Access Control'],
    outcome: '64 cameras deployed',
  },
  {
    id: 3,
    title: 'Inventory Management System',
    client: 'Karel Foods',
    category: 'Custom Software',
    description: 'Built a real-time inventory and stock management platform integrated with their existing POS system.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Web App', 'POS Integration', 'React'],
    outcome: '3× faster stock audits',
  },
  {
    id: 4,
    title: 'Cybersecurity Audit & Hardening',
    client: 'Grant Thornton',
    category: 'Cybersecurity',
    description: 'Conducted a full network vulnerability audit and implemented endpoint protection across 120 devices.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80',
    tags: ['Audit', 'Endpoint', 'Firewall'],
    outcome: '120 devices secured',
  },
  {
    id: 5,
    title: 'IT Roadmap & Cloud Strategy',
    client: 'Chariot Group',
    category: 'IT Consultancy',
    description: 'Delivered a 3-year IT roadmap and cloud migration strategy that reduced infrastructure costs by 40%.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    tags: ['Strategy', 'Cloud', 'Roadmap'],
    outcome: '40% cost reduction',
  },
  {
    id: 6,
    title: 'Hotel Network & POS Setup',
    client: 'Pacific Investments',
    category: 'Managed IT',
    description: 'Deployed structured cabling, Wi-Fi access points, and a full hotel POS system with ongoing managed IT support.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['POS', 'Networking', 'Wi-Fi'],
    outcome: 'Live in 4 days',
  },
  {
    id: 7,
    title: 'Custom CRM Platform',
    client: 'Confidential Client',
    category: 'Custom Software',
    description: 'Developed a bespoke CRM system for a financial services firm to manage client relationships and compliance reporting.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    tags: ['CRM', 'Finance', 'Compliance'],
    outcome: '100% audit-ready',
  },
  {
    id: 8,
    title: 'Office Electrical & Access Control',
    client: 'Médecins Sans Frontières',
    category: 'CCTV & Electrical',
    description: 'Full electrical fit-out and biometric access control installation for a new 5-floor office building in Nairobi.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    tags: ['Electrical', 'Biometrics', 'Access Control'],
    outcome: '5 floors secured',
  },
  {
    id: 9,
    title: 'Ransomware Recovery & Prevention',
    client: 'Confidential Client',
    category: 'Cybersecurity',
    description: 'Responded to a ransomware incident, recovered all data from backups, and implemented a full prevention stack.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
    tags: ['Recovery', 'Ransomware', 'Backup'],
    outcome: '100% data recovered',
  },
];

