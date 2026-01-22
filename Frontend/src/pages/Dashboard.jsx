import React, { useEffect, useState } from 'react'
import MetricCard from '../components/MetricCard'
import SubjectBarChart from '../components/SubjectBarChart'
import Insights from '../components/Insights'
import SubjectTable from '../components/SubjectTable'
import BottomInsights from '../components/BottomInsights'
import './Dashboard.css'

const Dashboard = () => {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/data')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        if (!json.msg || !json.msg.length) {
          setError('No data available')
          setLoading(false)
          return
        }
        setService(json.msg[0])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="dashboard-root"><div className="card">Loading dashboard...</div></div>
  if (error) return <div className="dashboard-root"><div className="card">Error: {error}</div></div>

  const overall = service.overall?.stats || {}
  const subjects = service.subjects?.stats || []
  const totalQuestions = subjects.reduce((s, x) => s + (x.totalQuestions || 0), 0)

  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <div>
          <h1>Overview</h1>
          <p className="subtitle">Performance summary for Grade 9</p>
        </div>
      </header>

      <section className="metrics-grid">
        <MetricCard iconColor="#2F6DF6" label="AVG SCORE" value={overall.avgScore ? `${Math.round(overall.avgScore)}%` : '—'} supporting="Overall average score" />
        <MetricCard iconColor="#2F6DF6" label="ACCURACY" value={overall.accuracy ? `${Math.round(overall.accuracy)}%` : '—'} supporting={totalQuestions ? `on ${totalQuestions} questions` : 'No questions data'} />
        <MetricCard iconColor="#7C4CFF" label="MASTERY" value={overall.mastery ? `${Math.round(overall.mastery)}%` : '—'} supporting={overall.masteryStatus || ''} />
        <MetricCard iconColor="#22C55E" label="TOTAL TIME" value={overall.totalTime ? `${(Math.round(overall.totalTime*10)/10)}h` : '—'} supporting="learning time" />
      </section>

      <section className="middle-grid">
        <div className="card chart-card">
          <h3>Subject Performance</h3>
          <p className="muted">Comparing Accuracy vs Mastery across subjects</p>
          <div className="chart-wrapper">
            <SubjectBarChart data={subjects.map(s => ({ name: s.subjectName, accuracy: s.accuracy, mastery: s.mastery }))} />
          </div>
        </div>

        <div className="card insights-card">
          <h3 className='ml-[10px]'>Analytics Insights</h3>
          <Insights />
        </div>
      </section>

      <section className="card table-card">
        <h3>Detailed Subject Breakdown</h3>
        <SubjectTable rows={subjects} />
      </section>

      <section className="bottom-cards">
        <BottomInsights />
      </section>
    </div>
  )
}

export default Dashboard
