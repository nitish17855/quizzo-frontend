import { useEffect, useState } from "react"; 
import "./results.css"
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
function Results() {
  const { attempt_Id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/user/result/${attempt_Id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setResult(data));
  }, [attempt_Id]);

  if (!result) return null;

  const questions = pgArrayToJsArray(result.questions);
  const correctAnswers = pgArrayToJsArray(result.correctAnswers);
  const attemptedAnswers = pgArrayToJsArray(result.attemptedAnswers);

  return (
    <div className="result">
      <h2 className="score">Score: {result.score}</h2>

      {questions.map((question, index) => (
        <div className="inside_result" key={index}>
          <p className="Question">Question {index + 1}: {question}</p>
          <p className="correctAnswer">Correct Answer: {correctAnswers[index]}</p>
          <p className="Attempted_Answerc">Attempted Answer: {attemptedAnswers[index]}</p>
        </div>
      ))}
    </div>
  );
}

function pgArrayToJsArray(str) {
  return str
    .slice(1, -1)
    .split('","')
    .map(s => s.replace(/"/g, ""));
}

export default Results;
