import upiLogo from "../assets/upiLogo.avif";
import cardImage from "../assets/card1Img.avif";
import upi2 from "../assets/upi2.png";
import transaction from "../assets/transaction.webp";
import TwoDiv from "./TwoDiv";


export default function LandingPageCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 px-2 py-1">
  {/* Content Section */}
  <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-start md:items-start">
    <img className="w-16 md:w-20 px-2 py-4 md:py-6" src={upiLogo} alt="" />
    <p className="text-3xl md:text-6xl font-semibold p-2 md:p-4">
      Indias Most-loved Payments App
    </p>
    <p className="text-base md:text-lg font-bold p-2 md:p-4">
      Recharge & pay bills, book flights & movie tickets, invest in stocks
      & mutual funds, and do a lot more.
    </p>
    <a
      href="https://paytm.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="m-2 md:m-4 px-4 md:px-6 py-2 rounded-full border border-black text-white bg-black hover:bg-white hover:text-black">
        Download Paytm App
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end mt-4 md:mt-0">
    <img className="w-48 md:w-full max-w-lg" src={cardImage} alt="" />
  </div>
</div>


      {/* Seperate Component --> */}

      <div className="w-full h-72 bg-[#0F4A8A]">
        <p className="font-bold text-5xl px-2 py-12 text-white">
          Book & Buy on Paytm.
        </p>
      </div>

      <div className="h-auto bg-slate-200 px-2">
        <p className="text-5xl font-bold px-4 pt-24 pb-4">
          Paytm Payment Instrument
        </p>

        <div className="h-auto bg-white rounded-lg mx-10 my-6 shadow-xl flex">
          <div className="ml-24 pt-24 pb-24">
            <div className="flex space-x-4">
              <img src={upi2} alt="inr" className="w-14" />
              <p className="font-bold text-lg">
                UPI Money <br /> Transfer
              </p>
            </div>

            <h1 className="text-4xl font-bold py-6">
              Pay anyone directly <br /> from your bank <br /> account.
            </h1>
            <p className="text-lg py-6 font-medium">
              Pay anyone, everywhere. Make contactless & secure <br /> payments
              in-stores or online using Paytm UPI or <br /> directly from your
              Bank Account. Plus, send & receive <br /> money from anyone.
            </p>
            <button className="text-white bg-black rounded-3xl px-4 py-2 border border-black hover:text-black hover:bg-white">
              Download the App
            </button>
          </div>
          <div className="ml-auto mt-24 mb-24">
            <img src={transaction} alt="paytm" className="max-w-xl" />
          </div>
        </div>

        <TwoDiv />
      </div>
    </>
  );
}



