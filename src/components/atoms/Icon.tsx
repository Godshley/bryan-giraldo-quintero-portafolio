import {
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const icons = {
  briefcase: Briefcase,
  code: Code,
  graduation: GraduationCap,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  user: User,
};

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 20,
  strokeWidth = 2,
}: IconProps) {
  const IconComponent = icons[name];

  return <IconComponent size={size} strokeWidth={strokeWidth} />;
}