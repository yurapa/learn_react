import {useEffect} from "react";

export default function BtnClick () {
  useEffect(() => {

    document.getElementById('my-btn').onclick = () => {
      console.log('hello');
    }

    // this.ref.current.onclick = () => {
    //   console.log('hello 2');
    // }

    // BtnClick.button.onclick = () => {
    //   console.log('hello');
    // }

  }, [])

  return (
    <button id='my-btn'>Click me</button>
  );
}
