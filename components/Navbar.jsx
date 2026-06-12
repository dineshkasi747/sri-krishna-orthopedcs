'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      dropdown: ['Joint Replacement', 'Spine Surgery', 'Sports Injuries', 'Fracture Care', 'Arthroscopy', 'Paediatric Orthopaedics']
    },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-[var(--color-primary)] ${isScrolled ? 'shadow-md h-[80px]' : 'h-[105px]'} flex items-center`}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0 w-[240px] h-[64px] flex items-center">
            <Link href="/" className="block">
              <img src="/images/SVG/default-logo.svg" alt="Sri Krishna Orthopaedic Hospital" className="h-[64px] w-auto brightness-0 invert object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  href={link.href} 
                  className="flex items-center h-[50px] text-white text-[18px] leading-[27px] font-medium hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontFamily: 'var(--font-figtree)' }}
                >
                  {link.label}
                  {link.dropdown && <FaChevronDown className="ml-1.5 text-[12px]" />}
                </Link>
                
                {link.dropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-lg overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === link.label ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                  >
                    <ul className="py-2">
                      {link.dropdown.map((item, i) => {
                        let href = '#';
                        if (link.label === 'Services') {
                          href = `/services/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/\(/g, '').replace(/\)/g, '')}`;
                        } else if (link.label === 'Pages') {
                          if (item === 'Blog') href = '/blog';
                          else if (item === 'Our Team') href = '/our-team';
                          else if (item === "FAQ's") href = '/faq';
                        }
                        return (
                          <li key={i}>
                            <Link href={href} className="block px-4 py-2 text-[var(--color-primary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)] transition-colors text-[16px]" onClick={() => setActiveDropdown(null)}>
                              {item}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="inline-flex items-center justify-center border border-[var(--color-accent)] rounded-full px-6 py-2.5 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-semibold bg-transparent text-[16px]">
              Book Appointment <FaCalendarAlt className="ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-primary)]">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="px-5 pb-5 overflow-y-auto">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <div className="flex items-center justify-between">
                  <Link 
                    href={link.href} 
                    className="block text-lg font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                    onClick={() => { if (!link.dropdown) setMobileMenuOpen(false); }}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button 
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                      className="p-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] focus:outline-none"
                    >
                      <FaChevronDown className={`transition-transform duration-300 ${mobileDropdownOpen === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === link.label ? 'max-h-[400px] mt-2' : 'max-h-0'}`}>
                  <ul className="pl-4 space-y-2 border-l-2 border-gray-200">
                    {link.dropdown?.map((item, i) => {
                      let href = '#';
                      if (link.label === 'Services') {
                        href = `/services/${item.toLowerCase().replace(/\s+/g, '-')}`;
                      } else if (link.label === 'Pages') {
                        if (item === 'Blog') href = '/blog';
                        else if (item === 'Our Team') href = '/our-team';
                        else if (item === "FAQ's") href = '/faq';
                      }
                      return (
                        <li key={i}>
                          <Link href={href} className="block py-1 text-[var(--color-primary)]/70 hover:text-[var(--color-accent)]" onClick={() => setMobileMenuOpen(false)}>
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center border rounded-full px-6 py-3 bg-[var(--color-accent)] text-white hover:bg-[var(--color-primary)] transition-all duration-300 font-semibold w-full">
              Book Appointment <FaCalendarAlt className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
