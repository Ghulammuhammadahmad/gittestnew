import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import StatCard from '../ui/StatCard'
import { stats } from '../../data/stats'
import useScrollReveal from '../../hooks/useScrollReveal'

const AboutUs = () => {
  const { ref, visible } = useScrollReveal()
  return (
    <section id="products" className="section" ref={ref}>
      <div className="container">
        <SectionLabel>ABOUT US</SectionLabel>
        <div className="about-grid">
          <motion.h2 className="headline" style={{ fontSize: '64px', margin: 0 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>GETTING TO<br />KNOW FINGUARD</motion.h2>
          <p className="muted">We are more than just a financial service provider; we are your trusted partner in navigating the complexities of finance.</p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => <StatCard key={s.id} stat={s} visible={visible} />)}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
