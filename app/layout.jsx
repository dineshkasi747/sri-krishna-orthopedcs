import './globals.css';
import BootLoader from '@/components/shared/BootLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';

export const metadata = {
  title: 'Sri Krishna Orthopaedic Hospital - Gajuwaka, Visakhapatnam',
  description: 'Expert orthopaedic care in Gajuwaka, Visakhapatnam. Specialising in joint replacement, spine surgery, fracture care, sports injuries, and arthroscopy. 25+ years of trusted healthcare.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <BootLoader />
        <Navbar />
        <main className="min-h-screen pt-[104px]">
          {children}
        </main>
        <Footer />

        <FloatingButtons />
      </body>
    </html>
  );
}
