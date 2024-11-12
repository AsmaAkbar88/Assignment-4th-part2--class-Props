import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


export default function Home() {
  return (


    <div>
      <Hero />
      <div className="flex justify-center items-center space-x-16 p-24 ">

        {/* Card 1 */}
        <Card
          name="Bushra Niazi"
          classs="I.T"
          roll={8800}
          day="Tuedsay"
          batch="Q2"
          image='/3pic.jpg' />

        {/* Card 2 */}

        <Card
          name="Asma Akbar"
          classs="i.T"
          roll={8888}
          day="Monday"
          batch="Q2"
          image='/picc.jpg' />

        {/* Card 3 */}
        <Card
          name="Iqra Noman"
          classs="I.T"
          roll={8811}
          day="Friday"
          batch="Q2"
          image='/images1.jpg' />
      </div>
      <Footer />
    </div>

  );
}
