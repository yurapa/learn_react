import {useEffect, useState} from "react";

const Blink1 = (props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 4000)
  }, [])

  if (visible) return props.children;
  else return null;
}

// const Blink2 = () => {
//    wait(4);
//    return null;s
// }

const Blink3 = (props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setVisible(true)
    }, 4000)
  }, [])

  console.log('blink 3, visible ::: ', visible);
  console.log('blink 3, props.body ::: ', props.body);

  if (visible) return props.body;
  else return null;
}

export const HiderWrapper = () => {
  return <>
    <Blink1>blinking 1</Blink1>
    <br/>
    <Blink3>blinking 3</Blink3>
  </>
}
