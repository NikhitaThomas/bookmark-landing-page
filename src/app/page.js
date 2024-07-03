import Image from "next/image";
import Contact from "./components/Contact";
import ExtensionSection from "./components/ExtensionSection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Header />
      <FeatureSection />
      <ExtensionSection />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
