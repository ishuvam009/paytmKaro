import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import ButtomOption from "../components/ButtomOption";

export default function SignUp() {
  return (
    <>
      <div className="bg-slate-300 h-screen w-screen flex justify-center p-8">
        <div className="w-80 h-max p-2 px-4 bg-white rounded-lg text-center">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account."} />
          <InputBox label={"First Name"} placeholder={"First Name"} />
          <InputBox label={"Last Name"} placeholder={"Last Name"} />
          <InputBox label={"Email"} placeholder={"Email"} />
          <InputPassword label={"Password"} placeholder={"Password"} />
          <Button label={"Sign Up"} />
          <ButtomOption label={"Already have an account,"} redirect={"Log In"} to={"/login"}/>

        </div>
      </div>
    </>
  );
}
