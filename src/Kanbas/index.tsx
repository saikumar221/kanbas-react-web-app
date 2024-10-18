import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
  <table width="100%">
    <tr><td valign="top" style={{ padding: "0px" }}>
      <KanbasNavigation />
      </td><td valign="top">
    <div  className="wd-main-content-offset p-3">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
      </Routes>
    </div>
      </td></tr>
  </table>
    </div>
  );
}
