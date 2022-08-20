import {
    Link
  } from "react-router-dom";
  
function About() {

    return (
    <div className="about">
        <div className="nav-wrapper">
            <Link to="/" className="nav-link">home</Link>
            <div className="nav-container">
                <Link to="/about" className="nav-link">about</Link>
                <Link to="/work" className="nav-link">work</Link>
            </div>
        </div>

        <p>about!</p>
    
    </div>
    );}
  
export default About;