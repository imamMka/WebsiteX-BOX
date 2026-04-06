import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    Name: "Kertabumi (The Heritage)",
    Address:
      "Jl. Kertabumi No. 12, Karawang Kulon (Dekat Alun-alun Karawang). Jam Operasional: 09:00 - 21:00 WIB",
    Location: "Karawang",
  },
  {
    id: 2,
    Name: "Galuh Mas",
    Address:
      "Jl. Galuh Mas No. 5, Karawang Wetan. Jam Operasional: 08:00 - 20:00 WIB",
    Description:
      "Signature Cut + Hot Towel (handuk hangat) + Face Massage + Hair Tonic.",
    Location: "Karawang",
  },
  {
    id: 3,
    Name: "Sukaseuri",
    Address:
      "Jl. Raya Telukjambe No. 45 (Akses Menuju Kawasan KIIC). Jam Operasional: 08:00 - 20:00 WIB",
    Price: "Rp 120.000",
    Location: "Bekasi",
  },
  {
    id: 4,
    Name: "Cikampek",
    Address:
      "Jl. Cikampek No. 10, Karawang Kulon. Jam Operasional: 08:00 - 20:00 WIB",
    Location: "Jakarta",
  },
];

const locations = ["Karawang", "Bekasi", "Jakarta"];

export default function FindUs() {
  const [activeLocation, setActiveLocation] = useState("Karawang");
  const [filterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const phoneNumber = "621219118993"; // Ganti dengan nomor WA kamu
  const message = "Halo X-BOX Hair Studio, saya ingin booking jadwal.";

  const filteredData = data.filter(
    (item) =>
      item.Location === activeLocation &&
      (!search || item.Location.toLowerCase() === search.toLowerCase()),
  );

  const iframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.10293295776!2d107.246678!3d-6.305402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977f6f0c4e8bb%3A0x301e8f1fc28c540!2sKarawang%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid";

  const handleLocationClick = (loc) => {
    setActiveLocation(loc);
    setSearch("");
    setFilterOpen(false); // tutup filter saat pilih lokasi
  };

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (
      locations.some((loc) => loc.toLowerCase() === value.toLowerCase()) ||
      value === ""
    ) {
      setSearch(value);
    }
  };

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-[#121212] w-full min-h-screen flex flex-col gap-12 px-4 lg:px-20 py-12 relative">
      <div>
        <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[48px] md:text-[92px] font-bold text-left">
          Find Us
        </h1>

        <p className="text-[#A0A0A0] md:text-[24px] text-[16px] mb-8">
          Menjangkau pusat industri dan hunian terbaik. Pilih Chapter terdekat
          untuk transformasi gaya Anda.
        </p>

        {/* Tombol lokasi + filter */}
        <div className="flex flex-wrap justify-start gap-4 items-center mb-8 relative">
          {/* IoFilter jadi tombol filter */}
          <motion.div
            onClick={handleFilterClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-white md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-full border border-white"
          >
            <IoFilter className="w-6 h-6" />
          </motion.div>

          {locations.map((loc) => {
            const isActive = activeLocation === loc;
            return (
              <motion.button
                key={loc}
                onClick={() => handleLocationClick(loc)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-2 border-[#D4AF37] bg-transparent text-white"
                    : "bg-white text-[#121212] hover:bg-gray-200"
                }`}
              >
                {loc}
              </motion.button>
            );
          })}

          {/* Filter search bar muncul saat filterOpen */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className=" bg-white absolute top-12 left-0 w-full lg:w-1/3 bg-[#1A1A1A] p-4 rounded-lg z-10 shadow-lg"
              >
                <input
                  type="text"
                  placeholder="Cari lokasi: Karawang, Bekasi, Jakarta"
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 rounded-lg text-black border-2"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* List dan map */}
        <div className="text-[#A0A0A0] flex flex-col lg:flex-row gap-4 items-start justify-center">
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="border border-[#2A2A2A] rounded-2xl p-6 bg-[#1A1A1A]"
              >
                <p className="text-[24px] md:text-[32px] font-semibold text-white mb-2">
                  {item.Name}
                </p>
                <p className="text-[#A0A0A0] md:text-[20px] text-[16px] mb-2">
                  {item.Address}
                </p>
                {item.Description && (
                  <p className="text-[#A0A0A0] md:text-[18px] text-[15px] mb-2">
                    {item.Description}
                  </p>
                )}
                {item.Price && (
                  <p className="text-[#D4AF37] md:text-[20px] text-[16px] font-semibold mb-4">
                    {item.Price}
                  </p>
                )}
                <div className="flex flex-col lg:flex-row gap-4 mt-4 text-center">
                  <motion.a
                    href="#booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] md:text-[20px] text-white font-medium px-4 py-3 rounded-lg lg:w-80"
                  >
                    Booking sekarang
                  </motion.a>
                  <motion.a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer border-2 border-[#D4AF37] md:text-[20px] text-white font-medium px-4 py-3 rounded-lg lg:w-80"
                  >
                    Chat Admin
                  </motion.a>
                </div>
              </div>
            ))}
          </div>

          {iframeUrl && (
            <div className="w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src={iframeUrl}
                title="Map"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
