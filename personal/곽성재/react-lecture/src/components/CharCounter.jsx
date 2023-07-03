import { useEffect, useState } from "react"

const CharCounter = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  // useEffect(() => { 
  //   console.log('without dep')
  //   return () => {
  //     console.log('return ')
  //   }
  // })

  // useEffect(() => {
  //   console.log('[]')

  //   return () => {
  //     console.log('return []')
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('[charCount]')

  //   return () => {
  //     console.log('return [charCount]')
  //   }
  // }, [charCount])
  
  useEffect(() => {
    setCharCount(text.length)
  }, [text])

  const onChangeTextarea = (e) => {
    // console.log('first', e.target.value.length)
    // setCharCount(e.target.value.length);
    setText(e.target.value);
  }

  return (
    <>
      <textarea onChange={onChangeTextarea} value={text}></textarea>
      <p>Character Count : { charCount }</p>
    </>
  )
}

export default CharCounter