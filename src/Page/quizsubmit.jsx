
     const token = localStorage.getItem("token");

    
       const handle = async () =>{
    try {
      const response = await fetch("http://localhost:4000/user//submit_quiz", {
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