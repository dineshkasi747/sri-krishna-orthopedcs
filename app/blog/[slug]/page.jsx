import { blogData } from '@/data/blog';
import BlogDetailHero from '@/components/blog-detail/BlogDetailHero';
import PostContentSection from '@/components/blog-detail/PostContentSection';
import CommentSection from '@/components/blog-detail/CommentSection';

// Pre-render all 6 blog pages at build time
export async function generateStaticParams() {
  return blogData.map(post => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData.find(p => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} - MediPro`,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-40 text-center text-2xl font-bold text-[var(--color-primary)] min-h-screen">
        Blog Post Not Found
      </div>
    );
  }

  return (
    <main>
      <BlogDetailHero post={post} />
      <PostContentSection post={post} />
      <CommentSection />
    </main>
  );
}
