import { useState } from 'react'
import { Trivia } from './Trivia'
import { ShowCategories } from './ShowCategories'

export const ContentDisplay = () => {
    const [catID, setCatID] = useState(null)

    if (catID === null) {
        return (
            <div>
                <ShowCategories/>
            </div>
        )}
    else {
        return (
            <div>
                <Trivia
                catID={catID}
                setCatID={setCatID}/>
            </div>
        )
    }

}