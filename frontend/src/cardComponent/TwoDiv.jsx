import hdfcLogo from "../assets/leftDiv.png";
import sbiLogo from "../assets/rigtDiv.png";
import hdfcCard from "../assets/hdfcCard.webp";
import sbiCard from "../assets/sbiCard.webp";

export default function TwoDiv() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="h-auto bg-white rounded-lg ml-10 mr-6 my-6 shadow-xl">
          <div className="">
            <img className="max-w-60 mx-16" src={hdfcLogo} alt="hdfc-paytm" />
            <p className="font-bold text-4xl px-16 py-10">
              Unlimited Cashback <br /> Every time
            </p>
            <p className="font-medium text-xl px-16 pb-2">
              Paytm HDFC Bank Credit Card. A card with assured Cashback and
              incredible offers.
            </p>
            <p className="px-16 text-[#7D7E87] text-sm font-medium">
              *Paytm Payments Bank does not provide any loan or credit card on
              the Paytm App. Know more
            </p>
            <img className="px-14 pt-6" src={hdfcCard} alt="HDFC Credit Card" />
          </div>
        </div>

        <div className="h-auto bg-white rounded-lg mr-10 ml-6 my-6 shadow-xl">
          <div>
            <img
              className="mx-16 mt-16 max-w-60"
              src={sbiLogo}
              alt="sbi-paytm"
            />
            <p className="font-bold text-4xl px-16 py-10">
              Indias Most <br /> Sincere Credit Card
            </p>
            <p className="font-medium text-xl px-16 pb-2">
              Paytm SBI Card SELECT - With Intelligent Features & Great Reward
              that Never Expire
            </p>
            <p className="px-16 text-[#7D7E87] text-sm font-medium">
              *Paytm Payments Bank does not provide any loan or credit card on
              the Paytm App. Know more
            </p>
            <img className="px-14 pt-6" src={sbiCard} alt="SBI Credot Card" />
          </div>
        </div>

      </div>
    </>
  );
}
