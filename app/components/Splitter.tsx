interface Props {
  word: string
}
export default function Splitter({word}: Props) {
  const characters = word.split('')
  return (
    <span>
      {characters.map((char, index) => {
        return <span className="char" key={index}>{char}</span>
      })}
    </span>
  )

}
