import {useEffect, useState} from "react";

const fetchData = () => Promise.resolve('FetchDisplayResult');


export const FetchDisplayResult = () => {
  const [result, setResult] = useState('')

  useEffect(() => {
    fetchData().then((value) => setResult(value))
  }, [])

  return <div>{result}</div>
}
