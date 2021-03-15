import React, { useEffect, useState } from 'react'

function App() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <div>Stuff</div>
}

export default App
