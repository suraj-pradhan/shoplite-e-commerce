import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Newsletter from "@/components/NewsLetter";
import OfferBar from "@/components/OfferBar";

export default function Home() {
  return (
    <main>
      <OfferBar />
      <NavBar />
      <Banner />
      <Newsletter />
      <Footer />
    </main>
  );
}
