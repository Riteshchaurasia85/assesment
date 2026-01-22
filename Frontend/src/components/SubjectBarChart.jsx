import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

const SubjectBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 10, right: 80, left: 0, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
        <XAxis dataKey="name" tick={{ fill: '#374151', fontSize: 12 }} />
        <YAxis tickFormatter={(v) => `${v}%`} domain={[0, 100]} tick={{ fill: '#514137', fontSize: 12 }} />
        <Tooltip formatter={(value) => `${value}%`} cursor={{ fill: 'rgba(47,109,246,0.04)' }} />
        <Legend verticalAlign="bottom" height={36} />
        <Bar dataKey="accuracy" name="Accuracy" fill="#2F6DF6" radius={[6,6,0,0]} barSize={18} />
        <Bar dataKey="mastery" name="Mastery" fill="#7C4CFF" radius={[6,6,0,0]} barSize={18} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SubjectBarChart