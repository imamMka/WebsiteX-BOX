import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate();

  return (
    <div id="about" className=" bg-[#121212] w-full h-full px-4 lg:px-20 flex flex-col gap-12">
      <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[48px] md:text-[92px] font-bold text-left">
        The Legend
      </h1>

      <div className="text-[#A0A0A0]">
        <h2 className="md:text-[40px] text-[32px]">Our Story</h2>
        <p className="md:text-[24px] text-[16px]">
          Berawal dari sebuah kursi kayu tua dan mimpi besar di sudut kota pada
          tahun 2015, X Box lahir. Kami melihat bahwa mencukur bukan sekadar
          memotong rambut, melainkan sebuah ritual kepercayaan antara pria dan
          sang maestro. Dengan semangat presisi dan dedikasi pada gaya hidup
          urban, X Box berevolusi dari satu gerai kecil menjadi rumah bagi
          ribuan pria yang mencari jati diri melalui penampilannya. Setiap helai
          rambut yang jatuh adalah bagian dari sejarah yang kami bangun bersama
          Anda.
        </p>

        <div className=" w-full flex flex-col lg:flex-row justify-between items-start gap-5 mt-5 text-justify">
          <div className="flex flex-col">
            <h2 className="md:text-[40px] text-[32px]">Our Vision</h2>
            <p className="md:text-[24px] text-[16px]">
              Menjadi standar emas dalam industri grooming pria, di mana tradisi
              bertemu dengan inovasi tanpa batas.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="md:text-[40px] text-[32px]">Our Mission</h2>
            <p className="md:text-[24px] text-[16px]">
              Untuk mencapai visi tersebut, X Box berkomitmen pada tiga pilar
              utama:
              <br />
              1. Craftsmanship (Keahlian): Melahirkan kapster-kapster
              bersertifikat yang menguasai teknik potong klasik hingga tren
              paling modern dengan presisi tinggi.
              <br />
              2. Community (Komunitas): Membangun ruang yang nyaman (Chapter)
              bagi setiap pelanggan untuk berekspresi, berbagi cerita, dan
              pulang dengan rasa percaya diri baru.
              <br />
              3. Experience (Pengalaman): Memberikan pelayanan premium yang
              konsisten di setiap cabang, mulai dari keramahan hingga produk
              perawatan berkualitas tinggi.
            </p>
          </div>
        </div>

        <div className=" max-w-full flex flex-col lg:flex-row justify-center items-center mt-5 gap-5">
          <button onClick={() => navigate('/team')} className=" cursor-pointer bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] md:text-[20px] text-white font-medium px-4 py-2 rounded-lg w-full hover:scale-105 transition duration-500">
            Meet our team
          </button>

          <a href="#booking" className="text-center cursor-pointer bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] md:text-[20px] text-white font-medium px-4 py-2 rounded-lg w-full hover:scale-105 transition duration-500">
            Book Now!
          </a>
        </div>
      </div>
    </div>
  );
}
