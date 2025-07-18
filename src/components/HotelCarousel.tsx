import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import h1 from "../../public/assets/HomeImage33.png"

export default function HotelCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    const hardcodedHotels = [
      {
        id: "1",
        name: "The Marine Pearl",
        location: "Mumbai, Maharashtra, India",
        city: "Mumbai",
        image: h1,
        description: "Luxury seafront hotel with breathtaking views of the Arabian Sea."
      },
      {
        id: "2",
        name: "Rajwada Heritage Palace",
        location: "Jaipur, Rajasthan, India",
        city: "Jaipur",
        image: "https://via.placeholder.com/300x200?text=Rajwada+Palace+Jaipur",
        description: "Experience royal comfort in this heritage palace turned boutique hotel."
      },
      {
        id: "3",
        name: "Himalayan Retreat Resort",
        location: "Manali, Himachal Pradesh, India",
        city: "Manali",
        image: "https://via.placeholder.com/300x200?text=Himalayan+Retreat+Manali",
        description: "Tranquil mountain retreat with breathtaking valley views and cozy cabins."
      },
      {
        id: "4",
        name: "TechCity Grand",
        location: "Bangalore, Karnataka, India",
        city: "Bangalore",
        image: "https://via.placeholder.com/300x200?text=TechCity+Grand+Bangalore",
        description: "Modern business hotel located in the heart of India’s Silicon Valley."
      },
      {
        id: "5",
        name: "Ganga River Retreat",
        location: "Rishikesh, Uttarakhand, India",
        city: "Rishikesh",
        image: "https://via.placeholder.com/300x200?text=Ganga+Retreat+Rishikesh",
        description: "Spiritual riverside stay with yoga, meditation, and river views."
      },
      {
        id: "6",
        name: "SunBay Beach Resort",
        location: "Goa, India",
        city: "Goa",
        image: "https://via.placeholder.com/300x200?text=SunBay+Beach+Goa",
        description: "Tropical resort with private beach access and vibrant nightlife."
      },
      {
        id: "7",
        name: "Snowpine Chalet",
        location: "Gulmarg, Jammu & Kashmir, India",
        city: "Gulmarg",
        image: "https://via.placeholder.com/300x200?text=Snowpine+Chalet+Gulmarg",
        description: "Ski-in/ski-out hotel with views of snow-capped peaks and pine forests."
      },
      {
        id: "8",
        name: "Green Valley Eco Resort",
        location: "Wayanad, Kerala, India",
        city: "Wayanad",
        image: "https://via.placeholder.com/300x200?text=Green+Valley+Wayanad",
        description: "Sustainable eco-resort in Kerala’s lush green landscapes."
      },
      {
        id: "9",
        name: "The Marina Grand",
        location: "Chennai, Tamil Nadu, India",
        city: "Chennai",
        image: "https://via.placeholder.com/300x200?text=Marina+Grand+Chennai",
        description: "Elegant coastal hotel offering comfort, cuisine, and class."
      },
      {
        id: "10",
        name: "Lakeview Palace",
        location: "Udaipur, Rajasthan, India",
        city: "Udaipur",
        image: "https://via.placeholder.com/300x200?text=Lakeview+Palace+Udaipur",
        description: "Lakeside heritage hotel with views of City Palace and Pichola Lake."
      }
    ];

    setHotels(hardcodedHotels);
  }, []);

  return (
    <Carousel
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-8xl h-full mx-auto"
    >
      {hotels.length > 0 ? (
        <CarouselContent>
          {hotels.map((hotel) => (
            <CarouselItem
              key={hotel.id}
              className="sm:basis-1/2 h-full md:basis-1/3 lg:basis-1/4"
            >
              <motion.div
                className="p-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden group h-150">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-[300px] object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <motion.div
                      className="p-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                      <p className="text-muted-foreground mb-2">
                        {hotel.location}
                      </p>
                      <p className="text-sm mb-4">{hotel.description}</p>
                      <div className="flex justify-end">
                        <Link to={`/hotelDesc/${hotel.id}`}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button className="text-lg bg-[#8B2B06] hover:bg-[#8B2B06]">
                              Book Now
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Loading hotels...</p>
        </div>
      )}
      <motion.div
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <CarouselPrevious className="carousel-previous relative bg-[#8B2B06] !static" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <CarouselNext className="carousel-next relative bg-[#8B2B06] !static" />
        </motion.div>
      </motion.div>
    </Carousel>
  );
}
