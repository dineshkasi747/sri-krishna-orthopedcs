'use client';

import Link from 'next/link';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaArrowRight } from 'react-icons/fa6';
import { blogData } from '@/data/blog';

export default function BlogGrid() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <div 
              key={index}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(7,51,47,0.10)] transition-all duration-300 scroll-reveal"
              data-animation="fadeInUp"
              data-delay={index * 100}
            >
              
              {/* Image Container with Hover Scale */}
              <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-video rounded-t-xl overflow-hidden group">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={true}
                />
              </Link>

              {/* Content Container */}
              <div className="flex flex-col p-6 border border-t-0 border-[rgba(7,51,47,0.08)] rounded-b-xl flex-grow">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="type-h3 text-xl text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-250 mb-3">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="type-body text-[var(--color-primary)]/70 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold group hover:gap-3 transition-all duration-250 mt-auto"
                >
                  <span>Read More</span>
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
