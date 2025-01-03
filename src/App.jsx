import { useEffect, useState } from 'react';
import './App.css'

function App() {

  return (
    <>
      <Quiz/>
    </>
  )
}

function Quiz(){
  const [quiz, setQuiz] = useState([]);

  useEffect(()=>{
    async function backendCall() {
      const response = await fetch('http://localhost:3000/')
      const res = await response.json();
      setQuiz(res);
    }

    return ()=>{

    }
  },[])

  return (
    <>
      {JSON.stringify(quiz)}
    </>
  )
}

export default App
