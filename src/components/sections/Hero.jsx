import { motion } from 'framer-motion'
import Button from '../ui/Button'
import PaymentCard from '../ui/PaymentCard'

const Hero = () => (
  <section id="hero" className="section hero">
    <div className="container hero-grid">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <h1 className="headline">SECURE YOUR<br />FINANCIAL FUTURE</h1>
        <p className="muted">Trusted Protection and Expert Guidance for Your Finances</p>
        <Button>GET STARTED →</Button>
        <div className="social-proof">
          <div>
            <small className="muted">Active Users</small>
            <div style={{ fontWeight: 700, fontSize: 28 }}>95K+</div>
          </div>
          <div className="avatars">{Array.from({ length: 5 }).map((_, i) => <span className="avatar" key={i} />)}</div>
        </div>
      </motion.div>

      <motion.div className="card-stack" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <PaymentCard variant="dark" />
        <PaymentCard variant="silver" />
        <PaymentCard variant="orange" />
      </motion.div>

      <motion.div className="steps" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        {['Selecting your provider', 'Set Up Your Account', 'Enjoy Seamless Banking FinGuard'].map((s) => (
          <div className="step" key={s}><span>{s}</span><span>→</span></div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Hero
