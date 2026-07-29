export default function TextLines({ text }) {
  return text.split('\n').map((line, index) => (
    <span className="text-line" key={`${line}-${index}`}>{line}</span>
  ))
}
