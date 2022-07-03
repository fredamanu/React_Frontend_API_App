import { useEffect, useState } from "react"
import {Country} from "../typescript"
export default function useCountries(url: string) {
  const [data, setData] = useState<null|Country[]>(null)
  const [error, setError] = useState<null|string>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
  }, [url])

  return { data, error }
}
