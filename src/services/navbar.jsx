import { Link } from "react-router-dom";
import "./SUBJECT_CARD.css"
import Home_page from "../Page/home_page.jsx";



function Navbar() {
    return(
    <div className="Link">
    <Link className="Home_page" to="/home">Home page</Link>
    <Link className="create_quiz" to="/create-quiz">Create your own quiz</Link>
    <Link  className="Leader_board " to="/leader_board">Leaderboard</Link>
    <Link  className="previous_result  " to="/Previous_result">Previous_result</Link>
    

</div>)
}
export default Navbar ;
