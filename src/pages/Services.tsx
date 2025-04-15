import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Shield, Database, Palette, Code2, Users } from 'lucide-react';

const Services: React.FC = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));

    return () => {
      elements.forEach((el: Element) => observer.unobserve(el));
    };
  }, []);

  // Add scrolling animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('section');

      sections.forEach((section: HTMLElement) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = section.offsetHeight;

        // Calculate scroll progress (0 to 1) within the section
        const progress = Math.max(0, Math.min(1, (scrollPosition + windowHeight - sectionTop) / (sectionHeight + windowHeight)));

        // Apply animation based on scroll progress
        if (section.classList.contains('animate-on-scroll')) {
          section.style.transform = `scale(${1 + progress * 0.1}) translateY(${progress * -20}px)`;
          section.style.opacity = `${1 - progress * 0.3}`; // Explicitly cast to string
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden animate-on-scroll">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web" className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="bg-develup-blue/5 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 z-0">
                  <div className="absolute w-40 h-40 bg-develup-blue rounded-full blur-[60px] top-10 right-10"></div>
                </div>
                <Globe className="w-16 h-16 text-develup-blue mb-6 relative z-10" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                  Web Development
                </h2>
                <p className="text-gray-300 mb-6 relative z-10">
                  Custom websites and web applications with responsive design and optimal performance.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>Responsive website design and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>Progressive web applications (PWAs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>Content management systems</span>
                  </li>
                </ul>
                <a href="pages/services#web" className="bg-develup-blue hover:bg-develup-blue/80 text-white inline-block px-4 py-2 rounded">
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-first lg:order-last reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4">Modern Web Solutions</h3>
              <p className="text-gray-300 mb-6">
                Our web development team creates cutting-edge websites and web applications that
                are not only visually stunning but also functionally robust. We focus on building
                responsive, accessible, and high-performing web solutions that deliver exceptional
                user experiences.
              </p>
              <p className="text-gray-300 mb-6">
                Using the latest technologies and frameworks, we ensure your website stands out
                from the competition while achieving your business goals. Whether you need a
                simple informational website or a complex web application, we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <p className="text-sm text-gray-400">React, Vue, Angular, Node.js</p>
                </div>
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Timeline</h4>
                  <p className="text-sm text-gray-400">4-12 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Security Section */}
      <section id="app" className="py-20 bg-develup-darker animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Solutions</h3>
              <p className="text-gray-300 mb-6">
                Our cybersecurity team protects your digital infrastructure with proactive defense
                strategies and real-time monitoring. We identify vulnerabilities before attackers can,
                ensuring your data and systems remain secure.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're a startup or a large enterprise, we provide scalable security assessments,
                audits, and ongoing threat detection tailored to your business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-develup-gray p-4 rounded-lg shadow-lg shadow-blue-800/20">
                  <h4 className="font-semibold mb-2">Services</h4>
                  <p className="text-sm text-gray-400">VAPT, Monitoring, Compliance</p>
                </div>
                <div className="bg-develup-gray p-4 rounded-lg shadow-lg shadow-blue-800/20">
                  <h4 className="font-semibold mb-2">Engagement</h4>
                  <p className="text-sm text-gray-400">One-time or Retainer</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="reveal-on-scroll">
              <div className="bg-blue-500/5 p-10 rounded-3xl relative overflow-hidden shadow-xl shadow-mint-800/20 hover:shadow-mint-600/30 transition-all duration-500">
                <div className="absolute inset-0 opacity-30 z-0">
                  <div className="absolute w-40 h-40 bg-develup-mint rounded-full blur-[60px] bottom-10 left-10 animate-pulse"></div>
                </div>
                <Shield className="w-16 h-16 text-develup-mint mb-6 relative z-10" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                  Cybersecurity
                </h2>
                <p className="text-gray-300 mb-6 relative z-10">
                  End-to-end protection for your digital assets, infrastructure, and data.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>Security assessments & audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>Penetration testing (VAPT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>24/7 security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>Compliance and reporting</span>
                  </li>
                </ul>
                <Button className="bg-develup-mint hover:bg-develup-mint/80 text-develup-darker">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Services Grid */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal-on-scroll">
            More Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software Development */}
            <div id="software" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <Code className="w-12 h-12 text-develup-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-300 mb-6">
                Tailored software solutions to automate processes and improve efficiency.
                Our team builds custom software that addresses your specific business needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Custom business applications</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Process automation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Integration with existing systems</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Application Development */}
            <div id="app-dev" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Smartphone className="w-12 h-12 text-develup-mint mb-6" />
              <h3 className="text-2xl font-bold mb-4">App Development</h3>
              <p className="text-gray-300 mb-6">
                Crafting seamless and high-performance mobile applications for both iOS and Android.
                From concept to launch, we build intuitive, reliable apps that users love.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>iOS and Android native apps</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Cross-platform development</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>UI/UX mobile design</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Data Analytics */}
            <div id="data" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Database className="w-12 h-12 text-develup-mint mb-6" />
              <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-6">
                Extracting meaningful insights from your data to drive informed decisions.
                Turn your raw data into actionable business intelligence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Data visualization</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Business intelligence</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Predictive analytics</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* UI/UX Design */}
            <div id="design" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Palette className="w-12 h-12 text-develup-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-300 mb-6">
                Creating intuitive and engaging user experiences for your digital products.
                We design interfaces that users love to interact with.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>User research</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Interface design</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Usability testing</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Technical Consulting */}
            <div id="consulting" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
              <Code2 className="w-12 h-12 text-develup-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4">Technical Consulting</h3>
              <p className="text-gray-300 mb-6">
                Expert guidance on technology strategy, implementation, and optimization.
                We help you make informed technical decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Technology assessment</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Digital transformation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Solution architecture</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Project Management */}
            <div id="management" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              <Users className="w-12 h-12 text-develup-mint mb-6" />
              <h3 className="text-2xl font-bold mb-4">Project Management</h3>
              <p className="text-gray-300 mb-6">
                Ensuring your projects are delivered on time, within budget, and to specification.
                Our project management approach keeps everything on track.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Agile methodologies</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Resource allocation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Risk management</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can help bring your ideas to life.
            </p>
            <a href="https://forms.office.com/r/b4UwCawL7h?embed=true">
              <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full px-6">
                Get a Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fix TypeScript error with type assertion for styled-jsx */}
      <style>{`
        /* Default state for elements before they are revealed */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        /* State when elements are revealed */
        .reveal-on-scroll.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Scrolling animation state */
        .animate-on-scroll {
          transform: scale(1) translateY(0);
          opacity: 1;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
          will-change: transform, opacity; /* Optimize performance */
        }

        /* New CSS to remove horizontal scrollbar */
        body {
          overflow-x: hidden;
          margin: 0; /* Remove default margin */
        }

        html {
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1280px; /* Adjust based on your design */
          margin-left: auto;
          margin-right: auto;
        }

        section {
          width: 100%;
          overflow-x: hidden;
        }

        /* Constrain background elements */
        .absolute.inset-0 > div {
          max-width: 100vw; /* Limit to viewport width */
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default Services;