import { useEffect, useState } from "react";
import axios from "axios";
import REQUEST_URL from "../Utils";
import SetCookie from "../Hooks/setCookie";
import GetCookie from "../Hooks/getCookie";
import { useNavigate } from "react-router-dom";
import main from "../assets/eyecarelogo.jpg"
import swal from "sweetalert"
const LoginComponent = () => {
  const navigate=useNavigate()
    const [Loginemail, setLoginemail] = useState("")
    const [Loginpassword, setLoginpassword] = useState("")
    const [validation, setValidation] = useState("")
    const [greencolor, setGreencolor] = useState("")
    const LoginsubmitionHandler=async(e)=>{
        e.preventDefault();
        // console.log(Loginemail,Loginpassword)
        const Login_data={
            Email:Loginemail,
            Password:Loginpassword,
            Token:GetCookie()
        }
        const UserLogin=await axios.post(`${REQUEST_URL}/user/login`,Login_data)
        // console.log(UserLogin.data.cookie);
        SetCookie({value:UserLogin.data.cookie})
        console.log(GetCookie())
        console.log(UserLogin.data)
        if(UserLogin.data.logedin==true || UserLogin.data.loged==true){
            navigate("/dashboard")
        }else{
            swal({
              title: "Failed",
              text: "Failed to login"+` ${UserLogin.data.message}`,
              icon: "error",
          })
    }
  }
  const checkemailformat=async(e)=>{
    if(!e.target.value.includes("@gmail.com")){
      setValidation("Not a valid email format")
    }else{
      setValidation("")
      setGreencolor("Valid Email")
      setLoginemail(e.target.value)
    }
    if(e.target.value==""){
      setValidation("")
      setGreencolor("")
    }
  }
    const loginCheck=async()=>{
      // e.preventDefault();
      const UserLogin=await axios.post(`${REQUEST_URL}/user/login`,{
        Token:GetCookie()
      })
      console.log(UserLogin.data.logedin);
      if(UserLogin.data.logedin==true){
        SetCookie({value:UserLogin.data.cookie})
          navigate("/dashboard")
        }
        }
        
        useEffect(()=>{
          loginCheck()
        },[])
      // }
  return ( 
    <div className="LoginComponent">
      <div className="loginportalContainer"> 
      <div className="picturepart">
        <img src={main}/>
      </div>
      
      <div className="leaveform">
        <div className="loginformcontainer"> 
          <h1>LOGIN</h1>
          <form className="form">
            <div className="formInputContainer">
            <label>Email</label>
            <input
              className="login-email-input"
              placeholder="Enter Registerd Email..."
              onChange={(e)=>{
                checkemailformat(e)
                // setLoginemail(e.target.value)
              }}
              ></input>
              <p className="validationtext">{validation}</p>
              <p className="greencolor">{greencolor}</p>
              </div>
              <div className="formInputContainer">
            <label>Password</label>
            <input
              className="login-password-input"
              placeholder="Enter Password..."
              onChange={(e)=>{
                setLoginpassword(e.target.value)
              }}
              ></input>
              </div>
            <button
              onClick={(e) => {
                LoginsubmitionHandler(e);
              }}
            >
              LogIn
            </button>
          </form>
          <div className="loginfooter">
          <p>Don't have an account?</p>
            <a href="/signup">Sign Up</a>
          </div>
          {/* <span><a>Sign Up</a></span> */}
      </div>
    </div>
    </div>
    </div>
   );
}
 
export default LoginComponent;