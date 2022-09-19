export const ShowResults = ({catID, setCatID, score}) => {


    return (
        <div className="score">
            <h1>Game Over!</h1>
            <h2>Your score is: {score}/10</h2>
            <button onClick={()=>{setCatID(null)}}>Back to Category List</button>

        </div>
    )


}