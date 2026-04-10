import Button from '../ui/Button'
import PartnerTile from '../ui/PartnerTile'
import SectionLabel from '../ui/SectionLabel'
import { partners } from '../../data/partners'

const Partners = () => (
  <section id="partners" className="section" style={{ background: 'var(--color-bg-dark)' }}>
    <div className="container partners-grid" style={{ gridTemplateColumns: '1.1fr 1fr .9fr' }}>
      <div>
        <SectionLabel>OUR TRUSTED PARTNERS</SectionLabel>
        <h2 className="headline" style={{ fontSize: '64px', margin: '10px 0' }}>REAL-TIME FINANCIAL<br />MONITORING</h2>
        <p className="muted">Just like us, finguard believes in building long-term relationships with clients. Their focus on customer service aligns perfectly with our own values.</p>
        <div className="stat-number" style={{ marginTop: 30 }}>98%</div>
        <p className="muted">Partners are happy with our collaboration, noting increased efficiency and mutual growth since joining us.</p>
      </div>
      <div className="partner-tiles">{partners.map((p) => <PartnerTile key={p} name={p} />)}</div>
      <aside className="cta-panel">
        <h3 className="headline" style={{ fontSize: 42, marginTop: 0 }}>CREATING IMPACTFUL SOLUTIONS AND LASTING PARTNERSHIPS</h3>
        <Button>LET'S GROW TOGETHER →</Button>
      </aside>
    </div>
  </section>
)

export default Partners
