import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import ButtomOption from "../components/ButtomOption";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    await axios({
      url: "http://localhost:3000/api/v1/user/signup",
      method: "POST",
      data: {
        firstName,
        lastName,
        username,
        password,
      },
    });
  };

  return (
    <>
      <div className="bg-slate-300 h-screen w-screen flex justify-center p-8">
        <div className="w-80 h-max p-2 px-4 bg-white rounded-lg text-center">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account."} />
          <InputBox
            label={"First Name"}
            placeholder={"First Name"}
            onChange={(e) => setFirstName(e.target.value)} // Update state on change
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Last Name"}
            onChange={(e) => setLastName(e.target.value)} // Update state on change
          />
          <InputBox
            label={"Email"}
            placeholder={"Email"}
            onChange={(e) => setUsername(e.target.value)} // Update state on change
          />
          <InputPassword
            label={"Password"}
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
          <Button label={"Sign Up"} onClick={handleClick} />
          <ButtomOption
            label={"Already have an account,"}
            redirect={"Log In"}
            to={"/login"}
          />
        </div>
      </div>
    </>
  );
};
