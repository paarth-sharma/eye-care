
const OurServiceCompoent = () => {
    return ( 
        <div className="ourservices">
            <div className="servicescontainer">
                <div className="serviceHeader">
                <h2>How our service works</h2>
                <br/>
                <p>MyEyeScan provides a secure online platform for eye care professionals to upload any form of eye scan or ocular imaging for the expert opinion of highly skilled Consultant Ophthalmologists:</p>
                </div>
                <div className="diagramRepresentationContainer">
                    <div className="diagramWrapper">
                    <div className="diagramComponent">
                        <div className="diagramCompoentHeader">
                        <h3>Step 1</h3>
                        <br/>
                        <img src="https://static.wixstatic.com/media/bc95b8_f493cbbf024a414794a0b216b462333b~mv2.png/v1/fill/w_71,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/multimedia.png"></img>
                        </div>
                        {/* <br/> */}
                        <div className="diagramContent">
                        <p>Upload images and brief clinical details through our secure web portal the status of the report can be tracked online.</p>
                        </div>
                    </div>  
                    <div className="diagramComponent">
                        <div className="diagramCompoentHeader">
                    <h3>Step 2</h3>
                        {/* <br/> */}
                        <img src="https://static.wixstatic.com/media/bc95b8_c130bf699b8f4a4faa04ba7ebcc6075a~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/x-men.png"></img>
                        </div>
                        <div className="diagramContent">
                        <p>Uploaded Image is interpreted by highly accurate Machine Learning Model within seconds and it creates a report.</p>
                        </div>
                    </div>  
                    <div className="diagramComponent">
                        <div className="diagramCompoentHeader">
                    <h3>Step 3</h3>
                        <br/>
                        <img src="https://static.wixstatic.com/media/bc95b8_17fb392006e741b692963ce157ba735e~mv2.png/v1/fill/w_71,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/health.png"></img>
                        </div>
                        {/* <br/> */}
                        <div className="diagramContent">
                        <p>Scan report with diagnosis and referral advice is returned via MyEyeScan web portal..</p>
                        </div>
                    </div>  
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default OurServiceCompoent;