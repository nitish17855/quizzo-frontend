
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./quiz_startpage.css"

import { useNavigate } from "react-router-dom";

function Quiz_start() {
  
const [quiz, setQuiz] = useState(null);
const[ currentIndex , setcurrentIndex] = useState(0 ) 
const [answers, setAnswers] = useState([]);
 const navigate = useNavigate();
  
const API_URL = import.meta.env.VITE_API_URL;

const { quizId } = useParams();
const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_URL}/user/attempt-quiz/${quizId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // 🔑 normalize backend response HERE
        setQuiz(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch quiz:", err);
      });
  }, [quizId, token]);

  
  if (!quiz) {
    return <p>Loading...</p>;
  }

 


 function submitted_answers(selectedOption) {
  setAnswers(prevAnswers => {
  const updated = [...prevAnswers];
  updated[currentIndex] = selectedOption;

  return updated;
});

 }
 console.log(answers)



  function next() {
    if(  currentIndex < size-1) setcurrentIndex(previndex => previndex+1 )   }
  function prev() {
    if(currentIndex >= 1)setcurrentIndex(previndex => previndex-1 )
  }
 const attempt_Id = quiz.attempt_Id 




   async function handle() {
    try {
      const response = await fetch("http://localhost:4000/user/submit_quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          attempt_Id,
          answers,
        }),
})
    const data = await  response.json()
    console.log (data)
    navigate(`/results/${attempt_Id}`)
    } 
    catch(error) {
console.log(error.message)
    }
 }
    



console.log(quiz)
    const currentQuestion = quiz.questions[currentIndex];
    const size = quiz.questions.length 




  return (
    <div className="whole_page">
      <div className="current_index">
       {currentIndex +1 } // {size}
      <p className="current_question">{currentQuestion.question}</p>

            {answers[currentIndex]
            }
      <ul className="options ">
        <li onClick={ () => submitted_answers(currentQuestion.option1)} >{currentQuestion.option1}</li>
        <li  onClick={()=>submitted_answers(currentQuestion.option2)} >{currentQuestion.option2}</li>
        <li onClick={()=>submitted_answers(currentQuestion.option3)}>{currentQuestion.option3}</li>
        <li onClick={()=>submitted_answers(currentQuestion.option4)}>{currentQuestion.option4}</li>
      </ul> 
      </div>
 <button onClick={next} className="next"> NEXT </button>
 <button onClick={prev} className="prev"> PREV </button>
 <button onClick={handle} className="submit"> SUBMIT </button>
      </div>
      
  //  <div> quiz</div> 
      )
}

export default Quiz_start;
