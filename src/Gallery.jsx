import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100 && currentIndex < images.length - 1) {
      handleNext();
    }

    if (info.offset.x > 100 && currentIndex > 0) {
      handlePrev();
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div id="gallery" className="bg-[#121212] w-full min-h-screen flex flex-col gap-12 px-4 lg:px-20 py-12 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[48px] md:text-[92px] font-bold text-left">
          The Gallery
        </h1>

        <div className="flex flex-row items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "border-[#2A2A2A] bg-transparent cursor-not-allowed"
                : "border-[#D4AF37] bg-[#D4AF37] cursor-pointer"
            }`}
          >
            <IoIosArrowBack
              className={`text-2xl ${
                currentIndex === 0 ? "text-[#2A2A2A]" : "text-white"
              }`}
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              currentIndex === images.length - 1
                ? "border-[#2A2A2A] bg-transparent cursor-not-allowed"
                : "border-[#D4AF37] bg-[#D4AF37] cursor-pointer"
            }`}
          >
            <IoIosArrowForward
              className={`text-2xl ${
                currentIndex === images.length - 1
                  ? "text-[#2A2A2A]"
                  : "text-white"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="w-full max-w-[1200px] h-[500px] object-cover rounded-[32px] select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-10 bg-[#D4AF37]"
                : "w-2 bg-[#3A3A3A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}