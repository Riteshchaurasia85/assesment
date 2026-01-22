import React from 'react'

const Badge = ({ status }) => (
  <span className={`status-badge ${status === 'Strong' ? 'strong' : 'average'}`}>{status}</span>
)

const SubjectTable = ({ rows = [] }) => {
  const mapStatus = (r) => {
    const acc = r.accuracy || 0
    const mast = r.mastery || 0
    return acc >= 20 || mast >= 10 ? 'Strong' : 'Low'
  }

  return (
    <div className="table-wrapper">
      <table className="subject-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Accuracy</th>
            <th>Mastery</th>
            <th>Avg Score</th>
            <th>Questions</th>
            <th>Time (min)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.subjectId || r.subjectName}>
              <td>{r.subjectName}</td>
              <td>{r.accuracy != null ? `${r.accuracy}%` : '—'}</td>
              <td>{r.mastery != null ? `${r.mastery}%` : '—'}</td>
              <td>{r.avgScore != null ? `${r.avgScore}%` : '—'}</td>
              <td>{r.totalQuestions != null ? r.totalQuestions : '—'}</td>
              <td>{r.totalTime != null ? r.totalTime : '—'}</td>
              <td><Badge status={mapStatus(r)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubjectTable