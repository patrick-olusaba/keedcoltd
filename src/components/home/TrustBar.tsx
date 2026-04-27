import React, { useState } from 'react';

const logo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const PARTNERS = [
  {
    tab: '💻 ICT',
    groups: [
      {
        label: 'Computing & Hardware',
        brands: [
          { name: 'Dell',    logo: logo('dell.com') },
          { name: 'HP',      logo: logo('hp.com') },
          { name: 'Lenovo',  logo: logo('lenovo.com') },
          { name: 'Apple',   logo: logo('apple.com') },
          { name: 'Asus',    logo: logo('asus.com') },
          { name: 'Acer',    logo: logo('acer.com') },
        ],
      },
      {
        label: 'Networking',
        brands: [
          { name: 'Cisco',   logo: logo('cisco.com') },
          { name: 'Huawei',  logo: logo('huawei.com') },
          { name: 'Juniper', logo: logo('juniper.net') },
          { name: 'Netgear', logo: logo('netgear.com') },
          { name: 'TP-Link', logo: logo('tp-link.com') },
        ],
      },
      {
        label: 'Storage & Servers',
        brands: [
          { name: 'IBM',            logo: logo('ibm.com') },
          { name: 'Oracle',         logo: logo('oracle.com') },
          { name: 'Western Digital',logo: logo('westerndigital.com') },
          { name: 'Seagate',        logo: logo('seagate.com') },
          { name: 'Synology',       logo: logo('synology.com') },
        ],
      },
      {
        label: 'Cloud & Virtualisation',
        brands: [
          { name: 'Microsoft Azure', logo: logo('microsoft.com') },
          { name: 'AWS',             logo: logo('aws.amazon.com') },
          { name: 'VMware',          logo: logo('vmware.com') },
          { name: 'Google Cloud',    logo: logo('cloud.google.com') },
        ],
      },
      {
        label: 'Software & Productivity',
        brands: [
          { name: 'Microsoft',  logo: logo('microsoft.com') },
          { name: 'Adobe',      logo: logo('adobe.com') },
          { name: 'Autodesk',   logo: logo('autodesk.com') },
          { name: 'SAP',        logo: logo('sap.com') },
          { name: 'Salesforce', logo: logo('salesforce.com') },
        ],
      },
    ],
  },
  {
    tab: '⚡ Electrical',
    groups: [
      {
        label: 'Power Distribution',
        brands: [
          { name: 'Schneider Electric', logo: logo('se.com') },
          { name: 'ABB',                logo: logo('abb.com') },
          { name: 'Siemens',            logo: logo('siemens.com') },
          { name: 'Eaton',              logo: logo('eaton.com') },
          { name: 'Legrand',            logo: logo('legrand.com') },
        ],
      },
      {
        label: 'Wiring & Cabling',
        brands: [
          { name: 'Tronic',   logo: logo('tronic.co.ke') },
          { name: 'Nexans',   logo: logo('nexans.com') },
          { name: 'Prysmian', logo: logo('prysmiangroup.com') },
          { name: 'Polycab',  logo: logo('polycab.com') },
        ],
      },
      {
        label: 'Backup Power',
        brands: [
          { name: 'APC',               logo: logo('apc.com') },
          { name: 'Vertiv',            logo: logo('vertiv.com') },
          { name: 'Riello UPS',        logo: logo('riello-ups.com') },
          { name: 'Delta Electronics', logo: logo('deltaww.com') },
          { name: 'Generac',           logo: logo('generac.com') },
        ],
      },
      {
        label: 'Lighting',
        brands: [
          { name: 'Philips', logo: logo('signify.com') },
          { name: 'Osram',   logo: logo('osram.com') },
          { name: 'Havells', logo: logo('havells.com') },
          { name: 'GE',      logo: logo('ge.com') },
        ],
      },
      {
        label: 'Switchgear',
        brands: [
          { name: 'Hager',    logo: logo('hager.com') },
          { name: 'Chint',    logo: logo('chint.com') },
          { name: 'Crabtree', logo: logo('crabtree.co.in') },
          { name: 'Siemens',  logo: logo('siemens.com') },
        ],
      },
    ],
  },
  {
    tab: '🔒 Security',
    groups: [
      {
        label: 'Surveillance & CCTV',
        brands: [
          { name: 'Hikvision', logo: logo('hikvision.com') },
          { name: 'Dahua',     logo: logo('dahuasecurity.com') },
          { name: 'Axis',      logo: logo('axis.com') },
          { name: 'Bosch',     logo: logo('bosch.com') },
          { name: 'Hanwha',    logo: logo('hanwhavision.com') },
        ],
      },
      {
        label: 'Access Control',
        brands: [
          { name: 'Honeywell', logo: logo('honeywell.com') },
          { name: 'HID Global',logo: logo('hidglobal.com') },
          { name: 'Suprema',   logo: logo('supremainc.com') },
          { name: 'Paxton',    logo: logo('paxton-access.com') },
          { name: 'Gallagher', logo: logo('gallagher.com') },
        ],
      },
      {
        label: 'Alarm & Intrusion',
        brands: [
          { name: 'Tyco',    logo: logo('tycosecurity.com') },
          { name: 'DSC',     logo: logo('dsc.com') },
          { name: 'Paradox', logo: logo('paradox.com') },
          { name: 'Texecom', logo: logo('texe.com') },
        ],
      },
      {
        label: 'Fire Safety',
        brands: [
          { name: 'Siemens Fire', logo: logo('siemens.com') },
          { name: 'Bosch Fire',   logo: logo('bosch.com') },
          { name: 'Apollo',       logo: logo('apollo-fire.co.uk') },
          { name: 'Hochiki',      logo: logo('hochiki.com') },
        ],
      },
      {
        label: 'Integrated Platforms',
        brands: [
          { name: 'Genetec',   logo: logo('genetec.com') },
          { name: 'Milestone', logo: logo('milestonesys.com') },
          { name: 'Avigilon',  logo: logo('avigilon.com') },
          { name: 'Mobotix',   logo: logo('mobotix.com') },
        ],
      },
    ],
  },
];

const TrustBar: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = PARTNERS[active];

  return (
    <div className="partners">
      <div className="container">
        <p className="partners__heading">Certified &amp; Partnered With</p>

        <div className="partners__tabs">
          {PARTNERS.map((p, i) => (
            <button
              key={i}
              className={`partners__tab${i === active ? ' partners__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <div className="partners__groups">
          {current.groups.map(g => (
            <div key={g.label} className="partners__group">
              <span className="partners__group-label">{g.label}</span>
              <div className="partners__chips">
                {g.brands.map(b => (
                  <div key={b.name} className="partners__chip">
                    <img src={b.logo} alt={b.name} width="20" height="20"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    <span>{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="partners__note">
          We source, supply, and install from these trusted brands — so you get the right product for your budget and environment, backed by our expertise.
        </p>
      </div>
    </div>
  );
};

export default TrustBar;
