import React from 'react'

const Insights = () => {
  return (
    <div className="insights">
      <section>
        <h4 className='pl-10'>Missing Data Points</h4>
        <ul className="muted-list">
          <li> Some students have incomplete assessments — consider increasing coverage</li>
          <li> Time logs missing for 12% of entries — ensure session tracking</li>
        </ul>
      </section>

      <section>
        <h4>Potential Improvements</h4>
        <div className="suggestions">
          <div className="suggestion">Adaptive Difficulty Curve</div>
          <div className="suggestion">Retention Analysis</div>
        </div>
      </section>
    </div>
  )
}

export default Insights