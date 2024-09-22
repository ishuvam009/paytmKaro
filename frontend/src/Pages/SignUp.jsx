import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import ButtomOption from "../components/ButtomOption";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.REACT_APP_API_URL;

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios({
        url: `${apiUrl}/api/v1/user/signup`,
        method: "POST",
        data: {
          firstName,
          lastName,
          username,
          password,
        },
      });

      //storing token in local Storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.userId);
      localStorage.setItem("userName",response.data.userFirstName);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setErrorMessage("Please check your credentials.")

      setTimeout(()=>{
        setErrorMessage("");
      },3000)
    }
  };

  return (
    <>
      {errorMessage && (
        <div className="fixed w-auto top-0 left-0 right-0 bg-red-500 text-white text-center p-3 z-50">
          {errorMessage}
        </div>
      )}
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
}
