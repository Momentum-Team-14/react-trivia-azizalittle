import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const ShowCategories = ({setCatID}) => {
    const [categories, setCategories] = useState([])


useEffect(() => {
    console.log('cat effect running')
    axios
        .get(`https://opentdb.com/api_category.php`)
        .then((res) => setCategories(res.data.trivia_categories))
}, [])

return (
    <div>
        <h2>Select a Category</h2>
        <div className="cat-list">
            {console.log(categories)}
            {categories.map((cat) => ( 
                 <div><button className="button is-link m-2" key={cat.id} onClick={() => {setCatID(cat.id)}}>{cat.name}</button></div>
             ))} 
        </div>
       
    </div>
)
}

