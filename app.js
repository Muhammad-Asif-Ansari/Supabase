import { supabase } from "./supabase.js";

const btn = document.getElementById("btn");
if(btn)
btn.addEventListener("click",async()=>{
    const email = document.getElementById("email");
    const password = document.getElementById("password")
    if(!email.value || !password.value){
        Swal.fire({
           
            icon: "warning",
            title: "Missing Fields",
            text: "Please fill out all fields before registering.",
             background: 'rgba(14, 203, 128, 0.7)', 
            confirmButtonColor: "#ffcc00",
            color: "#fff",
            confirmButtonText: "OK",
            padding: "1em",
          });
          return;
          
    }
    try{
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          })
        //   console.log(data);
        if(error){
        Swal.fire({
            icon: "error",
            title: "Error Log",
            text: JSON.stringify(error, null, 2), // Convert object to a readable string
            background: 'rgba(14, 203, 128, 0.7)',
            confirmButtonColor: "#ffcc00",
            color: "#fff",
            confirmButtonText: "OK",
            padding: "1em",
          });
        }else{

            Swal.fire({
                icon: "success",
                title: "Registration Successfully",
                text: JSON.stringify(data.email), // Convert object to a readable string
                background: 'rgba(14, 203, 128, 0.7)',
                confirmButtonColor: "#ffcc00",
                color: "#fff",
                confirmButtonText: "OK",
                padding: "1em",
                customClass: {
                  popup: "swal-wide" // Add custom class if needed
                }
              });
        }
        // Swal alert for data
       
    //  console.log(error); 
 
  
      
          email.value = "";
          password.value = "";
    }
    catch(error){
        // console.log(error);
        Swal.fire({
            icon: "error", // Represents an error
            title: "Error Log",
            text: error.message || "An error occurred", // Shows only the error message or a fallback text
            background: 'rgba(14, 203, 128, 0.7)',
            confirmButtonColor: "#ffcc00",
            color: "#fff",
            confirmButtonText: "OK",
            padding: "1em",
          });
          
          
    }

      
})



const login_btn = document.getElementById("login_btn");
if(login_btn)
login_btn.addEventListener("click",async()=>{
const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");
    if(!login_email.value || !login_password.value){
        Swal.fire({
            title: 'Error!',
            text: 'Please fill all input fields.',
            icon: 'error',
            confirmButtonText: "OK",
            confirmButtonColor: "#ffcc00",
            background: 'rgba(14, 203, 128, 0.7)',
            color: 'white', 
          });
          return;
    }
    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: login_email.value,
            password: login_password.value,
          })

          if(error){
            Swal.fire({
                icon: "error",
                title: "Error Log",
                text: JSON.stringify(error, null, 2), // Convert object to a readable string
                background: 'rgba(14, 203, 128, 0.7)',
                confirmButtonColor: "#ffcc00",
                color: "#fff",
                confirmButtonText: "OK",
                padding: "1em",
              });
          }else{
            Swal.fire({
                icon: "success", // Represents a successful operation
                title: "Login Successfully",
                text:JSON.stringify(data.login_email), // Dynamically sets email and password
                background: 'rgba(14, 203, 128, 0.7)',
                confirmButtonColor: "#ffcc00",
                color: "#fff",
                confirmButtonText: "OK",
                padding: "1em",
              });
          }
        //   console.log(data);
    
          
          
        //   console.log(error);
    

          login_email.value = "";
          login_password.value = "";
    }catch(error){
        // console.log(error);
        Swal.fire({
            icon: "error",
            title: "Error Log",
            text: JSON.stringify(error, null, 2), // Convert object to a readable string
            background: 'rgba(14, 203, 128, 0.7)',
            confirmButtonColor: "#ffcc00",
            color: "#fff",
            confirmButtonText: "OK",
            padding: "1em",
          });
        
    }
  
})

