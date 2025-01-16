import { supabase } from "./supabase.js";
const email = document.getElementById("email");
const password = document.getElementById("password")
const btn = document.getElementById("btn");
if(btn)
btn.addEventListener("click",async()=>{
  
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
          console.log(data);
          console.log(error); 
      
    }
    catch(error){
        console.log(error);
    }
   email.value = "";
   password.value = "";
      
})


const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");
const login_btn = document.getElementById("login_btn");
if(login_btn)
login_btn.addEventListener("click",async()=>{
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
          console.log(data);
          console.log(error);
    }catch(error){
        console.log(error);
        
    }
    login_email.value = "";
    login_password.value = "";
})

