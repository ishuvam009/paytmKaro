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
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const clickFunctio = async () => {

    try {
    const response = await axios({
      url: "https://paytmkaro-gcp0.onrender.com/api/v1/user/login",
      method: "POST",
      data: {
        password,
        username,
      },
    });

      //storing the token in the local storage.
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id",response.data.userId);
      localStorage.setItem("userName",response.data.userFirstName);
      navigate("/dashboard");

    } catch (error) {
      // console.log(error);
      setErrorMessage("Please Re-Check you userID & Password.");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
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
