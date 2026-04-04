import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { div } from "framer-motion/client";

const data = [
  {
    id: 1,
    picture: "/testimonials.jpg",
    name: "John Doe",
    role: "Customer",
    content: "Great service and amazing experience!",
  },
  {
    id: 2,
    picture: "/testimonials.jpg",
    name: "Jane Smith",
    role: "Customer",
    content: "The barbers are very skilled and friendly. Highly recommend!",
  },
  {
    id: 3,
    picture: "/testimonials.jpg",
    name: "Michael Johnson",
    role: "Customer",
    content: "Best haircut I've ever had. Will definitely come back!",
  },
  {
    id: 4,
    picture: "/testimonials.jpg",
    name: "Emily Davis",
    role: "Customer",
    content: "The atmosphere is fantastic and the staff is very professional.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth =
        window.innerWidth >= 1024 ? 420 : window.innerWidth >= 768 ? 350 : 280;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="flex flex-col bg-[#121212]">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20">
        <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[40px] md:text-[64px] lg:text-[92px] font-bold leading-tight">
          What our client said?
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-5 overflow-x-auto overflow-y-visible scroll-smooth px-4 md:px-10 lg:px-20 py-4 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-[280px] md:w-[350px] lg:w-[420px] min-w-[280px] md:min-w-[350px] lg:min-w-[420px] rounded-3xl shadow-lg flex flex-row bg-white items-center justify-between flex-shrink-0 overflow-hidden"
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-[90px] md:w-[120px] lg:w-[140px] h-full object-cover"
            />

            <div className="flex flex-col justify-between flex-1 p-4 md:p-5 lg:p-6">
              <div>
                <h2 className="text-black font-bold text-[20px] md:text-[24px] lg:text-[28px]">
                  {item.name}
                </h2>
                <p className="text-[#A0A0A0] text-[14px] md:text-[16px]">
                  {item.role}
                </p>
              </div>

              <div className="flex gap-1 text-[#D4AF37] my-2">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-4 h-4 md:w-5 md:h-5 fill-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="text-[#555555] text-[14px] md:text-[16px] lg:text-[17px] italic leading-relaxed">
                “{item.content}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
