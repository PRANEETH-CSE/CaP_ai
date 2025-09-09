import'./Nav.css'

function Nav(){
    return(
        <>
        <div className="navcontain">
            <button className="option">Home</button>
            <button className="option">Faculty</button>
        <div className=" search-wrap">
            <input type="text" name="search" id="keyword" />
            <button className="searsubmit"></button>
        </div>

      
            <button className="option">Clubs</button>
            <button className="option">Events</button>
        </div>
        </>
    )
}

export default Nav