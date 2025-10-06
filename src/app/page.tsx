import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/Landing-page";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}
