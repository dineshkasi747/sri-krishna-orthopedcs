import Link from 'next/link';

export default function ComingSoon({ title = 'Coming Soon' }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-primary)] text-white text-center px-4">
      <h1 className="type-h1 mb-4 text-[var(--color-accent)] animate-fadeInUp delay-0">{title}</h1>
      <p className="type-body mb-8 max-w-lg mx-auto text-white/80 animate-fadeInUp delay-100">
        🚧 This page is coming soon. We're working on it! Check back later for updates.
      </p>
      <Link href="/" className="inline-block border rounded-full px-8 py-3 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 animate-fadeInUp delay-200">
        Back to Home
      </Link>
    </div>
  );
}
