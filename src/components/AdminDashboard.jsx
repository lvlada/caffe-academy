import CaffeLogo from "../assets/cafe_logo.png";
import { AdminDashboardTable } from "./AdminDashboardTable";

export function AdminDashboard() {
  return (
    <>
      <div className="admin-page">
        <div className="header-admin-page">
          <img src={CaffeLogo} alt="Cafe logo"/>
        </div>
        <div className="admin-dashboard">
          <h4>Status porudženice</h4>
         <AdminDashboardTable />
        </div>

      </div>
    </>
  );
}
