import { NavItemProps } from "../components/BottomNavBtn.tsx";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  IoDocumentText,
  IoDocumentTextOutline,
  IoSearchOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { FaBookmark, FaRegBookmark, FaRegUser, FaUser } from "react-icons/fa";

export const navItems: NavItemProps[] = [
  {
    icon: GoHome,
    filledIcon: GoHomeFill,
    label: "Home",
    isActive: false,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: IoSearchOutline,
    filledIcon: IoSearchSharp,
    label: "Search",
    isActive: false,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: IoDocumentTextOutline,
    filledIcon: IoDocumentText,
    label: "Applications",
    isActive: false,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: FaRegBookmark,
    filledIcon: FaBookmark,
    label: "Saved",
    isActive: false,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: FaRegUser,
    filledIcon: FaUser,
    label: "Profile",
    isActive: false,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
];
