import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="flex justify-center mt-10">
      <div className="text-center">HI Join Toay Paytm,</div>
      <Link to={"/signup"}>Click Here</Link>
      </div>
    </>
  );
}
