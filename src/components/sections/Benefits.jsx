import { CircleX, MapPin, CheckCircle2 } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import PaymentCard from '../ui/PaymentCard';

const Benefits = () => (
  <section className="benefits" id="benefits">
    <div className="container benefits__layout">
      <div className="benefits__cards">
        <PaymentCard variant="silver" rotation={-12} />
        <PaymentCard variant="orange" rotation={8} />
      </div>
      <div>
        <SectionLabel>BENEFITS</SectionLabel>
        <h2>SHOPPING ON<br />INTERNATIONAL</h2>
        <ul className="benefits__list">
          <li><CheckCircle2 size={18} /> Get 2% cashback on all purchases.</li>
          <li><CircleX size={18} /> Access exclusive travel deals and discounts on flights and hotels.</li>
          <li><MapPin size={18} /> Includes travel insurance and purchase protection.</li>
        </ul>
        <Button variant="secondary">LEARN MORE ↗</Button>
      </div>
    </div>
  </section>
);

export default Benefits;
