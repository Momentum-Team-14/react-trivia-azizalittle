import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Trivia = () => {
const [categories, setCategories] = useState(null)
const [catID, setCatID] = useState()
const [questions, setQuestions] = useState(null)

useEffect(() => {
    console.log('cat effect running')
    axios
        .get(`https://opentdb.com/api_category.php`)
        .then((res) => setCategories(res.data.trivia_categories))
}, [])

useEffect(() => {
    console.log('questions effect running')
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${catID}`)
        .then((res) => setQuestions(res.data)) 
        // ^^ returns an empty array? Is it because I need to use SetID?
}, [catID])
return (
    <div>
        <h2>Select a Category</h2>
        <div className="cat-list">
            {console.log(questions)}
            {/* {categories.map((cat) => ( 
                 <div><button key={cat.id}>{cat.name}</button></div>
             ))}  */}
        </div>
       
    </div>
)



}