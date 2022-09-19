export const ShowResults = ({catID, setCatID, score}) => {


    return (
        <div className="score ">
            <p className="title is-2">Game Over!</p>
            <p className="subtitle is-size-5 is-centered">Your score is: {score}/10</p>

            <button className="button is-small is-danger card-footer-item" onClick={()=>{setCatID(null)}}>Back to Category List</button>
            

        </div>
    )


}