import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Trivia = () => {
const [catID, setCatID] = useState(null)
const [questions, setQuestions] = useState([])

useEffect(() => {
    console.log('questions effect running')
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${catID}`)
        .then((res) => setQuestions(res.data)) 
}, [catID])

return (
    <div>
        <h2>Play a Trivia Game</h2>
        <div className="questions-list">
            {console.log(questions)}
            {questions.map((prompt) => ( 
                 <div><button key={prompt.id} onClick={() => {setCatID(prompt.id)}}>{prompt.name}</button></div>
             ))} 
        </div>
       
    </div>
)



}