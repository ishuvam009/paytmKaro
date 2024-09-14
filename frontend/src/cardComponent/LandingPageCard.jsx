import upiLogo from "../assets/upiLogo.avif";
import cardImage from "../assets/card1Img.avif";
import upi2 from "../assets/upi2.png";
import transaction from "../assets/transaction.webp";

export default function LandingPageCard() {
  return (
    <>
      <div className="grid grid-cols-5 px-2 py-1">
        <div className="col-span-3">
          <img className="w-20 px-2 py-6" src={upiLogo} alt="" />
          <p className="text-6xl font-semibold p-4">
            India's Most-loved Payments App
          </p>
          <p className="text-lg font-semibold p-4">
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

        <div className="col-span-2 ml-auto">
          <img className="max-w-lg" src={cardImage} alt=""/>
        </div>
      </div>

      {/* Seperate Component --> */}

      <div className="w-full h-72 bg-[#0F4A8A]">
        <p className="font-bold text-5xl px-2 py-12 text-white">
          Book & Buy on Paytm.
        </p>
      </div>

      <div className="h-auto bg-slate-200 p-2">
        <p className="text-5xl font-bold px-4 py-20">
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
              in-stores or online using Paytm UPI or <br /> directly from your Bank
              Account. Plus, send & receive <br /> money from anyone.
            </p>
            <button className="text-white bg-black rounded-3xl px-4 py-2 border border-black hover:text-black hover:bg-white">Download the App</button>
          </div>
          <div className="ml-auto mt-24 mb-24">
            <img src={transaction} alt="paytm" className="max-w-xl" />
          </div>
        </div>

        <div className="h-64 bg-white rounded-lg mx-10 my-6 shadow-xl"></div>
      </div>
    </>
  );
}



