import React from 'react'

const items = [
  { title: 'Coverage Gaps', text: 'Sanskrit: 28% gaps' },
  { title: 'Time Efficiency', text: 'Avg session: 33 min' },
  { title: 'Accuracy Trend', text: 'Last 30 days: +2%' },
]

const BottomInsights = () => {
  return (
    <div className="bottom-grid">
      {items.map((it) => (
        <div className="card bottom-card" key={it.title}>
          <div className="bottom-icon" />
          <div>
            <div className="bottom-title">{it.title}</div>
            <div className="muted small">{it.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BottomInsights