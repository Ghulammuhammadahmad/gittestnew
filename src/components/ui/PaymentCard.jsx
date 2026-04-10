const cardNames = {
  orange: 'finguard',
  silver: 'ralph rewards',
  dark: 'union',
};

const PaymentCard = ({ variant = 'orange', rotation = 0, className = '' }) => (
  <article className={`payment-card payment-card--${variant} ${className}`} style={{ '--rotation': `${rotation}deg` }}>
    <div className="payment-card__chip" />
    <p className="payment-card__dots">•••• •••• •••• 4521</p>
    <p className="payment-card__name">{cardNames[variant]}</p>
    <p className="payment-card__visa">VISA</p>
  </article>
);

export default PaymentCard;
