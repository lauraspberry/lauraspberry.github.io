import {
  Link
} from "react-router-dom";
import './App.css';
import Card from './Card.js';

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
      <div class="content">
        <div className="intro-section">
            <div className="header">Laura Pei</div>
            <div className="bio">a developer and designer building things that make her happy :)</div>
            <div className="statuses">
                <div className="status">
                    <div className="status-title">Currently~ </div> an SDE Intern @ Amazon
                </div>
                <div className="status">
                    <div className="status-title">Enjoying~ </div> building in Minecraft
                </div>
            </div>
            <a className="resume-link" href="/about">Check out my resume here.</a>
        </div>
        <div className="body-sectionn">
            <div className="header">What I’ve been up to ✨</div>
            <div className="">
                <Card image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" 
                link="/about" title="Amazon" description="SDE Intern"/>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Home;