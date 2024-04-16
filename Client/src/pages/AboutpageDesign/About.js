import "./About.css";
import About from '../../Components/assets/about.png'
export default function AboutPage() {
  return (
    <div className="container">
      <div className="gridabout">
        <div className="photos">
          <img src={About} />
        </div>
        <div className="para">
          <p>
            "Thozan" appears to be the name of a website, possibly associated
            with a business or personal project. The website was created by an
            individual named "jathusan." It could serve various purposes, such
            as representing a business online, showcasing personal projects or
            portfolios, or being a collaborative effort among multiple
            individuals. 
          </p>
        </div>
      </div>
    </div>
  );
}
