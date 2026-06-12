'use client';

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-50">
      {/* Phone Call Floating Button */}
      <a 
        href="tel:+919849256092"
        className="w-14 h-14 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/10 group"
        title="Call Us"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      </a>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919849256092?text=Hi,%20I'd%20like%20to%20book%20an%20appointment%20at%20Sri%20Krishna%20Orthopaedic%20Hospital."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        title="WhatsApp Us"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
