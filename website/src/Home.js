import {
  Link
} from "react-router-dom";
import './App.css';


function Home() {

  return (
    <div className="App">
      <div className="nav-wrapper">
        <Link to="/" className="nav-link">home</Link>
        <div className="nav-container">
            <Link to="/about" className="nav-link">about</Link>
            <Link to="/work" className="nav-link">work</Link>
        </div>
      </div>
      <div>
        Home!
      </div>
    </div>
  );
}

export default Home;