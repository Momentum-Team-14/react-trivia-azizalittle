import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Trivia = ({catID, setCatID}) => {
const [questions, setQuestions] = useState([])
const htmlDecode = input => new DOMParser()
    .parseFromString(input, "text/html")
    .documentElement.textContent 


console.log(catID)
useEffect(() => {
    console.log('questions effect running')
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${catID}`)
        .then((res) => setQuestions(res.data.results)) 
}, [catID])

const [questionIndex, setQuestionIndex] = useState(0)
if (questions.length > 0) {
    let correctAnswer = questions[questionIndex].correct_answer
    let options=[]
    options = [...questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer]
    
return (
    <div>
        <h2>Play a Trivia Game</h2>
        <div className="questions-list">
            {console.log(questions)}
            {htmlDecode(questions[questionIndex].question)}
            {options.map((option) => (
                <div class='answer' onClick>{option}</div>
            ))}
            
        
                 
             
        </div>
       
    </div>
)



}}

