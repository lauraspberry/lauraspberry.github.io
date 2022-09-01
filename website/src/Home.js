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
            <a className="resume-link" href="https://read.cv/laurapei" target="_blank">Check out my resume here.</a>
        </div>
        <div className="body-section">
            <div className="subheader">What I’ve been up to ✨</div>
            <div className="card-box">
                <Card image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" 
                link="/about" title="Amazon" description="SDE Intern"/>
                <Card image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" 
                link="/about" title="Codeology" description="Web Director"/>
                <Card image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" 
                link="/about" title="Cal Hacks" description="Director"/>
                <Card image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" 
                link="/about" title="Association of Women in EE&CS" description="Publicity Officer"/>
            </div>
        </div>
        {/* footer */}
        <div class="footer">
          <div>
            <h1 id="footer-title">let’s get in touch →</h1>
            <p>This website was designed & developed with ❤️ by Laura Pei.</p>
          </div>
          <div id="footer-links" class="nav-item">
            <a className="footer-link" href="https://www.linkedin.com/in/laurapei/" target="_blank">Linkedin</a>
            <a className="footer-link" href="mailto:laur@berkeley.edu">Email</a>
            <a className="footer-link" href="https://github.com/lauraspberry" target="_blank">Github</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;