import  axios from "axios"
import { useEffect } from "react"
import {useParams,useNavigate} from "react-router-dom"
import REQUEST_URL from "../Utils"
const PaymentUpdateComonent = () => {
    const navigate=useNavigate()
    let {id}=useParams()
    const UpdatePayment=async()=>{
        // console.log(id)
        const UpdatePayment=await axios.patch(`${REQUEST_URL}/report/update/${id}`)
        if(UpdatePayment.data.updated==true){
            navigate("/reporthistory")
        }

        console.log(UpdatePayment)
    }
    useEffect(()=>{
        UpdatePayment()
    },[])
    return ( 
        <div></div>
     );
}
 
export default PaymentUpdateComonent;