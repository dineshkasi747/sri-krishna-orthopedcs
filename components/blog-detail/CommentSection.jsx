'use client';

import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function CommentSection() {
  const sectionRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Hide the success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-[var(--color-background)]">
      <div className="max-w-4xl w-full mx-auto scroll-reveal" data-animation="fadeInUp">
        
        <h3 className="type-h3 text-[var(--color-primary)] mb-2">Leave a Reply</h3>
        <p className="type-body text-[var(--color-primary)]/60 text-sm mb-8">
          Your email address will not be published. Required fields are marked *
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl type-body animate-fadeInUp">
            Thank you for your comment! It has been submitted for moderation.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="comment" className="type-body font-semibold text-[var(--color-primary)] mb-2 block">Comment *</label>
              <textarea 
                id="comment" 
                name="comment" 
                rows="6" 
                required 
                placeholder="Write your comment here..."
                className="w-full px-4 py-3 border border-[var(--color-primary)]/20 rounded-xl type-body text-[var(--color-primary)] bg-white focus:outline-none focus:border-[var(--color-accent)] resize-none transition-all duration-250"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="author" className="type-body font-semibold text-[var(--color-primary)] mb-2 block">Name *</label>
                <input 
                  type="text" 
                  id="author" 
                  name="author" 
                  required 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-[var(--color-primary)]/20 rounded-xl type-body text-[var(--color-primary)] bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-250"
                />
              </div>
              <div>
                <label htmlFor="email" className="type-body font-semibold text-[var(--color-primary)] mb-2 block">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-[var(--color-primary)]/20 rounded-xl type-body text-[var(--color-primary)] bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-250"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="url" className="type-body font-semibold text-[var(--color-primary)] mb-2 block">Website</label>
              <input 
                type="url" 
                id="url" 
                name="url" 
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 border border-[var(--color-primary)]/20 rounded-xl type-body text-[var(--color-primary)] bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-250"
              />
            </div>

            <div className="mb-8 flex items-start gap-3">
              <input 
                type="checkbox" 
                id="save_info" 
                name="save_info" 
                className="mt-1.5 w-4 h-4 text-[var(--color-accent)] border-gray-300 rounded focus:ring-[var(--color-accent)]"
              />
              <label htmlFor="save_info" className="type-body text-[var(--color-primary)]/80 text-sm">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button 
              type="submit" 
              className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 font-semibold type-body"
            >
              Post Comment
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
