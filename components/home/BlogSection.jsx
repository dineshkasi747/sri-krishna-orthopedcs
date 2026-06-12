'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowRight, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';

export default function BlogSection() {
  const sectionRef = useScrollAnimation();

  const posts = [
    { image: "/images/JPG/post-1.jpg", title: "Best Medical Network Directory For Physicians & Clients", excerpt: "Tips for Maintaining a Healthy Heart Hypertension, commonly known as high blood…", link: "/blog/post-1", date: "Oct 15, 2026", author: "Admin" },
    { image: "/images/JPG/post-2.jpg", title: "The Importance of Regular Health Checkups", excerpt: "Tips for Maintaining a Healthy Heart Hypertension, commonly known as high blood…", link: "/blog/post-2", date: "Oct 12, 2026", author: "Admin" },
    { image: "/images/JPG/post-3.jpg", title: "Managing Better Stress for Better Mental Health", excerpt: "Tips for Maintaining a Healthy Heart Hypertension, commonly known as high blood…", link: "/blog/post-3", date: "Oct 08, 2026", author: "Admin" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal" data-animation="fadeInUp">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto scroll-reveal" data-animation="fadeInUp">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            Our Blog
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="Latest News & Articles." />
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal" data-animation="fadeInUp">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group card-hover-lift scroll-reveal"
              data-animation="fadeInUp"
            >
              <div className="relative h-60 overflow-hidden scroll-reveal" data-animation="fadeInUp">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scroll-reveal" data-animation="fadeInUp" />
                <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider scroll-reveal" data-animation="fadeInUp">
                  Medical
                </div>
              </div>
              
              <div className="p-8 scroll-reveal" data-animation="fadeInUp">
                <div className="flex items-center space-x-4 mb-4 text-sm font-semibold text-[var(--color-primary)]/60 border-b border-gray-100 pb-4 scroll-reveal" data-animation="fadeInUp">
                  <span className="flex items-center scroll-reveal" data-animation="fadeInUp"><FaRegUser className="mr-2 text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" /> <span className="scroll-reveal" data-animation="fadeInUp">{post.author}</span></span>
                  <span className="flex items-center scroll-reveal" data-animation="fadeInUp"><FaRegCalendarAlt className="mr-2 text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" /> <span className="scroll-reveal" data-animation="fadeInUp">{post.date}</span></span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 hover:text-[var(--color-accent)] transition-colors scroll-reveal" data-animation="fadeInUp">
                  <Link href={post.link} className="scroll-reveal" data-animation="fadeInUp"><span className="scroll-reveal" data-animation="fadeInUp">{post.title}</span></Link>
                </h3>
                
                <p className="text-[var(--color-primary)]/70 mb-6 line-clamp-2 scroll-reveal" data-animation="fadeInUp">
                  {post.excerpt}
                </p>
                
                <Link href={post.link} className="inline-flex items-center text-[var(--color-accent)] font-semibold hover:text-[var(--color-primary)] transition-colors scroll-reveal group" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">Read More</span> <FaArrowRight className="ml-2 scroll-reveal group-hover:text-[var(--color-primary)] transition-colors" data-animation="fadeInUp" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
