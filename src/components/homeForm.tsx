import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { Search, Users, Building2, Calendar, ChevronDown, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [destination, setDestination] = useState('');
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [rooms, setRooms] = useState('1');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const destinationRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  const allCities = [
    "Delhi", "Mumbai", "Jaipur", "Udaipur", "Goa",
    "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Agra",
    "Manali", "Shimla", "Leh", "Varanasi", "Darjeeling",
    "Rishikesh", "Amritsar", "Pondicherry", "Port Blair", "Mysore"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setIsDestinationOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setIsGuestsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const maxAdults = parseInt(rooms) * 3;
    const maxChildren = parseInt(rooms) * 1;

    if (adults > maxAdults) setAdults(maxAdults);
    if (children > maxChildren) setChildren(maxChildren);
  }, [rooms]);

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};
    if (!destination) newErrors.destination = 'Destination is required.';
    if (!checkIn) newErrors.checkIn = 'Check-in date is required.';
    if (!checkOut) newErrors.checkOut = 'Check-out date is required.';
    if (checkIn && checkOut && checkOut <= checkIn)
      newErrors.checkOut = 'Check-out must be after check-in.';
    if (!rooms) newErrors.rooms = 'Select at least one room.';
    if (adults + children === 0) newErrors.guests = 'At least one guest is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      localStorage.setItem('dateRange', JSON.stringify([checkIn, checkOut]));
      navigate(`/hotels?destination=${encodeURIComponent(destination)}`);
    }
  };

  const updateGuests = (type: 'adult' | 'child', operation: 'increment' | 'decrement') => {
    const maxAdults = parseInt(rooms) * 3;
    const maxChildren = parseInt(rooms) * 1;

    if (type === 'adult') {
      if (operation === 'increment' && adults < maxAdults) setAdults(adults + 1);
      if (operation === 'decrement' && adults > 1) setAdults(adults - 1);
    } else {
      if (operation === 'increment' && children < maxChildren) setChildren(children + 1);
      if (operation === 'decrement' && children > 0) setChildren(children - 1);
    }
  };

  return (
    <motion.div
      className="relative text-center text-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="container mx-auto px-4 lg:mt-96 relative z-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {/* Destination Search with Suggestions */}
          <div className="relative" ref={destinationRef}>
            <label className="block text-sm font-bold text-gray-700 mb-1">Destination</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setIsDestinationOpen(true);
                }}
                onFocus={() => setIsDestinationOpen(true)}
                placeholder="Enter city"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isDestinationOpen && destination.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {allCities
                    .filter((city) =>
                      city.toLowerCase().startsWith(destination.toLowerCase())
                    )
                    .map((city) => (
                      <div
                        key={city}
                        onClick={() => {
                          setDestination(city);
                          setIsDestinationOpen(false);
                        }}
                        className="px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                      >
                        {city}
                      </div>
                    ))}
                  {
                    allCities.filter((city) =>
                      city.toLowerCase().startsWith(destination.toLowerCase())
                    ).length === 0 && (
                      <div className="px-4 py-2 text-gray-500">No cities found</div>
                    )
                  }
                </div>
              )}
            </div>
            {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
          </div>

          {/* Rooms */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-1">Rooms</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900"
              >
                {[...Array(18)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="relative" ref={guestsRef}>
            <label className="block text-sm font-bold text-gray-700 mb-1">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <div
                onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
              >
                <span className="text-gray-900">{adults + children} Guest{adults + children !== 1 ? 's' : ''}</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              {isGuestsOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                  <div className="space-y-6">
                    {/* Adults */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Adults</span>
                      <div className="flex items-center space-x-3">
                        <button type="button" onClick={() => updateGuests("adult", "decrement")} className="p-2 rounded-full border">
                          <Minus className="h-4 w-4 text-blue-600" />
                        </button>
                        <span className="w-10 text-center">{adults}</span>
                        <button type="button" onClick={() => updateGuests("adult", "increment")} className="p-2 rounded-full border">
                          <Plus className="h-4 w-4 text-blue-600" />
                        </button>
                      </div>
                    </div>
                    {/* Children */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Children</span>
                      <div className="flex items-center space-x-3">
                        <button type="button" onClick={() => updateGuests("child", "decrement")} className="p-2 rounded-full border">
                          <Minus className="h-4 w-4 text-blue-600" />
                        </button>
                        <span className="w-10 text-center">{children}</span>
                        <button type="button" onClick={() => updateGuests("child", "increment")} className="p-2 rounded-full border">
                          <Plus className="h-4 w-4 text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Check-in */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-1">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-900"
              />
            </div>
            {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
          </div>

          {/* Check-out */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-1">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-900"
              />
            </div>
            {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
          </div>

          {/* Submit */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
            <button
              type="submit"
              className="w-full bg-[#8B2B06] text-white hover:bg-white hover:text-black font-semibold px-6 py-2 rounded-lg transition duration-200"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingForm;
