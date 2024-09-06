import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-dvh z-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
