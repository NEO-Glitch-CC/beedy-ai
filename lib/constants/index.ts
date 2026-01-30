import { NavbarMenuData } from "@/types/interfaces";
import { Book, File, HomeIcon, InfoIcon } from "lucide-react";
import { Transition, Variants } from "motion/react";
import AtlassianLogo from "../../assets/icons/atlassian-logo.svg"
import CursorLogo from "../../assets/icons/cursor-logo.svg"
import MongodbLogo from "../../assets/icons/mongodb-logo.svg"
import NvidiaLogo from "../../assets/icons/nvidia-logo.svg"
import PrismaLogo from "../../assets/icons/prisma-logo.svg"
import SupabaseLogo from "../../assets/icons/supabase-logo.svg"

export const BUTTON_MOTION_CONFIG = {
  initial: 'rest',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: {
    rest: { maxWidth: '40px' },
    hover: {
      maxWidth: '140px',
      transition: { type: 'spring', stiffness: 200, damping: 35, delay: 0.15 },
    },
    tap: { scale: 0.95 },
  },
  transition: { type: 'spring', stiffness: 250, damping: 25 },
} as const;

export const LABEL_VARIANTS: Variants = {
  rest: { opacity: 0, x: 4 },
  hover: { opacity: 1, x: 0, visibility: 'visible' },
  tap: { opacity: 1, x: 0, visibility: 'visible' },
};

export const LABEL_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
};

export const NAVBAR_MENU_DATA: NavbarMenuData[] = [
  { title: "Home", href: "/", icon: HomeIcon },
  { title: "About", href: "/about", icon: InfoIcon },
  { title: "Docs", href: "/docs", icon: File },
  { title: "Blog", href: "/blog", icon: Book },
];

export const reviews = [
  { name: "Atlassian", username: "@jack", img: AtlassianLogo, },
  { name: "Cursor", username: "@jill", img: CursorLogo, },
  { name: "MongoDB", username: "@john", img: MongodbLogo, },
  { name: "NVIDIA", username: "@jane", img: NvidiaLogo, },
  { name: "Prisma", username: "@jenny", img: PrismaLogo, },
  { name: "Supabase", username: "@james", img: SupabaseLogo, },
];
