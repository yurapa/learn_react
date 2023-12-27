import {useState, useLayoutEffect} from "react";


export default function ContactForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState();
  const [isValidAge, setIsValidAge] = useState(false);

  useLayoutEffect(() => {
    // useEffect -> I had some error for isValidAge >= 14
    setIsValidAge(age >= 14)
  }, [age]);


  return (
    <form style={{'border': '1px dashed red'}}>
      <label htmlFor="firstName">Name: </label>
      <input type="text" name="firstName"
             value={name}
             onChange={(e) => setName(e.target.value)}/>
      <br/>

      <label htmlFor="age">Age: </label>
      <input type="text" name="age" value={age}
             onChange={(e) => setAge(e.target.value)}/>
      <br/>
      {isValidAge && <>
        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" value={email}
               onChange={(e) => setEmail(e.target.value)}/>
      </>}
    </form>
  )
}
