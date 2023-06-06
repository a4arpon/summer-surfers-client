import { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = title + ' | SummerSurfers'
  }, [title])
}

export default useTitle
