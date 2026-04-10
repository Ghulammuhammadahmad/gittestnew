import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import { features, invoiceRows } from '../../data/features';

const Features = () => (
  <section className="features" id="features">
    <div className="container features__layout">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <SectionLabel>FEATURES</SectionLabel>
        <h2>ALL-IN-ONE PLATFORM<br />FOR SAVINGS</h2>
        <p>Simplify your financial life by securely connecting your accounts automatically categorizing transactions.</p>
        <div>
          {features.map((feature) => (
            <div key={feature.id} className={`feature-item ${feature.active ? 'feature-item--active' : ''}`}>
              <span>{feature.id}</span>
              <p>{feature.title}</p>
              <ArrowRight size={18} />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="invoice" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <h3>Latest Invoice</h3>
        {invoiceRows.map((row) => (
          <div key={row.name} className="invoice__row">
            <span className="avatar" />
            <div>
              <h4>{row.name}</h4>
              <p>{row.meta.join(' · ')}</p>
            </div>
            <button className={`chip chip--${row.type}`}>{row.status}</button>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Features;
