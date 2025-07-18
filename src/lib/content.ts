import { images } from "../../public/assets/export";
import foodImage from "../../public/assets/food.png";
// import roomImage from "../../public/assets/roomImage.png";
import bonfireImage from "../../public/assets/bonfire.png";
// import guestAccessImage from "../../public/assets/guestAccess.png";
import adventureImage from "../../public/assets/advanterus.jpeg";
// import BanqAndEvents from "@/pages/banqAndEvents";
import bnq1 from "../../public/assets/bnq1.jpeg";
import bnq2 from "../../public/assets/bnq2.jpeg";
import bnq3 from "../../public/assets/bnq3.jpeg";
import bnq4 from "../../public/assets/bnq4.jpeg";
import bnq5 from "../../public/assets/bnq5.jpeg";
import bnq6 from "../../public/assets/bnq6.jpeg";
import Deepak from "../../public/assets/Deepak.jfif";
import DeepakRedhu from "../../public/assets/DeepakRedhu.jfif"
import KritiMisra from "../../public/assets/KritiMishra.jfif"
import SauravSingh from "../../public/assets/SauravSingh.jfif"
import Manasvi from "../../public/assets/manasvi.jpeg"

export const content = {

  company: {
    name: "Saavi",
    description: "Experience luxury and comfort at our world-class hotels and resorts.",
    contact: {
      address: "545,Sector 43,Golf course Road,",
      city: "Gurugram, Haryana 122003",
      phone: "9999575044, 7290006773",
      email: "hello@shrpl.com"
    }
  },
   hotels: [
  {
    id: "1",
    name: "The Marine Pearl",
    location: "Mumbai, Maharashtra, India",
    city: "Mumbai",
    image: "https://via.placeholder.com/300x200?text=Marine+Pearl+Mumbai",
    description: "Luxury seafront hotel with breathtaking views of the Arabian Sea.",
    amenities: ["Sea View", "Rooftop Bar", "Fitness Center", "Spa"]
  },
  {
    id: "2",
    name: "Rajwada Heritage Palace",
    location: "Jaipur, Rajasthan, India",
    city: "Jaipur",
    image: "https://via.placeholder.com/300x200?text=Rajwada+Palace+Jaipur",
    description: "Experience royal comfort in this heritage palace turned boutique hotel.",
    amenities: ["Heritage Rooms", "Cultural Shows", "Fine Dining", "Guided Tours"]
  },
  {
    id: "3",
    name: "Himalayan Retreat Resort",
    location: "Manali, Himachal Pradesh, India",
    city: "Manali",
    image: "https://via.placeholder.com/300x200?text=Himalayan+Retreat+Manali",
    description: "Tranquil mountain retreat with breathtaking valley views and cozy cabins.",
    amenities: ["Snow Activities", "Spa", "Mountain View", "Bonfire"]
  },
  {
    id: "4",
    name: "TechCity Grand",
    location: "Bangalore, Karnataka, India",
    city: "Bangalore",
    image: "https://via.placeholder.com/300x200?text=TechCity+Grand+Bangalore",
    description: "Modern business hotel located in the heart of India’s Silicon Valley.",
    amenities: ["High-Speed WiFi", "Conference Rooms", "Multi-Cuisine", "Airport Shuttle"]
  },
  {
    id: "5",
    name: "Ganga River Retreat",
    location: "Rishikesh, Uttarakhand, India",
    city: "Rishikesh",
    image: "https://via.placeholder.com/300x200?text=Ganga+Retreat+Rishikesh",
    description: "Spiritual riverside stay with yoga, meditation, and river views.",
    amenities: ["Yoga", "River View", "Organic Café", "Meditation Hall"]
  },
  {
    id: "6",
    name: "SunBay Beach Resort",
    location: "Goa, India",
    city: "Goa",
    image: "https://via.placeholder.com/300x200?text=SunBay+Beach+Goa",
    description: "Tropical resort with private beach access and vibrant nightlife.",
    amenities: ["Private Beach", "Poolside Bar", "Night Club", "Water Sports"]
  },
  {
    id: "7",
    name: "Snowpine Chalet",
    location: "Gulmarg, Jammu & Kashmir, India",
    city: "Gulmarg",
    image: "https://via.placeholder.com/300x200?text=Snowpine+Gulmarg",
    description: "Ski-in/ski-out hotel with views of snow-capped peaks and pine forests.",
    amenities: ["Ski Rentals", "Fireplace Lounge", "Mountain Café", "Snow Trek"]
  },
  {
    id: "8",
    name: "Green Valley Eco Resort",
    location: "Wayanad, Kerala, India",
    city: "Wayanad",
    image: "https://via.placeholder.com/300x200?text=Green+Valley+Wayanad",
    description: "Sustainable eco-resort in Kerala’s lush green landscapes.",
    amenities: ["Treehouses", "Nature Walks", "Farm Meals", "Bird Watching"]
  },
  {
    id: "9",
    name: "The Marina Grand",
    location: "Chennai, Tamil Nadu, India",
    city: "Chennai",
    image: "https://via.placeholder.com/300x200?text=Marina+Grand+Chennai",
    description: "Elegant coastal hotel offering comfort, cuisine, and class.",
    amenities: ["Sea View Rooms", "Spa", "Buffet Breakfast", "Airport Pickup"]
  },
  {
    id: "10",
    name: "Lakeview Palace",
    location: "Udaipur, Rajasthan, India",
    city: "Udaipur",
    image: "https://via.placeholder.com/300x200?text=Lakeview+Palace+Udaipur",
    description: "Lakeside heritage hotel with views of City Palace and Pichola Lake.",
    amenities: ["Lake Cruises", "Cultural Evenings", "Royal Dining", "Terrace Café"]
  },
  {
    id: "11",
    name: "CityScape Inn",
    location: "Ahmedabad, Gujarat, India",
    city: "Ahmedabad",
    image: "https://via.placeholder.com/300x200?text=CityScape+Inn+Ahmedabad",
    description: "Centrally located hotel ideal for both business and leisure travelers.",
    amenities: ["Fast Check-in", "Fitness Room", "Multi-Cuisine Restaurant"]
  },
  {
    id: "12",
    name: "The Lotus Ganges",
    location: "Haridwar, Uttarakhand, India",
    city: "Haridwar",
    image: "https://via.placeholder.com/300x200?text=Lotus+Ganges+Haridwar",
    description: "Peaceful spiritual retreat just a walk away from Har Ki Pauri.",
    amenities: ["Prayer Hall", "Riverside Café", "Holy Dip Access", "Peace Garden"]
  },
  {
    id: "13",
    name: "Royal Orchid Heights",
    location: "Hyderabad, Telangana, India",
    city: "Hyderabad",
    image: "https://via.placeholder.com/300x200?text=Royal+Orchid+Hyderabad",
    description: "Upscale hotel combining Nawabi luxury with modern elegance.",
    amenities: ["Pool", "Bar Lounge", "Fitness Center", "Banquet Hall"]
  },
  {
    id: "14",
    name: "The Dunes Resort",
    location: "Jaisalmer, Rajasthan, India",
    city: "Jaisalmer",
    image: "https://via.placeholder.com/300x200?text=Dunes+Resort+Jaisalmer",
    description: "Desert resort offering camel rides, folk music, and dune dining.",
    amenities: ["Camel Safari", "Folk Dance", "Tent Stay", "Cultural Nights"]
  },
  {
    id: "15",
    name: "Coral Coast Inn",
    location: "Kochi, Kerala, India",
    city: "Kochi",
    image: "https://via.placeholder.com/300x200?text=Coral+Coast+Kochi",
    description: "Coastal hotel with Portuguese charm and sea-inspired décor.",
    amenities: ["Backwater Cruise", "Seafood Restaurant", "Terrace Lounge"]
  },
  {
    id: "16",
    name: "Skyline Vista",
    location: "Pune, Maharashtra, India",
    city: "Pune",
    image: "https://via.placeholder.com/300x200?text=Skyline+Vista+Pune",
    description: "Stylish urban hotel ideal for business travelers and weekenders.",
    amenities: ["Sky Bar", "Meeting Rooms", "Spa", "City View Rooms"]
  },
  {
    id: "17",
    name: "Emerald Bay Resort",
    location: "Pondicherry, India",
    city: "Pondicherry",
    image: "https://via.placeholder.com/300x200?text=Emerald+Bay+Pondicherry",
    description: "Beachfront hotel with French colonial architecture and calm waters.",
    amenities: ["Bicycle Tours", "French Bakery", "Ocean View Rooms"]
  },
  {
    id: "18",
    name: "Capital Crown",
    location: "New Delhi, India",
    city: "Delhi",
    image: "https://via.placeholder.com/300x200?text=Capital+Crown+Delhi",
    description: "Sophisticated hotel in Delhi’s diplomatic and cultural zone.",
    amenities: ["Fine Dining", "Metro Access", "Business Lounge"]
  },
  {
    id: "19",
    name: "Aurora Cliff Resort",
    location: "Munnar, Kerala, India",
    city: "Munnar",
    image: "https://via.placeholder.com/300x200?text=Aurora+Cliff+Munnar",
    description: "Tea garden resort with panoramic hill views and peaceful vibes.",
    amenities: ["Tea Tasting", "Hilltop Café", "Balcony Rooms"]
  },
  {
    id: "20",
    name: "Silken Sands Inn",
    location: "Puri, Odisha, India",
    city: "Puri",
    image: "https://via.placeholder.com/300x200?text=Silken+Sands+Puri",
    description: "Beach resort just minutes from the Jagannath Temple and golden beaches.",
    amenities: ["Beach Walks", "Temple Tours", "Sea View Restaurant"]
  }
],

  upcomingProjects: [
    {
      id: "saavi-gurgaon",
      name: "Saavi Hotel Gurgaon",
      location: "Gurgaon, Delhi",
      city: "Gurugram",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
      description: "A new level of luxury in the heart of Gurgaon.",
      openingDate: "2025"
    },
    {
      id: "saavi-goa",
      name: "Saavi Hotel Goa",
      location: "Goa, India",
      city: "Goa",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
      description: "Elegant suites with stunning views.",
      openingDate: "2025"
    }
  ],
  features: [
    {
      title: "5-Star Service",
      description: "Experience world-class hospitality with our dedicated staff."
    },
    {
      title: "Luxury Amenities",
      description: "Indulge in premium facilities and services at all our properties."
    },
    {
      title: "Prime Locations",
      description: "Discover our carefully selected destinations worldwide."
    }
  ],
  facilities: [
    {
      title: "Food",
      description: "Indulge in a variety of cuisines prepared with love and care for a memorable dining experience.",
      image: foodImage // Replace with the relevant image from your assets
    },
    {
      title: "Rooms",
      description: "Relax in our comfortable, well-furnished rooms designed to offer you a homely ambiance.",
      image: images.Image_14 // Replace with the relevant image from your assets
    },
    {
      title: "Bonfire",
      description: "Gather around a warm bonfire under the open sky, creating unforgettable moments with loved ones.",
      image: bonfireImage // Replace with the relevant image from your assets
    },
    {
      title: "Guest Access",
      description: "Enjoy seamless access to all facilities, ensuring a memorable and hassle-free stay.",
      image: images.Image_7 // Replace with the relevant image from your assets
    },
    {
      title: "Relax",
      description: "Escape the hustle and find your peace in a serene and rejuvenating ambiance.",
      image: adventureImage // Replace with the relevant image from your assets
    }
  ],
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Hotels', href: '/hotels' },
    { name: 'Book Now', href: '/booking' },
    { name: 'Banquet & Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ],
  banqAndEvents: {

    description1: "Our Banquet hall has a video conferencing facility at SHRPL hotels, Gurgram. It has a lavish decor and provides a traditional touch with an opulent environment that is ideal for hosting any form of event.",
    description2: "Host events like receptions, parties, or even business meetings in this elegant hall that comes well-equipped with a projector , A/C, Wi-Fi, and audiovisual system.",
    description3: "Book your stay at one of the best Gurugram hotel near Golf course road during your grand event at our state of the art event venue.",
    images: [
      {
        url: bnq1,
        title: "Luxury Suite"
      },
      {
        url: bnq2,
        title: "Swimming Pool"
      },
      {
        url: bnq3,
        title: "Hotel Exterior"
      },
      {
        url: bnq4,
        title: "Restaurant"
      },
      {
        url: bnq5,
        title: "Spa"
      },
      {
        url: bnq6,
        title: "Hotel Room"
      },
    ]
  },
  team: [
    {
      name: 'Deepak Dangi',
      role: 'Founder & CEO',
      description: 'Mr Deepak Dangi completed his education in the field of IT (B.Sc IT) and completed his Post Graduation in Management (MBA). Worked with big brands like Imperial Hotel Delhi, Le Meridien , Metropolitan, Pi hotels etc., Mr. Deepak Dangi emerged as an exceptional amalgamation of IT and hospitality. To His love for geniality and his burning desire to achieve the inevitable success, In 2019 founded the SHRPL Events and Entertainment, His experience of 12 years in the industry adds fuel to passion driven approach of SHRPL Hotel. Now SHRPL Hotels operates five plus hotels in India, this contemporary approach of attention to the corporate stay and Social events is driven by the vast expertise of this charming entrepreneur.',
      imageSrc: Deepak,
    },
    {
      name: 'Manasvi Dutta',
      role: 'Co Founder',
      description: "A service orientated skilled leader having tactful articulation with professional judgement and decision making skills. A proven leader with a keen eye for detail, a flair for contemporary art and decor, and 10 years of rich experience is what sets Manasvi apart. A creative problem solver, with a consistently successful track record in all aspects of Event Management, have Completed Master Degree from Delhi University, and Bachelor in Science from DRC Delhi University, she is an expert in Events Organising, . A self-made woman, her last assignment was as Director with PRI Group before she joined us. She has also worked with key industry players like Tecnia, Globe Advice, Vipra Dialogues, amongst others across locations in India. She firmly believes that a good induction and comprehensive training is the key to high standards of delivery with hygiene and service.",
      imageSrc: Manasvi,
    },
    {
      name: 'Kriti Mishra',
      role: 'Director Sales & marketing',
      description: "Kriti Mishra is a results-driven sales professional with 6+ years of experience in banking and finance. With an MBA in Marketing and Finance, she excels in strategic sales, client relationship management, and market analysis. Recognized as a **Top Sales Performer** for three consecutive years, she has successfully grown revenue by 20% YoY and led teams to exceed targets by 30%. Known for her consultative sales approach, Kriti focuses on delivering tailored financial solutions and fostering long-term client relationships.",
      imageSrc: KritiMisra,
    },
    
    {
      name: 'Deepak Redhu',
      role: 'Account Head',
      description: "Deepak Redhu is a senior executive responsible for managing the financial actions of the company. They are often in charge of tracking cash flow, analyzing strengths/weaknesses in the company’s finances and overseeing all aspects of its financial success. Mr. Redhu completed his bachelor's in accounts management. Worked with big brands like Indusind bank and L&T Finance. His expertise is to Ensure cash flow is appropriate for the organization’s operations and Control and evaluate the organization’s fundraising plans and capital structure. Now using his vast experience for more than 10 years to expedite the potential of SHRPL Hotels.",
      imageSrc: DeepakRedhu,
    },
    {
      name: 'Vikas Kadian',
      role: 'Director Food And Beverages',
      description: "An experienced F&B leader, I specialize in operations, team management, and strategic growth. With expertise in optimizing guest experiences, cost control, and profitability, I drive excellence in service, quality, and hygiene. Skilled in budgeting, vendor relations, and market analysis, I implement innovative strategies to enhance revenue and streamline operations while staying ahead of industry trends.",
      imageSrc: SauravSingh,
    },
    
  ],
  terms_and_conditions: [
    {
      title: 'Terms and Conditions',
      content: `Terms and Conditions for SHRPL Hotel

Welcome to SHRPL Hotel. By accessing or using our services, including making reservations, checking in, and utilizing hotel facilities, you agree to comply with the following terms and conditions. Please read them carefully.

Reservation Policy

Reservations can be made via our official website, phone, or authorized third-party platforms.
A valid credit card is required to secure a booking.
Cancellation policies vary depending on the booking type. Guests are advised to refer to their specific reservation details for cancellation timelines and fees.
No-shows and late cancellations may result in a penalty charge, including but not limited to the cost of the first night’s stay.
Check-in/Check-out Policy

Check-in time begins at 2:00 PM. Early check-in is subject to availability and may incur additional charges.
Check-out time is by 12:00 PM. Late check-outs may be subject to additional fees if they exceed one hour beyond the stated check-out time.
Payment Terms

Payment for the stay is due at the time of check-in or as specified in the reservation agreement.
Accepted payment methods include credit/debit cards and cash (subject to hotel discretion).
All applicable taxes and service charges will be added to the final bill and may vary based on local regulations.
Guest Responsibilities

Guests are required to maintain appropriate conduct while on hotel property, adhering to all hotel policies, rules, and regulations.
SHRPL Hotel reserves the right to refuse service to any guest displaying disruptive or illegal behavior, including but not limited to intoxication, noise disturbances, or property damage.
Privacy and Data Protection

Personal information collected during the reservation process or during the stay will be stored and processed in accordance with applicable privacy laws and SHRPL Hotel’s privacy policy.
The hotel will not disclose any personal data without the consent of the guest, unless required by law or in relation to the provision of services.
Liability

SHRPL Hotel is not liable for any loss, damage, or injury to guests or their property, except in cases of negligence on the part of the hotel.
The hotel does not assume responsibility for personal items left in guest rooms or common areas. Guests are encouraged to use in-room safes or lockers for valuable items.
Hotel Amenities and Services

Access to certain hotel amenities such as the pool, gym, and restaurant may be subject to additional charges and availability.
The hotel reserves the right to alter or suspend certain services or amenities due to maintenance, local regulations, or unforeseen circumstances.
Force Majeure

SHRPL Hotel shall not be held responsible for failure or delay in the performance of any obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, pandemics, or governmental restrictions.
Amendments to Terms and Conditions

SHRPL Hotel reserves the right to update or modify these terms and conditions at any time. All updates will be published on our website and will apply to any bookings or services made thereafter.
By proceeding with a reservation or stay, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or require further clarification, please contact our guest services team.`
    }
  ],
};
