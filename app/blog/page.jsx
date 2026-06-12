import BlogPageHero from '@/components/blog/BlogPageHero';
import BlogGrid from '@/components/blog/BlogGrid';

export const metadata = {
  title: 'Blog - MediPro',
  description: 'Read the latest health tips and news from MediPro.',
};

export default function BlogListPage() {
  return (
    <main>
      <BlogPageHero />
      <BlogGrid />
    </main>
  );
}
