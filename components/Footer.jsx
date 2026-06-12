'use client';

import Link from 'next/link';
import { FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-20 pb-6 relative">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/images/SVG/default-logo.svg" alt="MediPro" className="h-12 brightness-0 invert" />
            </Link>
            <p className="text-white/70 type-body">
              Providing expert orthopaedic care to the people of Gajuwaka and Visakhapatnam since 2010. Your bone and joint health is our priority.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaYoutube, href: '#' },
                { icon: FaTwitter, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaFacebookF, href: '#' }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-300">
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="type-h3 mb-6 text-white text-[24px]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Doctors', href: '/our-team' },
                { label: 'Services', href: '/services' },
                { label: 'Contact Us', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-[var(--color-accent)] link-hover-color flex items-center transition-colors">
                    <span className="mr-2 text-[var(--color-accent)]">•</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="type-h3 mb-6 text-white text-[24px]">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-white/70">
                <FaMapMarkerAlt className="text-[var(--color-accent)] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>Beside Gajuwaka Police Station, Gajuwaka, Visakhapatnam</span>
              </li>
              <li className="flex items-center text-white/70">
                <FaEnvelope className="text-[var(--color-accent)] mr-3 flex-shrink-0" size={18} />
                <span>info@srikrishnaortho.com</span>
              </li>
              <li className="flex items-center text-white/70">
                <FaPhone className="text-[var(--color-accent)] mr-3 flex-shrink-0" size={18} />
                <span>0891-XXXXXXX</span>
              </li>
              <li className="flex items-start text-white/70">
                <FaClock className="text-[var(--color-accent)] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>8 AM – 8 PM, Monday – Saturday</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="type-h3 mb-6 text-white text-[24px]">Newsletter</h3>
            <p className="text-[var(--color-accent)] font-semibold mb-2">Subscribe To Our Newsletter</p>
            <p className="text-white/70 type-body mb-6">
              Stay informed and never miss out on the latest news, health tips.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()} suppressHydrationWarning>
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                required
                suppressHydrationWarning
              />
              <button 
                type="submit"
                className="mt-4 w-full bg-[var(--color-accent)] text-white py-3 rounded-md hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold"
                suppressHydrationWarning
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center text-white/50">
          <p>Copyright 2026 © Sri Krishna Orthopaedic Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
