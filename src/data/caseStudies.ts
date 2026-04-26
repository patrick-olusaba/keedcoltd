export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  category: string;
  headline: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: { value: string; label: string }[];
  images: string[]; // first is hero
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'enterprise-cctv-deployment',
    client: 'Mega Consolidated',
    sector: 'Commercial',
    category: 'CCTV & Security',
    headline: '64-Camera IP CCTV Across a 3-Floor Office Complex',
    challenge:
      'Mega Consolidated had an ageing analogue CCTV system with blind spots across three floors and no remote viewing capability. Security incidents were going unrecorded.',
    solution:
      'KeedCo designed and installed a full IP CCTV system with 64 cameras, structured cable runs, a centralised NVR, and remote viewing via mobile app — all completed with zero business disruption.',
    outcome:
      'Full HD coverage of every entry point, corridor, and car park. Management can now monitor the premises live from anywhere in the world.',
    stats: [
      { value: '64', label: 'IP cameras installed' },
      { value: '3', label: 'floors covered' },
      { value: '0', label: 'days of downtime' },
    ],
    images: ['/cctv1.jpg', '/cctv2.jpg', '/cctv3.jpg', '/cctv4.jpg'],
  },
  {
    slug: 'server-infrastructure-overhaul',
    client: 'Kerry Group Kenya',
    sector: 'Manufacturing',
    category: 'ICT Infrastructure',
    headline: 'Full Server & Network Infrastructure for 80+ Workstations',
    challenge:
      "Kerry Group Kenya's Nairobi office was running on ageing servers with no centralised management, frequent outages, and no disaster recovery plan.",
    solution:
      'KeedCo designed and built a new server rack environment with structured cabling, enterprise switching, and a managed IT monitoring stack — migrating 80+ workstations with no data loss.',
    outcome:
      'Network uptime improved from ~85% to 99.6%. IT issues that previously took hours to resolve are now handled remotely within minutes.',
    stats: [
      { value: '80+', label: 'workstations migrated' },
      { value: '99.6%', label: 'network uptime' },
      { value: '70%', label: 'reduction in downtime' },
    ],
    images: ['/serverrack1.jpg', '/serverrack2.jpg', '/serverrack3.jpg', '/serverrack4.jpg', '/serverrack5.jpg'],
  },
  {
    slug: 'electrical-panel-fitout',
    client: 'Médecins Sans Frontières',
    sector: 'NGO / Healthcare',
    category: 'Electrical Infrastructure',
    headline: 'Full Electrical Fit-Out for a 5-Floor Nairobi Office',
    challenge:
      "MSF's new Nairobi office required a complete electrical installation from scratch — distribution boards, power circuits, lighting, and backup power — all to NCA and EPRA standards.",
    solution:
      'KeedCo handled the full electrical fit-out: main distribution panels, sub-distribution boards per floor, LED lighting, UPS integration, and generator changeover — delivered on schedule.',
    outcome:
      'All five floors energised and compliant. The building passed EPRA inspection on first submission with no remedial work required.',
    stats: [
      { value: '5', label: 'floors completed' },
      { value: '1st', label: 'EPRA inspection pass' },
      { value: '100%', label: 'NCA compliant' },
    ],
    images: ['/electricalpanel1.jpg', '/electricalpanel2.jpg', '/electricalpanel3.jpg', '/electricalpanel4.jpg', '/electricalpanel5.jpg'],
  },
  {
    slug: 'structured-cabling-network',
    client: 'Grant Thornton Kenya',
    sector: 'Professional Services',
    category: 'ICT Infrastructure',
    headline: 'Structured Cabling & Network Upgrade for 120-User Office',
    challenge:
      "Grant Thornton's Nairobi office had a patchwork of legacy cabling causing intermittent connectivity issues and making network troubleshooting extremely difficult.",
    solution:
      'KeedCo installed a full Cat6 structured cabling system with labelled patch panels, enterprise-grade switches, and a clean cable management system — all while the office remained operational.',
    outcome:
      'Zero connectivity complaints in the 6 months following installation. Network troubleshooting time reduced from hours to minutes.',
    stats: [
      { value: '120', label: 'users served' },
      { value: 'Cat6', label: 'structured cabling' },
      { value: '0', label: 'complaints post-install' },
    ],
    images: ['/cableruns1.jpg', '/cableruns2.jpg', '/cableruns3.jpg', '/cableruns4.jpg', '/cableruns5.jpg'],
  },
  {
    slug: 'biometric-access-control',
    client: 'Chariot Group',
    sector: 'Corporate',
    category: 'Access Control',
    headline: 'Biometric Access Control Across a Multi-Site Corporate Campus',
    challenge:
      'Chariot Group needed to replace key-based entry across multiple buildings with a unified, auditable access control system that could restrict zones by staff role.',
    solution:
      'KeedCo installed biometric fingerprint and card readers at all entry points, integrated with a centralised access management platform — giving HR and security full visibility of who accessed which area and when.',
    outcome:
      'Unauthorised access incidents dropped to zero. HR now runs automated attendance reports directly from the access control system.',
    stats: [
      { value: '0', label: 'unauthorised access incidents' },
      { value: '100%', label: 'audit trail coverage' },
      { value: 'Live', label: 'attendance reporting' },
    ],
    images: ['/accesscontrol1.jpg', '/accesscontrol2.jpg', '/accesscontrol3.jpg', '/accesscontrol4.jpg'],
  },
];
