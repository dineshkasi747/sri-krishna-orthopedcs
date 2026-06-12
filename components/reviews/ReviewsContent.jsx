'use client';

import { useState, useMemo, useEffect } from 'react';
import { initialReviews } from '@/data/reviews';
import { FaStar, FaCheckCircle, FaTimes, FaPen, FaChevronDown, FaQuoteLeft } from 'react-icons/fa';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function ReviewsContent() {
  const sectionRef = useScrollAnimation();
  const [reviews, setReviews] = useState(initialReviews);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    category: 'Joint Replacement',
    rating: 5,
    quote: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Categories list
  const categories = [
    'All',
    'Joint Replacement',
    'Spine Surgery',
    'Sports Injuries',
    'Fracture Care',
    'Arthroscopy',
    'Paediatric Orthopaedics',
    'General Orthopaedics'
  ];

  // Ratings calculation helper
  const stats = useMemo(() => {
    const total = reviews.length;
    if (total === 0) return { average: 0, total: 0, breakdown: [0,0,0,0,0] };

    const sum = reviews.reduce((acc, curr) => acc + curr.stars, 0);
    const average = Math.round((sum / total) * 10) / 10;

    // Count distributions
    const counts = [0, 0, 0, 0, 0]; // Index 0 is 1 star, Index 4 is 5 star
    reviews.forEach(r => {
      const idx = Math.min(Math.max(r.stars - 1, 0), 4);
      counts[idx]++;
    });

    const breakdown = counts.map(count => Math.round((count / total) * 100)).reverse();

    return { average, total, breakdown };
  }, [reviews]);

  // Filter and sort reviews
  const filteredAndSortedReviews = useMemo(() => {
    let result = [...reviews];
    
    // Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(r => r.category === activeCategory);
    }

    // Sorting
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'highest') {
      result.sort((a, b) => b.stars - a.stars);
    } else if (sortBy === 'lowest') {
      result.sort((a, b) => a.stars - b.stars);
    }

    return result;
  }, [reviews, activeCategory, sortBy]);

  // Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle rating click
  const handleRatingClick = (ratingValue) => {
    setFormData(prev => ({ ...prev, rating: ratingValue }));
  };

  // Submit Review Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const { name, role, category, rating, quote } = formData;

    if (!name.trim() || !role.trim() || !quote.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (rating < 1 || rating > 5) {
      setFormError('Please select a rating between 1 and 5 stars.');
      return;
    }

    // Construct new review
    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
      category,
      stars: rating,
      date: new Date().toISOString().split('T')[0],
      avatar: null, // trigger dynamic initials avatar
      quote: quote.trim()
    };

    // Update state
    setReviews(prev => [newReview, ...prev]);
    setFormSubmitted(true);

    // Reset form after a brief delay and close modal
    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({
        name: '',
        role: '',
        category: 'Joint Replacement',
        rating: 5,
        quote: ''
      });
      setFormSubmitted(false);
    }, 2000);
  };

  // Get initials for avatar placeholders
  const getInitials = (name) => {
    if (!name) return 'P';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  // Colors for placeholder initials avatars (teal, orange, purple, blue, green gradients)
  const avatarGradients = [
    'linear-gradient(135deg, #07332F 0%, #0c5952 100%)',
    'linear-gradient(135deg, #F7A582 0%, #e07b51 100%)',
    'linear-gradient(135deg, #4A154B 0%, #7c2d82 100%)',
    'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)',
    'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)'
  ];

  const getAvatarStyle = (id) => {
    const idx = (id || 0) % avatarGradients.length;
    return {
      background: avatarGradients[idx],
      color: '#ffffff'
    };
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-background)] relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[var(--color-surface)] filter blur-[100px] opacity-40 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[var(--color-accent)] filter blur-[120px] opacity-20 pointer-events-none z-0"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP PANEL: STATS & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Big Score Card */}
          <div className="lg:col-span-4 bg-[var(--color-primary)] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between items-center text-center scroll-reveal" data-animation="fadeInUp">
            <div>
              <span className="text-white/60 text-sm font-semibold tracking-wider uppercase">Patient Satisfaction</span>
              <div className="text-7xl font-extrabold text-[var(--color-accent)] mt-4 mb-2 flex items-center justify-center font-figtree">
                {stats.average}
                <span className="text-2xl text-white/50 font-normal ml-1">/5</span>
              </div>
              <div className="flex justify-center text-[var(--color-accent)] space-x-1 text-2xl mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(stats.average) ? 'text-[var(--color-accent)]' : 'text-white/20'} />
                ))}
              </div>
            </div>
            
            <div className="w-full pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm font-medium">
                Based on <span className="text-white font-bold">{stats.total} verified reviews</span>
              </p>
              <p className="text-white/50 text-xs mt-1">100% genuine patients experiences</p>
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-md border border-[var(--color-accent)]/10 flex flex-col justify-center scroll-reveal" data-animation="fadeInUp" data-delay="100">
            <h3 className="font-bold text-[var(--color-primary)] text-lg mb-6 flex items-center">
              Rating Distribution
            </h3>
            <div className="space-y-4">
              {stats.breakdown.map((pct, index) => {
                const starNum = 5 - index;
                return (
                  <div key={starNum} className="flex items-center space-x-4">
                    <span className="w-3 text-sm font-semibold text-gray-500">{starNum}</span>
                    <FaStar className="text-[var(--color-accent)] text-sm flex-shrink-0" />
                    <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-[var(--color-primary)] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                    <span className="w-10 text-right text-xs font-bold text-gray-500">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Write Card */}
          <div className="lg:col-span-3 bg-[var(--color-surface)] p-8 rounded-2xl shadow-md border border-[var(--color-accent)]/20 flex flex-col justify-between items-start scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--color-primary)] text-xl leading-tight">Shared your care experience yet?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your reviews help us grow and help other patients in Visakhapatnam make informed healthcare decisions.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 inline-flex items-center justify-center space-x-2 bg-[var(--color-primary)] text-white px-6 py-3.5 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-bold text-sm w-full group shadow-md"
            >
              <FaPen className="text-xs group-hover:rotate-12 transition-transform duration-300" />
              <span>Write Patient Review</span>
            </button>
          </div>

        </div>

        {/* CONTROLS BAR: CATEGORY TABS & SORT */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 pb-6 border-b border-gray-200 scroll-reveal" data-animation="fadeInUp">
          
          {/* Scrollable Category Filter */}
          <div className="flex items-center overflow-x-auto pb-3 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 flex-1">
            <div className="flex space-x-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'bg-white text-[var(--color-primary)]/75 hover:bg-[var(--color-surface)] border border-gray-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-3 self-end lg:self-auto">
            <span className="text-sm font-medium text-gray-500">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm font-semibold text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] shadow-sm cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
              <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
            </div>
          </div>

        </div>

        {/* REVIEWS GRID LIST */}
        {filteredAndSortedReviews.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 scroll-reveal" data-animation="fadeInUp">
            <div className="w-16 h-16 bg-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-accent)]">
              <FaPen size={20} />
            </div>
            <h4 className="font-bold text-[var(--color-primary)] text-lg">No reviews found</h4>
            <p className="text-gray-500 text-sm max-w-xs mx-auto mt-2">
              Be the first to leave a review in the "{activeCategory}" category!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-bold text-sm"
            >
              Write Review
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedReviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white p-8 rounded-2xl shadow-md border border-[var(--color-accent)]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 card-hover-lift group relative overflow-hidden scroll-reveal"
                data-animation="fadeInUp"
              >
                {/* Micro decorative gradient highlight */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Rating Stars & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-surface)] px-3 py-1.5 rounded-md">
                      {rev.category}
                    </span>
                    <div className="flex text-yellow-400 space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < rev.stars ? 'text-[var(--color-accent)]' : 'text-gray-200'} />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <FaQuoteLeft className="text-gray-100 absolute -top-4 -left-3 text-5xl pointer-events-none group-hover:text-[var(--color-surface)] transition-colors duration-300 z-0" />
                    <p className="text-gray-600 text-[15px] leading-relaxed relative z-10 italic">
                      "{rev.quote}"
                    </p>
                  </div>
                </div>

                {/* Patient Profile Details */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  {rev.avatar ? (
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="w-12 h-12 rounded-full object-cover border border-gray-100"
                    />
                  ) : (
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-sm"
                      style={getAvatarStyle(rev.id)}
                    >
                      {getInitials(rev.name)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[var(--color-primary)] truncate text-base">{rev.name}</h4>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{rev.role}</p>
                  </div>
                  
                  <div className="flex flex-col items-end flex-shrink-0">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <FaCheckCircle className="mr-1 text-[8px]" /> Verified
                    </span>
                    <span className="text-[10px] text-gray-400 mt-1.5">{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* WRITE REVIEW MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
          {/* Backdrop Overlay */}
          <div 
            onClick={() => { if (!formSubmitted) setIsModalOpen(false); }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          ></div>
          
          {/* Modal Container */}
          <div className="bg-white rounded-2xl w-full max-w-xl p-8 relative z-10 shadow-2xl overflow-hidden animate-paperReveal max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            {!formSubmitted && (
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 focus:outline-none p-1.5 rounded-full hover:bg-gray-100 transition-all"
              >
                <FaTimes size={18} />
              </button>
            )}

            {formSubmitted ? (
              /* Success Anim Card */
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <FaCheckCircle size={48} />
                </div>
                <h3 className="font-bold text-2xl text-[var(--color-primary)] mb-2">Review Submitted!</h3>
                <p className="text-gray-500 text-sm max-w-sm">
                  Thank you, <span className="font-semibold text-gray-700">{formData.name}</span>. Your review has been added to our patient board.
                </p>
              </div>
            ) : (
              /* Review Form */
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-surface)] px-2.5 py-1 rounded">
                    Patient Voice
                  </span>
                  <h3 className="font-bold text-2xl text-[var(--color-primary)] mt-3">Share Your Care Experience</h3>
                  <p className="text-gray-500 text-xs mt-1">Fields marked with * are required.</p>
                </div>

                {formError && (
                  <div className="mb-4 bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm font-semibold border border-red-100 flex items-center">
                    <span className="mr-2">•</span> {formError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Rating star selector */}
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      Your Rating *
                    </label>
                    <div className="flex items-center space-x-1.5">
                      {[1, 2, 3, 4, 5].map((starNum) => (
                        <button
                          key={starNum}
                          type="button"
                          onClick={() => handleRatingClick(starNum)}
                          onMouseEnter={() => setHoverRating(starNum)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="text-3xl focus:outline-none transition-colors"
                        >
                          <FaStar 
                            className={
                              starNum <= (hoverRating || formData.rating)
                                ? 'text-[var(--color-accent)]'
                                : 'text-gray-200'
                            }
                          />
                        </button>
                      ))}
                      <span className="text-sm font-bold text-gray-500 ml-4 font-figtree">
                        {formData.rating === 5 && 'Excellent'}
                        {formData.rating === 4 && 'Very Good'}
                        {formData.rating === 3 && 'Good'}
                        {formData.rating === 2 && 'Average'}
                        {formData.rating === 1 && 'Poor'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      />
                    </div>

                    {/* Patient Role/Profession/Condition */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-1.5">
                        Your Role / Condition *
                      </label>
                      <input
                        type="text"
                        name="role"
                        required
                        placeholder="e.g. Knee Surgery Patient"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  {/* Treatment Category */}
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-primary)] mb-1.5">
                      Treatment Received *
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
                      >
                        {categories.filter(c => c !== 'All').map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-primary)] mb-1.5">
                      Your Review *
                    </label>
                    <textarea
                      name="quote"
                      required
                      rows="4"
                      placeholder="Write your recovery story here. What did you like about the treatment and doctors?"
                      value={formData.quote}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all font-bold text-sm shadow-md mt-2"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Global Scroll Reveal JS support - if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hide scrollbars for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbars for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />

    </section>
  );
}
