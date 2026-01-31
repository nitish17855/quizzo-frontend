const API_URL = import.meta.env.VITE_API_URL;
     const token = localStorage.getItem("token");

    
       const handle = async () =>{
    try {ht
      const response = await fetch(`${API_URL}/user//submit_quiz`, {
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
    const data = await response.json()
    console.log (data)
    } 
    catch(error) {
console.log(error.message)
    }

    }
    
    
    export default handle ;