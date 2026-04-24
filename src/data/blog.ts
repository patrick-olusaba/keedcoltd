export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  content: string; // HTML string
}

export const BLOG_CATEGORIES = ['All', 'Cybersecurity', 'Managed IT', 'Cloud', 'Business Tips'];

export const POSTS: BlogPost[] = [
  {
    slug: 'ransomware-protection-kenya',
    title: 'How to Protect Your Business from Ransomware in Kenya',
    category: 'Cybersecurity',
    date: 'April 18, 2026',
    author: 'KeedCo Team',
    excerpt: 'Ransomware attacks on Kenyan businesses have tripled in the last two years. Here\'s exactly what you need to do to stay protected.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80',
    content: `
      <p>Ransomware is no longer a problem reserved for large corporations. In 2025, over 60% of ransomware victims were small and medium-sized businesses — and Kenya is not immune.</p>
      <h2>What is Ransomware?</h2>
      <p>Ransomware is malicious software that encrypts your files and demands payment to restore access. A single attack can cost a business hundreds of thousands of shillings in downtime, recovery costs, and lost data.</p>
      <h2>The 5 Things You Must Do Today</h2>
      <h3>1. Keep All Software Updated</h3>
      <p>Most ransomware exploits known vulnerabilities in outdated software. Enable automatic updates on all devices — Windows, macOS, and mobile.</p>
      <h3>2. Train Your Staff</h3>
      <p>Over 90% of ransomware enters through phishing emails. Run regular training sessions so your team can spot suspicious emails before clicking.</p>
      <h3>3. Implement Offsite Backups</h3>
      <p>The 3-2-1 rule: 3 copies of your data, on 2 different media, with 1 stored offsite. If ransomware hits, you restore from backup — no ransom needed.</p>
      <h3>4. Use Multi-Factor Authentication</h3>
      <p>MFA stops attackers even if they have your password. Enable it on email, cloud storage, and any remote access tools.</p>
      <h3>5. Partner with a Managed IT Provider</h3>
      <p>A managed IT provider monitors your network 24/7 and can detect ransomware behaviour before it spreads. This is the single most effective protection available.</p>
      <h2>What to Do If You're Already Infected</h2>
      <p>Disconnect affected machines from the network immediately. Do not pay the ransom — it does not guarantee recovery. Contact your IT provider or call KeedCo on +254 715 119 984 for emergency response.</p>
    `,
  },
  {
    slug: 'managed-it-vs-inhouse',
    title: 'Managed IT vs In-House IT: Which is Right for Your Business?',
    category: 'Managed IT',
    date: 'April 10, 2026',
    author: 'KeedCo Team',
    excerpt: 'Hiring a full-time IT team costs over KES 2M per year. Managed IT gives you a whole team for a fraction of that. Here\'s how to decide.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
    content: `
      <p>One of the most common questions we hear from business owners is: "Should I hire an IT person or outsource to a managed IT company?" The answer depends on your size, budget, and risk tolerance.</p>
      <h2>The True Cost of In-House IT</h2>
      <p>A single mid-level IT engineer in Nairobi costs between KES 80,000–150,000 per month in salary alone. Add benefits, training, equipment, and sick leave cover — you're looking at KES 1.5M–2.5M per year for one person who can only cover one skill set.</p>
      <h2>What Managed IT Gives You</h2>
      <p>With a managed IT provider like KeedCo, you get an entire team — network engineers, security specialists, helpdesk staff, and a vCIO — for a predictable monthly fee that's typically 40–60% less than one full-time hire.</p>
      <h2>When In-House Makes Sense</h2>
      <p>If you have 200+ staff, complex proprietary systems, or regulatory requirements that demand on-site presence at all times, a hybrid model (in-house + co-managed IT) may be the right fit.</p>
      <h2>The Verdict for Most SMBs</h2>
      <p>For businesses with 10–150 staff, managed IT almost always wins on cost, coverage, and response time. You get 24/7 monitoring, faster response, and access to specialists — without the HR headache.</p>
    `,
  },
  {
    slug: 'cloud-migration-guide',
    title: 'The SMB Guide to Moving to the Cloud in East Africa',
    category: 'Cloud',
    date: 'March 28, 2026',
    author: 'KeedCo Team',
    excerpt: 'Cloud migration doesn\'t have to be scary or expensive. Here\'s a practical step-by-step guide for East African businesses.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    content: `
      <p>Cloud adoption in East Africa is accelerating. Businesses that migrate strategically are seeing 30–50% reductions in IT infrastructure costs and significant improvements in team collaboration.</p>
      <h2>Step 1: Audit What You Have</h2>
      <p>Before moving anything, document every application, server, and data store your business relies on. Categorise them by criticality and identify dependencies.</p>
      <h2>Step 2: Choose the Right Cloud Model</h2>
      <p>Public cloud (Microsoft Azure, AWS) is best for most SMBs. Private cloud suits businesses with strict data residency requirements. Hybrid cloud combines both.</p>
      <h2>Step 3: Start with Low-Risk Workloads</h2>
      <p>Don't migrate your core ERP on day one. Start with email (Microsoft 365), file storage (SharePoint/OneDrive), and collaboration tools. Build confidence before tackling critical systems.</p>
      <h2>Step 4: Plan for Connectivity</h2>
      <p>Cloud performance depends on your internet connection. Ensure you have a reliable, redundant connection — ideally fibre with a 4G backup — before going fully cloud-dependent.</p>
      <h2>Step 5: Train Your Team</h2>
      <p>Technology adoption fails when people don't know how to use the new tools. Budget for training alongside the migration itself.</p>
    `,
  },
  {
    slug: 'cctv-office-nairobi',
    title: '5 Reasons Every Nairobi Office Needs a Modern CCTV System',
    category: 'Managed IT',
    date: 'March 15, 2026',
    author: 'KeedCo Team',
    excerpt: 'Modern IP CCTV systems do far more than record footage. Here\'s why upgrading your security cameras is one of the best investments you can make.',
    image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=1200&q=80',
    content: `
      <p>The days of grainy, low-resolution CCTV footage are over. Modern IP camera systems offer 4K resolution, AI-powered motion detection, remote viewing, and integration with access control — all manageable from your phone.</p>
      <h2>1. Deter Theft and Vandalism</h2>
      <p>Visible cameras reduce opportunistic theft by up to 50%. Modern systems with real-time alerts mean you're notified the moment something suspicious happens — not the next morning.</p>
      <h2>2. Remote Monitoring from Anywhere</h2>
      <p>View live and recorded footage from your phone, tablet, or laptop. Whether you're in a meeting or travelling, your premises are always visible.</p>
      <h2>3. Protect Against False Claims</h2>
      <p>CCTV footage is admissible evidence in Kenyan courts. It protects you against false employee claims, customer disputes, and insurance fraud.</p>
      <h2>4. Integrate with Access Control</h2>
      <p>Modern systems link CCTV with biometric access control — you can see exactly who entered which door and when, with a video record to match.</p>
      <h2>5. Insurance Premium Reductions</h2>
      <p>Many insurers offer reduced premiums for businesses with verified CCTV systems. The system can pay for itself in insurance savings within 2–3 years.</p>
    `,
  },
  {
    slug: 'it-budget-tips',
    title: 'How to Build an IT Budget That Actually Works for Your Business',
    category: 'Business Tips',
    date: 'February 28, 2026',
    author: 'KeedCo Team',
    excerpt: 'Most SMBs either overspend on IT they don\'t need or underspend until something breaks. Here\'s how to get it right.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    content: `
      <p>IT budgeting is one of the most neglected areas of business planning for SMBs in East Africa. The result is either reactive spending (fixing things after they break) or wasted investment in tools nobody uses.</p>
      <h2>The 3-Category Framework</h2>
      <p>Split your IT budget into three buckets: <strong>Keep the lights on</strong> (maintenance, support, licences), <strong>Improve</strong> (upgrades, new tools), and <strong>Transform</strong> (strategic projects like cloud migration or custom software).</p>
      <h2>Benchmark: What Should You Spend?</h2>
      <p>Industry benchmarks suggest SMBs should spend 4–6% of revenue on IT. Businesses in regulated industries (finance, healthcare) typically spend 8–10%.</p>
      <h2>The Hidden Costs Most Businesses Miss</h2>
      <p>Don't forget: software licence renewals, hardware refresh cycles (every 3–5 years), cybersecurity insurance, staff training, and disaster recovery testing. These are predictable costs that should be in your budget, not surprises.</p>
      <h2>How a Managed IT Provider Helps</h2>
      <p>A good managed IT partner gives you a fixed monthly cost that covers most of the "keep the lights on" category — turning unpredictable IT spend into a known, manageable line item.</p>
    `,
  },
  {
    slug: 'password-security-guide',
    title: 'The Complete Password Security Guide for Your Business',
    category: 'Cybersecurity',
    date: 'February 10, 2026',
    author: 'KeedCo Team',
    excerpt: 'Weak passwords are still the #1 cause of business data breaches. Here\'s how to fix it across your entire organisation.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    content: `
      <p>In 2025, "123456" and "password" were still among the most commonly used passwords in business environments. This is not a technology problem — it's a policy and culture problem.</p>
      <h2>Why Password Policies Fail</h2>
      <p>Most businesses have a password policy. Almost none enforce it consistently. Staff reuse passwords across personal and work accounts, share credentials via WhatsApp, and never change default passwords on new devices.</p>
      <h2>The Solution: A Password Manager</h2>
      <p>Deploy a business password manager (Bitwarden, 1Password, or LastPass Teams) across your organisation. This solves reuse, sharing, and complexity in one tool — and costs less than KES 1,000 per user per month.</p>
      <h2>Enforce Multi-Factor Authentication</h2>
      <p>MFA is non-negotiable. Even if a password is compromised, MFA stops the attacker. Enable it on Microsoft 365, Google Workspace, banking portals, and any remote access tools.</p>
      <h2>Set a Password Policy That Works</h2>
      <p>Minimum 12 characters. No dictionary words. Unique per account. Changed immediately if a breach is suspected. Use a password manager — don't rely on memory.</p>
      <h2>Train Your Team</h2>
      <p>Run a quarterly phishing simulation. Staff who click the test link get immediate training. This single exercise reduces successful phishing attacks by over 70%.</p>
    `,
  },
];
