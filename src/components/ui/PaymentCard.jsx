const PaymentCard = ({ variant = 'orange', style }) => (
  <div className={`payment-card ${variant}`} style={style}>
    <div className="chip" />
    <div style={{ letterSpacing: 6, marginBottom: 12 }}>•••• •••• •••• 4521</div>
    <strong>{variant === 'silver' ? 'ralph rewards' : 'finguard'}</strong>
    <span className="visa">VISA</span>
  </div>
)

export default PaymentCard
