import  axios from "axios";
import { useState } from "react";
import downarrow from "../assets/down-arrow.png"
import swal from "sweetalert"
import REQUEST_URL from "../Utils";
import {useNavigate} from "react-router-dom"
import GetCookie from "../Hooks/getCookie";

const VideoPageCompoent = () => {
    const [file, setFile] = useState()
    const navigate=useNavigate()
    const scanImage=async(e)=>{
        e.preventDefault();
        const formData= new FormData()
         formData.append('file',file);  
        const resp=await axios.post("http://localhost:8000/",formData)
        // console.log(resp.data.data[0])
        if(resp.data.predicted=="false"){
            swal({
                title: "Failed",
                text: resp.data.message,
                icon: "error",
            }).then(()=>{
                window.location.reload(false);
            })
        }
        else{
            const reportData={
                Token:GetCookie(),
                prediction:resp?.data?.data[0]
            }
            console.log(reportData)
            const documentCreated=await axios.post(`${REQUEST_URL}/report/create`,reportData)
            swal({
                title: "Success",
                text: "Report Created",
                icon: "success",
            }).then(()=>{
                // window.location.reload(false);
                navigate("/reporthistory")
            })
        }
    }
    
    return ( 
        <div className="taketestContainer">
            <div className="testcontainer">
                <div className="formCardContainer">
                <form className="uploadform">
                    <label>Upload retinal image below</label>
                    <img src={downarrow}/>
                    <div className="fileinputcontianer">
                <input type="file" name="Select Retinal Image"
                onChange={(e)=>{
                    setFile(e.target.files[0]);
                }} ></input>
                </div>
                <button
              onClick={(e) => {
                  scanImage(e);
                }}
                >
                Upload
                </button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default VideoPageCompoent;