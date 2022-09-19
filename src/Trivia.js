import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { ShowQuestions } from './ShowQuestions'
import { ShowResults } from './ShowResults'

export const Trivia = ({catID, setCatID}) => {

const [questions, setQuestions] = useState([])
const [questionIndex, setQuestionIndex] = useState(0)
const [score, setScore] = useState(0)
const len = questions.length

console.log(catID)
useEffect(() => {
    console.log('questions effect running')
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${catID}`)
        .then((res) => setQuestions(res.data.results)) 
}, [catID])

console.log(questions)
if (questionIndex < len) {
    
    return (
        <ShowQuestions
        score={score}
        setScore={setScore}
        setCatID={setCatID}
        questions={questions}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}/>
        
    )}
else {
    return (
        <ShowResults
        score={score}
        catID={catID}
        setCatID = {setCatID}/>
    )}

}

