import { LucideProps } from "lucide-react";

export interface NavbarMenuData {
  title: string;
  href: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
} 