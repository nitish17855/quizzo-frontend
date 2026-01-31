import './SUBJECT_CARD.css'
import Home_page from '../Page/home_page';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";



function Subject({ subjects }) {
  const navigate = useNavigate();

  function handleClick(id) {
    console.log("NAVIGATING TO:", `/attempt-quiz/${id}`);
    navigate(`/attempt-quiz/${id}`);
  }
  console.log(subjects )

  return (
    <div className="subject_components">
      {subjects.map(item => (
        <div className="card" key={item.quizId}>
          <img
            className="quizimage"
            src="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg"
            alt="sub"
            onClick={() => handleClick(item.quizId)}
          />

          <div className="subcard">
            <h3 className="sub">{item.subject}</h3>
            <p className="question">{item.questions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Subject ; 