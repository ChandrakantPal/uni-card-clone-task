import AppDetails from "./AppDetails";
import CardDetails from "./CardDetails";
import CardFeatures from "./CardFeatures";
import ApplyNowButton from "./components/ApplyNowButton";
import DownloadApp from "./DownloadApp";
import Hero from "./Hero";
import PayCard from "./PayCard";
import SmartBanking from "./SmartBanking";
import SplitPayment from "./SplitPayment";

const MainSection = () => {
  return (
    <main className="jsx-ebabb75f6ef64461">
      <div className="flex flex-col bg-black">
        <Hero />
        <PayCard />
      </div>
      <div className="py-12 md:py-[150px]">
        <SplitPayment />
        <CardDetails />
      </div>
      <AppDetails />
      <CardFeatures />
      <SmartBanking />
      <DownloadApp />
      <ApplyNowButton />
    </main>
  );
};

export default MainSection;
