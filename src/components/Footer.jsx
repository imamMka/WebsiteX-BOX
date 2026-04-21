import { useNavigate } from "react-router-dom";

export default function Footer() {
  const PhoneNumber = "621219118993";
  const WhatsAppLink = `https://wa.me/${PhoneNumber}`;
  const navigate = useNavigate();

  return (
    <div className="bg-[#333333] w-full flex flex-col items-center gap-4 pt-6">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start px-4">
        <a href="#hero">
          <h1 className="cursor-pointer text-white lg:text-[52px]/13 md:text-[40px]/10 text-[32px]/8 font-bold text-left mb-8">
            X-BOX
            <br />
            HAIR STUDIO
          </h1>
        </a>

        <div className="flex flex-col lg:flex-row justify-between lg:justify-center gap-8 items-start w-fit">
          <div className="w-full">
            <h2 className=" text-white lg:text-[32px] text-[24px]">Tentang</h2>

            <div className="flex flex-col gap-2 text-[#A0A0A0] text-sm md:text-base cursor-pointer">
              <a
                href="#hero"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Gallery
              </a>
              <button
                onClick={() => navigate("/team")}
                className="text-left hover:text-[#D4AF37] transition duration-300"
              >
                Meet Our Team
              </button>
              <a
                href="#booking"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Booking
              </a>
            </div>
          </div>

          <div className="w-full">
            <h2 className=" text-white lg:text-[32px] text-[24px]">Lainnya</h2>

            <div className="flex flex-col gap-2 text-[#A0A0A0] text-sm md:text-base">
              <a
                href="#"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                FaQ
              </a>
              <a
                href={WhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Support
              </a>
              <a
                href={WhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Contact
              </a>
              <a
                href={WhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Help
              </a>
            </div>
          </div>

          <div className="w-full">
            <h2 className=" text-white lg:text-[32px] text-[24px]">Media</h2>

            <div className="flex flex-col gap-2 text-[#A0A0A0] text-sm md:text-base">
              <a
                href="https://www.instagram.com/xbox_hairstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                X
              </a>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center w-full h-full bg-white text-[15px] p-2">
        <p className="text-black text-sm md:text-base ">
          &copy; {new Date().getFullYear()} X Box Barbershop. All rights
          reserved. Powered By{" "}
          <a
            href="https://imammka.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline transition duration-300"
          >
            ImamMka
          </a>
          .
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-[#D4AF37] hover:underline transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[#D4AF37] hover:underline transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-[#D4AF37] hover:underline transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
