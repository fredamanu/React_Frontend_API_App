import { useEffect, useState } from "react"

export default function useCountries(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
  }, [url])

  return { data, error }
}
