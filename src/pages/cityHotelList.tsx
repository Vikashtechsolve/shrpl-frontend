import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const hotels = [
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72057788.jpg?k=9b305390669e8b7d3ed0c07f34ff3e550de9f1e7e872dcfbafe25c2f86ea4c3c&o=",
    hotelName: "The Grand Palace",
    rating: 4.8,
    numReviews: 1243,
    desc: "Luxury stay with rooftop pool and city view.",
    location: "New Delhi",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154282511.jpg?k=1ad417b40bf8e2d56017775c2562de6e0c393ffe9fd3784dec18985f18bb6989&o=",
    hotelName: "Cityscape Residency",
    rating: 4.3,
    numReviews: 895,
    desc: "Comfortable rooms with easy access to transport.",
    location: "Mumbai",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336041746.jpg?k=81ca9e45244b4f17cb199c4ac73d2094446ebd17020c5c1425a44a23e860b562&o=",
    hotelName: "Ocean Breeze Resort",
    rating: 4.6,
    numReviews: 1105,
    desc: "Beachfront property with private cottages.",
    location: "Goa",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582569791.jpg?k=afc44b5e0af18853e77df4628b94f3ee34c2812450827d625212d78807062b18&o=",
    hotelName: "Hillside Retreat",
    rating: 4.7,
    numReviews: 738,
    desc: "Quiet escape surrounded by nature and hills.",
    location: "Manali",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Urban Nest Hotel",
    rating: 4.2,
    numReviews: 562,
    desc: "Modern rooms with coworking space and café.",
    location: "Bengaluru",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72057788.jpg?k=9b305390669e8b7d3ed0c07f34ff3e550de9f1e7e872dcfbafe25c2f86ea4c3c&o=",
    hotelName: "The Grand Palace",
    rating: 4.8,
    numReviews: 1243,
    desc: "Luxury stay with rooftop pool and city view.",
    location: "New Delhi",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154282511.jpg?k=1ad417b40bf8e2d56017775c2562de6e0c393ffe9fd3784dec18985f18bb6989&o=",
    hotelName: "Cityscape Residency",
    rating: 4.3,
    numReviews: 895,
    desc: "Comfortable rooms with easy access to transport.",
    location: "Mumbai",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Ocean Breeze Resort",
    rating: 4.6,
    numReviews: 1105,
    desc: "Beachfront property with private cottages.",
    location: "Goa",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582569791.jpg?k=afc44b5e0af18853e77df4628b94f3ee34c2812450827d625212d78807062b18&o=",
    hotelName: "Hillside Retreat",
    rating: 4.7,
    numReviews: 738,
    desc: "Quiet escape surrounded by nature and hills.",
    location: "Manali",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Urban Nest Hotel",
    rating: 4.2,
    numReviews: 562,
    desc: "Modern rooms with coworking space and café.",
    location: "Bengaluru",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72057788.jpg?k=9b305390669e8b7d3ed0c07f34ff3e550de9f1e7e872dcfbafe25c2f86ea4c3c&o=",
    hotelName: "The Grand Palace",
    rating: 4.8,
    numReviews: 1243,
    desc: "Luxury stay with rooftop pool and city view.",
    location: "New Delhi",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154282511.jpg?k=1ad417b40bf8e2d56017775c2562de6e0c393ffe9fd3784dec18985f18bb6989&o=",
    hotelName: "Cityscape Residency",
    rating: 4.3,
    numReviews: 895,
    desc: "Comfortable rooms with easy access to transport.",
    location: "Mumbai",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Ocean Breeze Resort",
    rating: 4.6,
    numReviews: 1105,
    desc: "Beachfront property with private cottages.",
    location: "Goa",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582569791.jpg?k=afc44b5e0af18853e77df4628b94f3ee34c2812450827d625212d78807062b18&o=",
    hotelName: "Hillside Retreat",
    rating: 4.7,
    numReviews: 738,
    desc: "Quiet escape surrounded by nature and hills.",
    location: "Manali",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Urban Nest Hotel",
    rating: 4.2,
    numReviews: 562,
    desc: "Modern rooms with coworking space and café.",
    location: "Bengaluru",
  },
];

const CityHotelList = () => {
  const { city } = useParams();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 my-8 gap-8 px-4 md:px-12">
      {hotels.map((val, index) => (
        <div
          key={index}
          className="w-full border p-4 md:p-6 border-gray-200 flex flex-col md:flex-row justify-between rounded-lg"
        >
          <div className="w-full md:w-[70%] flex flex-col md:flex-row">
            <div
              className="w-full md:w-[30%] h-40 md:h-auto rounded-lg overflow-hidden bg-gray-300"
              style={{
                backgroundImage: `url(${val.hotelImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="mt-4 md:mt-0 md:ml-4">
              <h2 className="text-xl font-bold">{val.hotelName}</h2>
              <p className="text-gray-600">{city}</p>
              <p className="mt-2">{val.desc}</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col justify-between items-start md:items-end md:w-[30%]">
            <div className="flex gap-2 items-center text-sm mb-2">
              <p>{val.numReviews} reviews</p>
              <p className="flex items-center text-red-700 font-medium">
                <FaStar className="mr-1" />
                {val.rating}
              </p>
            </div>
            <button className="w-full md:w-auto bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Show prices
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityHotelList;
