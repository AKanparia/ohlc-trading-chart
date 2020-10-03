import React from 'react'

function Dashboard({ title, children }) {
  return (
    <main className='container'>
      <h1>{title}</h1>
      {children}
    </main>
  )
}

export default Dashboard
