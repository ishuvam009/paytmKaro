import { Link } from "react-router-dom";
import Header from "./Header";

export default function Landing() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-10">
      <div className="text-center">HI Join Toay Paytm,</div>
      <Link className="underline" to={"/signup"}>Click Here</Link>
      </div>
    </>
  );
}
