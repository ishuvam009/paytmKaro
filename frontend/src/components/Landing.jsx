import Header from "./Header";
import LandingPageCard from "../cardComponent/LandingPageCard";

export default function Landing() {
  return (
    <>
      <Header />
      <div className="pt-32">
        <LandingPageCard />
      </div>
    </>
  );
}
