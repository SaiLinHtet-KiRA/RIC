import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import Canteen from "@/components/Canteen";
import Announcements from "@/components/Announcements";
import Clubs from "@/components/Clubs";
import AcademicCalendar from "@/components/AcademicCalendar";
import ShuttleBus from "@/components/ShuttleBus";
import AdministrationProcess from "@/components/AdministrationProcess";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <Hero />
      <QuickLinks />
     
      <ShuttleBus />

    </div>
  );
};

export default Index;
