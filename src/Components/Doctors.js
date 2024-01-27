import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/about 3.jpg";
import profile2 from "../Assets/about 1.jpeg";
import profile3 from "../Assets/about 4.jpg";
import profile4 from "../Assets/about 6.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>ABOUT US</span>
        </h3>

        <p className="dt-description">
        Welcome to our world! We're on a mission to make your commute seamless. Our team, fueled by passion and expertise, envisions a future where commuting is stress-free. With a commitment to user satisfaction, we've crafted this app with your needs in mind. Your feedback shapes our journey. Meet the team behind the scenes, and join us as we revolutionize the way you travel. Reach out with any questions or thoughts – we're here for you!  </p>
      </div>

      
    </div>
  );
}

export default Doctors;
