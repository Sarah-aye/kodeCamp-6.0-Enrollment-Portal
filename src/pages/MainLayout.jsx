import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout({ students, averageScore }) {
  return (
    <div>
      <Header students={students} averageScore={averageScore} />
      <br />
      <Outlet />
    </div>
  );
}
