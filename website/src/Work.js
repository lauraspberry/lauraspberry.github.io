import {
    Link
  } from "react-router-dom";
  
function Work() {

    return (
      <div className="work">
        <div className="nav-wrapper">
            <Link to="/" className="nav-link">home</Link>
            <div className="nav-container">
                <Link to="/about" className="nav-link">about</Link>
                <Link to="/work" className="nav-link">work</Link>
            </div>
        </div>

        <p>work!</p>
        
      </div>
    );}
  
export default Work;