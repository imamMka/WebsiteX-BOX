import React from "react";

const data = [
  {
    id: 1,
    Model: "The Signature Cut",
    Deskription:
      "Potongan rambut custom, cuci rambut (shampoo), dan styling pomade.",
    Price: "Rp 50.000",
  },

  {
    id: 2,
    Model: "Executive Grooming",
    Deskription:
      "Signature Cut + Hot Towel (handuk hangat) + Face Massage + Hair Tonic.",
    Price: "Rp 85.000",
  },

  {
    id: 3,

    Model: "The Royal Treatment",
    Deskription:
      "Paket lengkap: Potong rambut, cukur jenggot (shave), masker wajah, dan pijat bahu.",
    Price: "Rp 120.000",
  },

  {
    id: 4,
    Model: "Gentleman's Shave",
    Deskription:
      "Cukur jenggot/kumis presisi menggunakan straight razor dan krim cukur premium.",
    Price: "Rp 40.000",
  },

  {
    id: 5,
    Model: "Junior X (Kids)",
    Deskription: "Potongan gaya untuk jagoan cilik (di bawah 10 tahun).",
    Price: "Rp 35.000",
  },

  {
    id: 6,
    Model: "Hair Color/Blacken",
    Deskription:
      "Pewarnaan rambut atau penutupan uban untuk tampilan lebih segar.",
    Price: "Rp 100.000",
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-[#121212] w-full h-full px-4 lg:px-20 flex flex-col gap-12">
      <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[48px] md:text-[92px] font-bold text-left">
        Our Services
      </h1>

      <div className="border-3 border-[#F4D05A] rounded-xl lg:grid lg:grid-flow-col lg:grid-rows-4 gap-2 p-4">
        {data.map((item) => (
          <div key={item.id} className="w-full p-4 md:p-8 ">
            <div className="flex items-center justify-between ">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-white w-fit whitespace-nowrap">{item.Model}</h2>
              <div className="h-0.5 bg-[#D9D9D9] w-full px-5 hidden md:block"></div>
              <h2 className="text-yellow-400 font-semibold text-[24px] md:text-[32px] w-fit whitespace-nowrap">
                {item.Price}
              </h2>
            </div>

            <p className="text-gray-300 mt-2">{item.Deskription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
