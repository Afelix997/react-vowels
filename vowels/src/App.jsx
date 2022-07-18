import { useState } from 'react'
import VowelCounter from "./components/VowelCounter.jsx"
import Input from "./components/Input.jsx"
import './App.css'


function App() {

  const [word, setWord] = useState([])

  const getWord = () => {
  let newWord = document.getElementById('input').value
  let newData = [...word, newWord]
  setWord(newData)
}

  return (
    <div>
      <h1 id="my-header">My Vowels App</h1> 
      <Input handleClick={getWord} />
      <div>
        <VowelCounter word={word} />
      </div>
    </div>
  );
}


export default App
