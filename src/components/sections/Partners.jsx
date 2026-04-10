import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import PartnerTile from '../ui/PartnerTile';
import Button from '../ui/Button';
import { partners } from '../../data/partners';

const Partners = () => (
  <section className="partners" id="partners">
    <div className="container partners__layout">
      <div>
        <SectionLabel>OUR TRUSTED PARTNERS</SectionLabel>
        <h2>REAL-TIME FINANCIAL<br />MONITORING</h2>
        <p>
          Just like us, finguard believes in building long-term relationships with clients. Their focus on
          customer service aligns perfectly with our own values.
        </p>
        <strong className="partners__stat">98%</strong>
        <p>Partners are happy with our collaboration, noting increased efficiency and mutual growth since joining us.</p>
      </div>
      <motion.div className="partners__grid" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        {partners.map((partner) => <PartnerTile key={partner} name={partner} />)}
      </motion.div>
      <div className="partners__cta">
        <h3>CREATING IMPACTFUL SOLUTIONS AND LASTING PARTNERSHIPS</h3>
        <Button>LET'S GROW TOGETHER →</Button>
      </div>
    </div>
  </section>
);

export default Partners;
