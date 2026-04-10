import Button from '../ui/Button'

const FooterCTA = () => (
  <section className="section footer-cta">
    <div className="bg-word">finguard</div>
    <div className="container" style={{ marginTop: -100, position: 'relative', zIndex: 2 }}>
      <h2 className="headline" style={{ fontSize: '76px', margin: '0 0 20px' }}>READY TO TAKE<br />CONTROL OF YOUR<br />FINANCIAL FUTURE</h2>
      <Button>GET STARTED →</Button>
    </div>
  </section>
)

export default FooterCTA
