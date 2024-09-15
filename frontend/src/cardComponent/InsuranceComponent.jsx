import insuranceLogo from "../assets/insuranceLogo.webp";
import insurancePicture from "../assets/insurancePicture.webp";

export default function InsuranceComponent() {
  return (
    <>
      <div className="h-auto grid grid-cols-5">
        <div className="col-span-3">
          <img className="max-w-44 m-12" src={insuranceLogo} alt="Paytm" />
          <p className="pb-10 font-bold text-5xl px-12">Insurance made easy.</p>
          <p className="px-12 pb-6 font-semibold text-xl">
            Buying insurance does not have to be tedious, time-consuming &
            confusing. Paytm Insurance removes the worry of getting insured by
            making it simple, convenient & easy-to-understand.
          </p>
          <button className="mx-12 mb-28 bg-[#293068] text-white hover:bg-[#00BAF2] font-semibold rounded-3xl px-4 py-2">Learn More</button>
        </div>
        <div className="col-span-2">
          <img className="p-4" src={insurancePicture} alt="Paytm" />
        </div>
      </div>
    </>
  );
}


