import React from "react";
import './style.css'
import Team from "../team";
import Role from "../role";
import Slideshow from "../slideshow";
import Slideshow2 from "../slideshow2";
import { BsLinkedin } from "react-icons/bs";
const Home=()=>{
return(
    <>
 <Slideshow2/>

 {/* what is it */}
 <div className="why">
    <h1>What is lead exposure and why does it matter?</h1>
    <p>Lead exposure refers to the ingestion, inhalation, or absorption of lead, a toxic heavy metal, into the human body. Lead is a highly hazardous substance that can have serious health consequences when it enters the body, particularly for children, pregnant women, and vulnerable populations. Here's why lead exposure matters:</p>
<ul>
        <li>Health Impact: Lead harms the brain, causes learning disabilities, behavioral issues, and can affect fetal development during pregnancy.</li>
        <li>Lifetime Consequences: Effects are often irreversible, especially in children.</li>
        <li>Vulnerable Populations: Low-income communities are often disproportionately affected.</li>
        <li>Global Issue: It's a global concern requiring preventive measures like lead-safe housing and clean water.</li>
        </ul>
         
 </div>
    {/* ABOUT */}
    <div className="about">
        <div>
    <h1>The TinyLife Wellness Model <br/></h1>

<div>
    
   <p>Tinylife Wellness is a predictive model that helps organizations at the forefront 
    of protecting pregnant women and children at risk of lead exposure. By considering variables 
    such as age of a house, proximity to a factory and water sources,the model  predicts the children 
    and the women at more risk of exposure for proper allocation of resources.
</p>
</div>
<div className="about-buttons">
<button>Register</button>
   
</div>
    </div>

    <div className="tinylife_Image">
    <img src="tinylife.png" alt="web portal"/>
    </div>
    </div>
   
    <Slideshow/>
  <Role/>

 {/* TEAM */}
 <div className="team_title">
            <h1>Team</h1>
        </div>

    <div className="team">
    <div className="team-content">
        {Team.map((team, index) => (
            <div key={index} className="team-container">
                <div className="team-member">
                    <img src={team.image} alt={team.name} className="img-menu" />
                    <div className="member-info">
                        <h2>{team.name}</h2>
                        
                        <a href={team.linkedin}><BsLinkedin className="linkedin-icons"/></a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


</>
)
}
export default Home