import './App.css';
import { useState } from 'react'
import { ShowCategories } from './ShowCategories';
import { Trivia } from './Trivia';


function App() {
  const [catID, setCatID] = useState(null)

  return(
    <>
      <p className="title is-3 text-strong m-2">Trivia Game</p>
      {(!catID)
      ? <ShowCategories setCatID={setCatID}/> 
      : <Trivia catID={catID} setCatID={setCatID}/>}
    </>
  );
}

export default App