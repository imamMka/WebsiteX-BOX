import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    image: "/testimonials.jpg",
    name: "John Doe",
    position: "Developer",
    bio: "John is a developer with experience in web technologies.",
  },

  {
    id: 2,
    image: "/testimonials.jpg",
    name: "Jane Smith",
    position: "Designer",
    bio: "Jane is a creative designer with a knack for user experience.",
  },

  {
    id: 3,
    image: "/testimonials.jpg",
    name: "Emily Johnson",
    position: "Project Manager",
    bio: "Emily is an organized manager, ensures everything runs smoothly.",
  },

  {
    id: 4,
    image: "/testimonials.jpg",
    name: "Michael Brown",
    position: "Marketing Specialist",
    bio: "Michael is a marketing specialist with a focus on digital strategies.",
  },

  {
    id: 5,
    image: "/testimonials.jpg",
    name: "Sarah Davis",
    position: "Data Analyst",
    bio: "Sarah is a data analyst who loves turning data into actionable insights.",
  },

  {
    id: 6,
    image: "/testimonials.jpg",
    name: "David Wilson",
    position: "QA Engineer",
    bio: "David is a meticulous who ensures the quality of our products.",
  },
];

export default function Team() {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-[#121212] items-center justify-center">
      <div className=" w-full flex flex-row items-center justify-between lg:px-10 px-5">
        <button onClick={() => navigate('/')} className=" cursor-pointer">
          <IoIosArrowBack className="text-[#D4AF37] text-2xl hover:scale-110 transition duration-300 w-10 h-10" />
        </button>

        <h1 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[48px] md:text-[92px] font-bold text-center w-full">
          Team
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20 py-10 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#1E1E1E] rounded-2xl w-full max-w-sm shadow-xl text-[#A0A0A0] p-5 hover:scale-105 transition duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full bg-cover rounded-xl"
            />

            <p className="md:text-[32px] text-[24px] font-bold mt-4">
              {item.name}
            </p>

            <div className="w-full">
              <p className="md:text-[24px] text-[16px] font-bold">
                Position: {item.position}
              </p>
              <p className="md:text-[24px] text-[16px] w-full">
                Bio: {item.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
