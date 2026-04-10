import { motion } from 'framer-motion';
import Button from '../ui/Button';
import PaymentCard from '../ui/PaymentCard';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => (
  <section className="hero">
    <div className="container hero__layout">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h1>SECURE YOUR<br />FINANCIAL FUTURE</h1>
        <p>Trusted Protection and Expert Guidance for Your Finances</p>
        <Button>GET STARTED →</Button>
        <div className="hero__proof">
          <p>Active Users</p>
          <strong>95K+</strong>
          <div className="avatars">{[...Array(5)].map((_, i) => <span key={i} />)}</div>
        </div>
      </motion.div>

      <motion.div className="hero__cards" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <PaymentCard variant="dark" rotation={10} className="floating" />
        <PaymentCard variant="silver" rotation={3} className="floating floating--delay" />
        <PaymentCard variant="orange" rotation={-8} className="floating" />
      </motion.div>

      <motion.ul className="hero__steps" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <li><span>1</span> Selecting your provider →</li>
        <li><span>2</span> Set Up Your Account →</li>
        <li><span>3</span> Enjoy Seamless Banking FinGuard →</li>
      </motion.ul>
    </div>
  </section>
);

export default Hero;
