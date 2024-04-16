import "./HomeDisigin.css";
import Back from "../../../src/Components/assets/agriculture.png";
import Button from "../../../src/Components/Button/Button";

export default function HomePage() {
  return (
    <div className="container">
      <div className="grid">
        <div className="para">
          <h1 className="thish1">
            Agriculture
            <br />
            <span>System!</span>
          </h1>
          <p>
            This webpage serves as a comprehensive platform bridging the gap
            between machinery and field workers. It offers a virtual space where
            an array of agricultural machinery is showcased alongside the
            skilled labor force. With a user-friendly interface, visitors can
            explore a diverse range of machinery tailored to various
            agricultural needs, from tractors and harvesters to irrigation
            systems and beyond.
          </p>

          <div className="buttoncontainer">
            <a href="/Signup">
              <Button class="signup" name="Signup" />
            </a>
            <a href="/Signin">
              <Button class="signup" id="button" name="Login" />
            </a>
          </div>
        </div>
        <div className="photo">
          <img src={Back} />
        </div>
      </div>
    </div>
  );
}
