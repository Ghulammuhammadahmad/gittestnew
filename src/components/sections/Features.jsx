import { features } from '../../data/features'
import SectionLabel from '../ui/SectionLabel'

const Features = () => (
  <section id="features" className="section">
    <div className="container features-grid">
      <div>
        <SectionLabel>FEATURES</SectionLabel>
        <h2 className="headline" style={{ fontSize: '64px', margin: '8px 0' }}>ALL-IN-ONE PLATFORM<br />FOR SAVINGS</h2>
        <p className="muted">Simplify your financial life by securely connecting your accounts automatically categorizing transactions.</p>
        <div>
          {features.map((f) => (
            <div key={f.id} className={`feature-row ${f.active ? 'active' : ''}`}>
              <div><span style={{ color: f.active ? '#fff' : 'var(--color-orange)', marginRight: 10 }}>{f.id}</span>{f.title}</div>
              <span>→</span>
            </div>
          ))}
        </div>
      </div>
      <article className="invoice">
        <h3 style={{ marginTop: 0 }}>Latest Invoice</h3>
        <div className="invoice-row"><div><strong>Kelly Williams</strong><div style={{ fontSize: 12 }}>67% Success · 14% Pending · 19% Cancel</div></div><span className="badge b-paid">PAID NOW</span></div>
        <div className="invoice-row"><div><strong>John Tarry</strong><div style={{ fontSize: 12 }}>3 July 2016</div></div><span className="badge b-invoice">INVOICE</span></div>
        <div className="invoice-row" style={{ borderBottom: 0 }}><div><strong>Caitlin Clark</strong><div style={{ fontSize: 12 }}>3 July 2016</div></div><span className="badge b-pending">PENDING</span></div>
      </article>
    </div>
  </section>
)

export default Features
