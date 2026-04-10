import useCountUp from '../../hooks/useCountUp'

const StatCard = ({ stat, visible }) => {
  const value = useCountUp(stat.value, visible)
  return (
    <article className={`stat-card ${stat.orange ? 'orange' : ''}`}>
      <div className="stat-number">{value}{stat.suffix}</div>
      <p className="muted" style={{ color: stat.orange ? '#ffe6dc' : undefined }}>{stat.description}</p>
    </article>
  )
}

export default StatCard
