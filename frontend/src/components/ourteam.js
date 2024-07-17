import Card from "./card";

const OurTeamComponent = () => {
    return ( 
        <div className="ourteam" id="ourteam">
            <h1>Our Associate</h1>
        <div className="Cardcontainer">
            <Card/>
            <div className="doctorContent">
                <h2>
                   Dr. Harsh Inder Singh
                </h2>
                <h4>
                    MD(Ophthalmologists)
                </h4>
                <p>
                Professional career Summary: Dr. Harsh Inder Singh R/o Patiala (Punjab) completed his MBBS from Govt. Medical College, Patiala in 2008 and MD (Ophth.) from R.P. Centre, AIIMS, New Delhi in 2012. He did his post-doctorate training in Vitreo- Retina and Uvea from R.P. Centre, AIIMS, New Delhi from 2012 to 2015 and also served as Senior Resident at R.P. Centre, AIIMS, New Delhi from July 2012 to January 2015. He Worked as Vitreo Retina Consultant in S.B Sohan Singh Hospital, Amritsar from Jan 2015 to March 2017. He deals in all surgical cases pertaining to Vitreo- retina, Retinal Detachment, Retained Intra Ocular Foreign Body, Vitreous Hemorrhage due to Diabetic Retinopathy, Macular Hole Surgery, Epiretinal Membrane removal, Giant Retinal Tears with Retinal Detachment, Nucleus Drop, IOL Drop
                </p>
            </div>
            {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        </div>
        </div>
     );
}
 
export default OurTeamComponent;