import { useEffect, useState } from 'react'

const useCountUp = (target, trigger, duration = 1200) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const stepMs = 16
    const steps = Math.ceil(duration / stepMs)
    const inc = target / steps
    const interval = setInterval(() => {
      start += inc
      if (start >= target) {
        setValue(target)
        clearInterval(interval)
      } else {
        setValue(Math.floor(start))
      }
    }, stepMs)
    return () => clearInterval(interval)
  }, [target, trigger, duration])

  return value
}

export default useCountUp
