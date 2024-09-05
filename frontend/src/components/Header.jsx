import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <>
      <div className="w-full h-auto shadow-xl p-4 fixed bg-white">
        <div className=" flex items-center px-10">
          <img src={logo} alt="paytm-logo" />
          <p className="p-5 font-semibold text-lg">Paytm for customers</p>
          <p className="p-5 font-semibold text-lg">Paytm For Business</p>
          <p className="p-5 font-semibold text-lg">Investor Relations</p>
          <p className="p-5 font-semibold text-lg">Company</p>
          <p className="p-5 font-semibold text-lg">Career</p>
          <Link className="ml-auto" to={"/signup"}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded px-2 py-1">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
