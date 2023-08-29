import {useState} from "react";

const fetchData = () =>
  new Promise((r) =>
    setTimeout(() =>
      r(Date.now()), 100));


export const FetchStatement = () => {
  const [result, setResult] = useState();
  const data = fetchData().then((value) => {
    console.log('test222');
    setResult(value)
  });


  return <div>
    {result === data.toString() ? (<div>hello</div>) : (<div>bye</div>)}
  </div>
}
