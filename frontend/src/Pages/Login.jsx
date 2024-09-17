import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import ButtomOption from "../components/ButtomOption";

export default function Card() {
  return (
    <>
      <div className="bg-slate-300 h-screen w-screen flex justify-center p-8">
        <div className="w-80 h-max p-2 px-4 bg-white rounded-lg text-center">
          <Heading label={"Log In"} />
          <SubHeading
            label={"Enter your credentials to access your account."}
          />
          <InputBox label={"Email"} placeholder={"Email"} />
          <InputPassword label={"Password"} placeholder={"Password"} />
          <Button label={"Log In"} />
          <ButtomOption label={"Don't have an account,"} redirect={"Sign Up"} to={"/signup"}/>
        </div>
      </div>
    </>
  );
}
