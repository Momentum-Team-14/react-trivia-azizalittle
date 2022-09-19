import { useState } from 'react'

export const ShowQuestions = ({score, setScore, setCatID, questions, questionIndex, setQuestionIndex}) => {
   
    const htmlDecode = input => new DOMParser()
    .parseFromString(input, "text/html")
    .documentElement.textContent 

    const shuffleArray = arr => {
        arr = [...arr]
        // algorithm: Fisher-Yates shuffle
        // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        for (let i = arr.length - 1; i >= 0; i--) {
            const swapIndex = Math.floor(Math.random() * i)
            const temp = arr[swapIndex]
            arr[swapIndex] = arr[i]
            arr[i] = temp
        }
        return arr
    }

    const handleClick = (option, correctAnswer) => {
        
        if (option === correctAnswer) {
            setScore(parseInt(score + 1))
            setQuestionIndex(questionIndex + 1)
        } else {
            setQuestionIndex(questionIndex + 1)
    }}
        
        
    if (questions.length > 0) {
        let correctAnswer = questions[questionIndex].correct_answer
        let options = []
        options = [...questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer]

    return (
        <div className="card m-6">
                <div className="questions-list">
                    {console.log(questions)}
                    <p className="subtitle is-6 m-6">Current Category: {questions[questionIndex].category}</p>
                    <div className="title is-5">{htmlDecode(questions[questionIndex].question)}</div>
                    {shuffleArray(options.map((option) => (
                        <button className="button is-success is-large is-light mb-4 mx-3 is-flex-direction-row is-justify-content-center" onClick={() => {
                            handleClick(option, correctAnswer)
                        }}>{option}</button>
                        )))}
                </div>
                <footer className="card-footer">
                <button className="button is-small is-warning card-footer-item" onClick={()=>{setCatID(null)}}>Back to Category List</button> </footer>
            </div>
        )
    }



}