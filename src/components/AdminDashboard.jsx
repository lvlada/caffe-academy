import CaffeLogo from "../assets/cafe_logo.png";
import { AdminDashboardTable } from "./AdminDashboardTable";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
export function AdminDashboard() {
  const navigate = useNavigate();

  const { allCarts, user } = useAuth();

  if (user === null) {
    navigate("/login");
  }
  return (
    <>
      <div className="admin-page">
        <div className="header-admin-page">
          <img src={CaffeLogo} alt="Cafe logo" />
        </div>
        <div className="admin-dashboard">
          <h4>Status porudženice</h4>
          <table className="admin-dashboard-table">
            <tr>
              <td className="admin-dashboard-table-id">ID prodzbenice</td>
              <td className="admin-dashboard-table-info">Priprema se</td>
              <td className="admin-dashboard-table-info">Spremna</td>
            </tr>
          </table>
          {allCarts.map((item) => (
            <AdminDashboardTable key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
