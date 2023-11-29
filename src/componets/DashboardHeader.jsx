import { Link } from "react-router-dom";

function DashboardHeader() {
  return (
    <div className="w-full fixed z-30 bg-slate-100 shadow-md">
      <div className="flex justify-end px-24 py-2">
        <Link to={"/"}>
          <img
            src="/images/thankyou.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
