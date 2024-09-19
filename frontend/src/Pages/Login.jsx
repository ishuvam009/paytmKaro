import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import ButtomOption from "../components/ButtomOption";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const clickFunctio = async () => {
    const response = await axios({
      url: "http://localhost:3000/api/v1/user/login",
      method: "POST",
      data: {
        password,
        username,
      },
    });

    //storing the token in the local storage.
    localStorage.setItem("token",response.data.token);
    navigate("/dashboard")
  };

  return (
    <>
      <div className="bg-slate-300 h-screen w-screen flex justify-center p-8">
        <div className="w-80 h-max p-2 px-4 bg-white rounded-lg text-center">
          <Heading label={"Log In"} />
          <SubHeading
            label={"Enter your credentials to access your account."}
          />
          <InputBox
            label={"Email"}
            placeholder={"Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputPassword
            label={"Password"}
            placeholder={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button label={"Log In"} onClick={clickFunctio} />
          <ButtomOption
            label={"Don't have an account,"}
            redirect={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </>
  );
}
