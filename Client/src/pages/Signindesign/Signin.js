import "./Sign.css";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
import Login from "../../Components/assets/login.png";

export default function Sign() {
  return (
    <>
      <div className="containersignin">
      <div className="logphoto">
          <img src={Login} />
        </div>
        <div className="Signincontent">
          <h1 className="h1sign">Sign In</h1>
          <Form type="text" input="sihnemail" place="Email or User_Name" />
          <Form type="password" input="sihnemail" place="Password" />
          <Button class="signLogin" name="Log_In" />
          <a href="/Signup" className="createnew">
            Create New Account
          </a>
        </div>
       
      </div>
    </>
  );
}
