export default function Hero() {
  return (
    <div className="bg-[url('/hero.jpg')] w-full h-screenbg-cover bg-center">
      <div className="w-full h-screen  flex flex-col justify-center items-left lg:px-50 px-10">
        <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent font-bold lg:text-[94px]/[90px] text-[40px]/[40px] md:text-[64px]/[64px]">
          Your Style, <br /> Our Signature.
        </h1>
        <p className="text-[#A0A0A0] text-[16px] md:text-[24px]">
          X Box Barbershop: Tempat di mana gaya rambut ikonik lahir. Cek cabang{" "}
          <br />
          terdekat dan jadilah bagian dari sejarah.
        </p>

        <div className=" flex flex-col lg:flex lg:flex-row justify-left items-left gap-4 mt-8">
          <button className="cursor-pointer bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] md:text-[20px] text-white font-medium px-4 py-2 rounded-lg lg:w-80 hover:scale-105 transition duration-300">
            Booking sekarang
          </button>

          <button className="cursor-pointer bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] md:text-[20px] text-white font-medium px-4 py-2 rounded-lg lg:w-80 hover:scale-105 transition duration-500">
            Gabung X-BOX Academy
          </button>
        </div>
      </div>
    </div>
  );
}
