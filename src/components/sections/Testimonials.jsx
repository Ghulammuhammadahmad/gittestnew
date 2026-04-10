import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const testimonial = testimonials[0];

  return (
    <section className="testimonials">
      <div className="container">
        <SectionLabel>WHAT THEY SAYS ABOUT US</SectionLabel>
        <article className="testimonial-card">
          <span className="quote-mark">”</span>
          <p>{testimonial.quote}</p>
          <div className="testimonial__meta">
            <span className="avatar" />
            <div>
              <h4>{testimonial.name}</h4>
              <small>{testimonial.title}</small>
            </div>
            <div className="testimonial__nav">
              <button aria-label="Previous"><ArrowLeft size={16} /></button>
              <button aria-label="Next"><ArrowRight size={16} /></button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
