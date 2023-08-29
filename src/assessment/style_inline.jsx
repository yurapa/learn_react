export default function StyleInline (props) {

  document.getElementById('textColor').style.color = 'blue'

  // Cannot read property 'style' of null in JavaScript.
  // This error occurs when you select an element that
  // doesn't exist in the Document Object Model (DOM).

  return (
    <span id='textColor' style={{ color: 'red' }}>Text color</span>
  );
}
