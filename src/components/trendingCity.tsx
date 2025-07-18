import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const TrendingCity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cities = [
    {
      name: "New Delhi",
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    },
    {
      name: "Bengaluru",
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
    },
    {
      name: "Mumbai",
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
    },
    {
      name: "Chennai",
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
    },
    {
      name: "Varanasi",
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=",
    },
  ];

  return (
    <div className="w-full max-w-[1110px] text-black mt-20 px-4 mx-auto" ref={ref}>
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-3xl sm:text-4xl font-serif font-bold mb-2 text-[#8B2B06]">
          Trending Destinations
        </h1>
        <p className="text-center text-base sm:text-lg mb-10 font-serif text-[#8B2B06]">
          Most popular choices for travellers from India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link to={`/cityHotels/${city.name}`} key={city.name}>
              <div
                className="relative w-full overflow-hidden cursor-pointer rounded-lg h-[280px] sm:h-[320px] md:h-[360px] hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${city.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent">
                  <h3 className="text-lg sm:text-xl font-bold absolute top-0 left-0 p-4 sm:p-6 text-white">
                    {city.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.header>
    </div>
  );
};

export default TrendingCity;
