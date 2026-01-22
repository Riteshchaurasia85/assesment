import React from 'react'

const MetricCard = ({ iconColor = '#2F6DF6', label, value, supporting, indicator }) => {
  return (
    <div className="card metric-card">
      <div className="metric-top">
        <div className="icon" style={{background: iconColor}} />
        {indicator && (
          <div className={`indicator ${indicator.positive ? 'up' : 'down'}`}>{indicator.value}</div>
        )}
      </div>
      <div className="metric-body">
        <div className="metric-label">{label}</div>
        <div className="metric-value">{value}</div>
        <div className="metric-support">{supporting}</div>
      </div>
    </div>
  )
}

export default MetricCard
