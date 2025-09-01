import "./App.css";
import Navbar from "./components/Navbar";
import DevelopmentIntegration from "./pages/development-integration";
import UiUxDesign from "./pages/ui-ux-design";
import Connect from "./pages/connect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <DevelopmentIntegration />
      <UiUxDesign />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
