import Header from "../components/Header";
import LandingPageCard from "../cardComponent/LandingPageCard";
import InsuranceComponent from "../cardComponent/InsuranceComponent";

export default function Landing() {
  return (
    <>
      <Header />
      <div className="pt-32">
        <LandingPageCard />
        <InsuranceComponent />
      </div>
    </>
  );
}


