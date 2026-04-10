import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { testimonial } from '../../data/testimonials'

const Testimonials = () => (
  <section className="section">
    <div className="container">
      <SectionLabel>WHAT THEY SAYS ABOUT US</SectionLabel>
      <article className="testimonial-card">
        <span className="quote-mark">"</span>
        <p style={{ fontSize: 30, fontStyle: 'italic', maxWidth: 850 }}>
          “{testimonial.quote}”
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="avatar" style={{ marginLeft: 0 }} />
            <div><strong>{testimonial.name}</strong><div className="muted">{testimonial.title}</div></div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}><ArrowLeft /><ArrowRight /></div>
        </div>
      </article>
    </div>
  </section>
)

export default Testimonials
