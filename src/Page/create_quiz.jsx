import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function Create_quiz() {


    const [subject , setsubject] = useState()
    const[numberofquestions , setnumberofquestions] = useState(0)
    const [questions, setQuestions] = useState([
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct_answer: ""
  }
]);

const handlecreate = async() =>{
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/user/createquiz`,{
        method:"POST" ,
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
      subject , 
      numberofquestions ,
       questions 
      }),
     } ) 
    const data = await response.json()
}


function handleChange(index , field , value) {
        setQuestions(oldquestion =>
            {
               const copy = [...oldquestion ]
               copy[index][field] =value
               return copy ;
            })
    
    }
  
function addQuestion() {
  setQuestions(old => [
    ...old,
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct_answer: ""
    }
  ]);
}


return (
    <div>
        
 { questions.map((question, index) => (
  <div key={index} className="question-block">
   question {index+1} <input
   className="QUESTION"
    value={question.question}
      onChange={(e) =>
        handleChange(index, "question", e.target.value)
      }
    />

   option1 <input
   className="OPTION"
      value={question.option1}
      onChange={(e) =>
        handleChange(index, "option1", e.target.value)
      }
    />

    opton2<input
    className="OPTION"
      value={question.option2}
      onChange={(e) =>
        handleChange(index, "option2", e.target.value)
      }
    />
    opton3<input
    className="OPTION"
      value={question.option3}
      onChange={(e) =>
        handleChange(index, "option3", e.target.value)
      }
    />
    opton4<input
    className="OPTION"
      value={question.option4}
      onChange={(e) =>
        handleChange(index, "option4", e.target.value)
      }
    />

    correctAnswer<input
    className="CORRECTANSWER"
      value={question.correct_answer}
      onChange={(e) =>
        handleChange(index, "correct_answer", e.target.value)
      }
    />
  </div>
))}




       

        <button onClick={addQuestion} className="add_question"> Add question</button>
        numberofquestions <input className="number" 
        onChange={(e) => setnumberofquestions(e.target.value)} />
          SUBJECT <input 
        onChange={(e) => setsubject(e.target.value)} />


        <button onClick={handlecreate} className="submit"> Submit </button>
    </div>
)

}
export default Create_quiz