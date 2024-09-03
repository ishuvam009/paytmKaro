import { Link } from "react-router-dom";

export default function ButtomOption({ label, redirect, to }) {
  return (
    <>
      <div className="text-sm flex justify-center">
        <div>{label}</div>
        <Link className="" to={to}>
          {redirect}
        </Link>
      </div>
    </>
  );
}
