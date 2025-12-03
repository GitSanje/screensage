import { useState, useEffect } from 'react'

function useApiReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.api) {
      setReady(true)
      return
    }

    const listener = () => setReady(true)
    window.addEventListener('preload-ready', listener)

    return () => window.removeEventListener('preload-ready', listener)
  }, [])

  return ready
}

export default useApiReady