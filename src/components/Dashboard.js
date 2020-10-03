import React from 'react'

function Dashboard({ title, children }) {
  return (
    <main className='container dashboard'>
      <div className='row'>
        <h3 className='dashboard-title'>{title}</h3>
        <div className='dashboard-content'>{children}</div>
      </div>
    </main>
  )
}

export default Dashboard
