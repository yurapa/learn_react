import {useState} from "react";

const MyComponent = ({children}) => {
  const [counter, setCounter] = useState(0);

  console.log('counter = ', counter);

  return (
    <div>
      {counter}
      {children(() => setCounter(counter + 1))}
    </div>
  )
}

export const BtnClick1 = () => {
  return (
    <MyComponent>
      {
        (props) => {
          return <button {...props}>BtnClick1</button>
        }
      }
    </MyComponent>
  )
}
