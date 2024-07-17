const TestPageComponent = () => {
    return ( 
        <div className="testcompoent">
            <video src="https://video.wixstatic.com/video/bc95b8_b829cd998f2b419f8e5ea0e791707fca/1080p/mp4/file.mp4" autoPlay loop muted >
            </video>
            <div className="contentBox">
                <h2>Eye Scan Reporting</h2>
                {/* <br/>
                <br/> */}
                <h4>ONLINE, FAST & SECURE</h4>
                {/* <br/> */}
                <p>Specialist ocular image reporting service. We provide rapid scan interpretation by highly acurate Machine Learning Model for early diagnosis of sight threatening eye conditions</p>
                </div>
        </div>
     );
}
 
export default TestPageComponent;