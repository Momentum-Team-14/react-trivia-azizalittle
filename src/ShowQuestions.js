import { useState } from 'react'

export const ShowQuestions = ({score, setScore, setCatID, questions, questionIndex, setQuestionIndex}) => {
    const [feedback, setFeedback] = useState('')
    
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
        console.log('handle click is handled 💢')
        console.log(`correct answer: ${correctAnswer} 🏆`)
        console.log(`option: ${option}`)
        
        if (option === correctAnswer) {
            setScore(parseInt(score + 1))
            console.log(`correct! score: ${score + 1} 🟢`)
            setQuestionIndex(questionIndex + 1)
            setFeedback('correct')
        } else {
            
            console.log(`incorrect! score: ${score} 🔴`)
            setQuestionIndex(questionIndex + 1)
            console.log(questionIndex)
            setFeedback('incorrect')
    }

    }
        
        
    if (questions.length > 0) {
        let correctAnswer = questions[questionIndex].correct_answer
        let options = []
        options = [...questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer]

    return (
            <div>
                <h2>Play a Game</h2>
                <div className="questions-list">
                    {console.log(questions)}
                    {htmlDecode(questions[questionIndex].question)}
                    {shuffleArray(options.map((option) => (
                        <div class="answer" onClick={() => {
                            handleClick(option, correctAnswer)
                        }}>{option}</div>
                        )))}
                </div>
                <div className="feedback">{feedback}</div>
                <button onClick={()=>{setCatID(null)}}>Back to Category List</button>
            </div>
        )
    }



}