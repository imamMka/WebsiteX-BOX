// src/Form.jsx
import { useState } from "react";
import { sendEmail } from "./email"; // ← titik penaruhan / import helper

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    cabang: "",
    time: "",
    Barber: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "cabang" ? { Barber: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Kirim data yang sesuai template EmailJS
    sendEmail({
      name: formData.name,
      email: formData.email,
      number: formData.number,
      date: formData.date,
      cabang: formData.cabang,
      time: formData.time,
      Barber: formData.Barber,
    })
      .then((response) => {
        console.log("EMAILJS RESPONSE:", response);
        setSuccess(true);

        setExistingBookings((prev) => [
          ...prev,
          { date: formData.date, cabang: formData.cabang, time: formData.time },
        ]);

        setFormData({
          name: "",
          email: "",
          number: "",
          date: "",
          cabang: "",
          time: "",
          Barber: "",
        });
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        const errMsg =
          error?.text ||
          error?.message ||
          JSON.stringify(error) ||
          "Unknown error";
        alert("Gagal mengirim: " + errMsg);
      })
      .finally(() => setLoading(false));
  };

  const barberOptions = {
    Karawang: ["Ardhi", "Samsul", "Fajri"],
    Bekasi: ["Fahmi", "Abdul", "Rizky"],
    Jakarta: ["Arul", "Kevin", "Asep"],
  };

  // Pilih barber berdasarkan cabang
  const availableBarbers = formData.cabang
    ? barberOptions[formData.cabang]
    : [];

  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const [existingBookings, setExistingBookings] = useState([
    { date: "2026-04-04", cabang: "Bekasi", time: "10:00" },
  ]);

  const isTimeSlotDisabled = (time) => {
    return existingBookings.some(
      (booking) =>
        booking.date === formData.date &&
        booking.cabang === formData.cabang &&
        booking.time === time,
    );
  };

  return (
    <div id="booking" className="flex flex-col justify-center items-center min-h-screen bg-[#121212] p-6">
      <h2 className="bg-gradient-to-br from-[#D4AF37] to-[#6E5B1D] bg-clip-text text-transparent text-[48px] md:text-[92px] font-bold text-left">
        Booking Now!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full lg:max-w-4xl flex flex-col gap-5 pointer-events-auto"
      >
        <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
          <div className=" w-full flex flex-col items-center justify-between gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className=" w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
              disabled={loading}
            />
            <input
              type="date"
              name="date"
              placeholder="Your Date"
              value={formData.date}
              onChange={handleChange}
              required
              rows={4}
              className=" w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
              disabled={loading}
            />
          </div>

          <div className=" w-full flex flex-col items-center justify-center gap-4">
            <input
              name="number"
              placeholder="Your Whatsapp Number"
              value={formData.number}
              onChange={handleChange}
              required
              rows={4}
              className=" w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
              disabled={loading}
            />

            <select
              name="cabang"
              value={formData.cabang}
              onChange={handleChange}
              required
              rows={4}
              className=" w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
              disabled={loading}
            >
              <option value="">Pilih Cabang Terdekat</option>
              <option value="Karawang">Karawang</option>
              <option value="Bekasi">Bekasi</option>
              <option value="Jakarta">Jakarta</option>
            </select>

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
              disabled={loading || !formData.date || !formData.cabang}
            >
              <option value="">Pilih Jam</option>
              {timeSlots.map((t) => {
                const isBooked = isTimeSlotDisabled(t);
                return (
                  <option key={t} value={t} disabled={isBooked}>
                    {t} {isBooked ? "(Sudah Dibooking)" : ""}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <select
          name="Barber"
          value={formData.Barber}
          onChange={handleChange}
          required
          className=" w-full p-3 border border-gray-300 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
          disabled={!formData.cabang || loading}
        >
          <option value="">Select your Barber</option>

          {availableBarbers.map((barber) => (
            <option key={barber} value={barber}>
              {barber}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-b from-[#D4AF37] to-[#6E5B1D] text-white py-3 rounded-lg hover:scale-105 transition duration-500 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 font-semibold text-center mt-3">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
