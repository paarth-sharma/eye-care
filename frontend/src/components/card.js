import logo from "../assets/doctor.jpeg"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.jpg"
const Card = () => {
    return ( 
        <div className="card">
            <div className="card-header">
            <img className="card-image" src={logo}></img>
            <h2 className="card-title">Dr. Harsh Inder Singh</h2>
            </div>
            <div>
            <p className="card-text">MD (Ophthalmologists)</p>
            <div className="socials">
                <a>
                <img src={facebook} />
                </a>
                <a>
                <img src={instagram} />
                </a>
                <a>
                <img src={twitter} />
                </a>
            </div>
            </div>
        </div>
     );
}
 
export default Card;