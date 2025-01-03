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
  const [bcOnAns, setBcOnAns] = useState();

  async function backendCall() {
    const response = await fetch('http://localhost:3000/')
    const res = await response.json(); 
    setQuiz(res); 
  }

  useEffect(()=>{
    backendCall()
  },[])

  function onChangeHandler(event){
    if(event.target.checked){
      if(quiz[0].answer == event.target.value){
        setBcOnAns('green');
        event.target.backgroundColor = bcOnAns
      }
      else{
        setBcOnAns('red');
        event.target.backgroundColor = bcOnAns
      }
    }
  }

  return (
    <>
    {quiz[0] &&
      <div>
        <h3>{quiz[0].question}</h3>

        <label>
          <input 
            type='checkbox' 
            value={quiz[0].opt1}
            onChange={onChangeHandler}
            />
          {quiz[0].opt1}
        </label>
        <br/>
        <label>
          <input 
            type='checkbox' 
            value={quiz[0].opt2}
            onChange={onChangeHandler}
            />
          {quiz[0].opt2}
        </label>
        <br/>
        <label>
          <input 
            type='checkbox' 
            value={quiz[0].opt3}
            onChange={onChangeHandler}
            />
          {quiz[0].opt3}
        </label>
        <br/>
        <label>
          <input 
            type='checkbox' 
            value={quiz[0].opt4}
            onChange={onChangeHandler}
            />
          {quiz[0].opt4}
        </label>
        <br/>
        <button type='submit'>Next</button>
      </div>
    }
    </>
  )
}

export default App
