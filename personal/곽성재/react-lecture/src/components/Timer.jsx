import { useEffect, useState } from "react"

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    
    return () => {
      console.log('return _ Timer _ useEffect when seconds is', seconds)
      clearInterval(timer)
    }
  }, [seconds])
  
  return (
    <>
      <p>{seconds }초가 흐르는중..</p>
    </>
  )
}

export default Timer