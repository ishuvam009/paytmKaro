import upiLogo from "../assets/upiLogo.avif";
import cardImage from "../assets/card1Img.avif";

export default function LandingPageCard() {
  return (
    <>
      <div className="grid grid-cols-5 p-2">
        <div className="col-span-3">
          <img className="w-20 px-2 py-6" src={upiLogo} alt="" />
          <p className="text-6xl font-semibold p-4">
            India's Most-loved Payments App
          </p>
          <p className="text-lg font-bold p-4">
            Recharge & pay bills, book flights & movie tickets, invest in stocks
            & mutual funds, and do a lot more.
          </p>
          <a
            href="https://paytm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="m-4 px-6 py-2 rounded-full border border-black text-white bg-black hover:bg-white hover:text-black">
              Download Paytm App
            </button>
          </a>
        </div>

        <div className="col-span-2">
          <img className="w-96" src={cardImage} alt="" />
        </div>
      </div>

      {/* Seperate Component --> */}

      <div className="w-full h-72 bg-blue-700">
        <p className="font-bold text-5xl px-2 py-12 text-white">
          Book & Buy on Paytm.
        </p>
      </div>

      <div className="h-auto bg-slate-200 p-2">
        <p className="text-5xl font-bold px-4 py-20">Paytm Payment Instrument</p>
        <div className="h-64 bg-white rounded-lg mx-4 my-6 shadow-xl"></div>

        <div className="h-64 bg-white rounded-lg mx-4 my-6 shadow-xl"></div>
      </div>
    </>
  );
}
