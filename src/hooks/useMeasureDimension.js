import React from 'react'

const defaultState = {
  width: 0,
  height: 0,
}

function useMeasureDimension(ref) {
  const [dimension, setDimension] = React.useState(defaultState)

  const observer = React.useMemo(
    () =>
      new window.ResizeObserver((entries) => {
        if (entries[0]) {
          const { width, height } = entries[0].contentRect
          setDimension({ width: Math.floor(width), height: Math.floor(height) })
        }
      }),
    []
  )

  React.useLayoutEffect(() => {
    if (!ref || !ref.current) return
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return dimension
}

export default Boolean(window.ResizeObserver)
  ? useMeasureDimension
  : () => [() => {}, defaultState]
