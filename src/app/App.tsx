 import React, { useState, useEffect } from 'react';

 const bidgelyWordmark = new URL('../../logo.png', import.meta.url).href;
 const avistaLogo = new URL('../assets/logos/Avista.png', import.meta.url).href;
 const edfLogo = new URL('../assets/logos/edf.png', import.meta.url).href;
 const nvLogo = new URL('../assets/logos/nv.png', import.meta.url).href;
 const ogeLogo = new URL('../assets/logos/oge.png', import.meta.url).href;
 const pacificLogo = new URL('../assets/logos/pasific.png', import.meta.url).href;
 const powerLogo = new URL('../assets/logos/power.png', import.meta.url).href;
 const xcelLogo = new URL('../assets/logos/xcel.png', import.meta.url).href;

 const icon1 = new URL('../assets/icons/icon-1.svg', import.meta.url).href;
 const icon2 = new URL('../assets/icons/icon-2.svg', import.meta.url).href;
 const icon3 = new URL('../assets/icons/icon-3.svg', import.meta.url).href;
const caseNvLogo = new URL('../assets/logos/cases/nv-energy-logo.svg', import.meta.url).href;
const casePsegLogo = new URL('../assets/logos/cases/pseg-li-logo.svg', import.meta.url).href;
const caseNwNaturalLogo = new URL('../assets/logos/cases/nw-natural-logo.png', import.meta.url).href;
 const award1 = new URL('../../1.png', import.meta.url).href;
 const award2 = new URL('../../2.png', import.meta.url).href;
 const award3 = new URL('../../3.png', import.meta.url).href;
 const award4 = new URL('../../4.png', import.meta.url).href;
 const award5 = new URL('../../5.png', import.meta.url).href;
 const award6 = new URL('../../6.png', import.meta.url).href;
 const cloudAwsLogo = new URL('../assets/clouds/aws.png', import.meta.url).href;
 const cloudSnowflakeLogo = new URL('../assets/clouds/snowflake.png', import.meta.url).href;
 const cloudDatabricksLogo = new URL('../assets/clouds/databriks.png', import.meta.url).href;
 const cloudAzureLogo = new URL('../assets/clouds/A.png', import.meta.url).href;
 const cloudOracleLogo = new URL('../assets/clouds/oracle.png', import.meta.url).href;
 const cloudMongoLogo = new URL('../assets/clouds/mongodb.png', import.meta.url).href;
 const cloudCoreweaveLogo = new URL('../assets/clouds/coreweave.png', import.meta.url).href;

export default function App() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const utilityLogos = [
    { name: 'Pacific Gas & Electric', image: pacificLogo, alt: 'Pacific Gas and Electric logo' },
    { name: 'NV Energy', image: nvLogo, alt: 'NV Energy logo' },
    { name: 'Avista Utilities', image: avistaLogo, alt: 'Avista logo' },
    { name: 'Nova Scotia Power', image: powerLogo, alt: 'Nova Scotia Power logo' },
    { name: 'Oklahoma Gas & Electric', image: ogeLogo, alt: 'OG&E logo' },
    { name: 'Xcel Energy', image: xcelLogo, alt: 'Xcel Energy logo' },
    { name: 'EDF Energy', image: edfLogo, alt: 'EDF logo' },
  ];
  const scrollingUtilityLogos = [...utilityLogos, ...utilityLogos];
  const cloudLogos = [
    { src: cloudAwsLogo, alt: 'AWS', className: 'h-[22px] max-w-[66px]' },
    { src: cloudSnowflakeLogo, alt: 'Snowflake', className: 'h-[20px] max-w-[95px]' },
    { src: cloudDatabricksLogo, alt: 'Databricks', className: 'h-[20px] max-w-[90px]' },
    { src: cloudAzureLogo, alt: 'Azure', className: 'h-[21px] max-w-[50px]' },
    { src: cloudOracleLogo, alt: 'Oracle Cloud', className: 'h-[13px] max-w-[76px]' },
    { src: cloudMongoLogo, alt: 'MongoDB', className: 'h-[20px] max-w-[90px]' },
    { src: cloudCoreweaveLogo, alt: 'CoreWeave', className: 'h-[22px] max-w-[90px]' },
  ];
  const footerColumns = [
    {
      heading: 'Solutions',
      links: ['Energy Efficiency', 'EV Intelligence', 'Customer Engagement', 'Grid Planning', 'Electrification', 'Smart Metering & Data'],
    },
    {
      heading: 'Technology',
      links: ['True Disaggregation', 'Disaggregation as a Service', 'GenAI', 'Agentic AI'],
    },
    {
      heading: 'Knowledge Base',
      links: ['Resource Library', 'Insights'],
    },
    {
      heading: 'Contact Us',
      links: ['Careers', 'Press Release', 'Leadership', 'Board and Advisors', 'About Bidgely'],
    },
  ];

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('shown');
          }
        });
      },
      { threshold: 0.06 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-14 h-[62px] bg-white/97 backdrop-blur-md border-b border-[var(--ink-hair)]">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center no-underline">
            <img
              src={bidgelyWordmark}
              alt="Bidgely"
              className="h-6 md:h-7 w-auto object-contain"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0">
            <li
              className="relative"
              onMouseEnter={() => setHoveredNav('solutions')}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <span className="flex items-center gap-1.5 px-3.5 py-2.5 text-[var(--ink-muted)] text-sm cursor-pointer rounded-md hover:text-[var(--ink)] hover:bg-[var(--off)] transition-colors">
                Solutions
                <svg className={`w-3 h-3 opacity-30 transition-transform ${hoveredNav === 'solutions' ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {hoveredNav === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-[var(--ink-faint)] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,.10)] p-2 min-w-[500px] flex gap-0 z-[300]">
                  <div className="p-2 flex-1">
                    <div className="font-[var(--mono)] text-[10px] uppercase tracking-wider text-[var(--teal)] px-3 py-1.5 border-b border-[var(--ink-hair)] mb-1.5">By Use Case</div>
                    <NavDropItem icon="👤" title="Customer Engagement" desc="Personalized HERs & program enrollment" />
                    <NavDropItem icon="⚡" title="EV Intelligence" desc="Detection, managed charging, load shift" />
                    <NavDropItem icon="🗺️" title="Grid Planning" desc="8760-hour DER forecasting" />
                    <NavDropItem icon="🌿" title="Energy Efficiency" desc="AI-targeted demand response recruitment" />
                    <NavDropItem icon="💲" title="TOU & Rate Design" desc="Personalized bill impact & behavioral nudges" />
                  </div>
                  <div className="p-2 flex-1 border-l border-[var(--ink-hair)]">
                    <div className="font-[var(--mono)] text-[10px] uppercase tracking-wider text-[var(--teal)] px-3 py-1.5 border-b border-[var(--ink-hair)] mb-1.5">By Role</div>
                    <NavDropItem icon="🙋" title="VP Customer Experience" desc="CX, CX/EE, DSM programs" />
                    <NavDropItem icon="⚡" title="VP Grid Operations" desc="Grid planners & operators" />
                    <NavDropItem icon="📊" title="Utility Analytics" desc="Data analysts & analytics groups" />
                    <NavDropItem icon="🚗" title="EV Program Manager" desc="Electrification & EV intelligence" />
                  </div>
                </div>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setHoveredNav('technology')}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <span className="flex items-center gap-1.5 px-3.5 py-2.5 text-[var(--ink-muted)] text-sm cursor-pointer rounded-md hover:text-[var(--ink)] hover:bg-[var(--off)] transition-colors">
                Technology
                <svg className={`w-3 h-3 opacity-30 transition-transform ${hoveredNav === 'technology' ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {hoveredNav === 'technology' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-[var(--ink-faint)] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,.10)] p-2 min-w-[280px] z-[300]">
                  <NavDropItem icon="🧠" title="UtilityAI™" desc="The core behind-the-meter intelligence platform" />
                  <NavDropItem icon="☁️" title="UtilityAI™ Pro" desc="Private cloud deployment. Your data, your control." />
                  <NavDropItem icon="🔗" title="Data-as-a-Service API" desc="Embedded BTM intelligence for your ecosystem" />
                  <div className="h-px bg-[var(--ink-hair)] my-1.5 mx-1"></div>
                  <NavDropItem icon="🤖" title="UtilityAI Assistant" desc="Ask anything about your grid and customers" />
                </div>
              )}
            </li>
            <li><a href="#" className="flex items-center px-3.5 py-2.5 text-[var(--ink-muted)] text-sm no-underline rounded-md hover:text-[var(--ink)] hover:bg-[var(--off)] transition-colors">Customers</a></li>
            <li><a href="#" className="flex items-center px-3.5 py-2.5 text-[var(--ink-muted)] text-sm no-underline rounded-md hover:text-[var(--ink)] hover:bg-[var(--off)] transition-colors">Resources</a></li>
            <li><a href="#" className="flex items-center px-3.5 py-2.5 text-[var(--ink-muted)] text-sm no-underline rounded-md hover:text-[var(--ink)] hover:bg-[var(--off)] transition-colors">Company</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:block px-4 py-1.5 rounded-md border border-[var(--ink-faint)] bg-transparent text-[var(--ink-mid)] text-sm cursor-pointer transition-all hover:bg-[var(--off)] hover:border-[rgba(0,0,0,.15)]">
            Log In
          </button>
          <button className="px-5 py-2 rounded-md border-none bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] text-white text-sm font-bold cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5">
            Talk to Sales
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 md:pt-[120px] pb-20 bg-white border-b border-[var(--ink-hair)] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(68,155,213,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(68,155,213,.14) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%,transparent 30%,black 75%)',
          maskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%,transparent 30%,black 75%)'
        }}></div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-14 text-center">
          <h1 className="font-[var(--sans)] text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-2px] text-[var(--ink)] mb-6 animate-[fadeUp_.45s_ease_both]">
            Every smart meter is a window.<br className="hidden sm:block" />Few utilities ever look through.
          </h1>

          <div className="animate-[fadeUp_.5s_.07s_ease_both]">
            <p className="text-[17px] leading-[1.74] text-[var(--ink-muted)] max-w-[520px] mx-auto mb-8">
              Appliance-level intelligence for every customer, grid asset, and hour of the year, only on{' '}
              <strong className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] bg-clip-text text-transparent font-bold">
                Bidgely UtilityAI™
              </strong>.
            </p>

            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              <button className="px-7 py-3 rounded-lg border-none bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] text-white text-sm font-bold cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5">
                Talk to Sales
              </button>
              <button className="flex items-center gap-2 px-5 py-3 rounded-lg border border-[var(--ink-faint)] bg-transparent text-[var(--ink-mid)] text-sm cursor-pointer transition-all hover:border-[rgba(0,0,0,.18)] hover:bg-[var(--off)]">
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
                  <path d="M1 1.5L10 6.5L1 11.5V1.5Z" fill="currentColor" opacity=".45"/>
                </svg>
                Watch Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <div className="py-8 bg-[var(--light-blue)] border-t border-b border-[rgba(68,155,213,.15)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="font-[var(--mono)] text-[11px] text-[var(--ink-muted)] tracking-wider uppercase text-center mb-8">
            Trusted by leading utilities on 4 continents
          </div>
          <div className="logo-marquee-shell overflow-hidden">
            <div className="logo-marquee-track flex items-start gap-3 md:gap-4 w-max px-6 md:px-10">
              {scrollingUtilityLogos.map((utility, idx) => (
                <a
                  key={`${utility.name}-${idx}`}
                  href="#"
                  className="group flex min-w-[132px] md:min-w-[156px] flex-col items-center text-center no-underline"
                >
                  <div className="relative flex h-[60px] w-[132px] items-center justify-center overflow-hidden rounded-[12px] bg-white px-2 transition-all duration-200 group-hover:-translate-y-0.5 md:h-[68px] md:w-[156px] md:px-3">
                    <img
                      src={utility.image}
                      alt={utility.alt}
                      className="max-h-[48px] max-w-[96%] w-auto object-contain transition-all duration-200 group-hover:scale-[1.03] md:max-h-[58px] md:max-w-[98%]"
                    />
                    <div className="absolute inset-[1px] flex items-center justify-center rounded-[11px] border border-white/12 bg-[linear-gradient(90deg,rgba(38,79,133,0.92)_0%,rgba(62,118,179,0.95)_100%)] backdrop-blur-[6px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="font-[var(--sans)] text-base font-medium tracking-tight text-white/98 [text-shadow:0_1px_2px_rgba(0,0,0,0.08)]">
                        Case study ↗
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Capabilities */}
      <div className="bg-white py-16 md:py-22 border-b border-[var(--ink-hair)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
            <div className="lg:flex-[0_0_420px] lg:pr-10">
              <h2 className="font-[var(--sans)] text-[clamp(1.625rem,2.8vw,2.375rem)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[var(--ink)] mb-4">
                <span className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] bg-clip-text text-transparent">Vertical AI</span> for the entire utility enterprise.
              </h2>
              <p className="text-sm leading-[1.72] text-[var(--ink-muted)] font-light">
                Deliver personalized CX, strengthen grid operations, and maximize efficiency and electrification programs, as SaaS or deployed in your cloud.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-5 flex-1 lg:pr-14">
              <CapabilityCard
                iconSrc={icon1}
                iconAlt="Disaggregation icon"
                title="Patented Disaggregation"
                description="Identifies what's running inside every home and business from meter data alone. No surveys. No smart plugs. No customer action required. Every insight on the platform is built on this foundation."
                link="Explore our Disaggregation →"
              />
              <CapabilityCard
                iconSrc={icon2}
                iconAlt="GenAI icon"
                title="GenAI"
                description="Ask questions in plain English, get answers grounded in real data. A CSR resolves a high-bill call in seconds. A planner queries load trends across feeders without writing a line of code. No data team required."
                link="Explore our GenAI →"
              />
              <CapabilityCard
                iconSrc={icon3}
                iconAlt="Agentic AI icon"
                title="Agentic AI"
                description="AI agents work continuously in the background across targeting, outreach, enrollment, and program management. You set the rules and approve what matters. Agents handle the volume. Your team handles the judgment."
                link="Explore our Agentic AI →"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <section className="py-18 bg-white px-6 md:px-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="inline-block font-[var(--mono)] text-[11px] uppercase tracking-wider text-[var(--teal)] mb-3">Solutions</div>
            <h2 className="font-[var(--sans)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-[var(--ink)] mb-2.5">
              Every meter becomes a <span className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] bg-clip-text text-transparent">decision.</span>
            </h2>
            <p className="text-base leading-[1.72] text-[var(--ink-muted)] font-[var(--serif)] italic">
              The data you need is already behind every meter. Decode it and put it to work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
            {/* Left Nav */}
            <div className="flex lg:flex-col gap-0 overflow-x-auto lg:overflow-visible">
              {['Customer Engagement', 'Grid Planning', 'Energy Efficiency', 'EV & Electrification', 'Rates & Affordability'].map((label, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSolution(idx)}
                  className={`relative flex items-center py-3 px-4 lg:px-0 lg:pl-3 cursor-pointer transition-all text-sm whitespace-nowrap lg:whitespace-normal w-fit ${
                    activeSolution === idx ? 'lg:border-l-2 lg:border-[var(--teal)]' : 'lg:border-l-2 lg:border-transparent'
                  }`}
                >
                  <span className={`text-sm transition-all pb-1 ${
                    activeSolution === idx
                      ? 'font-bold text-[var(--ink)] border-b-2 border-[var(--teal)]'
                      : 'text-[var(--ink-muted)] border-b-2 border-transparent'
                  }`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Content Box */}
            <div className="bg-[var(--off)] rounded-3xl p-8 md:p-10 border border-[var(--ink-hair)]">
              <SolutionPanel
                active={activeSolution === 0}
                title="Personalize every customer interaction."
                body="Billing, programs, and service informed by appliance-level intelligence, not just demographics."
                outcomes={[
                  '50%+ reduction in high-bill call volume through proactive outreach',
                  '2+ quartile JD Power improvement seen by reference utilities',
                  '80%+ CSAT across tools and programs'
                ]}
                link="Explore Customer Engagement →"
                visualLabel="Live Customer Insight · Meter #47822"
                metrics={[
                  { icon: '❄️', label: 'HVAC usage anomaly', value: '+42% above baseline', percent: 72, detail: '$38 bill impact' },
                  { icon: '💡', label: 'Program match', value: 'Smart Thermostat Rebate', percent: 88, detail: '88% propensity' },
                  { icon: '📊', label: 'Recommended action', value: 'Proactive outreach via email', percent: 60, detail: 'Best channel match' }
                ]}
              />
              <SolutionPanel
                active={activeSolution === 1}
                title="See what's behind every transformer, feeder, substation."
                body="Forecast DER-driven load, identify constrained assets, and design Non-Wires Alternatives with behind-the-meter visibility."
                outcomes={[
                  '90%+ DER and heat pump detection accuracy at the premise level',
                  '13 MW peak demand savings at reference utility deployments',
                  'Long-range load forecasting with EV and electrification curves built in'
                ]}
                link="Explore Grid Planning →"
                visualLabel="Transformer Load Forecast · Feeder 12B"
                metrics={[
                  { icon: '🔌', label: 'EV adoption detected', value: '47 new EVs on feeder', percent: 65, detail: '+2.4 MW peak risk' },
                  { icon: '🌡️', label: 'Heat pump detection', value: '91% accuracy confirmed', percent: 91, detail: 'No field survey needed' }
                ]}
              />
              <SolutionPanel
                active={activeSolution === 2}
                title="Target the right customers. Prove the savings."
                body="Target, recruit, and measure DSM programs using appliance-level segmentation and automated M&V."
                outcomes={[
                  '127% of filed EE targets achieved at reference utilities',
                  '4x reduction in marketing cost per program enrollment',
                  'Regulator-ready savings documentation from day one'
                ]}
                link="Explore Energy Efficiency →"
                visualLabel="DSM Targeting · Heat Pump Program"
                metrics={[
                  { icon: '🎯', label: 'Qualified households', value: '12,480 identified', percent: 79, detail: 'vs 3,200 generic list' },
                  { icon: '📈', label: 'Projected savings', value: '4,200 MWh / year', percent: 55, detail: '127% of target' }
                ]}
              />
              <SolutionPanel
                active={activeSolution === 3}
                title="Identify and coach every home with an EV or heat pump."
                body="Identify EV and heat pump adopters, manage their load impact, and coordinate with grid planning automatically."
                outcomes={[
                  'EV and heat pump identification with 90%+ accuracy, no survey required',
                  '42% peak load reduction through managed charging programs',
                  'Automatic feeder-level load impact modeling as EVs onboard'
                ]}
                link="Explore EV & Electrification →"
                visualLabel="EV Load Management · Managed Charging"
                metrics={[
                  { icon: '🚗', label: 'EV sessions shifted', value: '42% peak reduction', percent: 42, detail: 'Off-peak shift confirmed' },
                  { icon: '🔌', label: 'New EVs detected', value: 'No charger registration needed', percent: 90, detail: '90%+ accuracy' }
                ]}
              />
              <SolutionPanel
                active={activeSolution === 4}
                title="File with evidence, not estimates."
                body="Model rate impacts at the appliance level, identify LMI customers at the premise, and build regulator-ready evidence packages."
                outcomes={[
                  'Premise-level energy burden identification, no form required',
                  '50% higher affordability program enrollment with targeted outreach',
                  '3x enrollment and 98%+ retention at reference utilities'
                ]}
                link="Explore Rates & Affordability →"
                visualLabel="Rate Impact Modeling · TOU Migration"
                metrics={[
                  { icon: '📋', label: 'Customer segments modeled', value: 'Appliance-level precision', percent: 95, detail: 'Commission-ready' },
                  { icon: '🏠', label: 'LMI households identified', value: '50% higher enrollment', percent: 50, detail: 'vs zip-code method' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Bar */}
      <div className="relative bg-gradient-to-r from-[#152D49] via-[#1A3F6A] to-[#0E2A50] py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 100% at 25% 50%,transparent 30%,black 75%)',
          maskImage: 'radial-gradient(ellipse 70% 100% at 25% 50%,transparent 30%,black 75%)'
        }}></div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
          <div className="flex-1">
            <h2 className="font-[var(--sans)] text-[clamp(1.55rem,2.55vw,2.5rem)] font-extrabold tracking-[-1.1px] text-white leading-[1.1] mb-6">
              Deployed in <span className="bg-[linear-gradient(90deg,rgba(62,118,179,0.98)_0%,rgba(98,154,219,0.98)_100%)] bg-clip-text text-transparent">your cloud</span> or ours.
            </h2>
            <div className="flex items-center gap-2.5 flex-wrap">
              {cloudLogos.map((platform) => (
                <div key={platform.alt} className="flex h-[45px] w-[104px] items-center justify-center rounded-[7px] bg-white/[.06] border border-white/[.11] transition-all hover:bg-white/[.10] hover:border-white/[.2]">
                  <img src={platform.src} alt={platform.alt} className={`${platform.className} w-auto object-contain brightness-0 invert`} />
                </div>
              ))}
            </div>
          </div>
          <button className="flex-shrink-0 px-9 py-4 rounded-[9px] border-none bg-white text-[var(--ink)] text-[15px] font-extrabold cursor-pointer transition-all hover:shadow-[0_12px_32px_rgba(0,0,0,.3)] hover:-translate-y-0.5 whitespace-nowrap">
            Explore the Platform
          </button>
        </div>
      </div>

      {/* Results */}
      <section className="relative bg-white py-16 md:py-22 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(var(--ink-hair) 1px,transparent 1px),linear-gradient(90deg,var(--ink-hair) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,transparent 30%,black 80%)',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,transparent 30%,black 80%)'
        }}></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="text-center">
            <div className="inline-block font-[var(--mono)] text-[11px] uppercase tracking-wider text-[var(--teal)] mb-3">Proven Results</div>
            <h2 className="font-[var(--sans)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-[var(--ink)] mb-4">
              Deployed at scale. Measured at the <span className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] bg-clip-text text-transparent">meter.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 py-9 mt-9 mb-0">
            {[
              { num: '38M+', label: 'Meters analyzed' },
              { num: '1TB', label: 'Data processed daily' },
              { num: '270B', label: 'Data points per home' },
              { num: '50+', label: 'Utility deployments' }
            ].map((stat, idx) => (
              <div key={idx} className={`px-4 md:px-6 ${idx < 3 ? 'border-r border-[var(--ink-faint)]' : ''} ${idx === 0 ? 'pl-0' : ''}`}>
                <div className="font-[var(--sans)] text-[30px] font-extrabold tracking-tight leading-none mb-1 bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className="text-[13px] text-[var(--ink-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-13">
            <CaseCard
              tag="EV Intelligence"
              logoSrc={caseNvLogo}
              logoAlt="NV Energy logo"
              solution="EV & GRID"
              quote="Narrowed 33,000 EV customers to 1,000 high-impact households, focused on the 3% driving disproportionate load and accelerating TOU adoption with precision targeting."
              result="1K → 33K"
              resultLabel="EV customers targeted with precision"
            />
            <CaseCard
              tag="Customer Engagement"
              logoSrc={casePsegLogo}
              logoAlt="PSEG Long Island logo"
              solution="PERSONALIZATION"
              quote="Personalized communications delivered at scale, with 3x engagement lift and 97% customer satisfaction across the program."
              result="20M+"
              resultLabel="personalized communications delivered"
            />
            <CaseCard
              tag="Energy Efficiency"
              logoSrc={caseNwNaturalLogo}
              logoAlt="NW Natural logo"
              solution="DSM PERFORMANCE"
              quote="Exceeded all performance targets and proved ROI from day one, delivering 238% of contracted savings in the first year of deployment."
              result="238%"
              resultLabel="of contracted savings achieved in year one"
            />
          </div>

          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-[var(--ink-faint)] bg-transparent text-[var(--ink-mid)] text-sm font-semibold cursor-pointer transition-all hover:border-[var(--teal)] hover:text-[var(--teal)] no-underline">
              View All Case Studies →
            </a>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-[var(--light-blue)] py-8 border-t border-b border-[rgba(68,155,213,.15)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="font-[var(--mono)] text-[11px] uppercase tracking-wider text-[var(--ink-muted)] text-center mb-5">
            Awards & Recognition
          </div>
          <div className="w-full flex items-center justify-between flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0">
            {[
              { src: award1, alt: 'Fast Company', subtitle: '#7 Applied AI', year: '2024' },
              { src: award2, alt: 'Guidehouse', subtitle: 'Leader, Utility Analytics', year: '2024' },
              { src: award3, alt: 'Cleantech 100', subtitle: 'Global Cleantech Group', year: '2024' },
              { src: award4, alt: 'Frost & Sullivan', subtitle: 'Technology Innovation', year: '2023' },
              { src: award5, alt: 'ACEEE', subtitle: 'Exemplary Behavior Program', year: '2022' },
              { src: award6, alt: 'EnerTech Capital', subtitle: 'Top Energy AI Company', year: '2021' },
            ].map((award, idx) => (
              <React.Fragment key={award.alt}>
                <div className="w-[154px] md:w-[164px] h-[82px] md:h-[86px] rounded-[10px] bg-white border border-[rgba(21,45,73,.08)] flex flex-col items-center justify-center px-3 text-center">
                  <img src={award.src} alt={award.alt} className="max-h-[14px] md:max-h-[16px] w-auto max-w-full object-contain mb-1" />
                  <div className="text-[9px] md:text-[10px] text-[var(--ink-muted)] leading-[1.05] mb-0.5 whitespace-nowrap">
                    {award.subtitle}
                  </div>
                  <div className="font-[var(--sans)] text-[10px] md:text-[11px] font-bold text-[var(--teal)] tracking-[0.02em]">
                    {award.year}
                  </div>
                </div>
                {idx < 5 && <div className="hidden md:block w-px h-14 bg-[rgba(68,155,213,.35)] mx-1.5"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative bg-gradient-to-r from-[#152D49] to-[#1A4068] py-9 overflow-hidden border-t border-[rgba(255,255,255,0.08)]">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="font-[var(--sans)] text-[clamp(1.6rem,2.3vw,2.45rem)] font-extrabold tracking-[-0.9px] text-white leading-[1.08] mb-2 whitespace-nowrap">
              See UtilityAI in <span className="bg-[linear-gradient(90deg,rgba(62,118,179,0.98)_0%,rgba(98,154,219,0.98)_100%)] bg-clip-text text-transparent">your environment.</span>
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/68 font-[var(--serif)] italic leading-[1.6] max-w-[560px]">
              Join the utilities delivering individual-level intelligence across every customer, meter, and grid asset.
            </p>
          </div>
          <button className="flex-shrink-0 px-10 py-3 rounded-[8px] border-none bg-white text-[var(--ink)] text-[14px] font-bold cursor-pointer tracking-tight transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,.25)] whitespace-nowrap">
            Talk to Sales
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--ink-hair)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 py-8">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10">
            <a href="#" className="inline-flex items-start self-start no-underline">
              <img src={bidgelyWordmark} alt="Bidgely" className="h-7 w-auto object-contain" />
            </a>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
              {footerColumns.map((column) => (
                <div key={column.heading}>
                  <div className="font-[var(--mono)] text-[10px] uppercase tracking-[0.08em] text-[var(--teal)] mb-3">
                    {column.heading}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {column.links.map((item) => (
                      <a key={item} href="#" className="text-[12px] text-[var(--ink-muted)] no-underline hover:text-[var(--ink)] transition-colors leading-[1.35]">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[var(--ink-hair)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <a href="#" className="text-[11px] text-[var(--ink-muted)] no-underline hover:text-[var(--ink)] transition-colors">Terms & Conditions</a>
              <a href="#" className="text-[11px] text-[var(--ink-muted)] no-underline hover:text-[var(--ink)] transition-colors">Privacy Policy</a>
            </div>
            <div className="text-[11px] text-[var(--ink-muted)] font-[var(--mono)]">
              © 2025 Bidgely, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .reveal.shown {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes logoMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .logo-marquee-track {
          animation: logoMarquee 28s linear infinite;
        }

        .logo-marquee-track:hover {
          animation-play-state: paused;
        }

        .logo-marquee-shell {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 6%,
            black 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
      `}</style>
    </div>
  );
}

// Helper Components
function NavDropItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <a href="#" className="flex items-start gap-2.5 p-2.5 px-3 rounded-lg no-underline transition-all hover:bg-[var(--off)] cursor-pointer">
      <div className="w-[30px] h-[30px] rounded-lg flex-shrink-0 mt-0.5 flex items-center justify-center text-sm bg-[rgba(68,155,213,.08)] border border-[rgba(68,155,213,.20)]">
        {icon}
      </div>
      <div>
        <div className="font-[var(--sans)] text-[13px] font-semibold text-[var(--ink)] mb-0.5">{title}</div>
        <div className="text-[11px] text-[var(--ink-muted)] leading-[1.4]">{desc}</div>
      </div>
    </a>
  );
}

function CapabilityCard({
  iconSrc,
  iconAlt,
  title,
  description,
  link,
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="reveal group relative flex-1 min-w-[280px] cursor-pointer overflow-hidden rounded-[12px] bg-[var(--off)] p-7 pb-6.5 flex flex-col justify-between min-h-[290px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(21,45,73,.22)]">
      {/* Smooth gradient hover (opacity fade instead of background swap) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#152D49] via-[#1A4A7A] to-[#152D49] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <div className="relative">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="h-10 w-10 mb-4 opacity-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:invert group-hover:brightness-[1.2]"
        />
        <h3 className="font-[var(--sans)] text-[17px] font-bold text-[var(--ink)] tracking-tight mb-2.5 leading-[1.3] transition-all duration-[.25s] group-hover:text-white">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.65] text-[var(--ink-muted)] transition-all duration-300 ease-out font-[var(--serif)] italic group-hover:text-white/70">
          {description}
        </p>
      </div>
      <a href="#" className="relative block text-[13px] font-semibold text-[var(--teal)] no-underline mt-5.5 pt-4 border-t border-[var(--ink-faint)] transition-all duration-300 ease-out group-hover:text-[var(--teal-lt)] group-hover:border-white/[.12]">
        {link}
      </a>
    </div>
  );
}

function SolutionPanel({ active, title, body, outcomes, link, visualLabel, metrics }: {
  active: boolean;
  title: string;
  body: string;
  outcomes: string[];
  link: string;
  visualLabel: string;
  metrics: Array<{ icon: string; label: string; value: string; percent: number; detail: string }>;
}) {
  if (!active) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      <div>
        <h3 className="font-[var(--sans)] text-[clamp(1.25rem,2.2vw,1.688rem)] font-bold tracking-tight text-[var(--ink)] mb-3 leading-[1.2]">
          {title}
        </h3>
        <p className="text-[15px] leading-[1.72] text-[var(--ink-muted)] mb-5 font-[var(--serif)] italic">
          {body}
        </p>
        <div className="flex flex-col gap-2 mb-5.5">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
              <span className="w-[18px] h-[18px] rounded-full flex-shrink-0 mt-0.5 bg-[rgba(68,155,213,.08)] border border-[rgba(68,155,213,.24)] flex items-center justify-center text-[10px] text-[var(--teal)]">
                ✓
              </span>
              {outcome}
            </div>
          ))}
        </div>
        <a href="#" className="inline-flex items-center gap-1.5 text-[13px] text-[var(--teal)] font-semibold font-[var(--sans)] cursor-pointer no-underline hover:underline">
          {link}
        </a>
      </div>

      <div className="bg-white border border-[var(--ink-hair)] rounded-2xl p-6">
        <div className="font-[var(--mono)] text-[10px] uppercase tracking-wider text-[var(--teal)] mb-4">
          {visualLabel}
        </div>
        <div className="flex flex-col gap-2.5">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 px-3.5 rounded-[10px] bg-[var(--off)] border border-[var(--ink-hair)]">
              <div className="w-[30px] h-[30px] rounded-lg flex-shrink-0 bg-[rgba(68,155,213,.08)] border border-[rgba(68,155,213,.18)] flex items-center justify-center text-[13px]">
                {metric.icon}
              </div>
              <div className="flex-1">
                <div className="font-[var(--mono)] text-[9px] text-[var(--ink-muted)] mb-0.5 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-sm font-semibold text-[var(--ink)]">{metric.value}</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-0.5 rounded-sm bg-[var(--ink-faint)]">
                    <div className="h-full rounded-sm bg-gradient-to-r from-[var(--teal)] to-[#449BD5]" style={{ width: `${metric.percent}%` }}></div>
                  </div>
                  <span className="font-[var(--mono)] text-[10px] text-[var(--teal)]">{metric.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseCard({ tag, logoSrc, logoAlt, solution, quote, result, resultLabel }: {
  tag: string;
  logoSrc: string;
  logoAlt: string;
  solution: string;
  quote: string;
  result: string;
  resultLabel: string;
}) {
  return (
    <div className="reveal h-full bg-white border border-[var(--ink-hair)] rounded-[20px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.05)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,.10)] flex flex-col">
      <div className="p-6 pt-6 pb-0 bg-gradient-to-br from-[#152D49] to-[#1A3558] h-[120px] flex flex-col justify-between">
        <div className="font-[var(--mono)] text-[10px] uppercase tracking-wider text-[rgba(122,191,232,.85)]">
          {tag}
        </div>
        <div className="h-[30px] flex items-center">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-6 w-auto max-w-[200px] object-contain brightness-0 invert"
          />
        </div>
        <div className="self-start px-2 py-[2px] rounded-full bg-[rgba(68,155,213,.15)] border border-[rgba(68,155,213,.28)] font-[var(--mono)] text-[8px] text-[var(--teal-lt)] tracking-[0.04em] mb-4.5">
          {solution}
        </div>
      </div>
      <div className="p-6 pt-5.5 flex flex-1 flex-col">
        <div className="text-sm italic font-[var(--serif)] text-[var(--ink)] leading-[1.7] mb-4.5">
          {quote}
        </div>
        <div className="mt-auto">
          <div className="flex items-center gap-3 pt-2.5">
            <span className="min-w-[92px] font-[var(--sans)] text-[26px] font-extrabold tracking-tight bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] bg-clip-text text-transparent leading-none whitespace-nowrap">
              {result}
            </span>
            <span className="text-xs text-[var(--ink-muted)] leading-[1.25]">{resultLabel}</span>
          </div>
          <div className="pt-4">
            <a href="#" className="flex items-center gap-1 text-[13px] font-semibold text-[var(--teal)] no-underline pt-3 border-t border-[var(--ink-faint)] w-full hover:underline">
              Read Case Study →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
