import { CheckCircle2, MapPin, XCircle } from 'lucide-react'
import Button from '../ui/Button'
import PaymentCard from '../ui/PaymentCard'
import SectionLabel from '../ui/SectionLabel'

const Benefits = () => (
  <section id="benefits" className="section">
    <div className="container benefits-grid">
      <div className="card-stack" style={{ height: 260 }}>
        <PaymentCard variant="silver" style={{ left: 40, top: 20 }} />
        <PaymentCard variant="orange" style={{ left: 0, top: 70 }} />
      </div>
      <div>
        <SectionLabel>BENEFITS</SectionLabel>
        <h2 className="headline" style={{ fontSize: '64px', margin: '10px 0' }}>SHOPPING ON<br />INTERNATIONAL</h2>
        <div className="benefit-list">
          <div><CheckCircle2 color="var(--color-success)" /> Get 2% cashback on all purchases.</div>
          <div><XCircle color="var(--color-cancel)" /> Access exclusive travel deals and discounts on flights and hotels.</div>
          <div><MapPin color="var(--color-orange)" /> Includes travel insurance and purchase protection.</div>
        </div>
        <Button>LEARN MORE ↗</Button>
      </div>
    </div>
  </section>
)

export default Benefits
