import { useEffect , useState } from 'react';
import Subject from '../services/SUBJECT_CARD'
import "../services/SUBJECT_CARD.css"



function Home_page() {
  
const [quizzes, setQuizzes] = useState([]);
const [name, setName] = useState("");
const token = localStorage.getItem("token");
console.log("token:", token);

useEffect(() => {
  fetch("http://localhost:4000/user/api/quizzes", {
        method: "GET", // NO NEED TO WRITE IT BCZ GET IS DEFAULT 
        headers: {
          //"Content-Type": "application/json",
              Authorization: `Bearer ${token}`
        }, 
        
        
        })
    .then(res => res.json())
    .then(data => {   setName(data.data.name);  setQuizzes(data.data.response)});
}, []);     
    
  
     return (
        <div className='main_page'>
        
    <div  > <div className='quizzo'><h1 align ="center" > Quizzo </h1></div> 
    <h1 className='name'> Welcome {name}</h1> </div>

<Subject subjects={quizzes} />

 </div>
     )
}
export default Home_page ;