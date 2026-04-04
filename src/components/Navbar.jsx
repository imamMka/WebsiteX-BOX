export default function Navbar() {
  return (
    <div className="bg-[#1E1E1E] text-white flex flex-row justify-between items-center px-4 lg:px-20 z-10 sticky top-0">

      <a href="" className="hidden lg:block text-[24px]">About</a>
      <a href="" className="hidden lg:block text-[24px]">Services</a>
      <h1 className="lg:text-[52px] md:text-[40px] text-[32px]">X-BOX Hair studio</h1>
      <a href="" className="hidden lg:block text-[24px]">Gallery</a>
      <a href="" className="hidden lg:block text-[24px]">Booking</a>

      <img src="/Hamburger.svg" alt="" className="w-[35px] h-[35px] lg:hidden" />
    </div>
  )
}