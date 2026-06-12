'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function BlogAboutSection() {
  const sectionRef = useScrollAnimation();

  const posts = [
    {
      image: "/about/JPG/post-1.jpg",
      title: "Best Medical Network Directory For Physicians & Clients",
      excerpt: "Tips for Maintaining a Healthy Heart Hypertension, commonly known as high blood…",
      link: "/blog/post-1",
      delay: 100
    },
    {
      image: "/about/JPG/post-2.jpg",
      title: "The Importance of Regular Health Checkups",
      excerpt: "Tips for Maintaining a Healthy Heart Hypertension, commonly known as high blood…",
      link: "/blog/post-2",
      delay: 300
    },
    {
      image: "/about/JPG/post-3.jpg",
      title: "Managing Better Stress for Better Mental Health",
      excerpt: "Tips for Maintaining a Healthy Heart Hypertension, commonly known as high blood…",
      link: "/blog/post-3",
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            <span className="scroll-reveal" data-animation="fadeInUp">Our Blog</span>
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <SplitText text="Latest News & Articles." />
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/5 flex flex-col card-hover-lift scroll-reveal group" data-animation="fadeInUp" data-delay={post.delay}>
              
              <div className="relative h-60 overflow-hidden scroll-reveal" data-animation="fadeInUp">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scroll-reveal" 
                  data-animation="paperReveal" 
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="type-h3 text-2xl mb-4 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors scroll-reveal" data-animation="fadeInUp">
                  <Link href={post.link} className="scroll-reveal" data-animation="fadeInUp">{post.title}</Link>
                </h3>
                
                <p className="type-body text-[var(--color-primary)]/70 mb-6 flex-grow scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">{post.excerpt}</span>
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 scroll-reveal" data-animation="fadeInUp">
                  <Link href={post.link} className="inline-flex items-center text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors scroll-reveal" data-animation="fadeInUp">
                    <span className="scroll-reveal" data-animation="fadeInUp">Read More</span>
                    <FaArrowAltCircleRight className="ml-2 scroll-reveal text-[var(--color-accent)]" data-animation="fadeInUp" />
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
