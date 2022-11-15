import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainSection from "./MainSection";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" static flex overflow-visible w-[100%] max-w-[100vw] min-h-[100vh] flex-col justify-between">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
