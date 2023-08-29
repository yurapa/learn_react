export default function SelectSubmit(props) {
  let value;

  const submit =() => (
    console.log(value)
  )

  return (
    <>
      <button onClick={submit}>Submit</button>
      <select onChange={(e) => {
        value = e.target.value;
      }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
      </select>
    </>
  );
}
