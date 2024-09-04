import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <>
      <div className="w-full h-28 shadow-lg">
        <div className=" flex">
          <img src={logo} alt="paytm-logo" />
          <p className=" font-semibold text-lg">Paytm for customers</p>
          <p className=" font-semibold text-lg">Paytm For Business</p>
          <p className=" font-semibold text-lg">Investor Relations</p>
          <p className=" font-semibold text-lg">Company</p>
          <p className=" font-semibold text-lg">Career</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">
            Button
          </button>
        </div>
      </div>
    </>
  );
}
