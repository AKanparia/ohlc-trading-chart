import React from 'react'

function SymbolStatus({ open, close, time }) {
  const percentageChange = ((close - open) / open) * 100
  const date = new Date(time * 1000)
  return (
    <div className='symbol-status'>
      <div className='status'>
        <div className='symbol'>XYZ</div>
        {isNaN(percentageChange) ? null : (
          <div
            className={`percentageChange ${
              percentageChange > 0 ? 'bull' : 'bear'
            }`}
          >
            {percentageChange.toFixed(2)}%
          </div>
        )}
      </div>
      <div className='date'>
        <div className='label'>Date:</div>
        <div className='value'>
          {time ? new Intl.DateTimeFormat('en-GB').format(date) : ''}
        </div>
      </div>
    </div>
  )
}

export default SymbolStatus
