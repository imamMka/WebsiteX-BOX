import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Varian animasi untuk container menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren", // Tunggu anak-anak selesai animasi baru tutup
      },
    },
    opened: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren", // Animasi container dulu baru anak-anaknya
        staggerChildren: 0.1,    // Memberikan efek muncul berurutan (stagger)
      },
    },
  };

  // Varian animasi untuk setiap link di dalam menu
  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <nav className="bg-[#1E1E1E] text-white z-50 sticky top-0 border-b border-gray-800">
      <div className="flex flex-row justify-between items-center px-4 lg:px-20 h-20">
        {/* Desktop Menu */}
          <a href="#about" className="hidden lg:flex text-[24px] hover:text-gray-400 transition-colors">About</a>
          <a href="#services" className="hidden lg:flex text-[24px] hover:text-gray-400 transition-colors">Services</a>

        {/* Logo */}
        <a href="#hero">
          <h1 className="lg:text-[52px] md:text-[40px] text-[32px] font-bold">
            X-BOX Hair studio
          </h1>
        </a>

        {/* Desktop Menu */}
          <a href="#gallery" className="hidden lg:flex text-[24px] hover:text-gray-400 transition-colors">Gallery</a>
          <a href="#booking" className="hidden lg:flex text-[24px] hover:text-gray-400 transition-colors">Booking</a>

        {/* Hamburger Button dengan Animasi Rotasi Sederhana */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={isOpen ? "/close.svg" : "/Hamburger.svg"}
            alt="menu toggle"
            className="w-[35px] h-[35px]"
          />
        </motion.button>
      </div>

      {/* Mobile Menu dengan Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="lg:hidden bg-[#1E1E1E] overflow-hidden"
          >
            <div className="flex flex-col items-left px-4 py-8 space-y-6">
              {["About", "Services", "Gallery", "Booking"].map((item) => (
                <motion.a
                  key={item}
                  variants={linkVariants}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[22px] hover:text-gray-400"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}