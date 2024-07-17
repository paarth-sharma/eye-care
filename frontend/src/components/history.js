import axios from "axios";
import REQUEST_URL from "../Utils";
import GetCookie from "../Hooks/getCookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportHistory = () => {
  const [user, setUser] = useState();
  const [reportList, setreportList] = useState();
  const [visibility, setVisibility] = useState(-1);
  const navigate = useNavigate();
  const findAllData = async () => {
    const TokenData = {
      Token: GetCookie(),
    };
    const reportData = await axios.post(
      `${REQUEST_URL}/report/fetch`,
      TokenData
    );
    console.log(reportData.data.reportData);
    setreportList(reportData.data?.reportData);
    const userData = await axios.post(`${REQUEST_URL}/user/unique`, TokenData);
    console.log(userData.data.data);
    setUser(userData.data);
    const tempdate = new Date();
    // tempdate.getDate()
    // tempdate.getTime
  };
  const createCheckoutPage = async (report) => {
    console.log(report);
    const reportData = {
      reportID: report._id,
    };
    const checkoutSession = await axios.post(
      `${REQUEST_URL}/payment/create`,
      reportData
    );
    if (checkoutSession.data.created == true) {
      // navigate(checkoutSession.data.sessionUrl)
      window.location.replace(checkoutSession.data.sessionUrl);
    }
  };
  useEffect(() => {
    findAllData();
  }, []);
  return (
    <div className="reportHistory">
      {user && reportList && (
        <div className="reportContainer">
          <h1>Report Record History</h1>
          <a href="/dashboard" className="gobackButton">DashBoard</a>
          <br />
          <div className="reposrtBorder">
          {reportList.map((report) => {
              return (
              <div className="reportCardContainer">
                <div className="reportcardHeader">
                  <div className="reportCardFirst">
                    <div className="createdat">Diagnosed At : </div>
                    <div>{report.createat}</div>
                  </div>
                  <div className="reportCardsecond">
                    {report.paid == "paid" ? (
                      <button
                      onClick={() => {
                          if(visibility==report._id){
                              setVisibility(-1)
                            }else{
                                setVisibility(report._id);   
                            }
                        }}
                        >
                        {visibility==report._id ?"Click to Hide": "Click to View"}
                      </button>
                    ) : (
                        <button
                        onClick={() => {
                            createCheckoutPage(report);
                        }}
                        >
                        Click to Pay
                      </button>
                    )}
                  </div>
                </div>
                {visibility!=-1 && visibility==report._id && <div className="prediction">Results={report.prediction}</div>}
              </div>
            );
        })}
      </div>
        </div>
      )}
    </div>
  );
};

export default ReportHistory;
