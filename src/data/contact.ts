import { ContactProps } from "../components/Footer.tsx";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export const contact: ContactProps[] = [
  {
    label: "Email",
    icon: IoMail,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    label: "Phone",
    icon: FaPhone,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    label: "Address",
    icon: FaLocationDot,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
];
