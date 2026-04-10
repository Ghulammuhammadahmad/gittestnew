import useCountUp from '../../hooks/useCountUp';

const StatCard = ({ item, animate }) => {
  const Icon = item.icon;
  const number = useCountUp(item.value, animate);

  return (
    <article className={`stat-card ${item.orange ? 'stat-card--orange' : 'stat-card--dark'}`}>
      <Icon size={20} className="stat-card__icon" />
      <p className="stat-card__value">{number}{item.suffix}</p>
      <p className="stat-card__desc">{item.description}</p>
    </article>
  );
};

export default StatCard;
