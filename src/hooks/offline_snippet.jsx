import { useEffect, useState } from 'react'

const offline_snippet = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/courses`)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])
  return data
}

export default offline_snippet
