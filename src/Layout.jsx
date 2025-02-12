import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
export default function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
