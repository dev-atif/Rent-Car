import CarsCards from "@/Components/Cards/CarsCards";
import HeroSection from "@/Components/Home/HeroSection";
import SupportSection from "@/Components/Home/SupportSection";
import car1 from "../../public/car1.jpeg";
import car2 from "../../public/car2.jpeg";
import car3 from "../../public/car3.jpeg";
import car4 from "../../public/car4.jpeg";
const carData = [
  {
    title: "Mercedes-Benz AMG GT63 S E Performance 4-Door Coupe ",
    price_per_hour: 26.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "4 seats",
    transmission: "AT / MT",
    fuel_type: "Petrol",
    image: car1,
  },

  {
    title: "BMW M5 Competition",
    price_per_hour: 30.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "5 seats",
    transmission: "Automatic",
    fuel_type: "Petrol",
    image: car2,
  },
  {
    title: "Audi RS7 Sportback",
    price_per_hour: 28.5,
    currency: "USD",
    rate_type: "Hours",
    seats: "4 seats",
    transmission: "Automatic",
    fuel_type: "Hybrid",
    image: car3,
  },
  {
    title: "Porsche Taycan 4S",
    price_per_hour: 35.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "4 seats",
    transmission: "Automatic",
    fuel_type: "Electric",
    image: car4,
  },
  {
    title: "Lamborghini Huracan EVO",
    price_per_hour: 45.0,
    currency: "USD",
    rate_type: "Hours",
    seats: "2 seats",
    transmission: "Automatic",
    fuel_type: "Petrol",
    image: car2,
  },
];

export default function Home() {
  return (
    <>
      <main>
        <div>
          <HeroSection />
        </div>
        <div className="flex flex-wrap gap-10 my-10 justify-center px-5 md:px-0">
          {carData.map((car, idx) => (
            <div key={idx} className="md:w-[45%] xl:w-[26%] w-full">
              <CarsCards key={car.title} item={car} />
            </div>
          ))}
        </div>
        <div>
          <SupportSection />
        </div>
      </main>
    </>
  );
}
