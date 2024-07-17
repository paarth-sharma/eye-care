import axios from "axios";
import REQUEST_URL from "../Utils";
import GetCookie from "../Hooks/getCookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"

const DoctorCompoent = () => {
//   const [user, setUser] = useState();
  const [appointmetnList, setappointmetnList] = useState();
  const findAllData = async () => {
    const reportData = await axios.get(
      `${REQUEST_URL}/doctor/fetch/655c035e7032889f4522de4b`,
    );
    console.log(reportData);
    setappointmetnList(reportData.data.doctorData.daily_appoints);
  };
  const bookAppointment=async(time)=>{
    const bookAppointmetDoc=await axios.patch(`${REQUEST_URL}/doctor/update/appointment/655c035e7032889f4522de4b`,{
        time:time
    })
    console.log(bookAppointmetDoc)
    if(bookAppointmetDoc.data.booked==true){
        swal({
            title: "Success",
            text: `Appointment for time ${time} booked`,
            icon: "success",
        }).then(()=>{
            window.location.reload(false);
        })
    }
    else{
        swal({
            title: "Failed",
            text: "Failed to book the Appointment try again",
            icon: "error",
        }).then(()=>{
            window.location.reload(false);
        })
    }
  }
  useEffect(() => {
    findAllData();
  }, []);
  return (
    <div className="reportHistory">
      {appointmetnList && (
        <div className="reportContainer">
          <h1>List of Doctor's Appointment</h1>
          <a href="/dashboard" className="gobackButton">DashBoard</a>
          <br />
          <div className="reposrtBorder">
          {appointmetnList.map((report) => {
              return (
              <div className="reportCardContainer">
                <div className="reportcardHeader">
                  <div className="reportCardFirst">
                    <div className="createdat">Timing : </div>
                    <div>{report.start_time}</div>
                  </div>
                  <div className="reportCardsecond">
                      {/* < */}
                        {report.booking_status=="false"?<button className="activebutton"
                       onClick={()=>{
                        bookAppointment(report.start_time)
                      }}>
                            Book
                            </button> 
                        :<button className="closedbutton" disabled>
                            Booked
                        </button>
                        }
                        {/* </button> */}
                  </div>
              </div>
              </div>
            );
        })}
      </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCompoent;
