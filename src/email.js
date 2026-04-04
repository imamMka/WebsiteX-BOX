// src/email.js
import emailjs from "@emailjs/browser";

export const sendEmail = (data) => {
  const SERVICE_ID = "12345"; // pastikan string
  const TEMPLATE_ID = "template_od4pfw4";
  const PUBLIC_KEY = "oXzx9P_8CwypMckE4";

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
};