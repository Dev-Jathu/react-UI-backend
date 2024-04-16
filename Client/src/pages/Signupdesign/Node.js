import "./node.css";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
import Photo from "./../../Components/assets/node.png";

export default function Node() {
  return (
    <div className="containerNode">
      <div className="nodephoto">
        <img src={Photo} />
      </div>
      <div className="form">
        <h1 className="signupform">Sign up</h1>
        <Form
         
          type="text"
          input="namefield"
          place="Type First_Name"
        />
        <Form
          // class="name"
          // name="Last_Name"
          type="text"
          input="namefieldlast"
          place="Last_Name"
        />
        <Form
          // class="name"
          // name="Email"
          type="email"
          input="namefieldemail"
          place="Mobile Number or Email Address"
        />
        <Form
          // class="name"
          // name="Email"
          type="text"
          input="namefieldemail"
          place="Location"
        />
        <Form
          // class="name"
          // name="Email"
          type="number"
          input="namefieldemail"
          place=" Your age"
        />
        <Form
          // class="name"
          // name="PassWord"
          type="password"
          input="namefieldemail"
          place="New Password"
        />
        <Form
          // class="name"
          // name="PassWord"
          type="password"
          input="namefieldemail"
          place="Confirm Password"
        />
        <h4 className="h4">Date of Birth</h4>
        <Form
          // class="name"
          // name="PassWord"
          type="date"
          input="namefieldDob"
          place="Date of birth"
        />
        <Button class="signupNode" name="SignUp" />
        <a href="/Signin" className="alreadyhaveacc">You Already Have an Account Click Here!</a>

      </div>
      
    </div>
  );
}
