import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import StatCard from '../ui/StatCard';
import { stats } from '../../data/stats';
import useScrollReveal from '../../hooks/useScrollReveal';

const AboutUs = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="about" ref={ref} id="products">
      <div className="container">
        <SectionLabel>ABOUT US</SectionLabel>
        <div className="about__intro">
          <h2>GETTING TO<br />KNOW FINGUARD</h2>
          <p>
            We are more than just a financial service provider; we are your trusted partner in navigating
            the complexities of finance.
          </p>
        </div>
        <motion.div className="about__stats" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          {stats.map((item) => <StatCard key={item.title} item={item} animate={visible} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
