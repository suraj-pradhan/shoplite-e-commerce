import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Newsletter from "@/components/NewsLetter";
import OfferBar from "@/components/OfferBar";

export default function Home() {
  return (
    <main>
      <OfferBar />
      <NavBar />
      <Newsletter />
      <Footer />
    </main>
  );
}
